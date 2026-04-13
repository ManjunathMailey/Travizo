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
  moodTags: string[];
}

export const DESTINATIONS: Destination[] = [
  {
    id: 1,
    name: 'Kodaikanal',
    type: 'Hill Station',
    duration: '3 days',
    popularity: 5,
    image: '/assets/kodaikanal14.jpg',
    coords: '10.2381,77.4899',
    summary: 'Lakes, waterfalls and misty viewpoints — perfect for nature lovers.',
    details:
      'Kodaikanal is often called the "Princess of Hill Stations". With misty hills and dense forests, the town has colonial charm and is ideal for hiking, boating and birdwatching. Early mornings are cool, evenings offer stunning sunsets over the lake, and you can sample home-made chocolates from roadside shops.',
    gallery: ['/assets/Kodaikanal11.jpg', '/assets/Kodaikanal12.jpg', '/assets/Kodaikanal3.jpg'],
    itinerary: [
      { day: 1, activities: ['Arrival & check-in', 'Bryant Park', "Coaker's Walk at sunset", "Dolphin's Nose Viewpoint"] },
      { day: 2, activities: ['Green Valley View', 'Kodaikanal Lake', 'Kurinji Andavar Temple', 'Pine Forest'] },
      { day: 3, activities: ['Pillar Rocks', 'Guna Cave', 'Poombarai Falls', 'Local markets', 'Departure'] },
    ],
    nearby: ['Poombarai', 'Berijam Lake'],
    food: ['homemade chocolates', 'Poombarai garlic (Malai Poondu)', 'fresh hill bananas', 'piping hot snacks like pakoras, bhajjis, and sweet corn'],
    stays: ['The Carlton', 'Kodai Resort', 'Hill View Hotel'],
    moodTags: ['serene', 'hearts'],
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
    image: '/assets/Kodaikanal11.jpg',
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
    moodTags: ['serene', 'hearts', 'adrenaline'],
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
    moodTags: ['serene', 'hearts', 'adrenaline'],
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
    moodTags: ['serene', 'hearts'],
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
    moodTags: ['tropical', 'serene', 'soul'],
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
    moodTags: ['serene', 'adrenaline', 'soul'],
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
    moodTags: ['hearts', 'serene', 'tropical', 'urban'],
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
    moodTags: ['urban', 'soul', 'adrenaline'],
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
    moodTags: ['urban', 'soul'],
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
    moodTags: ['tropical', 'hearts', 'adrenaline', 'urban'],
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
    moodTags: ['urban', 'soul', 'tropical'],
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
    moodTags: ['adrenaline', 'soul'],
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
    moodTags: ['adrenaline', 'serene'],
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
    moodTags: ['adrenaline', 'hearts'],
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
    moodTags: ['adrenaline', 'soul'],
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
    moodTags: ['adrenaline', 'serene'],
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
    moodTags: ['urban', 'hearts', 'tropical'],
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
    image: '/assets/vishakhapatnam1.jpg',
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
    moodTags: ['urban', 'tropical', 'adrenaline'],
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
    moodTags: ['urban', 'tropical', 'serene'],
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
    type: 'Heritage',
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
    moodTags: ['urban', 'hearts', 'soul'],
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

  /* ═══════════════════════════════════════════════════
     NORTH INDIA DESTINATIONS
  ═══════════════════════════════════════════════════ */
  {
    id: 22,
    name: 'Manali',
    type: 'Hill Station',
    duration: '5 days',
    popularity: 5,
    image: '/assets/manali1.jpg',
    coords: '32.2396,77.1887',
    summary: 'Snow-capped Himalayas, adventure sports, and the Rohtang Pass — Himachal\'s crown jewel.',
    details:
      'Manali sits at 2,050 m in the Beas River valley and is the gateway to Lahaul-Spiti and Leh. Known for its apple orchards, thick deodar forests, and adrenaline-pumping adventure sports including skiing, paragliding, and river rafting, Manali is equally loved for its Old Manali hippie cafés and the ancient Hidimba Devi Temple.',
    gallery: [
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80',
      'https://images.unsplash.com/photo-1585232350483-f9b99ee90ff7?w=800&q=80',
    ],
    itinerary: [
      { day: 1, activities: ['Arrival', 'Mall Road stroll', 'Hadimba Devi Temple', 'Old Manali cafés'] },
      { day: 2, activities: ['Rohtang Pass / Solang Valley', 'Snow activities', 'Beas Kund viewpoint'] },
      { day: 3, activities: ['Naggar Castle', 'Nicholas Roerich Art Gallery', 'Jana Waterfall'] },
      { day: 4, activities: ['Kasol day trip', 'Parvati Valley walk', 'Riverside camping'] },
      { day: 5, activities: ['Vashisht Hot Springs', 'Local market shopping', 'Departure'] },
    ],
    nearby: ['Rohtang Pass', 'Solang Valley', 'Kasol', 'Naggar'],
    food: ['Sidu (local bread)', 'Aktori (pancakes)', 'Trout fish curry', 'Chha gosht', 'Apple jam'],
    stays: ['Johnson Hotel', 'The Himalayan', 'Zostel Manali', 'Snowflake Cottage'],
    moodTags: ['adrenaline', 'serene', 'hearts'],
    culturalInfo: {
      significance:
        'Manali is named after Manu, the Hindu law-giver who is said to have landed here after the great flood. The 1,000-year-old Hadimba Devi Temple, built over a cave, is one of the most photographed wooden temples in India. The valley is home to the Kullu-Manali region\'s Dussehra — a week-long festival unlike anywhere else in India, declared of national importance.',
      highlights: [
        'Hadimba Devi Temple — 1,000-year-old cedar wood shrine',
        'Rohtang Pass — gateway to Lahaul-Spiti at 3,978 m',
        'Kullu Dussehra — National Importance Festival',
        'Paragliding, skiing, and river rafting hub',
      ],
      festivals: 'Kullu Dussehra (October), Hadimba Navaratri, Doongri Forest Festival',
      bestSeason: 'March — June, October — November',
    },
  },
  {
    id: 23,
    name: 'Shimla',
    type: 'Hill Station',
    duration: '4 days',
    popularity: 5,
    image: '/assets/Shimla1.jpg',
    coords: '31.1048,77.1734',
    summary: 'The former summer capital of British India — colonial charm, toy trains, and snowy ridges.',
    details:
      'Shimla, perched at 2,200 m, was the summer capital of British India and today retains its Victorian grandeur along The Ridge and Mall Road. The Kalka-Shimla UNESCO Heritage toy train is one of the most scenic rail journeys in Asia, winding through 102 tunnels and 864 bridges.',
    gallery: [
      'https://images.unsplash.com/photo-1597502993-5e7cc3e26aba?w=800&q=80',
    ],
    itinerary: [
      { day: 1, activities: ['Arrive by Toy Train from Kalka', 'Mall Road walk', 'The Ridge', 'Christ Church'] },
      { day: 2, activities: ['Jakhu Temple (Hanuman shrine at 2,455 m)', 'Scandal Point', 'Viceregal Lodge', 'Gaiety Theatre'] },
      { day: 3, activities: ['Kufri day trip', 'Fun World', 'Green Valley', 'Horse riding'] },
      { day: 4, activities: ['Chail (cricket ground at world\'s highest altitude)', 'Kali Mata Temple', 'Departure'] },
    ],
    nearby: ['Kufri', 'Chail', 'Naldehra', 'Narkanda'],
    food: ['Siddu', 'Babru (kachori variant)', 'Madra (chickpea curry)', 'Himachali dham feast', 'Rhododendron juice'],
    stays: ['Wildflower Hall', 'Hotel Cecil', 'Oberoi Clarke\'s', 'HPTDC Holidays'],
    moodTags: ['serene', 'hearts'],
    culturalInfo: {
      significance:
        'Shimla served as the summer capital of British India from 1864 to 1939, and the Viceregal Lodge hosted pivotal meetings of Indian independence. The Kalka-Shimla Railway, added to UNESCO\'s Darjeeling Mountain Railways category in 2008, is an engineering marvel. Jakhu Temple atop Shimla\'s highest peak is one of the oldest Hanuman shrines in the Himalayas.',
      highlights: [
        'Kalka-Shimla UNESCO World Heritage toy train',
        'Viceregal Lodge — site of Indian independence negotiations',
        'Jakhu Temple — Hanuman shrine at 2,455 m',
        'Chail Cricket Ground — world\'s highest altitude cricket ground',
      ],
      festivals: 'Shimla Summer Festival (June), Ice Skating Carnival, Dussehra',
      bestSeason: 'March — June, December — January (snow)',
    },
  },
  {
    id: 24,
    name: 'Jaipur',
    type: 'Heritage',
    duration: '3 days',
    popularity: 5,
    image: '/assets/jaipur1.jpg',
    coords: '26.9124,75.7873',
    summary: 'The Pink City — Amber Fort, Hawa Mahal, and Rajasthani royalty at every turn.',
    details:
      'Jaipur, founded in 1727 by Maharaja Jai Singh II, is India\'s first planned city and the jewel of the Golden Triangle. The city\'s rose-painted old quarter, magnificent Amber Fort, whimsical Hawa Mahal (Palace of Winds), and vibrant bazaars make it one of India\'s most photographed destinations.',
    gallery: [
      'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&q=80',
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80',
    ],
    itinerary: [
      { day: 1, activities: ['Amber Fort elephant ride', 'Jaigarh Fort', 'Nahargarh Fort sunset', 'Chokhi Dhani dinner'] },
      { day: 2, activities: ['City Palace', 'Jantar Mantar (UNESCO)', 'Hawa Mahal', 'Johari Bazaar gems & jewellery'] },
      { day: 3, activities: ['Birla Mandir', 'Albert Hall Museum', 'Block print workshop', 'Departure'] },
    ],
    nearby: ['Amer', 'Abhaneri Step Well', 'Sanganer (block printing)'],
    food: ['Dal baati churma', 'Laal maas', 'Ghewar', 'Pyaaz kachori', 'Mawa kachori'],
    stays: ['Rambagh Palace', 'Samode Haveli', 'ITC Rajputana', 'Zostel Jaipur'],
    moodTags: ['urban', 'hearts', 'adrenaline'],
    culturalInfo: {
      significance:
        'Jaipur was founded by Jai Singh II, an astronomer-king who built Jantar Mantar — the world\'s largest stone observatory, now a UNESCO World Heritage Site. The Amber Fort, begun in 1592, is a masterpiece of Rajput and Mughal architecture. Jaipur\'s gem-cutting and block-printing industries are living crafts traditions over 300 years old.',
      highlights: [
        'Amber Fort — 16th century Rajput-Mughal masterpiece',
        'Jantar Mantar — UNESCO World Heritage stone observatory',
        'Hawa Mahal — 953-windowed Palace of Winds (1799)',
        'Johari Bazaar — India\'s largest gem & jewellery market',
      ],
      festivals: 'Jaipur Literature Festival (January), Teej, Gangaur, Diwali mela',
      bestSeason: 'October — March',
    },
  },
  {
    id: 25,
    name: 'Varanasi',
    type: 'Heritage',
    duration: '3 days',
    popularity: 5,
    image: '/assets/Varanasi1.jpg',
    coords: '25.3176,82.9739',
    summary: 'The oldest living city on Earth — sacred Ganga ghats, evening aarti, and ancient temples.',
    details:
      'Varanasi (Kashi) is one of the world\'s oldest continuously inhabited cities, dating back over 3,000 years. Situated on the sacred Ganges, its 84 ghats are the focal point of Hindu spiritual life. Mark Twain famously said, "Banaras is older than history, older than tradition, older even than legend, and looks twice as old as all of them put together."',
    gallery: [
      'https://images.unsplash.com/photo-1561361058-c24e017b9c93?w=800&q=80',
    ],
    itinerary: [
      { day: 1, activities: ['Sunrise boat ride on Ganges', 'Dashashwamedh Ghat morning aarti', 'Kashi Vishwanath Temple', 'Banaras brocade workshop'] },
      { day: 2, activities: ['Sarnath day trip (Buddha\'s first sermon)', 'Dhamek Stupa', 'Sarnath Museum', 'Evening Ganga Aarti ceremony'] },
      { day: 3, activities: ['Ramnagar Fort', 'Tulsi Manas Temple', 'Silk weaving quarter', 'Departure'] },
    ],
    nearby: ['Sarnath', 'Ramnagar Fort', 'Chunar Fort'],
    food: ['Kachori sabzi', 'Banarasi paan', 'Malaiyyo (winter dessert)', 'Tamatar chaat', 'Banarasi silk chaat market'],
    stays: ['BrijRama Palace', 'Nadesar Palace', 'Guleria Kothi', 'Zostel Varanasi'],
    moodTags: ['soul', 'urban'],
    culturalInfo: {
      significance:
        'Varanasi is the holiest city in Hinduism — dying here is believed to grant moksha (liberation). The city has been a centre of Sanskrit learning and Banarasi silk weaving for over 2,000 years. Lord Buddha delivered his first sermon at nearby Sarnath, making Varanasi sacred to both Hindus and Buddhists. The Ganga Aarti at Dashashwamedh Ghat, conducted every evening, draws thousands of pilgrims and tourists.',
      highlights: [
        'Ganga Aarti — nightly fire ceremony at Dashashwamedh Ghat',
        'Kashi Vishwanath Temple — one of 12 sacred Jyotirlingas',
        'Sarnath — site of Buddha\'s first sermon (5th century BCE)',
        'Banarasi silk — UNESCO Intangible Cultural Heritage weaving',
      ],
      festivals: 'Dev Deepawali (Kartik Purnima), Maha Shivaratri, Ganga Mahotsav',
      bestSeason: 'October — March',
    },
  },
  {
    id: 26,
    name: 'Agra',
    type: 'Heritage',
    duration: '2 days',
    popularity: 5,
    image: '/assets/Agra1.jpg',
    coords: '27.1767,78.0081',
    summary: 'Home of the Taj Mahal — the world\'s greatest monument to love and Mughal grandeur.',
    details:
      'Agra was the capital of the Mughal Empire under Akbar, Jahangir, and Shah Jahan. The city\'s three UNESCO World Heritage Sites — Taj Mahal, Agra Fort, and Fatehpur Sikri — make it an essential stop on any India itinerary. The Taj Mahal at sunrise is widely considered the most breathtaking view in the world.',
    gallery: [
      'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80',
    ],
    itinerary: [
      { day: 1, activities: ['Taj Mahal at sunrise', 'Agra Fort (Red Fort)', 'Mehtab Bagh sunset view of Taj', 'Kinari Bazaar'] },
      { day: 2, activities: ['Fatehpur Sikri (abandoned Mughal capital)', 'Jama Masjid', 'Marble inlay workshop', 'Departure'] },
    ],
    nearby: ['Fatehpur Sikri', 'Mathura', 'Vrindavan', 'Bharatpur Bird Sanctuary'],
    food: ['Petha (white pumpkin sweet)', 'Bedai poori', 'Mughal biryani', 'Dalmoth namkeen', 'Agra ka gazak'],
    stays: ['Oberoi Amarvilas', 'ITC Mughal', 'Trident Agra', 'Crystal Sarovar Premiere'],
    moodTags: ['hearts', 'urban'],
    culturalInfo: {
      significance:
        'The Taj Mahal, commissioned by Emperor Shah Jahan in 1632 as a mausoleum for his wife Mumtaz Mahal, took 22 years and 20,000 artisans to build. It is India\'s most visited UNESCO World Heritage Site. Agra Fort was Akbar\'s administrative capital and was the site of Shah Jahan\'s imprisonment by his son Aurangzeb.',
      highlights: [
        'Taj Mahal — UNESCO site, one of the New Seven Wonders',
        'Agra Fort — Akbar\'s 16th century red sandstone citadel',
        'Fatehpur Sikri — Akbar\'s abandoned capital (1569)',
        'Marble pietra dura inlay — a 400-year-old Mughal craft',
      ],
      festivals: 'Taj Mahotsav (February), Eid celebrations, Diwali mela',
      bestSeason: 'October — March',
    },
  },
  {
    id: 27,
    name: 'Leh Ladakh',
    type: 'Trekking',
    duration: '7 days',
    popularity: 5,
    image: '/assets/Leh Ladakh1.jpg',
    coords: '34.1526,77.5771',
    summary: 'The roof of the world — Pangong Lake, ancient monasteries, and high-altitude desert valleys.',
    details:
      'Leh-Ladakh, at 3,500 m, is India\'s last frontier — a high-altitude desert where Buddhist monasteries perch above turquoise lakes and stark mountain passes touch the sky. The Khardung La Pass (5,359 m) is one of the world\'s highest motorable roads. Pangong Tso, Nubra Valley, and Zanskar River are bucket-list experiences.',
    gallery: [
      'https://images.unsplash.com/photo-1551524559-8af4e6624178?w=800&q=80',
    ],
    itinerary: [
      { day: 1, activities: ['Arrival in Leh — acclimatisation day', 'Leh Market', 'Shanti Stupa'] },
      { day: 2, activities: ['Hemis Monastery', 'Thiksey Monastery', 'Rancho School (3 Idiots location)'] },
      { day: 3, activities: ['Khardung La Pass (5,359 m)', 'Nubra Valley', 'Bactrian double-hump camel safari', 'Diskit Monastery'] },
      { day: 4, activities: ['Return to Leh via Shyok Valley', 'Indus-Zanskar confluence', 'Magnetic Hill'] },
      { day: 5, activities: ['Pangong Tso Lake', 'Sunrise & sunset at the lake', 'Camping by the shore'] },
      { day: 6, activities: ['Chang La Pass', 'Return to Leh', 'Local market handcrafts'] },
      { day: 7, activities: ['Leh Palace', 'Leh Bazaar shopping', 'Departure'] },
    ],
    nearby: ['Nubra Valley', 'Pangong Lake', 'Tso Moriri', 'Zanskar Valley'],
    food: ['Thukpa (noodle soup)', 'Momos', 'Tsampa (roasted barley)', 'Butter tea', 'Skyu (stew)'],
    stays: ['The Grand Dragon', 'Stok Palace Heritage Hotel', 'Pangong Lake Camps', 'Zostel Leh'],
    moodTags: ['adrenaline', 'serene', 'soul'],
    culturalInfo: {
      significance:
        'Ladakh was an independent Buddhist kingdom for over 900 years and was annexed by the Dogra Kingdom in 1834. Its 500+ monasteries are repositories of Tibetan Buddhist art, manuscripts, and living traditions. Hemis Monastery, founded in 1630, contains some of the world\'s most valuable Tibetan Buddhist artefacts. The Hemis Festival features rare cham (mask) dances in honour of Guru Padmasambhava.',
      highlights: [
        'Pangong Tso — high-altitude lake spanning India and Tibet',
        'Khardung La — one of the world\'s highest motorable roads',
        'Hemis Monastery — guardian of Tibetan Buddhist heritage',
        'Nubra Valley — double-hump Bactrian camel safari in cold desert',
      ],
      festivals: 'Hemis Festival (June), Losar (Ladakhi New Year), Sindhu Darshan',
      bestSeason: 'June — September',
    },
  },
  {
    id: 28,
    name: 'Kashmir',
    type: 'Hill Station',
    duration: '5 days',
    popularity: 5,
    image: '/assets/Kashmir1.jpg',
    coords: '34.0837,74.7973',
    summary: 'Paradise on Earth — Dal Lake houseboats, Mughal gardens, and saffron meadows.',
    details:
      'Kashmir Valley has been called "Paradise on Earth" for centuries. Srinagar\'s Dal Lake with its iconic shikaras and ornate houseboats, the Mughal gardens of Shalimar and Nishat, the meadows of Gulmarg and Pahalgam, and the saffron fields of Pampore create an experience unlike anywhere else in India.',
    gallery: [
      'https://images.unsplash.com/photo-1620458248867-3e9dd5e5f0b9?w=800&q=80',
    ],
    itinerary: [
      { day: 1, activities: ['Arrive Srinagar', 'Dal Lake shikara ride', 'Floating vegetable market', 'Houseboat check-in'] },
      { day: 2, activities: ['Nishat Bagh', 'Shalimar Bagh', 'Pari Mahal', 'Hazratbal Shrine'] },
      { day: 3, activities: ['Gulmarg Gondola (world\'s highest cable car)', 'Snow activities', 'Alpine meadows walk'] },
      { day: 4, activities: ['Pahalgam', 'Betaab Valley', 'Aru Valley', 'Lidder River rafting'] },
      { day: 5, activities: ['Shankaracharya Temple', 'Pampore saffron fields', 'Kashmiri craft market', 'Departure'] },
    ],
    nearby: ['Gulmarg', 'Pahalgam', 'Sonamarg', 'Yusmarg'],
    food: ['Rogan josh', 'Yakhni', 'Haak (saag)', 'Dum aloo Kashmiri', 'Sheer chai', 'Kahwa'],
    stays: ['Dal Lake houseboats', 'The Lalit Grand Palace', 'Khyber Himalayan Resort', 'Wild Grass Resort'],
    moodTags: ['serene', 'hearts', 'adrenaline'],
    culturalInfo: {
      significance:
        'Kashmir has been a seat of Shaivite philosophy and Hindu learning since ancient times — the Kashmiri Shaivism school of thought originated here in the 9th century. Mughal Emperor Akbar famously called it "a garden of eternal spring." The valley\'s saffron cultivation in Pampore has been practised for over 2,500 years and holds a Geographical Indication (GI) tag.',
      highlights: [
        'Dal Lake shikara ride — living on water since 3rd century BCE',
        'Mughal Gardens — Jahangir\'s 16th century pleasure terraces',
        'Gulmarg Gondola — world\'s highest cable car at 4,200 m',
        'Kashmiri saffron — 2,500-year-old GI-tagged cultivation',
      ],
      festivals: 'Tulip Festival (April), Shikara Festival, Eid ul-Fitr',
      bestSeason: 'April — June, September — October',
    },
  },
  {
    id: 29,
    name: 'Rishikesh',
    type: 'Trekking',
    duration: '4 days',
    popularity: 5,
    image: '/assets/Rishikesh1.jpg',
    coords: '30.0869,78.2676',
    summary: 'Yoga capital of the world — sacred Ganges, bungee jumping, and Himalayan ashrams.',
    details:
      'Rishikesh, at the foot of the Himalayas where the Ganges exits the mountains, is simultaneously India\'s adventure sports capital and its most sacred yoga destination. The Beatles stayed at Maharishi Mahesh Yogi\'s ashram here in 1968, putting Rishikesh on the world map. Today it offers white-water rafting, bungee jumping, and 200-hour yoga teacher training courses.',
    gallery: [
      'https://images.unsplash.com/photo-1561015882-5cf47c86d3cc?w=800&q=80',
    ],
    itinerary: [
      { day: 1, activities: ['Arrive', 'Laxman Jhula & Ram Jhula bridges', 'Triveni Ghat aarti', 'Café hopping in Tapovan'] },
      { day: 2, activities: ['White-water rafting on Ganges', 'Bungee jumping / zip-line', 'Evening yoga class'] },
      { day: 3, activities: ['Beatles Ashram (Maharishi Mahesh Yogi)', 'Neer Garh Waterfall trek', 'Kunjapuri Temple sunrise trek'] },
      { day: 4, activities: ['Rajaji National Park morning safari', 'River-side meditation', 'Departure'] },
    ],
    nearby: ['Haridwar', 'Rajaji National Park', 'Neelkanth Mahadev Temple', 'Chilla Range'],
    food: ['Aloo puri', 'Chole bhature', 'Banana lassi', 'Garhwali mandua roti', 'Local ashram sattvic meals'],
    stays: ['Ananda in the Himalayas', 'Atali Ganga', 'Zostel Rishikesh', 'Parmarth Niketan Ashram'],
    moodTags: ['adrenaline', 'soul', 'serene'],
    culturalInfo: {
      significance:
        'Rishikesh has been a centre of Hindu pilgrimage and Vedantic learning since ancient times — it is the starting point of the Char Dham Yatra to Badrinath, Kedarnath, Gangotri, and Yamunotri. The International Yoga Festival held here every March is the world\'s largest yoga gathering. In 1968, The Beatles visited Maharishi Mahesh Yogi, composing much of the White Album at the now-famous ashram.',
      highlights: [
        'Ganga Aarti at Triveni Ghat — ancient flame ritual',
        'Beatles Ashram — where Abbey Road was conceptualised',
        'White-water rafting: Grade IV rapids on River Ganga',
        'International Yoga Festival — world\'s largest yoga gathering',
      ],
      festivals: 'International Yoga Festival (March), Makar Sankranti, Ganga Dussehra',
      bestSeason: 'February — May, September — November',
    },
  },
  {
    id: 30,
    name: 'Amritsar',
    type: 'Heritage',
    duration: '2 days',
    popularity: 5,
    image: '/assets/Amritsar1.jpg',
    coords: '31.6340,74.8723',
    summary: 'Home of the Golden Temple — the world\'s most visited place of worship and Punjabi spirit.',
    details:
      'Amritsar is the spiritual and cultural heart of Sikhism. The Harmandir Sahib (Golden Temple), which feeds 100,000 visitors daily in its langar (community kitchen), is both a spiritual marvel and a testament to human generosity. The Wagah Border ceremony at sunset is one of India\'s most electrifying spectacles.',
    gallery: [
      'https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?w=800&q=80',
    ],
    itinerary: [
      { day: 1, activities: ['Golden Temple at sunrise (most sacred)', 'Langar seva experience', 'Jallianwala Bagh memorial', 'Old Amritsar heritage walk'] },
      { day: 2, activities: ['Wagah Border Retreat Ceremony at sunset', 'Gobindgarh Fort', 'Durgiana Temple', 'Amritsari kulcha dinner', 'Departure'] },
    ],
    nearby: ['Wagah Border', 'Anandpur Sahib', 'Tarn Taran Sahib'],
    food: ['Amritsari kulcha', 'Sarson ka saag & makki di roti', 'Langar dal', 'Amritsari fish', 'Lassi at Gian di Hatti'],
    stays: ['Taj Hotel & Convention Centre', 'Golden Tulip', 'Hotel CJ International', 'Ranjit\'s SVAASA'],
    moodTags: ['soul', 'urban'],
    culturalInfo: {
      significance:
        'The Golden Temple (Harmandir Sahib) was built by Guru Arjan Dev Ji in 1604 and is the holiest shrine in Sikhism. Its doors are open to all faiths, and the langar (free community kitchen) serves 50,000-100,000 people daily — the largest free kitchen in the world. Jallianwala Bagh is the site of the 1919 massacre that turned the tide of the Indian independence movement.',
      highlights: [
        'Golden Temple — world\'s largest free kitchen, open to all faiths',
        'Wagah Border ceremony — the last flag retreat at India-Pakistan border',
        'Jallianwala Bagh — site of the 1919 massacre',
        'Gobindgarh Fort — 18th century Sikh military citadel',
      ],
      festivals: 'Baisakhi (April), Gurpurab (Guru Nanak Jayanti), Diwali at Golden Temple',
      bestSeason: 'October — March',
    },
  },
  {
    id: 31,
    name: 'Darjeeling',
    type: 'Hill Station',
    duration: '4 days',
    popularity: 4,
    image: 'https://images.unsplash.com/photo-1606298855672-3efb63017be8?w=800&q=80',
    coords: '27.0360,88.2627',
    summary: 'Queen of the Hills — Kanchenjunga views, UNESCO toy train, and world-famous first-flush tea.',
    details:
      'Darjeeling, at 2,042 m, offers one of the world\'s finest mountain views — Kanchenjunga, the world\'s third-highest peak, looms on the horizon. The Darjeeling Himalayan Railway (Toy Train), a UNESCO World Heritage Site since 1999, winds through tea gardens and mountain villages. The morning view from Tiger Hill of Mount Everest at sunrise is unforgettable.',
    gallery: [
      'https://images.unsplash.com/photo-1606298855672-3efb63017be8?w=800&q=80',
    ],
    itinerary: [
      { day: 1, activities: ['Arrival', 'Chowrasta Mall', 'Observatory Hill Temple', 'Bengali market evening'] },
      { day: 2, activities: ['Tiger Hill pre-dawn sunrise (Everest view)', 'Ghoom Monastery', 'Batasia Loop toy train', 'Happy Valley Tea Estate tour'] },
      { day: 3, activities: ['Darjeeling Himalayan Railway joy ride', 'Peace Pagoda', 'Lloyd Botanical Garden', 'Tibetan Refugee Self-Help Centre'] },
      { day: 4, activities: ['Mirik Lake day trip', 'Tea tasting session', 'Departure'] },
    ],
    nearby: ['Tiger Hill', 'Mirik', 'Kalimpong', 'Sandakphu Trek'],
    food: ['Darjeeling first-flush tea', 'Momos', 'Thukpa', 'Sel roti', 'Gundruk ko achar'],
    stays: ['Windamere Hotel', 'Glenburn Tea Estate', 'Elgin Hotel', 'Zostel Darjeeling'],
    moodTags: ['serene', 'hearts', 'adrenaline'],
    culturalInfo: {
      significance:
        'Darjeeling was established by the British in 1835 as a sanatorium and became a major tea-growing region by 1850. Darjeeling tea, known as the "Champagne of teas," is India\'s most famous GI-tagged product. The Darjeeling Himalayan Railway, built between 1879-81, overcomes a 2,200 m elevation gain using a unique zig-zag reverse system and loop bridges — a UNESCO engineering wonder.',
      highlights: [
        'Tiger Hill sunrise — view of Kanchenjunga and Mount Everest',
        'Darjeeling Himalayan Railway — UNESCO World Heritage toy train',
        'First-flush Darjeeling tea — the world\'s most coveted tea',
        'Ghoom Monastery — repository of rare Tibetan Buddhist manuscripts',
      ],
      festivals: 'Darjeeling Carnival (April), Teesta Tea & Tourism Festival, Losar',
      bestSeason: 'March — May, September — November',
    },
  },
  {
    id: 32,
    name: 'Nainital',
    type: 'Hill Station',
    duration: '3 days',
    popularity: 4,
    image: 'https://images.unsplash.com/photo-1622215011787-10d2ea0b7765?w=800&q=80',
    coords: '29.3803,79.4636',
    summary: 'Lake District of India — emerald Naini Lake, Jim Corbett trails, and Kumaoni culture.',
    details:
      'Nainital, nestled in a valley of the Kumaon Hills at 2,084 m, is built around the crescent-shaped Naini Lake. The town\'s British colonial bungalows, vibrant Mall Road, and proximity to Jim Corbett National Park make it one of Uttarakhand\'s most beloved hill stations. Naina Devi Temple on the lake shore is one of the 51 Shakti Peethas.',
    gallery: [
      'https://images.unsplash.com/photo-1622215011787-10d2ea0b7765?w=800&q=80',
    ],
    itinerary: [
      { day: 1, activities: ['Naini Lake boating', 'Naina Devi Temple', 'Mall Road', 'Snow View Point (cable car)'] },
      { day: 2, activities: ['Jim Corbett National Park day trip', 'Dhikala zone safari', 'Corbett Museum'] },
      { day: 3, activities: ['Tiffin Top (Dorothy\'s Seat) hike', 'Land\'s End viewpoint', 'Sattal lakes', 'Departure'] },
    ],
    nearby: ['Jim Corbett', 'Bhimtal', 'Sattal', 'Mukteshwar'],
    food: ['Aloo ke gutke', 'Bhatt ki churkani', 'Kumaoni raita', 'Bal mithai', 'Singal (buckwheat cake)'],
    stays: ['The Naini Retreat', 'Manu Maharani', 'Shervani Hilltop Inn', 'KMVN Tourist Rest Houses'],
    moodTags: ['serene', 'hearts'],
    culturalInfo: {
      significance:
        'Nainital was discovered by the British in 1841 and became one of the most prominent hill stations of the Raj. The Naini Lake has religious significance — the name "Nainital" means "lake of eyes," referencing the eye of Goddess Sati that fell here, making Naina Devi Temple one of the 51 Shakti Peethas. Jim Corbett, India\'s first national park (1936), is named after the famous hunter-turned-conservationist who protected tigers from man-eaters.',
      highlights: [
        'Naini Lake — one of India\'s most picturesque crater lakes',
        'Naina Devi Temple — one of 51 sacred Shakti Peethas',
        'Jim Corbett National Park — India\'s oldest, premier tiger reserve',
        'Tiffin Top — panoramic views of the Kumaon Himalayas',
      ],
      festivals: 'Nanda Devi Fair (September), Uttarayani Mela, Deepotsav',
      bestSeason: 'March — June, September — November',
    },
  },
  {
    id: 33,
    name: 'Udaipur',
    type: 'Heritage',
    duration: '3 days',
    popularity: 5,
    image: 'https://images.unsplash.com/photo-1523544261025-8ae7b4f2ee72?w=800&q=80',
    coords: '24.5854,73.7125',
    summary: 'The City of Lakes — palace hotels on water, Mewar royalty, and Rajasthani miniature art.',
    details:
      'Udaipur, the "Venice of the East," is centred around a string of shimmering lakes set against the backdrop of the Aravalli Hills. The City Palace, built over 400 years by successive Mewar kings, is the largest royal complex in Rajasthan. The Lake Palace (now a luxury hotel) floating on Pichola Lake is among the world\'s most photographed hotels.',
    gallery: [
      'https://images.unsplash.com/photo-1523544261025-8ae7b4f2ee72?w=800&q=80',
    ],
    itinerary: [
      { day: 1, activities: ['City Palace (largest palace complex in Rajasthan)', 'Jagdish Temple', 'Lake Pichola boat ride', 'Sunset at Sunset Point'] },
      { day: 2, activities: ['Saheliyon ki Bari', 'Fateh Sagar Lake', 'Vintage Car Museum', 'Shilpgram craft fair'] },
      { day: 3, activities: ['Kumbhalgarh Fort day trip (UNESCO)', 'Ranakpur Jain Temples', 'Miniature painting workshop', 'Departure'] },
    ],
    nearby: ['Kumbhalgarh', 'Ranakpur', 'Chittorgarh', 'Nathdwara'],
    food: ['Dal baati churma', 'Ker sangri', 'Gatte ki sabzi', 'Ghewar', 'Makhaniya lassi'],
    stays: ['Taj Lake Palace', 'Oberoi Udaivilas', 'Fateh Garh Heritage Hotel', 'Zostel Udaipur'],
    moodTags: ['hearts', 'urban'],
    culturalInfo: {
      significance:
        'Udaipur was founded in 1559 by Maharana Udai Singh II of the Sisodia Rajput clan — one of the oldest royal families in the world with a 1,400-year lineage. The Mewar rulers were the only Rajput dynasty to refuse alliance with the Mughal Empire. The City Palace took 400 years to build and contains 11 individual palaces. Kumbhalgarh Fort has a 36 km wall — the second-longest wall in the world after the Great Wall of China.',
      highlights: [
        'City Palace — 400 years of Mewar royal architecture',
        'Lake Palace — luxury hotel floating on Pichola Lake',
        'Kumbhalgarh — 36 km fort wall, world\'s second longest',
        'Mewar dynasty — India\'s longest continuous royal lineage',
      ],
      festivals: 'Mewar Festival (March), Shilpgram Craft Festival, Diwali on lakes',
      bestSeason: 'October — March',
    },
  },
  {
    id: 34,
    name: 'Delhi',
    type: 'City',
    duration: '4 days',
    popularity: 5,
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80',
    coords: '28.6139,77.2090',
    summary: 'India\'s capital — where Mughal grandeur, colonial legacy, and modern India coexist.',
    details:
      'Delhi, India\'s capital, is a city of seven historical cities layered on top of each other. From the Mughal Jama Masjid and Red Fort to Lutyens\' colonial New Delhi and the ultra-modern Cybercity, Delhi contains three UNESCO World Heritage Sites, the world\'s second-busiest metro system, and street food revered across India.',
    gallery: [
      'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80',
    ],
    itinerary: [
      { day: 1, activities: ['Red Fort (Lal Qila)', 'Jama Masjid', 'Chandni Chowk street food trail', 'Paranthe Wali Gali'] },
      { day: 2, activities: ['Qutub Minar (UNESCO)', 'Mehrauli Archaeological Park', 'Hauz Khas Village', 'Lodi Garden sunset'] },
      { day: 3, activities: ['Humayun\'s Tomb (UNESCO)', 'Nizamuddin Dargah qawwali', 'India Gate', 'Rashtrapati Bhavan circuit'] },
      { day: 4, activities: ['Akshardham Temple', 'National Museum', 'Connaught Place', 'Departure'] },
    ],
    nearby: ['Agra (200 km)', 'Jaipur (280 km)', 'Vrindavan', 'Neemrana Fort'],
    food: ['Old Delhi biryani', 'Paranthe', 'Chole bhature', 'Dilli ki chaat', 'Jalebi & rabdi'],
    stays: ['The Imperial New Delhi', 'ITC Maurya', 'The Lodhi', 'Zostel Delhi'],
    moodTags: ['urban', 'soul'],
    culturalInfo: {
      significance:
        'Delhi has been the seat of empire for over 1,000 years — from the Tomar Rajputs to the Delhi Sultanate, the Mughals, the British, and now the Republic of India. Qutub Minar (1193) is the world\'s tallest brick minaret. Humayun\'s Tomb (1570) was the architectural inspiration for the Taj Mahal. Chandni Chowk, built by Emperor Shah Jahan\'s daughter, is one of the oldest and busiest markets in Asia.',
      highlights: [
        'Red Fort — Mughal seat of power, Independence Day address point',
        'Qutub Minar — UNESCO, world\'s tallest brick minaret (73 m)',
        'Humayun\'s Tomb — UNESCO, prototype of the Taj Mahal',
        'Chandni Chowk — 350-year-old market built by Shah Jahan\'s daughter',
      ],
      festivals: 'Republic Day parade (January 26), Independence Day (August 15), Qutub Festival, Dilli Haat Melas',
      bestSeason: 'October — March',
    },
  },

  // ── Additional Beach & Backwater Destinations ──
  {
    id: 35,
    name: 'Gokarna',
    type: 'Beach',
    duration: '3 days',
    popularity: 4,
    image: '/assets/Gokarna1.jpg',
    coords: '14.5479,74.3188',
    summary: 'Serene temple town with pristine beaches — Karnataka\'s hidden coastal gem.',
    details:
      'Gokarna is a sacred Hindu pilgrimage town where temple bells and ocean waves coexist in harmony. Unlike Goa, Gokarna\'s beaches — Om Beach, Half Moon Beach, and Paradise Beach — are quiet and unspoiled. The town\'s ancient Mahabaleshwar Temple and the Atmalinga legend make it as spiritually rich as it is naturally beautiful.',
    gallery: [
      '/assets/Gokarna1.jpg',
      '/assets/Gokarna2.jpg',
      '/assets/Gokarna3.jpg',
      '/assets/Gokarna4.jpg',
      '/assets/Gokarna5.jpg',
    ],
    itinerary: [
      { day: 1, activities: ['Mahabaleshwar Temple', 'Gokarna Main Beach', 'Sunset at Kudle Beach'] },
      { day: 2, activities: ['Om Beach trek', 'Half Moon Beach', 'Paradise Beach', 'Beach bonfire'] },
      { day: 3, activities: ['Mirjan Fort ruins', 'Local market', 'Departure'] },
    ],
    nearby: ['Mirjan Fort', 'Ankola', 'Murudeshwar'],
    food: ['Mangalorean fish curry', 'Neer dosa', 'Fresh coconut water', 'Gokarna chai'],
    stays: ['Beach shacks', 'Namaste Cafe', 'SwaSwara Wellness Resort', 'Zostel Gokarna'],
    moodTags: ['tropical', 'serene', 'soul'],
    culturalInfo: {
      significance:
        'Gokarna is one of the most sacred Shaiva pilgrimage sites in South India. According to the Shiva Purana, the Atmalinga was brought here by Ravana and embedded in the earth — the Mahabaleshwar Temple built over it is considered equivalent to visiting Kashi. The name "Gokarna" means "cow\'s ear" in Sanskrit, referring to the shape of the confluence of the Agnashini and Gangavali rivers.',
      highlights: [
        'Mahabaleshwar Temple — sacred Shiva shrine with Atmalinga',
        'Om Beach — perfectly shaped Om symbol from above',
        'Pristine beaches accessible only by boat or trek',
        'Mirjan Fort — 16th century coastal fortification',
      ],
      festivals: 'Maha Shivaratri, Gokarna Brahmotsava, Karthik Purnima',
      bestSeason: 'October — March',
    },
  },
  {
    id: 36,
    name: 'Kumarakom',
    type: 'Backwater',
    duration: '3 days',
    popularity: 5,
    image: 'https://images.unsplash.com/photo-1590123437476-d45f6c99ceec?w=800&q=80',
    coords: '9.6196,76.4327',
    summary: 'Kerala\'s backwater paradise — bird sanctuary, rice boats, and Vembanad Lake serenity.',
    details:
      'Kumarakom, nestled on the eastern shore of Vembanad Lake, is Kerala\'s most celebrated backwater resort destination. The Kumarakom Bird Sanctuary is a winter haven for migratory birds from Siberia. Luxury houseboat stays, Ayurvedic rejuvenation, and the rhythmic life of the waterways make this one of India\'s most tranquil retreats.',
    gallery: [
      'https://images.unsplash.com/photo-1590123437476-d45f6c99ceec?w=800&q=80',
      'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&q=80',
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    ],
    itinerary: [
      { day: 1, activities: ['Arrive and check into houseboat', 'Vembanad Lake sunset cruise', 'Kerala sadya dinner'] },
      { day: 2, activities: ['Kumarakom Bird Sanctuary at dawn', 'Canoe through narrow canals', 'Ayurvedic massage', 'Village walk'] },
      { day: 3, activities: ['Kottayam spice market', 'Ettumanoor Mahadeva Temple', 'Departure'] },
    ],
    nearby: ['Kottayam', 'Alleppey (26 km)', 'Vaikom'],
    food: ['Kerala fish curry', 'Karimeen pollichathu (pearl spot fish)', 'Appam with coconut stew', 'Puttu and kadala'],
    stays: ['Taj Kumarakom Resort & Spa', 'Coconut Lagoon CGH Earth', 'Luxury houseboats', 'Zuri Kumarakom'],
    moodTags: ['serene', 'hearts'],
    culturalInfo: {
      significance:
        'Kumarakom sits at the heart of Kuttanad — the "Rice Bowl of Kerala" — where paddy fields cultivated below sea level create one of the world\'s most unusual agricultural systems, unique to this region. Vembanad Lake, the longest lake in India at 96 km, supports a rich ecosystem of fishing communities whose lives have remained unchanged for centuries. The Kumarakom Bird Sanctuary protects rare Siberian cranes, herons, and kingfishers.',
      highlights: [
        'Vembanad Lake — longest lake in India at 96 km',
        'Kumarakom Bird Sanctuary — Siberian crane winter habitat',
        'Kuttanad below-sea-level rice farming',
        'Luxury houseboat stays under Kerala\'s starlit sky',
      ],
      festivals: 'Onam Snake Boat Race, Vishu, Kuttanad Boat Festival',
      bestSeason: 'October — February',
    },
  },
  {
    id: 37,
    name: 'Chilika Lake',
    type: 'Backwater',
    duration: '2 days',
    popularity: 4,
    image: '/assets/Chilika Lake1.jpg',
    coords: '19.7167,85.3167',
    summary: 'Asia\'s largest brackish water lagoon — flamingo flocks, Irrawaddy dolphins, and island temples.',
    details:
      'Chilika Lake in Odisha is Asia\'s largest coastal lagoon and a Ramsar Wetland of International Importance. Every winter, over a million migratory birds — flamingoes, herons, and rare Irrawaddy dolphins — make this UNESCO-recognised lake one of India\'s greatest wildlife spectacles. The sacred Kalijai Island temple in the middle of the lake draws pilgrims year-round.',
    gallery: [
      '/assets/Chilika Lake1.jpg',
      '/assets/Chilika Lake2.jpg',
      '/assets/Chilika Lake3.jpg',
      '/assets/Chilika Lake4.jpg',
      '/assets/Chilika Lake5.jpg',
    ],
    itinerary: [
      { day: 1, activities: ['Boat safari to Nalabana Bird Sanctuary', 'Irrawaddy dolphin spotting', 'Kalijai Island temple', 'Sunset on the lagoon'] },
      { day: 2, activities: ['Satpada — dolphin watching point', 'Local fishing village walk', 'Fresh seafood lunch', 'Departure'] },
    ],
    nearby: ['Puri (50 km)', 'Bhubaneswar', 'Satpada'],
    food: ['Chingudi tarkari (prawn curry)', 'Macha jhola (Odia fish curry)', 'Pakhala (fermented rice)', 'Fresh lagoon seafood'],
    stays: ['Panthanivas Balugaon', 'Hotel Nilachal', 'Chilika Lake resorts', 'OTDC houseboat'],
    moodTags: ['serene', 'tropical', 'adrenaline'],
    culturalInfo: {
      significance:
        'Chilika Lake has been a sacred site since ancient times — the Kalijai Island temple, believed to contain the footprint of Goddess Kali, draws thousands of pilgrims during Makar Mela. The lake\'s Irrawaddy dolphins are one of only three remaining freshwater dolphin populations in India. Chilika was the first Ramsar Site designated in India (1981) and is home to 160+ bird species and 225 fish species.',
      highlights: [
        'Irrawaddy dolphins — rare freshwater dolphin species',
        'Nalabana Bird Sanctuary — 1 million+ migratory birds in winter',
        'Kalijai Island Temple — sacred island shrine in the lagoon',
        'Ramsar Wetland — India\'s first, Asia\'s largest brackish lagoon',
      ],
      festivals: 'Makar Mela (January), Kalijai Puja, Bali Yatra',
      bestSeason: 'November — February',
    },
  },
];
