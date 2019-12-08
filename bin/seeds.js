const mongoose = require('mongoose')
const Place = require('../models/place.model');
require('../config/db.config')

const dbtitle = 'destinations';
mongoose.connect(`mongodb://localhost/${dbtitle}`);

// Place.deleteMany()
// .then(data => {
    // console.log('ELIMINADOS' + data)
// })
// .catch(error => console.error(error))


const places = [
    {
        name: 'Barcelona',
        mainPhoto: '/img/mainPhotos/barcelona.jpg',
        location: {
            lat: 39.4699075,
            lng: -0.3762881,
            country: 'Spain',
            continent: 'Europe',
        },
        images: [
            
        ],
        info: {
            description: 'Is a city on the coast of northeastern Spain. It is the capital and largest city of the autonomous community of Catalonia, as well as the second most populous municipality of Spain. With a population of 1.6 million within city limits,[7] its urban area extends to numerous neighbouring municipalities within the Province of Barcelona and is home to around 4.8 million people,[3][8] making it the sixth most populous urban area in the European Union after Paris, London, Madrid, the Ruhr area and Milan.[3] It is one of the largest metropolises on the Mediterranean Sea, located on the coast between the mouths of the rivers Llobregat and Besòs, and bounded to the west by the Serra de Collserola mountain range, the tallest peak of which is 512 metres (1,680 feet) high.',
            hotSpots: [
                {
                    name: 'n',
                    location: {
                        lat: 0,
                        lng: 0,
                    },
                    images: [

                    ],
                    description: 'd',
                }
            ]
        }
    },
    {
        name: 'Madrid',
        mainPhoto: '/img/mainPhotos/madrid.jpg',
        location: {
            lat: 39.4699075,
            lng: -0.3762881,
            country: 'Spain',
            continent: 'Europe',
        },
        images: [
            
        ],
        info: {
            description: 'Is a city on the coast of northeastern Spain. It is the capital and largest city of the autonomous community of Catalonia, as well as the second most populous municipality of Spain. With a population of 1.6 million within city limits,[7] its urban area extends to numerous neighbouring municipalities within the Province of Barcelona and is home to around 4.8 million people,[3][8] making it the sixth most populous urban area in the European Union after Paris, London, Madrid, the Ruhr area and Milan.[3] It is one of the largest metropolises on the Mediterranean Sea, located on the coast between the mouths of the rivers Llobregat and Besòs, and bounded to the west by the Serra de Collserola mountain range, the tallest peak of which is 512 metres (1,680 feet) high.',
            hotSpots: [
                {
                    name: 'n',
                    location: {
                        lat: 0,
                        lng: 0,
                    },
                    images: [

                    ],
                    description: 'd',
                }
            ]
        }
    }
]

const createPlaces = places.map(place => {
    
    const newPlace = new Place(place)
    return newPlace.save()
        .then(place => {
            console.log(place)
        })
        .catch(error => {
            console.log(error)
            throw new Error(`Impossible to add the place. ${error}`)
        })
})

// {
//     name,
//     location: {
//         lattitude,
//         length,
//         country,
//         continent,
//         unique,
//     },
//     images: [

//     ],
//     info: {
//         description,
//         hotSpots: [
//             {
//                 name,
//                 location: {
//                     latitude,
//                     length,
//                 },
//                 images: [

//                 ],
//                 description,
//             }
//         ]
//     }
// }


