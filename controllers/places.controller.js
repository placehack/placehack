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

const placesArr = [
    'Barcelona', 'Madrid'
]


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

module.exports.random = (req, res, next) => {
    
    const randomPlace = placesArr[getRandomInt(0,placesArr.length)]

    axios.get(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${randomPlace}&inputtype=textquery&key=${ApiPlaces}`)
    .then(response => {
        axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${response.data.candidates[0].place_id}&key=${ApiPlaces}`)
        .then(response => {
            //console.log(randomPlace)
            Place.findOne({name: randomPlace})
            .then(place => {
                //console.log(place)
                const googleData = response.data.result
                res.render('search', { googleData, place })  //{ googleData, place }
                // res.send(place)
            })
        })
        .catch(error => {
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

    // req.query.continent ?  continent : null
    // req.query.language ?  language : null
    // req.query.time ?  time : null
    // req.query.activities ?  activities : null
    // req.query.money ?  money : null

    console.log(continent,language,time,activities,money)

    // "filter.language": { $in: language }, "filter.time": { $in: time }, "filter.activities": { $in: activities }, "filter.money": { $in: money } 
    
    //Place.find( { "location.continent": continent } )
    Place.find(filters)
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
    // let places = []

    
    // if(req.query.continent) {
    //     console.log(req.query.continent)
    //     const continents = req.query.continent
    //     Place.find({ "location.continent": { $in: continents } })
    //     .then(continents => {
    //         places = new Set([...continents])
    //         console.log(continents)
    //     })
    //     .catch(error => {
    //         next(error)
    //     })  
    // }

   
    

    // if(req.query.time) {
    //     console.log(req.query.time)
    //     const time = req.query.time
    //     Place.find({ "time": { $in: time } })
    //     .then(time => {
    //         places = new Set([...time])
    //         console.log(places)
    //     })
    //     .catch(error => {
    //         next(error)
    //     })
    // }
    

    // if(req.query.language) {
    //     console.log(req.query.language)
    //     const languages = req.query.language
    //     Place.find({ "language": { $in: languages } })
    //     .then(languages => {
    //         places = new Set([...languages])
    //         console.log(places)
    //     })
    //     .catch(error => {
    //         next(error)
    //     })  
    // }
    

    // if(req.query.activities) {
    //     console.log(req.query.activities)
    //     const activities = req.query.activities
    //     Place.find({ "activities": { $in: activities } })
    //     .then(activities => {
    //         places = new Set([...activities])
    //         console.log(places)
    //     })
    //     .catch(error => {
    //         next(error)
    //     }) 
    // }
    

    // if(req.query.money) {
    //     console.log(req.query.money)
    //     const money = req.query.money
    //     if(money.length > 1) {
    //         Place.find({ "money": { $in: money } })
    //         .then(money => {
    //             places = new Set([...money])
    //             console.log("places")
    //         })
    //         .catch(error => {
    //             next(error)
    //         }) 
    //     }  
    // }
    
}



