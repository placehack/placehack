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
            users:[],
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
                language: "Spanish",
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
                continent: 'Europe',
                language: ["Spanish"],
                activities: ["Active tourism", "Beach"],
                money: "€€",
            }
        },
        {
            name: 'Madrid',
            mainPhoto: '/img/mainPhotos/madrid.jpg',
            users:[],
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
                language: "Spanish",
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
                language: ["Spanish"],
                activities: ["Active tourism"],
                money: "€€",
            }
        },
    
        {
            name: 'Tokio',
            mainPhoto: 'https://lp-cms-production.imgix.net/2019-06/GettyImages-173253572_super.jpg?auto=format&fit=crop&vib=20&sharp=10&ixlib=react-8.6.4&w=1600&q=40&dpr=1',
            users:[],
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
                language: "Japanese",
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
                language: ["Japanese"],
                activities: ["Active tourism"],
                money: "€€€",
            }
        },
        {
            name: 'Amsterdam',
            mainPhoto: 'https://lp-cms-production.imgix.net/2019-06/stock-photo-beautiful-amsterdam-76796579.jpg?auto=format&fit=crop&vib=20&sharp=10&ixlib=react-8.6.4&w=1600&q=40&dpr=1',
            users:[],
            descriptionPhoto: 'https://cdn.civitatis.com/paises-bajos/amsterdam/galeria/casas-barco-amsterdam.jpg',
            location: {
                country: 'The Netherlands',
                continent: 'Europe',
            },
            images: [
                
            ],
            info: {
                shortDescription:"Golden Age canals lined by tilting gabled buildings are the backdrop for Amsterdam's treasure-packed museums, vintage-filled shops and hyper-creative drinking, dining and design scenes.",
                longDescription: "Amsterdam's canal-woven core is laced by atmospheric narrow lanes. You never know what you'll find: a tiny hidden garden; a boutique selling witty, stylised Dutch-designed homewares and fashion; a jewel-box-like jenever (Dutch gin) distillery; a flower stall filled with tulips in a rainbow of hues; an old monastery-turned-classical-music-venue; an ultra-niche restaurant such as an all-avocado specialist or one reinventing age-old Dutch classics. Fringing the centre, post-industrial buildings in up-and-coming neighbourhoods now house creative enterprises, from art galleries to craft breweries and cutting-edge tech start-ups, as well as some of Europe's hottest clubs.",
                language: "Dutch, English",
                hotSpots: [
                    {
                        name: 'Rijksmuseum',
                        location: {
                            lat: 0,
                            lng: 0,
                        },
                        images: [
                            'https://lonelyplanetimages.imgix.net/assets/image/92d42c3f11a66a4cea286abcaaf8652c77c4d23481ffe2d786b6c98b0ba5f168/e8ac59cec4d1bf4f93987796ba956aedd4392570f68bfddc3a996f953b141e2a.jpg?fit=crop&w=1920&h=832'
                        ],
                        description: "The Rijksmuseum is among the world's finest art museums, packing in works by local heroes Rembrandt, Vermeer and Van Gogh as well as other masterpieces in the 8000 works on display over 1.5km of galleries. To avoid the biggest crowds, come before 10am or after 3pm. Start on the 2nd floor in the Gallery of Honour with the astounding Golden Age works. Prebooking tickets online provides fast-track entry.",
                    },
                    {
                        name: "Brown Cafes",
                        location: {
                            lat: 0,
                            lng: 0,
                        },
                        images: [
                            'https://cdn.diffords.com/contrib/encyclopedia/2019/05/5cd427a2f38b7.jpg'
                        ],
                        description: "For a quintessential Amsterdam experience, pull up a stool in one of the city's famed bruin cafés (brown cafes; traditional Dutch pubs) such as In ʼt Aepjen. The true specimen has been in business a while and gets its name from centuries' worth of smoke stains on the walls. Brown cafes have candle-topped tables, wooden floors and sometimes an affectionate house cat. Most importantly, brown cafes induce a cosy vibe that prompts friends to linger and chat for hours over drinks – the same enchantment the cafes have cast for centuries.",
                    },
                    {
                        name: 'Jordaan',
                        location: {
                            lat: 0,
                            lng: 0,
                        },
                        images: [
                            'https://images.pavilionshotels.com/image/fetch/w_670,h_487,c_fill,g_auto,fl_force_strip.immutable_cache.lossy.strip_profile,q_auto:low/https://www.thetoren.nl/image/catalog/amsterdam/Explore_amsterdam/Jordaan/jordaan_district_amsterdam.jpg'
                        ],
                        description: "If Amsterdam's neighbourhoods held a 'best personality' contest, the Jordaan would win. The former workers' quarter's intimacy is contagious, with modest old homes, offbeat galleries and vintage shops peppering a grid of tiny lanes. This is the place for jovial bar singalongs and beery brown cafes, the neighbourhood where you could spend a week wandering the narrow streets and still not discover all the hidden courtyards and tucked-away restaurants. The Dutch have a propensity for gezelligheid (conviviality) and the Jordaan is a fount of it.",
                    }
                ]
            },
        
            filters: {
                time: "Weekend" ,
                continent: 'Europe',
                language: ["English"],
                activities: ["Active tourism"],
                money: "€€",
            }
        },
        {
            name: "Berlin",
            mainPhoto: "https://lp-cms-production.imgix.net/2019-06/GettyImages-475150263_super.jpg?auto=format&fit=crop&vib=20&sharp=10&ixlib=react-8.6.4&w=1600&q=40&dpr=1",
            users:[],
            descriptionPhoto: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Aerial_view_of_Berlin_%2832881394137%29.jpg/1200px-Aerial_view_of_Berlin_%2832881394137%29.jpg",
            location: {
                country: "Germany",
                continent: "Europe",
            },
            images: [
                
            ],
            info: {
                shortDescription:"Berlin's combo of glamour and grit is bound to mesmerise all those keen to explore its vibrant culture, cutting-edge architecture, fabulous food, intense parties and tangible history.",
                longDescription: "Bismarck and Marx, Einstein and Hitler, JFK and Bowie, they’ve all shaped – and been shaped by – Berlin, whose richly textured history confronts you at every turn. This is a city that staged a revolution, was headquartered by Nazis, bombed to bits, divided in two and finally reunited – and that was just in the 20th century! Walk along remnants of the Berlin Wall, marvel at the splendour of a Prussian palace, visit Checkpoint Charlie or stand in the very room where the Holocaust was planned. Berlin is like an endlessly fascinating 3D textbook where the past is very much present wherever you go.",
                language: "German, English",
                hotSpots: [
                    {
                        name: "Brandenburger Tor",
                        location: {
                            lat: 0,
                            lng: 0,
                        },
                        images: [
                            'https://wifinowevents.s3.amazonaws.com/uploads/2018/02/Brandenburger-Tor-FINAL-version-for-rootpage.jpg'
                        ],
                        description: "A symbol of division during the Cold War, the landmark Brandenburg Gate now epitomises German reunification. Carl Gotthard Langhans found inspiration in Athens’ Acropolis for the elegant triumphal arch, completed in 1791 as the royal city gate.",
                    },
                    {
                        name: "Berlin Wall",
                        location: {
                            lat: 0,
                            lng: 0,
                        },
                        images: [
                            'https://lonelyplanetimages.imgix.net/a/g/hi/t/4081c46b8ca19bc3d0652b220ab111bb-gedenkstatte-berliner-mauer.jpg?fit=crop&w=1920&h=832'
                        ],
                        description: "For an insightful primer on the Berlin Wall, visit this outdoor memorial, which extends for 1.4km along Bernauer Strasse and integrates an original section of Wall, vestiges of the border installations and escape tunnels, a chapel and a monument. Multimedia stations, panels, excavations and a Documentation Centre provide context and explain what the border fortifications looked like and how they shaped the everyday lives of people on both sides of it. There's a great outlook from the centre's viewing platform.",
                    },
                    {
                        name: "Museumsinsel",
                        location: {
                            lat: 0,
                            lng: 0,
                        },
                        images: [
                            'https://lonelyplanetimages.imgix.net/a/g/hi/t/d6b6f8b40b4b1772b8f9748292070b6b-museumsinsel.jpg?fit=crop&w=1920&h=832'
                        ],
                        description: "Walk through ancient Babylon, meet an Egyptian queen, clamber up a Greek altar or be mesmerised by Monet's ethereal landscapes. Welcome to Museumsinsel (Museum Island), Berlin's most important treasure trove, spanning 6000 years' worth of art, artefacts, sculpture and architecture from Europe and beyond. Spread across five grand museums built between 1830 and 1930, the complex takes up the entire northern half of the little Spree Island where Berlin's settlement began in the 13th century.",
                    }
                ]
            },
        
            filters: {
                time: "Weekend" ,
                continent: 'Europe',
                language: ["English"],
                activities: ["Active tourism"],
                money: "€€",
            }
        },
        {
            name: "Hong Kong",
            mainPhoto: "https://lp-cms-production.imgix.net/2019-06/stock-photo-the-trench-run-54952580.jpg?auto=format&fit=crop&vib=20&sharp=10&ixlib=react-8.6.4&w=1600&q=40&dpr=1",
            users:[],
            descriptionPhoto: "https://www.lowyinstitute.org/sites/default/files/14195355069_40bf85674c_k%20copy.jpg",
            location: {
                country: "China",
                continent: "Asia",
            },
            images: [
                
            ],
            info: {
                shortDescription:"Hong Kong welcomes with an iconic skyline, a legendary kitchen, and lush, protected nature where rare birds and colourful traditions thrive.",
                longDescription: "Hong Kong's enchanting neighbourhoods and islands offer a sensory feast. You may find yourself swaying along on a historic double-decker tram, cheering with the hordes at the city-centre horse races, or simply gazing out at the glorious harbour. What most visitors don't immediately realise is that over 70% of Hong Kong is mountains and sprawling country parks, some also home to geological and historical gems. Escape the city limits on one of the world’s smoothest transport systems and spend your day wandering in a Song dynasty village, hiking on a deserted island or kayaking among volcanic sea arches.",
                language: "Chinese",
                hotSpots: [
                    {
                        name: "Star Ferry",
                        location: {
                            lat: 0,
                            lng: 0,
                        },
                        images: [
                            'https://www.gonomad.com/wp-content/uploads/2012/06/star-ferry.jpg'
                        ],
                        description: "A floating piece of Hong Kong heritage and a sightseeing bargain, the legendary Star Ferry was founded in 1880 and plies the waters of Victoria Harbour in the service of regular commuters and tourists. At only HK$2.70, the 15-minute ride with views of Hong Kong's iconic skyline must be one of the world's best-value cruises. While the vista is more dramatic when you're Island-bound, the art deco Kowloon pier, resembling a finger pointing at the Island, is arguably more charming.",
                    },
                    {
                        name: "The Peak",
                        location: {
                            lat: 0,
                            lng: 0,
                        },
                        images: [
                            'http://www.discoverhongkong.com/es/images/see-do/highlight-attractions/large/1.1.1.2-Peak_03.jpg'
                        ],
                        description: "Rising above the financial heart of Hong Kong, Victoria Peak offers superlative views of the city and the mountainous countryside beyond. Ride the hair-raising Peak Tram – Asia's first cable funicular, in operation since 1888 – to the cooler climes at the top, as skyscrapers and apartment blocks recede into the distance. Escape the crowds by striking out on little-worn paths that encircle the mountain. At dusk Victoria Harbour glitters like the Milky Way on a sci-fi movie poster, mysterious and full of promise, as the lights come on.",
                    },
                    {
                        name: "Man Mo Temple",
                        location: {
                            lat: 0,
                            lng: 0,
                        },
                        images: [
                            'http://www.strippedpixel.com/wp-content/uploads/2013/09/man-mo-temple-interior-hong-kong-830x551.jpg'
                        ],
                        description: "Experience Chinese folk religiosity in Soho. Permanently wreathed in sandalwood smoke from the hanging incense coils, this famous temple is dedicated to Man (god of literature) and Mo (god of war) and the gods who govern them. Formerly a cultural and political focal point for the local Chinese, the temple now commands a following beyond conscientious students and the martially inclined, as locals and tourists come to perform age-old rites and have their fortunes told.",
                    }
                ]
            },
        
            filters: {
                time: "+Week" ,
                continent: 'Asia',
                language: ["English"],
                activities: ["Active tourism"],
                money: "€€€",
            }
        },
        {
            name: "San Francisco",
            mainPhoto: "https://lp-cms-production.imgix.net/2019-06/9cf024dfd5c0bcb2b17f4785340145ea-san-francisco.jpg?auto=format&fit=crop&vib=20&sharp=10&ixlib=react-8.6.4&w=1600&q=40&dpr=1",
            users:[],
            descriptionPhoto: "https://image.cnbcfm.com/api/v1/image/105284147-GettyImages-673632588.jpg?v=1557935343&w=1400&h=950",
            location: {
                country: "California, USA",
                continent: "America",
            },
            images: [
                
            ],
            info: {
                shortDescription:"Grab your coat and a handful of glitter, and enter a wonderland of fog and fabulousness. So long, inhibitions; hello, San Francisco!",
                longDescription: "Consider permission permanently granted to be outlandish: other towns may surprise you, but in San Francisco you will surprise yourself. Good times and social revolutions tend to start here, from manic gold rushes to blissful hippie 'be-ins'. If there's a skateboard move yet to be busted, a technology still unimagined, a poem left unspoken or a green scheme untested, chances are it's about to happen here. Yes, right now. This town has lost almost everything in earthquakes and dot-com gambles, but never its nerve.",
                language: "English",
                hotSpots: [
                    {
                        name: "Golden Gate Bridge",
                        location: {
                            lat: 0,
                            lng: 0,
                        },
                        images: [
                            'https://cdn.britannica.com/13/77413-050-95217C0B/Golden-Gate-Bridge-San-Francisco.jpg'
                        ],
                        description: "San Franciscans have passionate perspectives on every subject, especially their signature landmark, though everyone agrees that it's a good thing that the Navy didn't get its way over the bridge's design – naval officials preferred a hulking concrete span, painted with caution-yellow stripes, over the soaring art-deco design of architects Gertrude and Irving Murrow and engineer Joseph B Strauss, which, luckily, won the day.",
                    },
                    {
                        name: "Alcatraz",
                        location: {
                            lat: 0,
                            lng: 0,
                        },
                        images: [
                            'https://lonelyplanetimages.imgix.net/mastheads/shutterstock_239675278.jpg?fit=crop&w=1920&h=832'
                        ],
                        description: "Alcatraz: for over 150 years, the name has given the innocent chills and the guilty cold sweats. Over the decades, it’s been a military prison, a forbidding maximum-security penitentiary and disputed territory between Native American activists and the FBI. No wonder that first step you take onto ‘the Rock’ seems to cue ominous music: dunh-dunh-dunnnnh!",
                    },
                    {
                        name: "Castro District",
                        location: {
                            lat: 0,
                            lng: 0,
                        },
                        images: [
                            '/img/hotSpots/sanFrancisco/sanFrancisco.jpg'
                        ],
                        description: "America's first gay-history museum showcases a century of San Francisco LGBTQ+ ephemera – Harvey Milk's campaign literature, matchbooks from long-gone bathhouses, photographs of early marches – alongside insightful installations highlighting queer culture milestones and struggles for acceptance throughout history. Multimedia stories put civil rights efforts into personal perspective, and provide community introductions for queer folk and allies alike. The shop sells reproductions of '80s pink triangle tees,'70s pride pins, and Harvey Milk fridge magnets citing his words: 'You gotta give 'em hope.' Indeed.",
                    }
                ]
            },
        
            filters: {
                time: "Week" ,
                continent: 'America',
                language: ["English"],
                activities: ["Active tourism", "Beach"],
                money: "€€€",
            }
        },
        {
            name: "Cape Town",
            mainPhoto: "https://lp-cms-production.imgix.net/2019-06/stock-photo-welcome-to-cape-town-104168527.jpg?auto=format&fit=crop&vib=20&sharp=10&ixlib=react-8.6.4&w=1600&q=40&dpr=1",
            users:[],
            descriptionPhoto: "https://lp-cms-production.imgix.net/2019-06/GettyImages-475149341_super.jpg?auto=format&fit=crop&vib=20&sharp=10&ixlib=react-8.6.4&w=1600&q=40&dpr=1",
            location: {
                country: "South Africa",
                continent: "Africa",
            },
            images: [
                
            ],
            info: {
                shortDescription:"A coming-together of cultures, cuisines and landscapes, there's nowhere quite like Cape Town, a singularly beautiful city crowned by the magnificent Table Mountain National Park.",
                longDescription: "Table Mountain National Park defines the city. The flat-topped mountain is the headline act, but there are many other equally gorgeous natural landscapes within the park’s extensive boundaries. Cultivated areas, such as the historic Company’s Garden, Kirstenbosch National Botanical Garden and Green Point Urban Park, also make exploring the city a pleasure. Follow the lead of locals by taking full advantage of the abundant outdoor space: learn to surf; go hiking or mountain biking; tandem-paraglide off Lion’s Head; abseil off the top of Table Mountain – just a few of the many activities on offer.",
                language: "Afrikaans, English, Xhosa",
                hotSpots: [
                    {
                        name: "Table Mountain",
                        location: {
                            lat: 0,
                            lng: 0,
                        },
                        images: [
                            'https://lonelyplanetimages.imgix.net/mastheads/GettyImages-551985695_super.jpg?fit=crop&w=1920&h=832'
                        ],
                        description: "Around 600 million years old, and a canvas painted with the rich diversity of the Cape floral kingdom, Table Mountain is truly iconic. You can admire the showstopper of Table Mountain National Park and one of the 'New 7 Wonders of Nature' (https://nature.new7wonders.com) from multiple angles, but you really can’t say you’ve visited Cape Town until you’ve stood on top of it.",
                    },
                    {
                        name: "Kirstenbosch National Botanical Garden",
                        location: {
                            lat: 0,
                            lng: 0,
                        },
                        images: [
                            'https://lonelyplanetimages.imgix.net/a/g/hi/t/b5f3daa0d294baadd5c1a5f96f613301-kirstenbosch-botanical-gardens.jpg?fit=crop&w=1920&h=832'
                        ],
                        description: "Location and unique flora combine to make these 5.28-sq-km botanical gardens among the most beautiful in the world. Gate 1, the main entrance at the Newlands end of the gardens, is where you’ll find the information centre, an excellent souvenir shop and the conservatory.Added for the garden's centenary in 2013, the popular Tree Canopy Walkway (informally known as the 'Boomslang', meaning tree snake) is a curvaceous steel and timber bridge that rises through the trees and provides amazing views.",
                    },
                    {
                        name: "Robben Island",
                        location: {
                            lat: 0,
                            lng: 0,
                        },
                        images: [
                            'https://lonelyplanetimages.imgix.net/mastheads/GettyImages-183265604_medium.jpg?fit=crop&w=1920&h=832'
                        ],
                        description: "Used as a prison from the early days of the VOC (Dutch East India Company) right up until 1996, this Unesco World Heritage site is preserved as a memorial to those (such as Nelson Mandela) who spent many years incarcerated here. You can only go here on a tour, which lasts around four hours including ferry rides, departing from the Nelson Mandela Gateway beside the Clock Tower at the Waterfront. Booking online well in advance is highly recommended as tours can sell out.",
                    }
                ]
            },
        
            filters: {
                time: "Week" ,
                continent: 'Africa',
                language: ["English"],
                activities: ["Relax", "Beach", "Mountain", "Active tourism"],
                money: "€€",
            }
        },
        {
            name: "Alaska",
            mainPhoto: "https://lp-cms-production.imgix.net/2019-06/80472fa866c28387f301ceaf0a42080e-alaska.jpg?auto=format&fit=crop&vib=20&sharp=10&ixlib=react-8.6.4&w=1600&q=40&dpr=1",
            users:[],
            descriptionPhoto: "https://lp-cms-production.imgix.net/2019-06/76303971.jpg?auto=format&fit=crop&vib=20&sharp=10&ixlib=react-8.6.4&w=1600&q=40&dpr=1",
            location: {
                country: "USA",
                continent: "America",
            },
            images: [
                
            ],
            info: {
                shortDescription:"Bears larger than bison, national parks the size of nations, and glaciers bigger than other US states. The word ‘epic’ barely does Alaska justice.",
                longDescription: "Pure, raw, unforgiving and humongous in scale, Alaska is a place that arouses basic instincts and ignites what Jack London termed the 'call of the wild.' Yet, unlike London and his gutsy, gold-rush companions, visitors today will have a far easier time penetrating the region's vast, feral wilderness. Indeed, one of the beauties of the 49th state is its accessibility. Few other places in the US allow you to scale an unclimbed mountain, walk where – quite possibly – no human foot has trodden before, or sally forth into a national park that gets fewer annual visitors than the International Space Station.",
                language: "English",
                hotSpots: [
                    {
                        name: "Denali & Its National Park",
                        location: {
                            lat: 0,
                            lng: 0,
                        },
                        images: [
                            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Every_Road-_Denali_%287945497984%29.jpg/568px-Every_Road-_Denali_%287945497984%29.jpg'
                        ],
                        description: "The Athabascans christened it the 'Great One,' and few who have seen this 20,237ft bulk of ice and granite would disagree. Viewed from the Park Rd of its eponymous national park, Denali chews up the skyline, dominating an already stunning landscape of tundra fields and polychromatic ridgelines. The mountain inspires a take-no-prisoners kind of awe, and climbers know that feeling well. Denali attracts over a thousand alpinists every summer. Far more popular is the surrounding national park, a 6-million-acre wilderness replete with wildlife that's easily accessible on a bus.",
                    },
                    {
                        name: "Riding the Alaska Ferry to the Aleutian Islands",
                        location: {
                            lat: 0,
                            lng: 0,
                        },
                        images: [
                            'https://i.pinimg.com/originals/84/e4/7c/84e47c29d5043efbe341276bae3cc9c5.jpg'
                        ],
                        description: "There’s no experience like it: three nights on a ferry that services remote Alaskan communities far along the tendril of the Aleutian chain. Commercial fishers with plastic bins full of gear, tourists lugging giant camera lenses with the hope of scoping a few birds, and even families returning from a visit to the doctor in Homer are all likely to have traded 'good mornings' by the time the ship disembarks in Unalaska. In port locals often pile on board just to take off stacks of hamburgers – the ship cafeteria might be the only restaurant in town.",
                    },
                    {
                        name: "Icebergs in Glacier Bay",
                        location: {
                            lat: 0,
                            lng: 0,
                        },
                        images: [
                            'http://www.lovethesepics.com/wp-content/uploads/2013/01/Waterfall-beneath-Lamplugh-Glacier.jpg'
                        ],
                        description: "Passengers have already seen sea lions, horned puffins and even a pod of orcas when icebergs of all shapes, sizes and shades of blue begin to appear in Glacier Bay National Park & Preserve. By lunchtime tour boats reach the Margerie Glacier and for the next half-hour passengers can see and hear huge chunks of ice falling off the face of the glacier in a visual and sonic performance that is nothing short of dramatic.",
                    }
                ]
            },
        
            filters: {
                time: "+Week" ,
                continent: 'America',
                language: ["English"],
                activities: ["Mountain", "Adventure"],
                money: "€€€",
            }
        },
        {
            name: "Sydney",
            mainPhoto: "https://lp-cms-production.imgix.net/2019-06/65830387.jpg?auto=format&fit=crop&vib=20&sharp=10&ixlib=react-8.6.4&w=1600&q=40&dpr=1",
            users:[],
            descriptionPhoto: "https://i.pinimg.com/originals/7a/36/e0/7a36e00494a2f2603ea4f0c841e3ba11.jpg",
            location: {
                country: "Australia",
                continent: "Oceania",
            },
            images: [
                
            ],
            info: {
                shortDescription:"Sydney, spectacularly draped around its glorious harbour and beaches, has visual wow factor like few other cities. Scratch the surface and it only gets better.",
                longDescription: "National parks ring the city and penetrate right into its heart. Large chunks of harbour are still bush-fringed, while parks cut their way through skyscrapers and suburbs. Consequently, native critters turn up in the most surprising places. Clouds of flying foxes pass overhead at twilight and spend the night rustling around in suburban fig trees; oversized spiders stake out corners of lounge-room walls; possums rattle over roofs of terrace houses; and sulphur-crested cockatoos screech from the railings of urban balconies. At times Sydney's concrete jungle seems more like an actual one – and doesn't that just make it all the more exciting?",
                language: "English",
                hotSpots: [
                    {
                        name: "Sydney Opera House",
                        location: {
                            lat: 0,
                            lng: 0,
                        },
                        images: [
                            'https://lonelyplanetimages.imgix.net/a/g/hi/t/3c17824b0cf95d62bedb804736a7716c-sydney-opera-house.jpg?fit=crop&w=1920&h=832'
                        ],
                        description: "Designed by Danish architect Jørn Utzon, this Unesco World Heritage-listed building is Australia's most famous landmark. Visually referencing a yacht's sails, it's a soaring, commanding presence. The complex comprises five performance spaces for dance, concerts, opera and theatre. The best way to experience the building is to attend a performance, but you can also take a one-hour guided tour (available in several languages), with optional food. Ongoing renovation work, scheduled to be completed in 2022, may disrupt visits.",
                    },
                    {
                        name: "Sydney Harbour National Park",
                        location: {
                            lat: 0,
                            lng: 0,
                        },
                        images: [
                            'https://media-cdn.tripadvisor.com/media/photo-s/18/25/34/6a/q-station-sydney-harbour.jpg'
                        ],
                        description: "Sydney Harbour National Park protects large swathes of bushland around the harbour shoreline, plus several harbour islands. In among the greenery you’ll find walking tracks, scenic lookouts, Aboriginal carvings, beaches and a handful of historic sites. The park incorporates South Head and Nielsen Park on the south side of the harbour, but most of the park is on the North Shore – including Bradleys Head, Middle Head, Dobroyd Head and North Head.",
                    },
                    {
                        name: "Bondi Beach",
                        location: {
                            lat: 0,
                            lng: 0,
                        },
                        images: [
                            'https://lonelyplanetimages.imgix.net/mastheads/GettyImages-dv802147_super.jpg?fit=crop&w=1920&h=832'
                        ],
                        description: "Definitively Sydney, Bondi is one of the world’s great beaches. It’s the closest ocean beach to the city centre (8km away), has consistently good (though crowded) waves, and is great for a rough-and-tumble swim (the average water temperature is a considerate 21°C). If the sea’s angry, try the child-friendly saltwater sea baths at either end of the beach.",
                    }
                ]
            },
        
            filters: {
                time: "+Week" ,
                continent: 'Oceania',
                language: ["English"],
                activities: ["Active tourism", "Beach"],
                money: "€€€",
            }
        },
        {
            name: "Nusa Tenggara",
            mainPhoto: "https://lp-cms-production.imgix.net/2019-09/45440f65eb0fecff6484bead12864c1e-nusa-tenggara.jpg?auto=format&fit=crop&vib=20&sharp=10&ixlib=react-8.6.4&w=1600&q=40&dpr=1",
            users:[],
            descriptionPhoto: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-540x360/07/e2/3e/5e.jpg",
            location: {
                country: "Indonesia",
                continent: "Asia",
            },
            images: [
                
            ],
            info: {
                shortDescription:"If you’re seeking white sand, spectacular diving and surf, bubbling hot springs, majestic waterfalls and hidden traditional villages – away from Bali-esque crowds – then Nusa Tenggara is your wonderland.",
                longDescription: "Spreading west from the Wallace Line dividing Asia from Australasia, this archipelago is jungle-green in the north and tending to drier savannah in the south and east. In between are limitless surf breaks and barrels, technicolor volcanic lakes, pink-sand beaches, swaggering dragons and underwater worlds filled with colour and creatures.You’ll also find a cultural diversity that's unmatched, even in multicultural Indonesia. Animist rituals and tribal traditions still thrive alongside minarets, convents and chapels, and though Bahasa Indonesia is the lingua franca, each island has at least one native language, often subdivided into dialects. From a beach-forward, tourist-ready vacation to stepping outside your comfort zone for the sort of experiences that leave an indelible mark on your memory, you’re exactly where you’re supposed to be.",
                language: "Manggarai",
                hotSpots: [
                    {
                        name: "Komodo National Park",
                        location: {
                            lat: 0,
                            lng: 0,
                        },
                        images: [
                            'https://lonelyplanetimages.imgix.net/mastheads/GettyImages-177472881_high.jpg?fit=crop&w=1920&h=832'
                        ],
                        description: "Established in 1980, this national park is one of Indonesia's – if not the world's – greatest natural treasures. Within its 1817 sq km area are Komodo, Rinca and Padar Islands, as well as smaller islands and a rich marine ecosystem that affords divers unforgettable underwater adventures. Those who spot ora, snorkel or climb to Padar's peak are equally spoilt.",
                    },
                    {
                        name: "Flores",
                        location: {
                            lat: 0,
                            lng: 0,
                        },
                        images: [
                            'https://media.worldnomads.com/Explore/south-east-asia/padar-island-viewpoint-istock.jpg'
                        ],
                        description: "Flores, the island given a pretty but incongruous Portuguese name by its 16th-century colonists, has become Indonesia’s Next Big Thing. The serpentine, 670km Trans-Flores Hwy runs the length of the island, skirting knife-edge ridges, brushing by paddy-fringed villages and opening up dozens of areas few tourists explore.",
                    },
                    {
                        name: "Temkessi",
                        location: {
                            lat: 0,
                            lng: 0,
                        },
                        images: [
                            'https://a4.pbase.com/o6/12/182212/1/120677767.dIvVYzZn.WestTimor455.jpg'
                        ],
                        description: "Accessible through a keyhole between jutting limestone cliffs, 50km northeast of Kefa, Temkessi is one of West Timor’s most isolated and best-preserved villages. The drive across wind-swept ridges, with distant views out to sea, sets the otherworldly mood, but upon arrival you'll be met by giggling children and perhaps a puppy or piglet.",
                    }
                ]
            },
        
            filters: {
                time: "+Week" ,
                continent: 'Asia',
                language: ["English"],
                activities: ["Active tourism", "Relax", "Beach", "Mountain", "Adventure"],
                money: "€€€",
            }
        },
        {
            name: "Buffalo",
            mainPhoto: "https://lp-cms-production.imgix.net/2019-06/b5fc9c60ea5410a5809834e8d837aae6-buffalo.jpg?auto=format&fit=crop&vib=20&sharp=10&ixlib=react-8.6.4&w=1600&q=40&dpr=1",
            users:[],
            descriptionPhoto: "https://www.visittheusa.mx/sites/default/files/styles/hero_m_1300x700/public/images/hero_media_image/2016-10/HERO%201_GettyImages-182773106_Cropped_Web72DPI.jpg?itok=SipcQ1No",
            location: {
                country: "New York, USA",
                continent: "America",
            },
            images: [
                
            ],
            info: {
                shortDescription:"The winters may be long and cold, but Buffalo stays warm with a vibrant creative community and strong local pride. Settled by the French in 1758, the city is believed to derive its name from beau fleuve (beautiful river).",
                longDescription: "With power from nearby Niagara Falls, it boomed in the early 1900s; Pierce-Arrow cars were made here, and it was the first American city to have electric streetlights. One of its nicknames – Queen City – was because it was the largest city along the Great Lakes.Those rosy economic times are long over, leaving many abandoned buildings in their wake. But revival is in Buffalo's air. Masterpieces of late 19th- and early-20th-century architecture, including designs by Frank Lloyd Wright and HH Richardson, have been magnificently restored. There's a park system laid out by Frederick Law Olmsted, of NYC's Central Park fame, great museums, and a positive vibe that's impossible to ignore.",
                language: "English",
                hotSpots: [
                    {
                        name: "Albright-Knox Art Gallery",
                        location: {
                            lat: 0,
                            lng: 0,
                        },
                        images: [
                            'https://lonelyplanetimages.imgix.net/a/g/hi/t/388bd0330a841c7f0def0f9f5515c1f6-albright-knox-art-gallery.jpg?fit=crop&w=1920&h=832'
                        ],
                        description: "The gallery's superb collection, which ranges from Degas and Picasso to Ruscha, Rauschenberg and other abstract expressionists, occupies a neoclassical building planned for Buffalo's 1905 Pan American Expo. Its temporary exhibits are particularly creative and compelling.",
                    },
                    {
                        name: "Martin House Complex",
                        location: {
                            lat: 0,
                            lng: 0,
                        },
                        images: [
                            'https://lonelyplanetimages.imgix.net/a/g/hi/t/741e61ceee7bbeceef4fa5be7ca40f90-martin-house-complex.jpg?fit=crop&w=1920&h=832'
                        ],
                        description: "This 15,000-sq-ft house, completed in 1905, was designed by Frank Lloyd Wright for his friend and patron Darwin D Martin. Representing Wright's Prairie House ideal, it consists of six interconnected buildings, each meticulously restored inside and out. Two tour options (book online) offer different levels of detail on this elaborate project.",
                    },
                    {
                        name: "Buffalo City Hall",
                        location: {
                            lat: 0,
                            lng: 0,
                        },
                        images: [
                            'https://lonelyplanetimages.imgix.net/a/g/hi/t/a36113756d489d21be7909d43e0fae98-buffalo-city-hall.jpg?fit=crop&w=1920&h=832'
                        ],
                        description: "This 32-story art deco masterpiece, opened in 1931 and beautifully detailed inside and out, towers over downtown. It's worth joining the free tour at noon that includes access to the mayor's office, the council chamber and the open-air observation deck.",
                    }
                ]
            },
        
            filters: {
                time: "Weekend" ,
                continent: 'America',
                language: ["English"],
                activities: ["Active tourism"],
                money: "€€€",
            }
        },
        {
            name: "Chhattisgarh",
            mainPhoto: "https://lp-cms-production.imgix.net/2019-06/740aaa5db1b0ef3e84257d07cd705c22192ee09d2285ac8ccbb9487c738ab50c.jpg?auto=format&fit=crop&vib=20&sharp=10&ixlib=react-8.6.4&w=1600&q=40&dpr=1",
            users:[],
            descriptionPhoto: "https://static.toiimg.com/photo/38796013/.jpg",
            location: {
                country: "India",
                continent: "Asia",
            },
            images: [
                
            ],
            info: {
                shortDescription:"The spotlight doesn’t hit Madhya Pradesh (MP) with quite the same brilliance as it shines on more celebrated neighbouring states, so you can experience travel riches ranking with the best without that feeling of just following a tourist trail.",
                longDescription: "Khajuraho’s temples bristle with some of the finest stone carving in India, their exquisite erotic sculptures a mere slice of the architectural wonders of a region exceedingly well endowed with palaces, forts, temples, mosques and stupas, most gloriously in the villages of Orchha and Mandu. Tigers are the other big news here, and your chances of spotting a wild Royal Bengal in MP are as good as anywhere in India.Pilgrimage-cum-traveller havens such as Maheshwar and Omkareshwar on the Narmada River are infused with the spiritual and chill-out vibes for which India is renowned, while the adventurous can foray into the tribal zones of Chhattisgarh, fascinatingly far removed from mainstream India.",
                language: "Hindi",
                hotSpots: [
                    {
                        name: "Bandhavgarh Tiger Reserve",
                        location: {
                            lat: 0,
                            lng: 0,
                        },
                        images: [
                            'https://lonelyplanetimages.imgix.net/a/g/hi/t/4a86e6303066fe31ab77ce0eb44e4acc-bandhavgarh-tiger-reserve.jpg?fit=crop&w=1920&h=832'
                        ],
                        description: "If your only reason for visiting a tiger reserve in India is to see a tiger, look no further. A couple of days at Bandhavgarh should net you a tiger sighting. India's 2014 tiger census counted 68 tigers here, the great majority of them in the 453-sq-km Bandhavgarh National Park, which forms part of the reserve's core zone. The main base for visits is the small, laid-back village of Tala, 32km northeast of Umaria, the nearest train station.",
                    },
                    {
                        name: "Temples",
                        location: {
                            lat: 0,
                            lng: 0,
                        },
                        images: [
                            'https://images.thrillophilia.com/image/upload/s--qBcAY4mm--/c_fill,f_auto,fl_strip_profile,h_775,q_auto,w_1600/v1/images/photos/000/111/447/original/1493798594_Yogeswar_Temple_Patora.jpg.jpg?1493798594'
                        ],
                        description: "The temples are superb examples of north Indian architecture, but it’s their liberally embellished carvings that have made Khajuraho famous. Embracing the temples are bands of exceedingly artistic stonework showing a storyboard of life a millennium ago – gods, goddesses, warriors, dancers and real and mythological animals.",
                    },
                    {
                        name: "Orchha",
                        location: {
                            lat: 0,
                            lng: 0,
                        },
                        images: [
                            'https://live.staticflickr.com/4704/24859841217_8b2afbec87_b.jpg'
                        ],
                        description: "Orchha could make towns many times its size green with jealousy. At heart, Orchha is nothing but a tiny, agricultural village that shouldn't really be of much interest to anyone, but it was blessed by history: for nearly 300 years it was one of the most important urban areas in this part of India. This has left the small town with a supreme display of Mughal-influenced Rajput architecture in the shape of spectacular palaces, temples and royal chhatris (cenotaphs). And thanks to an important temple dedicated to Rama, it's also a major pilgrimage and spiritual centre. Combine these with a laid-back atmosphere, some fabulous accommodation options, as well as opportunities to enjoy the surrounding pastoral countryside, with walking, cycling and rafting all on the agenda, and you'll understand why Orchha can be considered one of the highlights of Madhya Pradesh.",
                    }
                ]
            },
        
            filters: {
                time: "+Week" ,
                continent: 'Asia',
                language: ["Hindi"],
                activities: ["Active tourism"],
                money: "€€€",
            }
        },
        {
            name: "Budapest",
            mainPhoto: "https://lp-cms-production.imgix.net/2019-06/stock-photo-budapest-at-night-part-iii-76226665.jpg?auto=format&fit=crop&vib=20&sharp=10&ixlib=react-8.6.4&w=1600&q=40&dpr=1",
            users:[],
            descriptionPhoto: "https://img.huffingtonpost.com/asset/5c41f03b2300002f001f9efc.jpeg?ops=scalefit_720_noupscale",
            location: {
                country: "Hungary",
                continent: "Europe",
            },
            images: [
                
            ],
            info: {
                shortDescription:"Budapest has something for everyone – from dramatic history and flamboyant architecture to healing thermal waters and a nightlife that is unrivalled in Eastern and Central Europe.",
                longDescription: "Budapest’s beauty is not all God given; humankind has played a role in shaping this pretty face too. Architecturally, the city is a treasure trove, with enough baroque, neoclassical, Eclectic and art nouveau buildings to satisfy everyone. Overall, though, Budapest has a fin de siècle feel to it, for it was then, during the capital’s ‘golden age' in the late 19th century, that most of what you see today was built.",
                language: "Hungarian, English",
                hotSpots: [
                    {
                        name: "Rudas Baths",
                        location: {
                            lat: 0,
                            lng: 0,
                        },
                        images: [
                            'http://www.pipeaway.com/wp-content/uploads/2017/12/rudas-baths-1-2.jpg'
                        ],
                        description: "Built in 1566, these renovated baths are the most Turkish in Budapest, with an octagonal main pool, domed cupola with coloured glass and massive columns. It’s a real zoo on mixed weekend nights, when bathing costumes (rental 1500Ft) are compulsory.",
                    },
                    {
                        name: "Royal Palace",
                        location: {
                            lat: 0,
                            lng: 0,
                        },
                        images: [
                            'https://lonelyplanetimages.imgix.net/mastheads/GettyImages-137893598_high.jpg?fit=crop&w=1920&h=832'
                        ],
                        description: "The former Royal Palace has been razed and rebuilt at least half a dozen times over the past seven centuries. Béla IV established a royal residence here in the mid-13th century, and subsequent kings added to the complex. The palace was levelled in the battle to drive out the Turks in 1686; the Habsburgs rebuilt it but spent very little time here. The Royal Palace now contains the Hungarian National Gallery, the Castle Museum, and the National Széchenyi Library.",
                    },
                    {
                        name: "Szimpla Kert",
                        location: {
                            lat: 0,
                            lng: 0,
                        },
                        images: [
                            'https://lonelyplanetimages.imgix.net/a/g/hi/t/65d5729314381ec4c9dd1e1701fc36fe-szimpla-kert.jpg?fit=crop&w=1920&h=832'
                        ],
                        description: "Budapest's first romkocsma (ruin pub), Szimpla Kert is firmly on the tourist trail but remains a landmark place for a drink. It's a huge complex with nooks filled with bric-a-brac, graffiti, art and all manner of unexpected items. Sit in an old Trabant car, watch a film in the open-air back courtyard, down shots or join in an acoustic jam session.",
                    }
                ]
            },
        
            filters: {
                time: "+Week" ,
                continent: 'Asia',
                language: ["English"],
                activities: ["Active tourism"],
                money: "€€€",
            }
        },
        {
            name: "Bilbao",
            mainPhoto: "https://lp-cms-production.imgix.net/2019-06/GettyImages-461465445_full.jpg?auto=format&fit=crop&vib=20&sharp=10&ixlib=react-8.6.4&w=1600&q=40&dpr=1",
            users:[],
            descriptionPhoto: "https://www.barcelo.com/pinandtravel/wp-content/uploads/2017/09/what-to-do-in-bilbao-trip-to-bilbao-1024x684.jpg",
            location: {
                country: "Spain",
                continent: "Europe",
            },
            images: [
                
            ],
            info: {
                shortDescription:"Staggering architecture, a venerable dining scene and stunning landscapes just outside the city centre: Bilbao is one of the great treasures of the Basque Country.",
                longDescription: "The great landmark perched over the Nervión played a pivotal role in transforming the fortunes of this once industrial city. More than two decades after its unveiling, Frank Gehry’s shimmering titanium-clad Guggenheim museum has lost none of its ability to captivate. Today though, this artfully designed icon stands among other great architectural works, like the nearby Zubizuri, a soaring bridge designed by Santiago Calatrava, and the Azkuna Zentroa, a wine storage warehouse turned cultural centre that bears the imaginative imprint of Philippe Starck. The city also has its share of beauties from the past, including a neo-baroque theatre, an art nouveau train station and several spectacular cathedrals.",
                language: "Spanish",
                hotSpots: [
                    {
                        name: "Museo Guggenheim Bilbao",
                        location: {
                            lat: 0,
                            lng: 0,
                        },
                        images: [
                            'https://lonelyplanetimages.imgix.net/a/g/hi/t/222db16fcfa1b7dd0fb07c836cb8e6bf-museo-guggenheim.jpg?fit=crop&w=1920&h=832'
                        ],
                        description: "Shimmering titanium Museo Guggenheim Bilbao is one of modern architecture's most iconic buildings. It played a major role in helping to lift Bilbao out of its postindustrial depression and into the 21st century – and with sensation. It sparked the city’s inspired regeneration, stimulated further development and placed Bilbao firmly in the international art and tourism spotlight.",
                    },
                    {
                        name: "Casco Viejo",
                        location: {
                            lat: 0,
                            lng: 0,
                        },
                        images: [
                            'https://lonelyplanetimages.imgix.net/a/g/hi/t/11fa93f10e9c9152579efbac79947fa7-casco-viejo.jpg?fit=crop&w=1920&h=832'
                        ],
                        description: "The compact Casco Viejo, Bilbao’s atmospheric old quarter, is full of charming streets, boisterous bars and plenty of quirky and independent shops. At the heart of the Casco are Bilbao’s original seven streets, Las Siete Calles, which date from the 1400s.",
                    },
                    {
                        name: "Drinking & Dining",
                        location: {
                            lat: 0,
                            lng: 0,
                        },
                        images: [
                            'https://img.theculturetrip.com/768x432/wp-content/uploads/2014/11/4050800113_ecd9cb2bf2_z.jpg'
                        ],
                        description: "Offering unexpected sophistication and fine dining in an otherwise fairly down-at-the-heels neighbourhood, this riverside restaurant has some critics calling it Bilbao's best. Expect serious culinary creativity: think along the lines of spider crab with passion fruit, aubergine confit with prawns or bone-marrow cake with seasonal mushrooms – followed perhaps by saffron crème brûlée.",
                    }
                ]
            },
        
            filters: {
                time: "Weekend" ,
                continent: 'Europe',
                language: ["Spanish"],
                activities: ["Active tourism"],
                money: "€",
            }
        },
        {
            name: "Salzburg",
            mainPhoto: "https://lp-cms-production.imgix.net/2019-06/GettyImages-472316594_super.jpg?auto=format&fit=crop&vib=20&sharp=10&ixlib=react-8.6.4&w=1600&q=40&dpr=1",
            users:[],
            descriptionPhoto: "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/aa/fd/49.jpg",
            location: {
                country: "Austria",
                continent: "Europe",
            },
            images: [
                
            ],
            info: {
                shortDescription:"The joke 'If it's baroque, don't fix it' is a perfect maxim for Salzburg: the story-book Altstadt (old town) burrowed below steep hills looks much as it did when Mozart lived here 250 years ago",
                longDescription: "Beside the fast-flowing Salzach River, your gaze is raised inch by inch to graceful domes and spires, the formidable clifftop fortress and the mountains beyond. It's a backdrop that did the lordly prince-archbishops and Maria proud.Beyond Salzburg’s two biggest money-spinners – Mozart and The Sound of Music – hides a city with a burgeoning arts scene, wonderful food, manicured parks, quiet side streets where classical music wafts from open windows, and concert halls that uphold musical tradition 365 days a year. Everywhere you go, the scenery, the skyline, the music and the history send your spirits soaring higher than Julie Andrews' octave-leaping vocals.",
                language: "",
                hotSpots: [
                    {
                        name: "Festung Hohensalzburg",
                        location: {
                            lat: 0,
                            lng: 0,
                        },
                        images: [
                            'https://lonelyplanetimages.imgix.net/a/g/hi/t/afd419001a10ccbbeae463f011434947-festung-hohensalzburg.jpg?fit=crop&w=1920&h=832'
                        ],
                        description: "Salzburg's most visible icon is this mighty, 900-year-old clifftop fortress, one of the biggest and best preserved in Europe. It's easy to spend half a day up here, roaming the ramparts for far-reaching views over the city's spires, the Salzach River and the mountains. The fortress is a steep 15-minute walk from the centre or a speedy ride up in the glass Festungsbahn funicular.",
                    },
                    {
                        name: "DIY Sound of Music Tour",
                        location: {
                            lat: 0,
                            lng: 0,
                        },
                        images: [
                            'https://i2.wp.com/designedtotravel.ro/wp-content/uploads/2017/11/edit-1-of-1-Copy.jpg'
                        ],
                        description: "Do a Julie Andrews and sing as you stroll on a self-guided tour of The Sound of Music film locations. ",
                    },
                    {
                        name: "Salzburg Festival",
                        location: {
                            lat: 0,
                            lng: 0,
                        },
                        images: [
                            'https://lonelyplanetimages.imgix.net/a/g/hi/t/6354075d05f72545cbd3ed50c257e9f2-salzburg-festival.jpg?fit=crop&w=1920&h=832'
                        ],
                        description: "The absolute highlight of the city's events calendar is the Salzburg Festival. It's a grand affair, with some 200 productions – including theatre, classical music and opera – staged in the impressive surrounds of the Grosses Festspielhaus, Haus für Mozart and the baroque Felsenreitschule. Tickets vary in price between €15 and €430; you'll need to book months in advance.",
                    }
                ]
            },
        
            filters: {
                time: "Weekend" ,
                continent: 'Europe',
                language: ["English"],
                activities: ["Active tourism"],
                money: "€€",
            }
        },
        {
            name: "Cairo",
            mainPhoto: "https://suitcasemag.com/wp-content/uploads/2019/02/cairo-feature-image-1920x1080.jpg",
            users:[],
            descriptionPhoto: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/view-of-the-great-sphinx-pyramid-of-khafre-and-royalty-free-image-1000882754-1551818386.jpg?crop=0.753xw:1.00xh;0.0304xw,0&resize=640:*",
            location: {
                country: "Egypt",
                continent: "Africa",
            },
            images: [
                
            ],
            info: {
                shortDescription:"Cairo is chaos at its most magnificent, infuriating and beautiful. From above, the distorted roar of the muezzins' call to prayer echoes out from duelling minarets.",
                longDescription: "Below, car horns bellow tuneless symphonies amid avenues of faded 19th-century grandeur while donkey carts rattle down dusty lanes lined with colossal Fatimid and Mamluk monuments.This mega-city's constant buzz and noise is a product of its 22-or-so million inhabitants simultaneously crushing Cairo's infrastructure under their collective weight and lifting its spirits up with their exceptional humour. Your nerves will jangle, your snot will run black from the smog and touts will hound you at every turn, but it's a small price to pay to tap into the energy of the place Egyptians call Umm Ad Dunya – the Mother of the World.Blow your nose, crack a joke and look through the dirt to see the city's true colours. If you love Cairo, it will definitely love you back.",
                language: "Arabic",
                hotSpots: [
                    {
                        name: "Pyramids of Giza",
                        location: {
                            lat: 0,
                            lng: 0,
                        },
                        images: [
                            'https://lonelyplanetimages.imgix.net/a/g/hi/t/82e213048af4e026b6ba31e8f24cc923-pyramids-of-giza.jpg?fit=crop&w=1920&h=832'
                        ],
                        description: "The last remaining wonder of the ancient world; for nearly 4000 years, the extraordinary shape, impeccable geometry and sheer bulk of the Giza Pyramids have invited the obvious questions: ‘How were we built, and why?’. Centuries of research have given us parts of the answer. Built as massive tombs on the orders of the pharaohs, they were constructed by teams of workers tens-of-thousands strong. Today they stand as an awe-inspiring tribute to the might, organisation and achievements of ancient Egypt.",
                    },
                    {
                        name: "Egyptian Museum",
                        location: {
                            lat: 0,
                            lng: 0,
                        },
                        images: [
                            'https://atlas.etihad.com/wp-content/uploads/2018/02/shutterstock_482978608.jpg'
                        ],
                        description: "One of the world’s most important collections of ancient artefacts, the Egyptian Museum takes pride of place in Downtown Cairo, on the north side of Midan Tahrir. Inside the great domed, oddly pinkish building, the glittering treasures of Tutankhamun and other great pharaohs lie alongside the grave goods, mummies, jewellery, eating bowls and toys of Egyptians whose names are lost to history.To walk around the museum is to embark on an adventure through time.",
                    },
                    {
                        name: "Khan Al Khalili",
                        location: {
                            lat: 0,
                            lng: 0,
                        },
                        images: [
                            'https://lonelyplanetimages.imgix.net/a/g/hi/t/75e2b6ed30bff0bbb28c4c30577fcf06-greatest-markets.jpg?fit=crop&w=1920&h=832'
                        ],
                        description: "The skinny lanes of Khan Al Khalili are basically a medieval-style mall. This agglomeration of shops – many arranged around small courtyards – stocks everything from soap powder to semiprecious stones, not to mention tacky toy camels and alabaster pyramids. Most shops and stalls open from around 9am to well after sundown (except Friday morning and Sunday), although plenty of the souvenir vendors are open as long as there are customers, even on Sunday.",
                    }
                ]
            },
        
            filters: {
                time: "Week" ,
                continent: 'Africa',
                language: ["Arabic"],
                activities: ["Active tourism",  "Adventure"],
                money: "€€€",
            }
        },
        {
            name: "La Paz",
            mainPhoto: "https://lp-cms-production.imgix.net/2019-06/94327849.jpg?auto=format&fit=crop&vib=20&sharp=10&ixlib=react-8.6.4&w=1600&q=40&dpr=1",
            users:[],
            descriptionPhoto: "https://cdn.britannica.com/86/61286-050-605DE5FD/La-Paz-Bol.jpg",
            location: {
                country: "Bolivia",
                continent: "America",
            },
            images: [
                
            ],
            info: {
                shortDescription:"A mad carnival of jostling pedestrians, honking, diesel-spewing minivans, street marches, and cavalcades of vendors, La Paz surrounds you: you'll love it, you'll hate it, but you can't ignore it.",
                longDescription: "The city seems to reinvent itself at every turn – a jaw-dropping subway in the sky brings you from the heights of El Alto to the depths of Zona Sur in the blink of an eye. Standing hotels are remodeled at a manic pace, and new boutique hotels are springing up like rows of altiplano corn.Coming from the Bolivian countryside, you’ll be struck by the gritty city reality. It’s the urban jungle, baby: diesel, dust, and detritus; blinding altiplano sun, cold cavernous corners of Dickensian darkness. Sharp-suited businessmen flank machine-gun-toting bank guards and balaclava-camouflaged shoeshine boys. Lung-busting inclines terminate in peaceful plazas. A maze of contradictions, where cobblestones hit concrete, and Gothic spires vie with glassine hotels, La Paz amazes and appalls all who enter.",
                language: "Spanish",
                hotSpots: [
                    {
                        name: "Mercado de las Brujas",
                        location: {
                            lat: 0,
                            lng: 0,
                        },
                        images: [
                            'https://lonelyplanetimages.imgix.net/a/g/hi/t/7de3ca90e1eb9fc2149bd72ea575c4f7-mercado-de-las-brujas.jpg?fit=crop&w=1920&h=832'
                        ],
                        description: "The city’s most unusual market lies along Calles Jiménez and Linares between Sagárnaga and Av Mariscal Santa Cruz, amid lively tourist artesanías (stores selling locally handcrafted items). What is on sale isn’t witchcraft as depicted in horror films; the merchandise is herbal and folk remedies, plus a few more unorthodox ingredients intended to supplicate the various spirits of the Aymará world.",
                    },
                    {
                        name: "Museo de Textiles Andinos Bolivianos",
                        location: {
                            lat: 0,
                            lng: 0,
                        },
                        images: [
                            'https://lonelyplanetimages.imgix.net/a/g/hi/t/5706270093788cd4d5a02b5e7fd1e77c-museo-de-textiles-andinos-bolivianos.jpg?fit=crop&w=1920&h=832'
                        ],
                        description: "Fans of Bolivia’s lovely traditional weaving consider this small textile museum a must-see. Examples of the country’s finest traditional textiles (including pieces from the Cordillera Apolobamba, and the Jal’qa and Candelaria regions of the Central Highlands) are grouped by region and described in Spanish and English. The creative process is explained from fiber to finished product. The gift shop sells museum-quality originals; 90% of the sale price goes to the artists.",
                    },
                    {
                        name: "Museo Nacional del Arte",
                        location: {
                            lat: 0,
                            lng: 0,
                        },
                        images: [
                            'https://lonelyplanetimages.imgix.net/a/g/hi/t/bbb3c0d2e2a5b3cd25dfa18878ac2725-museo-nacional-del-arte.jpg?fit=crop&w=1920&h=832'
                        ],
                        description: "This colonial building was constructed in 1775 of pink sandstone and has been restored to its original grandeur, in mestizo (mixed) baroque and Andino baroque styles. In the center of a huge courtyard, surrounded by three stories of pillared corridors, is a lovely alabaster fountain. The various levels are dedicated to different eras, with an emphasis on religious themes.",
                    }
                ]
            },
        
            filters: {
                time: "+Week" ,
                continent: 'America',
                language: ["Spanish"],
                activities: ["Active tourism", "Mountain", "Adventure"],
                money: "€€€",
            }
        },
        {
            name: "Vancouver",
            mainPhoto: "https://lp-cms-production.imgix.net/2019-06/27860479.jpg?auto=format&fit=crop&vib=20&sharp=10&ixlib=react-8.6.4&w=1600&q=40&dpr=1",
            users:[],
            descriptionPhoto: "https://lp-cms-production.imgix.net/2019-06/72423ed05ba070876112620724440230-vancouver.jpg?auto=format&fit=crop&vib=20&sharp=10&ixlib=react-8.6.4&w=1600&q=40&dpr=1",
            location: {
                country: "Canada",
                continent: "America",
            },
            images: [
                
            ],
            info: {
                shortDescription:"Explorable neighborhoods, drink-and-dine delights and memorable cultural and outdoor activities framed by striking natural vistas – there's a superfluity of reasons to fall for this ocean-fringed metropolis.",
                longDescription: "Don't tell the rest of the country but Vancouver is Canada’s dine-out capital. Abandon your diet and dive right into North America's best Asian cuisine, from chatty Chinese restaurants to Vietnamese banh mi sandwich joints, or unleash your appetite on a rich smorgasbord of fresh-caught local seafood, including seasonal spot prawns and succulent wild salmon. The farm-to-table movement has also reinvigorated West Coast cuisine here – anyone for Fraser Valley lamb with a side of foraged morels? And we haven't even started on Vancouver’s thirst-slaking craft-beer scene, pouring the nation’s finest IPAs, sours and more.",
                language: "English",
                hotSpots: [
                    {
                        name: "Gastown",
                        location: {
                            lat: 0,
                            lng: 0,
                        },
                        images: [
                            'https://upload.wikimedia.org/wikipedia/commons/6/6d/8185_HDR_2012-07-16_Gastown_HDR_04_2012-07-16_Gastown_HDR.jpg'
                        ],
                        description: "The brick-paved, heritage-hugging neighborhood where 19th-century Vancouver began has seen a cool wave of bars, restaurants and boutiques opening in recent years. But rather than building afresh, these independent businesses have restored and revitalized some of the city's oldest structures. The former skid row 'old town' area is now a picturesque and popular balance of old and new; just ask the jaunty bronze statue of John 'Gassy Jack' Deighton in Maple Tree Sq, guarding the site where he built his first pub way back in 1867.",
                    },
                    {
                        name: "Stanley Park Seawall",
                        location: {
                            lat: 0,
                            lng: 0,
                        },
                        images: [
                            'https://lonelyplanetimages.imgix.net/assets/image/a482bb91718b1e834555aae78669191a744e96fe64e62c018a129a96543c2fad/0a56b98c256fbb9ff98add67e9ed8956812855f138fe51f50ac9547fcd382219.jpg?fit=crop&w=1920&h=832'
                        ],
                        description: "Built between 1917 and 1980, the 8.8km seawall trail is Vancouver's favorite outdoor hangout. Encircling the whole of Stanley Park, it offers spectacular waterfront, mountain-fringed vistas on one side and dense forest canopy on the other. You can walk the whole thing in around three blister-triggering hours or rent a bike from the Denman St operators near the park entrance to cover the route faster. But what's the rush? Slow down and slide into the natural side of life instead.",
                    },
                    {
                        name: "Grouse Mountain",
                        location: {
                            lat: 0,
                            lng: 0,
                        },
                        images: [
                            'https://www.grousemountain.com/media/W1siZiIsIjIwMTcvMDEvMzAvMjIvMzAvMDgvODNlZGU1NzYtMDIxZS00YTk3LWE1NjktYjFhNThmN2M1MGNjL2Fib3V0LWFlcmlhbC13aW50ZXIuanBnIl0sWyJwIiwidGh1bWIiLCI5NjB4NDcwXHUwMDNlIl1d?sha=a2755dfdfcf13308'
                        ],
                        description: "Vancouver's favorite winter playground is a short drive from downtown. But Grouse isn't just for goggle-eyed powder nuts. In summer, you'll have great views over the city – shimmering in the water far below – plus the perfect excuse for a flower-studded alpine hike (take the steep Grouse Grind to reach the summit if you fancy working up a sweat or hop the scenic gondola ride instead). Either way, check out the grizzly bear enclosure: it's a great way to see sharp-toothed wildlife close up without wetting yourself.",
                    }
                ]
            },
        
            filters: {
                time: "Week" ,
                continent: 'America',
                language: ["English"],
                activities: ["Active tourism", "Mountain", "Adventure"],
                money: "€€€",
            }
        },
        {
            name: "Dubai",
            mainPhoto: "https://lp-cms-production.imgix.net/2019-06/GettyImages-540039747_full.jpg?auto=format&fit=crop&vib=20&sharp=10&ixlib=react-8.6.4&w=1600&q=40&dpr=1",
            users:[],
            descriptionPhoto: "https://www.24hseries.com/uploads/files/sympa/Dubai.jpg",
            location: {
                country: "United Arab Emirates",
                continent: "Asia",
            },
            images: [
                
            ],
            info: {
                shortDescription:"Dubai is a stirring alchemy of profound traditions and ambitious futuristic vision wrapped into starkly evocative desert splendour.",
                longDescription: "It's hard not to admire Dubai for its indefatigable verve, ambition and ability to dream up and realise projects that elsewhere would never get off the drawing board. This is a superlative-craving society that has birthed audaciously high buildings and palm-shaped islands. Sci-fi concepts such as flying taxis, a lightning-fast Hyperloop train and an army of robocops are all reflections of a mindset that fearlessly embraces the future. With many more grand projects in the pipeline for World Expo 2020, it's clear that Dubai is a city firmly in charge of writing its own narrative.",
                language: "Arabic",
                hotSpots: [
                    {
                        name: "Burj Khalifa",
                        location: {
                            lat: 0,
                            lng: 0,
                        },
                        images: [
                            'https://lonelyplanetimages.imgix.net/a/g/hi/t/711ab5d6cae954be2577857d4f1512de-burj-khalifa.jpg?fit=crop&w=1920&h=832'
                        ],
                        description: "The Burj Khalifa is a stunning feat of architecture and engineering, with two observation decks on the 124th and 148th floors and a restaurant-bar on the 122nd. The world’s tallest building pierces the sky at 828m and opened in January 2010, six years after excavations began. To avoid wait times or expensive fast-track admission, book tickets online as far as 30 days in advance. Note that high humidity often cloaks Dubai in a dense haze, making views less than breathtaking.",
                    },
                    {
                        name: "Dubai Mall",
                        location: {
                            lat: 0,
                            lng: 0,
                        },
                        images: [
                            'https://lonelyplanetimages.imgix.net/a/g/hi/t/c64aecd0056fbe007aa078398782084e-dubai-mall.jpg?fit=crop&w=1920&h=832'
                        ],
                        description: "With around 1300 shops, this isn't merely the world's largest shopping mall – it’s a small city, with a giant ice rink and aquarium, a dinosaur skeleton, indoor theme parks and 150 food outlets. There’s a strong European-label presence, along with branches of the French Galeries Lafayette department store, the British toy store Hamley's and the first Bloomingdale’s outside the US.",
                    },
                    {
                        name: "Al Fahidi Historic District",
                        location: {
                            lat: 0,
                            lng: 0,
                        },
                        images: [
                            'https://lonelyplanetimages.imgix.net/a/g/hi/t/9ad9fce7560fd8bf80a68da7e5fa0b1c-al-fahidi-historic-district.jpg?fit=crop&w=1920&h=832'
                        ],
                        description: "Traffic fades to a quiet hum in the labyrinthine lanes of this nicely restored heritage area formerly known as the Bastakiya Quarter. Its narrow walking lanes are flanked by sand-coloured houses topped with wind towers, which provide natural air-conditioning. Today there are about 50 buildings containing museums, craft shops, cultural exhibits, courtyard cafes, art galleries and two boutique hotels.",
                    }
                ]
            },
        
            filters: {
                time: "Weekend" ,
                continent: 'Asia',
                language: ["Arabic"],
                activities: ["Active tourism", "Adventure"],
                money: "€€€€",
            }
        },
        {
            name: "Dominican Republic",
            mainPhoto: "https://3j0grh44ocny4a6kcn288izx-wpengine.netdna-ssl.com/wp-content/uploads/2018/05/punta-950x530.jpg",
            users:[],
            descriptionPhoto: "https://lp-cms-production.imgix.net/2019-06/a458401677874c51175952f5758ce8ef-caribbean.jpg?auto=format&fit=crop&vib=20&sharp=10&ixlib=react-8.6.4&w=1600&q=40&dpr=3",
            location: {
                country: "Caribbean",
                continent: "America",
            },
            images: [
                
            ],
            info: {
                shortDescription:"The Dominican Republic is one of the Caribbean's most geographically diverse countries, with stunning mountain scenery, desert scrublands, evocative colonial architecture and beaches galore.",
                longDescription: "The Caribbean is a joyous mosaic of islands beckoning paradise-hunters, an explosion of color, fringed by beaches and soaked in rum. It’s a lively and intoxicating profusion of people and places spread over 7000 islands (fewer than 10% are inhabited). But, for all they share, there’s also much that makes them different. Can there be a greater contrast than between bustling Barbados and its neighbor, the seemingly unchanged-since-colonial-times St Vincent? Revolutionary Cuba and its next-door banking capital, the Caymans? Or between booming British-oriented St Kitts and its sleepy, Dutch-affiliated neighbor Sint Eustatius, just across a narrow channel?",
                language: "Spanish",
                hotSpots: [
                    {
                        name: "Santo Domingo’s Zona Colonial",
                        location: {
                            lat: 0,
                            lng: 0,
                        },
                        images: [
                            'https://live.staticflickr.com/8629/28437109246_9aaba68b17_b.jpg'
                        ],
                        description: "With its cobblestone streets and beautifully restored mansions, churches and forts, many converted into evocative museums, hotels and restaurants, it’s easy to imagine the landmark quarter in Santo Domingo as the seat of Spain’s 16th-century empire. But the past and present coexist rather gracefully here: follow in the footsteps of pirates and conquistadors one moment, then next pop into a 4D movie theater or boutique shop selling designer dresses.",
                    },
                    {
                        name: "Bahía de Las Águilas",
                        location: {
                            lat: 0,
                            lng: 0,
                        },
                        images: [
                            'https://cdn.getyourguide.com/img/tour_img-2002852-146.jpg'
                        ],
                        description: "The remoteness and loneliness of the country’s most far-flung and beautiful beach adds savor and spice to the adventure of getting to Bahía de Las Águilas, a stunning 10km-long stretch of postcard-perfect sand nearly hugging Haiti in an extreme corner of the Península de Pedernales. The fact that you take a boat that weaves in and out through craggy cliffs and sea-diving pelicans to get here – and you'll only share it with a few other tourists – only adds to its allure.",
                    },
                    {
                        name: "Playa Rincón",
                        location: {
                            lat: 0,
                            lng: 0,
                        },
                        images: [
                            'https://images.visitarepublicadominicana.org/playa-rincon-samana.jpg'
                        ],
                        description: "Consistently rated one of the top beaches in the Caribbean by those in the know – people who courageously brave heatstroke and sunburn in a quest for the ideal – the 3km of pitch-perfect sands at Rincon is second in the DR only to Bahía de Las Águilas. It's large enough for every day-tripper to claim their own piece of real estate without nosy neighbors peeking over the seaweed and driftwood. A thick palm forest provides the backdrop, and fresh seafood can be served upon request.",
                    }
                ]
            },
        
            filters: {
                time: "+Week" ,
                continent: 'America',
                language: ["Spanish"],
                activities: ["Relax", "Beach", "Adventure", "Active tourism"],
                money: "€€€",
            }
        },
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
//descriptionPhoto: '',
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
