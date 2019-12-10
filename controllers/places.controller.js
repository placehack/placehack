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

    // Place.find({name: randomPlace})
    // .then(place => {
    //     axios.get(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${randomPlace}&inputtype=textquery&key=${ApiPlaces}`)
    //     .then(response => {
    //         axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${response.data.candidates[0].place_id}&key=${ApiPlaces}`)
    //         .then(response => {
    //             const googleData = response.data.result
    //             console.log(googleData)
    //             res.render('search', { googleData, place })
    //         })
    //         .catch(error => {
    //             next(error)
    //         })
    //     })
    //     .catch(error =>{
    //         next(error)
    //     })
    // })
    // .catch(error =>{
    //     next(error)
    // })
    




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




