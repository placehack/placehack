const mongoose = require('mongoose')
const Place = require('../models/place.model');
require('../config/db.config')

const dbtitle = 'destinations';
mongoose.connect(`mongodb://localhost/${dbtitle}`);

Place.deleteMany()
.then(data => {
    console.log('ELIMINADOS' + JSON.stringify(data))

    const places = [
        {
            name: 'Barcelona',
            mainPhoto: '/img/mainPhotos/barcelona.jpg',
            descriptionPhoto: 'https://veebrant.com/wp-content/uploads/2019/06/barcelona-gaudi-destination-featured.jpg',
            location: {
                country: 'Spain',
                continent: 'Europe',
            },
            images: [
                
            ],
            info: {
                shortDescription:'Barcelona is an enchanting seaside city with boundless culture, fabled architecture and a world-class drinking and dining scene.',
                longDescription: "Barcelona's architectural treasures span 2000-plus years. Towering temple columns, ancient city walls and subterranean stone corridors provide a window into Roman-era Barcino. Fast forward a thousand years or so to the Middle Ages by taking a stroll through the shadowy lanes of the Gothic quarter, past tranquil plazas and soaring 14th-century cathedrals. In other parts of town bloom the sculptural masterpieces of Modernisme, a mix of ingenious and whimsical creations by Gaudí and his Catalan architectural contemporaries. Barcelona has also long inspired artists, including Pablo Picasso and Joan Miró, both of whom have major Barcelona museums devoted to their works.",
                hotSpots: [
                    {
                        name: 'La Sagrada Familia',
                        location: {
                            lat: 0,
                            lng: 0,
                        },
                        images: [
                            '/img/hotSpots/barcelona/sagradaFamilia.jpg'
                        ],
                        description: "One of Barcelona's icons, this Modernista masterpiece remains a work in progress more than 90 years after the death of its creator, Antoni Gaudí. Fanciful and profound, inspired by nature and barely restrained by the Gothic style, Barcelona's quirky temple soars skyward with a playful majesty. Stepping through its sculpted portals is like walking into a fairy tale, where a forest of columns branches towards the ceiling and light shimmers through brilliant stained-glass windows. Rich with beautifully wrought detail and packed with symbolism, the basilica invites hours of contemplation."
                    },
                    {
                        name: 'Modernista Architecture',
                        location: {
                            lat: 0,
                            lng: 0,
                        },
                        images: [
                            'https://img.theculturetrip.com/768x432/wp-content/uploads/2016/02/Casa_Batllo_Overview_Barcelona_Spain.jpg'
                        ],
                        description: "Few cities are defined by their architecture to quite the same extent as Barcelona. The weird and wonderful undulations of Antoni Gaudí’s creations are echoed in countless Modernista flights of fancy across the city. You'll find shimmering mosaics, wild details (in stained glass, iron and ceramic) and sculptural elements that reference nature, mythology and medieval days. The gateway to these astonishing architectural works is L'Eixample, which was a blank canvas for some of Spain's finest buildings in the late 19th and early 20th centuries.",
                    },
                    {
                        name: 'Museu Picasso',
                        location: {
                            lat: 0,
                            lng: 0,
                        },
                        images: [
                            'https://www.fodors.com/assets/destinations/709395/gallery-museu-picasso-barcelona-spain_main.jpg'
                        ],
                        description: "For a portrait of the artist as a young man, head to the Museu Picasso, which showcases perhaps the world's best collection of the master's early work. Picasso lived in Barcelona between the ages of 15 and 23, and elements of the city undoubtedly influenced his work, from the colourful but simply painted frescoes hanging in the Museu Nacional d'Art de Catalunya to the imaginative trencadís-style mosaics (pre-Cubist some say) of Gaudí. The museum's setting – inside five contiguous medieval mansions – adds to the appeal."
                    }
                ]
            },
    
            filters: {
                time: "Weekend" ,
                language: "Spanish",
                continent: 'Europe',
                activities: "Active tourism",
                money: "€€",
            }
        },
        {
            name: 'Madrid',
            mainPhoto: '/img/mainPhotos/madrid.jpg',
            descriptionPhoto: 'https://montessori-ami.org/sites/default/files/images/countries/spain.jpg',
            location: {
                country: 'Spain',
                continent: 'Europe',
            },
            images: [
                
            ],
            info: {
                shortDescription:'Madrid is a beguiling place with an energy that carries one simple message: this city really knows how to live.',
                longDescription: 'Madrid is the capital city of Spain, located right in the centre of the Iberian Peninsula. Its geographical location grants good communications of the city with other Spanish regions. As capital of the country, it is the seat to the Spanish government institutions and the city of residence of Spanish Royal family.',
                hotSpots: [
                    {
                        name: 'Museo del Prado',
                        location: {
                            lat: 0,
                            lng: 0,
                        },
                        images: [
                            'https://guias-viajar.com/madrid/wp-content/uploads/2017/03/madrid-museo-prado-010.jpg'
                        ],
                        description: "Welcome to one of the world's premier art galleries. More than 7000 paintings are held in the Museo del Prado’s collection (of which only around 1500 are currently on display), acting like a window onto the historical vagaries of the Spanish soul, at once grand and imperious in the royal paintings of Velázquez, darkly tumultuous in Las pinturas negras (The Black Paintings) of Goya, and outward looking with sophisticated works of art from all across Europe.",
                    },
                    {
                        name: 'Plaza Mayor',
                        location: {
                            lat: 0,
                            lng: 0,
                        },
                        images: [
                            'https://upload.wikimedia.org/wikipedia/commons/4/44/Plaza_Mayor_de_Madrid_06.jpg'
                        ],
                        description: "Madrid's grand central square, a rare but expansive opening in the tightly packed streets of central Madrid, is one of the prettiest open spaces in Spain, a winning combination of imposing architecture, picaresque historical tales and vibrant street life. At once beautiful in its own right and a reference point for so many Madrid days, it also hosts the city's main tourist office, a Christmas market in December and arches leading to laneways out into the labyrinth.",
                    },
                    {
                        name: 'Parque del Retiro',
                        location: {
                            lat: 0,
                            lng: 0,
                        },
                        images: [
                            'https://www.esmadrid.com/sites/default/files/styles/content_type_full/public/recursosturisticos/infoturistica/estanque_parquedeelretiro.jpg?itok=vkKqpPuc'
                        ],
                        description: "The glorious gardens of El Retiro are as beautiful as any you’ll find in a European city. Littered with marble monuments, landscaped lawns, the occasional elegant building (the Palacio de Cristal is especially worth seeking out) and abundant greenery, it’s quiet and contemplative during the week but comes to life on weekends. Put simply, this is one of our favourite places in Madrid.",
                    }
                ]
            },
    
            filters: {
                time: "Weekend" ,
                continent: 'Europe',
                language: "Spanish",
                activities: "Active tourism",
                money: "€€",
            }
        },
    
        {
            name: 'Tokio',
            mainPhoto: 'https://lp-cms-production.imgix.net/2019-06/GettyImages-173253572_super.jpg?auto=format&fit=crop&vib=20&sharp=10&ixlib=react-8.6.4&w=1600&q=40&dpr=1',
            descriptionPhoto: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
            location: {
                country: 'Japan',
                continent: 'Asia',
            },
            images: [
                
            ],
            info: {
                shortDescription:'Yoking past and future, Tokyo dazzles with its traditional culture and passion for everything new.',
                longDescription: "No long description",
                hotSpots: [
                    {
                        name: 'Shinjuku Nightlife',
                        location: {
                            lat: 0,
                            lng: 0,
                        },
                        images: [
                            "https://jw-webmagazine.com/wp-content/uploads/2019/06/jw-5d1473c9e22ce3.60690829.jpeg"
                        ],
                        description: "Shinjuku is the biggest nightlife district in the land of the rising neon sun. There is truly something for everyone here, from the anachronistic shanty bars of Golden Gai, a favourite haunt of writers and artists; to the camp dance bars of Tokyo's gay quarter, Shinjuku-nichōme; and to the old-school izakaya (Japanese pub-eateries) of Shinjuku-sanchōme, where co-workers go to unwind after work. There are all-night karaoke parlours, jazz dens and hipster cocktail bars. The options are dizzying, the lights spellbinding and the whole show continues past dawn.",
                    },
                    {
                        name: 'Tsukiji Market',
                        location: {
                            lat: 0,
                            lng: 0,
                        },
                        images: [
                            'https://www.smartertravel.com/uploads/2015/01/Tokyo-Fish-Market-HERO.jpg'
                        ],
                        description: "While the famous seafood market has moved to Toyosu, Tsukiji's lively market remains a treat. The area's focus is now Tsukiji Uogashi, a modern, L-shaped complex packed with fish and fresh produce stalls. Outside you can snack on treats from producers that sell tamago-yaki (rolled omelettes) and kamaboko (steamed fish paste) to top Tokyo restaurants; shop for professional-quality kitchen tools, such as hand-forged knives and bamboo steamer baskets; listen to the banter of the merchants and their regular customers; and bask in the energy of a storied, old-style, open-air market.",
                    },
                    {
                        name: 'Shopping in Harajuku',
                        location: {
                            lat: 0,
                            lng: 0,
                        },
                        images: [
                            'https://media.timeout.com/images/105299233/630/472/image.jpg'
                        ],
                        description: "Harajuku is the gathering point for Tokyo's diverse fashion tribes. Tightly packed shopping bazaar Takeshita-dōri is a beacon for teens all over Japan. Omote-sandō, a broad boulevard with high-end designer boutiques, draws polished divas. The backstreets of Harajuku form Tokyo's street-fashion laboratory; here's where you'll find the trendsetters, the peacocks and the style photographers who chronicle it all. More than a particular look, Harajuku symbolises an ethos of freedom of expression and (literal) transformation; shopping here is equal parts acquisition and inspiration.",
                    }
                ]
            },
    
            filters: {
                time: "+Week" ,
                continent: 'Asia',
                language: "Japanese",
                activities: "Active tourism",
                money: "€€€",
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
    return Promise.all(createPlaces)
    .then(
        data => {
            return data;
        }
    )
    .catch(error => {
        console.log(error)
        throw new Error(`Nuse k pasa. ${error}`)
    })
})
.catch(error => console.error(error))
.then(()=>process.exit(0))



// {
//     name: '',
//     mainPhoto: '',
//     descriptionPhoto: '',
//     location: {
//         country: '',
//         continent: '',
//     },
//     images: [
        
//     ],
//     info: {
//         shortDescription:'',
//         longDescription: "",
//         hotSpots: [
//             {
//                 name: 'n',
//                 location: {
//                     lat: 0,
//                     lng: 0,
//                 },
//                 images: [

//                 ],
//                 description: 'd',
//             },
//             {
//                 name: 'n',
//                 location: {
//                     lat: 0,
//                     lng: 0,
//                 },
//                 images: [

//                 ],
//                 description: 'd',
//             },
//             {
//                 name: 'n',
//                 location: {
//                     lat: 0,
//                     lng: 0,
//                 },
//                 images: [

//                 ],
//                 description: 'd',
//             }
//         ]
//     },

//     filters: {
//         time: "+Week" ,
//         continent: 'Asia',
//         language: "Japanese",
//         activities: "Active tourism",
//         money: "€€€",
//     }
// },

// nombres: avénturame
