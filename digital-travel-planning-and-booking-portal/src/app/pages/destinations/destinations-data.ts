export interface CulturalInfo {
  significance: string;
  highlights: string[];
  festivals: string;
  bestSeason: string;
}

export interface Destination {
  id: number;
  name: string;
  type: string;
  duration: string;
  popularity: number;
  image: string;
  coords: string;
  summary: string;
  details?: string;
  gallery?: string[];
  itinerary: { day: number; activities: string[] }[];
  nearby: string[];
  food: string[];
  stays: string[];
  safaris?: string[];
  culturalInfo?: CulturalInfo;
}

export const DESTINATIONS: Destination[] = [
  {
    id: 1,
    name: 'Kodaikanal',
    type: 'Hill Station',
    duration: '3 days',
    popularity: 5,
    image: '/assets/kodaikanal1.jpg',
    coords: '10.2381,77.4899',
    summary: 'Lakes, waterfalls and misty viewpoints — perfect for nature lovers.',
    details:
      'Kodaikanal is often called the "Princess of Hill Stations". With misty hills and dense forests, the town has colonial charm and is ideal for hiking, boating and birdwatching. Early mornings are cool, evenings offer stunning sunsets over the lake, and you can sample home-made chocolates from roadside shops.',
    gallery: ['/assets/varkala1.jpg', '/assets/kodaikanal1.jpg', '/assets/kodaikanal3.jpg'],
    itinerary: [
      { day: 1, activities: ['Arrival & check-in', 'Bryant Park', "Coaker's Walk at sunset", "Dolphin's Nose Viewpoint"] },
      { day: 2, activities: ['Green Valley View', 'Kodaikanal Lake', 'Kurinji Andavar Temple', 'Pine Forest'] },
      { day: 3, activities: ['Pillar Rocks', 'Guna Cave', 'Poombarai Falls', 'Local markets', 'Departure'] },
    ],
    nearby: ['Poombarai', 'Berijam Lake'],
    food: ['homemade chocolates', 'Poombarai garlic (Malai Poondu)', 'fresh hill bananas', 'piping hot snacks like pakoras, bhajjis, and sweet corn'],
    stays: ['The Carlton', 'Kodai Resort', 'Hill View Hotel'],
    culturalInfo: {
      significance:
        'Kodaikanal is sacred to the Pulayar and Paliyan tribal communities who have inhabited these hills for centuries. The Kurinji Andavar Temple is devoted to Lord Murugan and celebrates the rare Kurinji flower that blooms once every twelve years, drawing pilgrims from across Tamil Nadu. British missionaries established schools here in the 1840s, leaving a colonial architectural legacy that blends with ancient Dravidian traditions.',
      highlights: [
        'Kurinji flower pilgrimage (blooms every 12 years)',
        'Paliyan tribal forest knowledge walks',
        'Colonial-era mission buildings and churches',
        'Pambar waterfalls — revered as a natural shrine',
      ],
      festivals: 'Kurinji Festival (every 12 yrs), Tamil New Year, Karthigai Deepam',
      bestSeason: 'October — March',
    },
  },
  {
    id: 2,
    name: 'Ooty',
    type: 'Hill Station',
    duration: '4 days',
    popularity: 4,
    image: '/assets/background.jpg',
    coords: '11.4064,76.6950',
    summary: 'Tea gardens, Nilgiri Mountain Railway and serene valleys.',
    details:
      'Ooty, nestled in the Nilgiris, is famous for its scenic toy train rides and sprawling tea estates. Stroll the botanical gardens, sample aromatic teas straight from the plantations and visit nearby Coonoor for more hiking trails. Winters are chilly; pack warm clothes.',
    gallery: [
      '/assets/ooty1.jpeg',
      '/assets/ooty2.jpeg',
      '/assets/ooty3.avif',
      '/assets/ooty4.jpeg',
    ],
    itinerary: [
      { day: 1, activities: ['Botanical Gardens', 'Ride on toy train'] },
      { day: 2, activities: ['Pykara Lake & falls', 'Rose Garden'] },
      { day: 3, activities: ['Doddabetta Peak trek', 'Tea estate tour'] },
      { day: 4, activities: ['Coonoor day trip', 'Local shopping'] },
    ],
    nearby: ['Coonoor', 'Emerald Lake'],
    food: ['Masala dosa', 'Homemade chocolates', 'South Indian thali'],
    stays: ['Savoy Hotel', 'Gem Park Ooty', 'Fortune Resort'],
    safaris: ["Mudumalai Tiger Reserve safari", "Dolphin's Nose viewpoint"],
    culturalInfo: {
      significance:
        'Ooty is home to the Toda people, one of the oldest indigenous tribes of South India, who have lived in the Nilgiri plateau for thousands of years. Their barrel-shaped thatch temples and embroidered shawls are iconic. The Nilgiri Mountain Railway, a UNESCO World Heritage Site since 2005, is an engineering marvel of the British era that still carries passengers through tunnels and viaducts carved into the mountains.',
      highlights: [
        'Toda tribe munds (settlements) and embroidery art',
        'UNESCO Nilgiri Mountain Railway (toy train)',
        'Doddabetta — highest peak of the Nilgiris at 2,637 m',
        'Irula tribe honey-hunting traditions',
      ],
      festivals: 'Toda Pushtimi ceremony, Ooty Summer Festival (May), Pongal',
      bestSeason: 'October — June',
    },
  },
  {
    id: 3,
    name: 'Munnar',
    type: 'Hill Station',
    duration: '5 days',
    popularity: 5,
    image: '/assets/munnar.jpg',
    coords: '10.0889,77.0595',
    summary: 'Tea estates, trekking trails and panoramic viewpoints.',
    details:
      "Munnar is a lush hill town covered in tea gardens. Perfect for wandering through emerald fields, spotting waterfalls, and enjoying cool mountain air. Don't miss the tea museum and local spice markets.",
    gallery: ['/assets/munnar1.jpeg', '/assets/munnar2.jpeg', '/assets/Munnar-18.jpg'],
    itinerary: [
      { day: 1, activities: ['Arrival and tea museum'] },
      { day: 2, activities: ['Trekking to Meesapulimala'] },
      { day: 3, activities: ['Visit Eravikulam National Park'] },
      { day: 4, activities: ['Spice plantation tour'] },
      { day: 5, activities: ['Local markets and departure'] },
    ],
    nearby: ['Chinnar Wildlife Sanctuary', 'Mattupetty Dam'],
    food: ['Kerala fish curry', 'Appam with stew', 'Local tea snacks'],
    stays: ['Chandys Windy Woods', 'The Fog Munnar', 'Munnar Tea Country Resort'],
    safaris: ['Chinnar Sanctuary jeep safari'],
    culturalInfo: {
      significance:
        'Munnar\'s tea culture dates to 1879 when British planters established the Kanan Devan Hills estate. The Muthuvan tribal community, the original inhabitants of these forests, hold deep spiritual connections to the land and practice traditional healing with medicinal plants. Eravikulam National Park is the last refuge of the critically endangered Nilgiri Tahr mountain goat, revered as a symbol of Kerala\'s wild heritage.',
      highlights: [
        'Kanan Devan Tea Museum — 150 years of estate history',
        'Muthuvan tribe forest medicine walks',
        'Nilgiri Tahr spotting in Eravikulam',
        'Meesapulimala sunrise trek (2,640 m)',
      ],
      festivals: 'Vishu (Kerala New Year), Onam harvest festival, Theyyam rituals',
      bestSeason: 'September — May',
    },
  },
  {
    id: 4,
    name: 'Alleppey',
    type: 'Backwater',
    duration: '2 days',
    popularity: 4,
    image: '/assets/Alleppey.jpeg',
    coords: '9.4981,76.3388',
    summary: 'Houseboat stays on tranquil backwaters.',
    details:
      'Alleppey is synonymous with serene backwater cruises. Drift past coconut groves, watch villagers fish and dine on freshly caught prawns. Spend a night aboard a traditional houseboat for an unforgettable experience.',
    gallery: ['/assets/Alleppey1.jpeg', '/assets/Alleppey2.jpeg', '/assets/Alleppey3.jpeg', '/assets/Alleppey4.jpeg'],
    itinerary: [
      { day: 1, activities: ['Board houseboat', 'Floating lunch', 'Sunset cruise'] },
      { day: 2, activities: ['Village walk', 'Local markets', 'Disembark'] },
    ],
    nearby: ['Kumarakom', 'Vembanad Lake'],
    food: ['Fresh seafood', 'Kerala sadya'],
    stays: ['Luxury houseboats', 'Backwater resorts'],
    culturalInfo: {
      significance:
        'Alleppey\'s backwaters are the lifeline of Kerala\'s ancient Kuttanad region — the "Rice Bowl of Kerala" — where paddy fields sit below sea level, a farming phenomenon found nowhere else in India. The legendary Nehru Trophy Boat Race, held each August on Vembanad Lake, is a spectacle of 100-oarsmen snake boats racing in formation — a tradition rooted in the 17th-century naval battles of Chempakassery kings. Coir weaving and toddy tapping are living crafts passed through generations.',
      highlights: [
        'Nehru Trophy Snake Boat Race — Kerala\'s grandest water festival',
        'Kuttanad below-sea-level rice farming',
        'Traditional kettuvallam (houseboat) craftsmanship',
        'Coir weaving villages of Marari and Pathiramanal',
      ],
      festivals: 'Nehru Trophy Boat Race (August), Onam, Attukal Pongala',
      bestSeason: 'October — March',
    },
  },
  {
    id: 5,
    name: 'Varkala',
    type: 'Beach',
    duration: '3 days',
    popularity: 4,
    image: '/assets/Varkala.jpg',
    coords: '8.7376,76.7161',
    summary: 'Cliff-side beaches with a bohemian vibe.',
    details:
      'Varkala is known for its red-cliff beach, yoga centers, and chilled-out cafes. Enjoy Ayurvedic treatments and watch the fishermen bring in their catch along the shore.',
    gallery: ['/assets/varkala1.jpg', '/assets/varkala.jpg', '/assets/varkala3.jpeg'],
    itinerary: [
      { day: 1, activities: ['Relax on Papanasam Beach', 'Sunset cliff walk'] },
      { day: 2, activities: ['Paragliding', 'Local temple visit'] },
      { day: 3, activities: ['Ayurvedic spa', 'Shopping on cliff road'] },
    ],
    nearby: ['Kappil Beach', 'Anjengo Fort'],
    food: ['Seafood shacks', 'Café culture cuisines'],
    stays: ['Cliff resorts', 'Yoga retreats'],
    culturalInfo: {
      significance:
        'Varkala\'s Papanasam Beach is one of the most sacred beaches in India, believed to cleanse the sins of devotees who bathe in its waters. The 2,000-year-old Janardhana Swamy Temple above the cliffs draws Hindu pilgrims from across South India year-round. Sree Narayana Guru, the great social reformer saint of Kerala, established his first ashram here, making Varkala a centre of spiritual equality movements that transformed caste structures across Kerala.',
      highlights: [
        'Janardhana Swamy Temple — 2,000 years old Vishnu shrine',
        'Papanasam Beach sacred ritual bathing',
        'Sree Narayana Guru ashram and social reform legacy',
        'Ayurvedic cliff-top retreats and healing traditions',
      ],
      festivals: 'Janardhana Swamy Temple Festival, Shivaratri, Onam',
      bestSeason: 'November — March',
    },
  },
  {
    id: 6,
    name: 'Coorg',
    type: 'Hill Station',
    duration: '3 days',
    popularity: 5,
    image: '/assets/coorg.jpeg',
    coords: '12.3375,75.8069',
    summary: 'Coffee plantations and misty hills.',
    details:
      'Coorg, also called Kodagu, is famous for its lush coffee estates and waterfalls. Try the spicy pork curry and take a walk through shady forest trails.',
    gallery: ['/assets/coorg1.jpeg', '/assets/coorg2.jpg'],
    itinerary: [
      { day: 1, activities: ['Abbey Falls', 'Madikeri Fort'] },
      { day: 2, activities: ['Coffee plantation tour', "Raja's Seat"] },
      { day: 3, activities: ['Talakaveri pilgrimage', 'Departure'] },
    ],
    nearby: ['Madikeri', 'Bylekuppe Tibetan Monastery'],
    food: ['Coorg pork curry', 'Bamboo shoot dishes'],
    stays: ['Plantation homestays', 'Luxury resorts'],
    culturalInfo: {
      significance:
        'Coorg is the homeland of the Kodava people — a warrior community with a proud martial heritage, who celebrate their culture through the Kail Poldu harvest festival and the Kodava Okkoota traditions. Talakaveri, the sacred origin of the Kaveri River, is one of the most venerated pilgrimage sites in South India. The largest Tibetan Buddhist settlement outside Tibet — Namdroling Monastery in Bylekuppe — adds a rich spiritual diversity unique to this landscape.',
      highlights: [
        'Talakaveri — sacred birthplace of River Kaveri',
        'Kodava warrior culture and Puttari harvest ceremony',
        'Namdroling Golden Temple — largest Tibetan monastery outside Tibet',
        'India\'s largest coffee-growing region with 250-year heritage',
      ],
      festivals: 'Kail Poldu (Kodava harvest), Kaveri Sankramana, Coorg Puttari',
      bestSeason: 'October — May',
    },
  },
  {
    id: 7,
    name: 'Pondicherry',
    type: 'Heritage',
    duration: '4 days',
    popularity: 4,
    image: '/assets/pondicherry.jpeg',
    coords: '11.9416,79.8083',
    summary: 'French colonial charm and quiet beaches.',
    details:
      'Pondicherry blends Tamil culture with French influence. Bicycle around the French Quarter, eat at bakeries, and relax along the Promenade.',
    gallery: ['/assets/pondicherry1.jpeg', '/assets/pondicherry2.webp'],
    itinerary: [
      { day: 1, activities: ['French Quarter walk', 'Promenade Beach'] },
      { day: 2, activities: ['Auroville visit', 'Sri Aurobindo Ashram'] },
      { day: 3, activities: ['Beaches and water sports'] },
      { day: 4, activities: ['Local markets', 'Departure'] },
    ],
    nearby: ['Auroville', 'Chunnambar Boat House'],
    food: ['French bakeries', 'Local Tamil cuisine'],
    stays: ['Boutique guesthouses', 'French villas'],
    culturalInfo: {
      significance:
        'Pondicherry (Puducherry) was a French colony for over 300 years until 1954, creating a unique bilingual culture where Tamil and French traditions coexist — visible in the mustard-yellow villas, wide boulevards, and French-named streets of the White Town. Sri Aurobindo Ashram and the futuristic city of Auroville (home to 3,000 people from 50 nationalities) make Puducherry a global centre for consciousness and yoga philosophy.',
      highlights: [
        'French Quarter\'s mustard villas and cobbled streets',
        'Sri Aurobindo Ashram — global spiritual centre',
        'Auroville — experimental international township',
        'Tamil Brahmin temples beside French cathedrals',
      ],
      festivals: 'Bastille Day (July 14), Pongal, Masi Magam beach festival',
      bestSeason: 'October — March',
    },
  },
  {
    id: 8,
    name: 'Hampi',
    type: 'Heritage',
    duration: '3 days',
    popularity: 5,
    image: '/assets/Hampi.jpg',
    coords: '15.3350,76.4600',
    summary: 'Ancient ruins set amidst boulder-strewn landscape.',
    details:
      'Hampi was the capital of the Vijayanagara Empire, one of the greatest kingdoms of mediaeval India. Its boulder-strewn landscape is dotted with magnificent temples, royal enclosures, and ancient market streets.',
    itinerary: [
      { day: 1, activities: ['Virupaksha Temple', 'Hampi Bazaar'] },
      { day: 2, activities: ['Royal Enclosure', 'Lotus Mahal'] },
      { day: 3, activities: ['Sunrise at Matanga Hill', 'Local crafts'] },
    ],
    nearby: ['Badami', 'Anegundi'],
    food: ['Local Karnataka thali', 'Street snacks'],
    stays: ['Heritage hotels', 'Backpacker hostels'],
    culturalInfo: {
      significance:
        'Hampi was the capital of the Vijayanagara Empire (1336–1646 CE), once the world\'s second-largest city and one of the wealthiest kingdoms in the medieval world. The Virupaksha Temple has been in continuous worship for over 1,300 years, making it one of the oldest functioning temples in India. A UNESCO World Heritage Site since 1986, Hampi\'s 500+ monuments span temples, elephant stables, royal baths, and market streets that once traded spices, gems, and silk with the Persian Gulf.',
      highlights: [
        'Virupaksha Temple — 7th century, continuously active for 1,300 years',
        'Vittala Temple\'s musical stone pillars and stone chariot',
        'Royal Enclosure with Lotus Mahal and Elephant Stables',
        'Matanga Hill sunrise — 360° view of the entire ruins complex',
      ],
      festivals: 'Hampi Utsav (November), Virupaksha Temple Chariot Festival, Shivaratri',
      bestSeason: 'October — February',
    },
  },
  {
    id: 9,
    name: 'Chennai',
    type: 'City',
    duration: '2 days',
    popularity: 3,
    image: '/assets/chennai.webp',
    coords: '13.0827,80.2707',
    summary: 'Coastal metropolis blending history and culture.',
    details:
      'Chennai, formerly Madras, is Tamil Nadu\'s capital and the cultural heartland of South India. Home to classical Carnatic music, Bharatanatyam dance, and some of the oldest Dravidian temples in the world.',
    itinerary: [
      { day: 1, activities: ['Marina Beach', 'Fort St. George'] },
      { day: 2, activities: ['Kapaleeshwarar Temple', 'Shopping at T Nagar'] },
    ],
    nearby: ['Mahabalipuram', 'Pondicherry'],
    food: ['Chettinad cuisine', 'Street dosa'],
    stays: ['Seaside hotels', 'Boutique guesthouses'],
    culturalInfo: {
      significance:
        'Chennai is the cultural capital of South India and guardian of Carnatic classical music and Bharatanatyam dance traditions. The Kapaleeshwarar Temple in Mylapore dates to the 7th century CE and is a masterpiece of Dravidian architecture. Fort St. George, built by the British East India Company in 1644, was the first English fort in India. Marina Beach — the world\'s second longest urban beach — has been the gathering place of Tamil political movements for over a century.',
      highlights: [
        'Kapaleeshwarar Temple — 7th century Pallava Dravidian architecture',
        'Fort St. George — first British fort in India (1644)',
        'Carnatic classical music sabhas of Mylapore',
        'Marina Beach — world\'s 2nd longest urban beach at 13 km',
      ],
      festivals: 'Chennai Music Season (December), Pongal, Karthigai Deepam',
      bestSeason: 'November — February',
    },
  },
  {
    id: 10,
    name: 'Kodaikanal Extended',
    type: 'Hill Station',
    duration: '5 days',
    popularity: 4,
    image: '/assets/kodaikanal1.jpg',
    coords: '10.2381,77.4899',
    summary: 'Extended package covering waterfalls and treks.',
    itinerary: [
      { day: 1, activities: ['Arrival and Lake boating'] },
      { day: 2, activities: ['Pambarai trek', 'Echo point'] },
      { day: 3, activities: ['Green Valley hike', 'Kurinji view'] },
      { day: 4, activities: ['Silver Cascade Falls', 'Bear Shola falls'] },
      { day: 5, activities: ['Coonoor trip', 'Departure'] },
    ],
    nearby: ['Pambarai', 'Kurinji Trek'],
    food: ['Local hillside cuisine', 'Fresh fruits'],
    stays: ['Budget cottages', 'Premier resorts'],
    safaris: ['Hill area jeep safari'],
    culturalInfo: {
      significance:
        'The extended Kodaikanal itinerary takes you deeper into the Palani Hills and ancient Paliyan tribal territories. The Kurinji trek follows routes used by Paliyan gatherers for centuries, and the Silver Cascade waterfall has been revered in local folklore as a place of healing. Echo Point, also known as Suicide Point\'s sister viewpoint, sits above ancient Pambarai which has prehistoric cave paintings dating to 1,500 BCE — some of the earliest evidence of human settlement in Tamil Nadu.',
      highlights: [
        'Paliyan tribal ancient forest trail routes',
        'Silver Cascade — 55 m waterfall over Palani Hills granite',
        'Kurinji flower trekking belt (sacred blooming cycle)',
        'Bear Shola Falls — named after the bears that once drank here',
      ],
      festivals: 'Kurinji Festival, Tamil Pongal, hill shrine pilgrimages',
      bestSeason: 'October — March',
    },
  },
  {
    id: 11,
    name: 'Goa Beaches',
    type: 'Beach',
    duration: '4 days',
    popularity: 5,
    image: '/assets/goa.jpeg',
    coords: '15.2993,74.1240',
    summary: 'Sun, sand and sea along the Konkan coast.',
    details:
      'Goa is India\'s smallest state and most celebrated beach destination. Portuguese colonial heritage, UNESCO-listed churches, lively beach shacks, and the vibrant Konkani culture make it uniquely Indian yet globally cosmopolitan.',
    itinerary: [
      { day: 1, activities: ['Arrival & North Goa beaches'] },
      { day: 2, activities: ['Water sports at Calangute', 'Fort Aguada'] },
      { day: 3, activities: ['South Goa relaxation', 'Dudhsagar trek'] },
      { day: 4, activities: ['Local markets', 'Departure'] },
    ],
    nearby: ['Panaji', 'Margao'],
    food: ['Goan fish curry', 'Feni cocktails'],
    stays: ['Beach huts', 'Luxury resorts'],
    culturalInfo: {
      significance:
        'Goa was a Portuguese colony for 451 years (1510–1961), creating a unique Indo-Portuguese culture unlike anywhere else in India. The Basilica of Bom Jesus (UNESCO World Heritage) holds the mortal remains of St. Francis Xavier, drawing pilgrims from across the world. Goa\'s Konkani culture blends Hindu, Catholic, and Muslim traditions in a unique syncretic festivity — evident in the famous carnival and the sacred temple of Shri Mangeshi, one of the most revered Goan Hindu shrines.',
      highlights: [
        'Basilica of Bom Jesus — UNESCO heritage, St. Francis Xavier\'s relics',
        'Konkani Indo-Portuguese fusion food and music (Dekhni dance)',
        'Dudhsagar Waterfalls — 310 m high four-tiered cascade',
        'Goa Carnival — 3-day Portuguese-heritage street festival',
      ],
      festivals: 'Goa Carnival (February), Shigmo (Holi), Feast of St. Francis Xavier',
      bestSeason: 'November — March',
    },
  },
  {
    id: 12,
    name: 'Mahabalipuram',
    type: 'Heritage',
    duration: '2 days',
    popularity: 4,
    image: '/assets/mahabalipuram.jpeg',
    coords: '12.6261,80.1951',
    summary: 'UNESCO temples and coastal rock-cut monuments.',
    details:
      'Mahabalipuram (Mamallapuram) is a 7th-century port town with extraordinary rock-cut temples and caves carved directly from natural granite boulders on the Bay of Bengal shore.',
    itinerary: [
      { day: 1, activities: ['Shore Temple', 'Five Rathas'] },
      { day: 2, activities: ["Krishna's Butter Ball", 'Departure'] },
    ],
    nearby: ['Chennai', 'Pondicherry'],
    food: ['Tamil coastal cuisine'],
    stays: ['Heritage hotels', 'Beach resorts'],
    culturalInfo: {
      significance:
        'Mahabalipuram was the principal sea port of the Pallava dynasty (7th–9th century CE), whose sculptors created some of the finest rock-cut temples in the world. The Shore Temple, built directly on the Bay of Bengal, is one of the oldest structural stone temples in South India. The site\'s "Descent of the Ganges" is the world\'s largest bas-relief (27m × 9m) carved from a single granite face, depicting 100+ figures from Hindu mythology. UNESCO declared the Group of Monuments a World Heritage Site in 1984.',
      highlights: [
        'Shore Temple — 7th century structural stone temple on the ocean',
        'Descent of the Ganges — world\'s largest bas-relief (27m × 9m)',
        'Five Rathas — 5 monolithic Pallava chariot-temples',
        'Krishna\'s Butter Ball — 250-tonne boulder balanced on a slope',
      ],
      festivals: 'Mahabalipuram Dance Festival (January), Pongal, Navarathri',
      bestSeason: 'October — March',
    },
  },
  // ── Trekking Destinations ──
  {
    id: 13,
    name: 'Kumara Parvatha',
    type: 'Trekking',
    duration: '2 days',
    popularity: 5,
    image: '/assets/kumara_parvatha.png',
    coords: '12.4500,75.7200',
    summary: 'One of the toughest treks in Karnataka through dense shola forests to a 1,712m summit.',
    details:
      'Kumara Parvatha, the second highest peak in Coorg, is a challenging two-day trek that rewards hikers with breathtaking panoramic views of the Western Ghats. The trail passes through the Pushpagiri Wildlife Sanctuary, home to diverse flora and fauna including the rare Malabar Pied Hornbill.',
    gallery: ['/assets/kumara_parvatha.png'],
    itinerary: [
      { day: 1, activities: ['Start trek from Kukke Subramanya', 'Trek to Bhattara Mane base camp', 'Overnight camping under the stars'] },
      { day: 2, activities: ['Summit push at dawn', 'Panoramic sunrise views', 'Descend via Somwarpet trail', 'Return to base'] },
    ],
    nearby: ['Kukke Subramanya Temple', 'Pushpagiri Wildlife Sanctuary'],
    food: ['Local Malnad cuisine', 'Forest honey', 'Trail snacks and energy bars'],
    stays: ['Forest camps', 'Bhattara Mane homestay'],
    culturalInfo: {
      significance:
        'Kumara Parvatha is named after Lord Subramanya (Kumara Swamy), and the trail begins at the sacred Kukke Subramanya Temple — one of the most revered snake worship temples in India. The Pushpagiri hills are part of a UNESCO World Heritage biodiversity hotspot, home to over 1,500 plant species and ancient shola grasslands that pre-date human civilisation.',
      highlights: [
        'Kukke Subramanya Temple — premier Naga (serpent) worship shrine',
        'Pushpagiri UNESCO biodiversity hotspot',
        'Shesha Parvatha ridge walk at 1,600m',
        'Ancient shola-grassland ecosystem above 1,200m',
      ],
      festivals: 'Subramanya Shashti, Naga Panchami, Kadiru Festival',
      bestSeason: 'October — February',
    },
  },
  {
    id: 14,
    name: 'Kudremukh',
    type: 'Trekking',
    duration: '2 days',
    popularity: 5,
    image: '/assets/kudremukh.png',
    coords: '13.2471,75.2536',
    summary: 'Rolling grasslands trek through one of the most biodiverse regions on Earth.',
    details:
      'Kudremukh (meaning "horse-face" in Kannada) is named after the shape of its peak. The trek through Kudremukh National Park traverses pristine shola forests, roaring streams, and emerald grasslands. It is one of the most scenic treks in the Western Ghats.',
    gallery: ['/assets/kudremukh.png'],
    itinerary: [
      { day: 1, activities: ['Drive to Mullodi village', 'Trek through grasslands', 'Camp at Ontimara base'] },
      { day: 2, activities: ['Summit trek at sunrise', 'Horse-face peak viewpoint', 'Descend and return'] },
    ],
    nearby: ['Hanuman Gundi Falls', 'Kadambi Falls'],
    food: ['Malnad-style rice meals', 'Neer dosa', 'Fresh forest berries'],
    stays: ['Forest department camps', 'Village homestays'],
    culturalInfo: {
      significance:
        'Kudremukh National Park (600 sq km) is a UNESCO World Heritage Site and one of the 34 global biodiversity hotspots. The park protects the largest stretch of tropical wet evergreen forest in Karnataka and is home to the endangered lion-tailed macaque, Malabar giant squirrel, and king cobra. The Varahi River originates here, feeding the Mani Dam that powers much of coastal Karnataka.',
      highlights: [
        'UNESCO World Heritage tropical evergreen forests',
        'Lion-tailed macaque and Malabar giant squirrel habitat',
        'Horse-face peak at 1,894m — Karnataka\'s third highest',
        'Varahi River origin point amidst cloud forests',
      ],
      festivals: 'Bisu Parba (Tulu New Year), Navaratri treks, monsoon firefly walks',
      bestSeason: 'October — February',
    },
  },
  {
    id: 15,
    name: 'Chembra Peak',
    type: 'Trekking',
    duration: '1 day',
    popularity: 4,
    image: '/assets/chembra_peak.png',
    coords: '11.5850,76.0740',
    summary: 'Famous heart-shaped lake trek in the misty mountains of Wayanad.',
    details:
      'Chembra Peak, at 2,100m, is the highest peak in Wayanad and famous for its natural heart-shaped lake halfway to the summit. The trek offers stunning views of lush valleys, tea estates, and the Nilgiri ranges, making it a bucket-list experience for every trekker.',
    gallery: ['/assets/chembra_peak.png'],
    itinerary: [
      { day: 1, activities: ['Start trek from Meppadi', 'Reach the heart-shaped lake', 'Continue to summit', 'Panoramic views of Nilgiris', 'Descend by afternoon'] },
    ],
    nearby: ['Meppadi tea estates', 'Soochipara Waterfalls'],
    food: ['Wayanad bamboo biryani', 'Kerala puttu and kadala', 'Tribal honey'],
    stays: ['Wayanad tree houses', 'Meppadi guesthouses'],
    culturalInfo: {
      significance:
        'Chembra Peak is sacred to the Paniya and Kuruma tribal communities of Wayanad, who regard the heart-shaped lake as a divine gift of the mountain spirit. The Wayanad plateau, where the trek begins, contains Edakkal Caves with Neolithic petroglyphs dating to 6,000 BCE — among the oldest evidence of prehistoric civilisation in South India. The peak stands as a sentinel between Kerala and Karnataka, offering views across two states.',
      highlights: [
        'Natural heart-shaped lake at 1,800m — an Instagram phenomenon',
        'Edakkal Caves nearby — 6,000 BCE Neolithic rock art',
        'Paniya and Kuruma tribal grassland heritage',
        'Summit views spanning Kerala and Karnataka',
      ],
      festivals: 'Wayanad Onam celebrations, Vishu, tribal harvest festivals',
      bestSeason: 'September — March',
    },
  },
  {
    id: 16,
    name: 'Agasthyarkoodam',
    type: 'Trekking',
    duration: '3 days',
    popularity: 4,
    image: '/assets/kumara_parvatha.png',
    coords: '8.6300,77.2400',
    summary: 'Sacred tribal bio-reserve peak — a permit-only trek through rare medicinal forests.',
    details:
      'Agasthyarkoodam (1,868m) is the highest peak in Kerala outside the Anamudi range and is named after Sage Agasthya, revered in Hindu mythology. The trek requires a forest department permit and passes through the Agasthyamala Biosphere Reserve, home to over 2,000 rare medicinal plants and the Kani tribe, one of the oldest tribal communities in India.',
    gallery: ['/assets/kumara_parvatha.png'],
    itinerary: [
      { day: 1, activities: ['Permit check at Bonacaud estate', 'Trek to Athirumala camp', 'Forest camping'] },
      { day: 2, activities: ['Trek through medicinal plant forests', 'Summit Agasthyarkoodam', 'Camp near summit'] },
      { day: 3, activities: ['Sunrise at summit', 'Descend to base', 'Return to Thiruvananthapuram'] },
    ],
    nearby: ['Neyyar Dam', 'Ponmudi hill station'],
    food: ['Traditional Kerala meals', 'Wild jackfruit', 'Forest tubers'],
    stays: ['Forest department campsites', 'Bonacaud estate'],
    culturalInfo: {
      significance:
        'Agasthyarkoodam is considered the abode of Sage Agasthya, who is revered as the father of Tamil literature and traditional Siddha medicine. The Kani tribe, who inhabit these forests, are the custodians of \'Arogyapaacha\' — a rare plant whose anti-fatigue properties led to one of India\'s first traditional knowledge patent battles. The Agasthyamala Biosphere Reserve is a UNESCO designation, protecting over 2,000 medicinal plant species.',
      highlights: [
        'Sage Agasthya\'s mythological hermitage at the summit',
        'Kani tribe medicinal plant knowledge heritage',
        'Arogyapaacha — the "wonder plant" of traditional medicine',
        'UNESCO Agasthyamala Biosphere Reserve',
      ],
      festivals: 'Agasthya Jayanti pilgrimage, Pongal, tribal gathering season',
      bestSeason: 'January — March (permit season)',
    },
  },
  {
    id: 17,
    name: 'Tadiyandamol',
    type: 'Trekking',
    duration: '1 day',
    popularity: 4,
    image: '/assets/kudremukh.png',
    coords: '12.2600,75.7400',
    summary: 'Kodagu\'s highest peak — a beginner-friendly grassland trek with stunning views.',
    details:
      'Tadiyandamol (1,748m) is the highest peak in Coorg (Kodagu) and one of the most popular treks in Karnataka. The trail winds through coffee estates, dense forests, and open grasslands, culminating in 360-degree views of the Western Ghats. Suitable for beginners and families.',
    gallery: ['/assets/kudremukh.png'],
    itinerary: [
      { day: 1, activities: ['Drive to Nalaknad Palace trailhead', 'Trek through coffee estate', 'Grassland section to summit', '360° panoramic views', 'Descend by evening'] },
    ],
    nearby: ['Nalaknad Palace', 'Abbey Falls', 'Iruppu Falls'],
    food: ['Kodava pork curry', 'Akki roti', 'Fresh estate coffee'],
    stays: ['Coorg plantation homestays', 'Madikeri hotels'],
    culturalInfo: {
      significance:
        'Tadiyandamol sits in the heart of Kodava territory, and the trail passes by the 19th century Nalaknad Palace, a hunting lodge of the Kodava kings. The Kodava people are a fiercely independent warrior community with unique customs — they are one of the few communities in India allowed to carry arms without a license. The peak\'s grasslands are traditional cattle-grazing grounds of the Kodava Heggade clan.',
      highlights: [
        'Nalaknad Palace — 19th century Kodava royal hunting lodge',
        'Kodava warrior heritage and traditional customs',
        'Beginner-friendly summit at 1,748m',
        '360° Western Ghats views from summit grasslands',
      ],
      festivals: 'Kail Poldu, Cauvery Sankramana, Kodava Hockey Festival',
      bestSeason: 'October — March',
    },
  },
  // ── Additional City Destinations ──
  {
    id: 18,
    name: 'Kochi',
    type: 'City',
    duration: '3 days',
    popularity: 5,
    image: '/assets/kochi.png',
    coords: '9.9312,76.2673',
    summary: 'Queen of the Arabian Sea — spice port blending Portuguese, Dutch, and Indian heritage.',
    details:
      'Kochi (Cochin) is Kerala\'s cosmopolitan port city and the gateway to the backwaters. Fort Kochi\'s cobbled streets reveal layers of Portuguese, Dutch, British, and Jewish heritage alongside vibrant Chinese fishing nets, spice markets, and the famous Kochi-Muziris Biennale — Asia\'s largest contemporary art festival.',
    gallery: ['/assets/kochi.png'],
    itinerary: [
      { day: 1, activities: ['Fort Kochi walk', 'Chinese fishing nets at sunset', 'Santa Cruz Basilica', 'Jew Town and Paradesi Synagogue'] },
      { day: 2, activities: ['Mattancherry Palace', 'Spice market tour', 'Kathakali performance', 'Marine Drive promenade'] },
      { day: 3, activities: ['Cherai Beach excursion', 'Hill Palace Museum', 'Local seafood lunch', 'Departure'] },
    ],
    nearby: ['Cherai Beach', 'Vypeen Island', 'Munnar (130 km)'],
    food: ['Kerala fish curry', 'Appam and stew', 'Fresh seafood at Fort Kochi'],
    stays: ['Heritage boutique hotels', 'Fort Kochi homestays', 'Waterfront resorts'],
    culturalInfo: {
      significance:
        'Kochi has been a spice trading port for over 600 years, attracting Arab traders, Chinese merchants, Portuguese colonisers, Dutch administrators, and the British. The Paradesi Synagogue (1568) is the oldest active synagogue in the Commonwealth. Kathakali, Kerala\'s iconic dance-drama, finds its urban home here, with nightly performances preserving this 400-year-old art form.',
      highlights: [
        'Chinese fishing nets — 14th century Kublai Khan-era cantilever design',
        'Paradesi Synagogue — oldest active synagogue in the Commonwealth (1568)',
        'Kochi-Muziris Biennale — Asia\'s largest art festival',
        'Mattancherry Palace — Portuguese-gifted murals of Ramayana scenes',
      ],
      festivals: 'Kochi-Muziris Biennale (Dec–Mar), Onam, Cochin Carnival (New Year)',
      bestSeason: 'October — March',
    },
  },
  {
    id: 19,
    name: 'Vishakhapatnam',
    type: 'City',
    duration: '3 days',
    popularity: 4,
    image: '/assets/vishakhapatnam.png',
    coords: '17.6868,83.2185',
    summary: 'City of Destiny — golden beaches, submarine museum, and the valley of tribes.',
    details:
      'Vishakhapatnam (Vizag), perched between the Eastern Ghats and the Bay of Bengal, is Andhra Pradesh\'s crown jewel. From the INS Kurusura submarine museum to the breathtaking Araku Valley tribal region, Vizag blends naval heritage, tribal culture, and stunning coastal landscapes.',
    gallery: ['/assets/vishakhapatnam.png'],
    itinerary: [
      { day: 1, activities: ['Ramakrishna Beach', 'INS Kurusura Submarine Museum', 'Kailasagiri hilltop', 'Sunset at Dolphin\'s Nose'] },
      { day: 2, activities: ['Araku Valley day trip', 'Borra Caves', 'Tribal museum', 'Coffee plantation visit'] },
      { day: 3, activities: ['Simhachalam Temple', 'Yarada Beach', 'Naval shipyard view', 'Departure'] },
    ],
    nearby: ['Araku Valley', 'Borra Caves', 'Lambasingi (Andhra\'s Kashmir)'],
    food: ['Andhra biryani', 'Bamboo chicken', 'Araku Valley coffee', 'Seafood platters'],
    stays: ['Beachfront hotels', 'Araku Valley resorts', 'City boutique hotels'],
    culturalInfo: {
      significance:
        'Vishakhapatnam is the headquarters of the Indian Navy\'s Eastern Command and home to INS Kurusura — the first submarine museum in South Asia. Araku Valley, accessible by a scenic train ride through 58 tunnels, is home to the Bodo Koraput tribal communities who cultivate some of India\'s finest organic coffee. Simhachalam Temple, a 11th-century Chola-era shrine, is one of the 32 most sacred Vaishnavite temples in India.',
      highlights: [
        'INS Kurusura — South Asia\'s first submarine museum',
        'Araku Valley tribal coffee estates and 58-tunnel train ride',
        'Borra Caves — 150 million year old limestone formations',
        'Simhachalam Temple — 11th century Vaishnavite shrine',
      ],
      festivals: 'Vizag Navy Day, Sankranti, Araku Bamboo Festival',
      bestSeason: 'October — March',
    },
  },
  {
    id: 20,
    name: 'Mangalore',
    type: 'City',
    duration: '2 days',
    popularity: 3,
    image: '/assets/mangalore.png',
    coords: '12.9141,74.8560',
    summary: 'Coastal Karnataka gem — Dakshina Kannada temples, Tulu culture, and pristine beaches.',
    details:
      'Mangalore (Mangaluru) is a laid-back coastal city where the Netravathi and Gurpur rivers meet the Arabian Sea. Known for its unique Tulu culture, Beary Muslim heritage, stunning Basel Mission tile-roofed architecture, and some of the best seafood in India.',
    gallery: ['/assets/mangalore.png'],
    itinerary: [
      { day: 1, activities: ['Kadri Manjunath Temple', 'St. Aloysius Chapel', 'Panambur Beach', 'Light House Hill Garden'] },
      { day: 2, activities: ['Pilikula Nisargadhama', 'Mangaladevi Temple', 'Central Market seafood', 'Departure'] },
    ],
    nearby: ['Udupi (60 km)', 'Dharmasthala', 'Murdeshwar'],
    food: ['Mangalorean fish curry', 'Neer dosa', 'Kori rotti', 'Goli baje'],
    stays: ['Beach resorts', 'City hotels', 'Heritage bungalows'],
    culturalInfo: {
      significance:
        'Mangalore has been a maritime trade hub since at least the 7th century, when Arab traders brought Islam to the Malabar coast. The city\'s Kadri Manjunath Temple houses one of the oldest bronze statues of Lokeshwara (10th century). St. Aloysius Chapel features stunning Italian frescoes by Moscheni. The Tulu-speaking community\'s Yakshagana dance-drama is a 500-year-old theatrical tradition unique to coastal Karnataka.',
      highlights: [
        'Kadri Manjunath Temple — 10th century Lokeshwara bronze',
        'St. Aloysius Chapel — Italian Renaissance frescoes in India',
        'Yakshagana — 500-year-old Tulu theatrical tradition',
        'Basel Mission tile architecture — unique to colonial Mangalore',
      ],
      festivals: 'Mangaluru Dasara, Bisu Parba (Tulu New Year), Yakshagana season',
      bestSeason: 'October — May',
    },
  },
  {
    id: 21,
    name: 'Mysuru',
    type: 'City',
    duration: '3 days',
    popularity: 5,
    image: '/assets/mysuru.png',
    coords: '12.2958,76.6394',
    summary: 'City of Palaces — royal heritage, silk markets, and Chamundi Hills sunset.',
    details:
      'Mysuru (Mysore) is the cultural capital of Karnataka, famous for its resplendent Mysore Palace, which lights up with 97,000 bulbs every Sunday. The city preserves the Wadiyar royal legacy through its vibrant Dasara festival, silk weaving traditions, and yoga heritage that draws practitioners from around the world.',
    gallery: ['/assets/mysuru.png'],
    itinerary: [
      { day: 1, activities: ['Mysore Palace tour', 'Devaraja Market', 'St. Philomena\'s Cathedral', 'Palace illumination at 7 PM'] },
      { day: 2, activities: ['Chamundi Hills sunrise', 'Nandi Bull statue', 'Brindavan Gardens', 'Silk factory visit'] },
      { day: 3, activities: ['Srirangapatna (Tipu Sultan\'s capital)', 'Ranganathaswamy Temple', 'Mysore pak tasting', 'Departure'] },
    ],
    nearby: ['Srirangapatna', 'Ranganathittu Bird Sanctuary', 'Coorg (120 km)'],
    food: ['Mysore pak', 'Mysore masala dosa', 'Ragi mudde', 'Filter coffee'],
    stays: ['Royal heritage hotels', 'Boutique properties', 'Palace-view hotels'],
    culturalInfo: {
      significance:
        'Mysuru was the seat of the Wadiyar dynasty for over 500 years, and the Mysore Palace (Amba Vilas) is the second most visited monument in India after the Taj Mahal. The Mysuru Dasara festival, celebrated for 10 days in October, features a grand procession of a golden howdah-mounted elephant — a tradition dating to the 15th century. Mysuru is the birthplace of Ashtanga Yoga, now practiced globally, and is India\'s second cleanest city.',
      highlights: [
        'Mysore Palace — India\'s 2nd most visited monument, 97,000-light spectacle',
        'Dasara festival — 15th century golden howdah elephant procession',
        'Birthplace of Ashtanga Yoga (Pattabhi Jois legacy)',
        'Chamundi Hills — 1,000-step climb to 12th century Chamundeshwari Temple',
      ],
      festivals: 'Mysuru Dasara (October), Vairamudi festival, Ugadi',
      bestSeason: 'October — March',
    },
  },
];
