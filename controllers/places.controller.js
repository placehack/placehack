const createError = require('http-errors');
const mongoose = require('mongoose');
const axios = require('axios')
const ApiPlaces = process.env.API_PLACES
const Place = require('../models/place.model');

// const placesArr = [
//     'barcelona','madrid','bilbao','galicia','valencia','nueva%20york','buenos%20aires','berlin','islandia','japon','noruega','indonesia','canada',
//     'grecia', 'australia','nueva%20zelanda','peru','irlanda','italia','vietnam','tailandia','maldivas','argentina','rusia','Suiza','estados%20unidos','españa',
//     'suiza','polinesia%francesa','francia','paris','patagonia','bali','bergen','croacia','provenza','capadocia','roma','madagascar','sidney','marruecos','cerdeña',
//     'egipto','madeira','turquia','islas%20azores','cabo%20verde','polonia','india','paises%bajos','caribe','escandinavia','nevada','arizona','belice','china',
//     'antartida','turkmenistán','bolivia','islas%20mauricio','namibia','brasil','wyoming'
// ]


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

module.exports.random = (req, res, next) => {
    Place.find()
    .then(places => {
        const randomNumber = getRandomInt(0, places.length)
        const place = places[randomNumber]
        axios.get(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${place.name}&inputtype=textquery&key=${ApiPlaces}`)
        .then(response => {
            axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${response.data.candidates[0].place_id}&key=${ApiPlaces}`)
            .then(response => {
                
                const googleData = response.data.result
                res.render('search', { googleData, place })  //{ googleData, place }

            })
            .catch(error => {
                next(error)
            })
        })
        .catch(error =>{
            next(error)
        }) 
    })
    .catch(error =>{
        next(error)
    }) 
}


module.exports.filter = (req, res, next) => {

    let continent = req.query.continent 
    let language = req.query.language
    let time = req.query.time
    let activities = req.query.activities
    let money = req.query.money

    console.log(continent,language,time,activities,money)
    let filters = {};
    if(req.query.continent) {
        filters = {...filters, "filters.continent": {$in: req.query.continent}  };
    }
    if (req.query.language) {
        filters = {...filters, "filters.language": {$in: req.query.language}  };
    }
    if (req.query.time) {
        filters = {...filters, "filters.time": {$in: req.query.time}  };
    }
    if(req.query.activities) {
        filters = {...filters, "filters.activities": {$in: req.query.activities}  };
    }
    if(req.query.money) {
        filters = {...filters, "filters.money": {$in: req.query.money}  };
    }

    console.log(continent,language,time,activities,money)

    Place.find(filters)
    .then(places => {
        const randomNumber = getRandomInt(0, places.length)
        const place = places[randomNumber]
        axios.get(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${place.name}&inputtype=textquery&key=${ApiPlaces}`)
        .then(response => {
            axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${response.data.candidates[0].place_id}&key=${ApiPlaces}`)
            .then(response => {
                
                const googleData = response.data.result
                res.render('search', { googleData, place })

            })
            .catch(error => {
                res.render('notFound')
            })
        })
        .catch(error =>{
            res.render('notFound')
        }) 
    })
    .catch(error => {
        res.render('notFound')
    })
}

module.exports.savePlace = (req, res, next) => {
    const user = req.currentUser
    const idPlace = req.params.id

    console.log(idPlace)

    // Place.findById(idPlace)
    // .populate('users')
    // .then(place => {
        
    //     place.users.push(user)
    //     console.log(place.users)
    // })
    // .catch(error => {
    //     next(error)
    // })


    Place.updateOne({_id: idPlace},{$push: {users: user}})
    .populate('users')
    .then(place => {
        console.log(place)
    })
    .catch(error => {
        next(error)
    })


    // Place.find({_id: idPlace})
    // .populate('users')
    // .then(place => {
    //     console.log(place)
    // })
    // .catch(error => {
    //     next(error)
    // })
}


