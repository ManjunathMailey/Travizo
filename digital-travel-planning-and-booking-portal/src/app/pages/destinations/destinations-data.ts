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
}

// static list shared by both components; replaces the old service
export const DESTINATIONS: Destination[] = [
  {
    id: 1,
    name: 'Kodaikanal',
    type: 'Hill Station',
    duration: '3 days',
    popularity: 5,
    image: '/assets/kodaikanal.avif',
    coords: '10.2381,77.4899',
    summary: 'Lakes, waterfalls and misty viewpoints — perfect for nature lovers.',
    details: 'Kodaikanal is often called the "Princess of Hill Stations". With misty hills and dense forests, the town has colonial charm and is ideal for hiking, boating and birdwatching. Early mornings are cool, evenings offer stunning sunsets over the lake, and you can sample home‑made chocolates from roadside shops.',
    gallery: ['/assets/kodaikanal.avif', '/assets/kodaikanal1.jpg', '/assets/kodaikanal3.jpg'],
    itinerary: [
      { day: 1, activities: ['Arrival & check-in', 'Bryant Park', 'Coaker’s Walk at sunset'] },
      { day: 2, activities: ['Green Valley View', 'Kurinji Andavar Temple', 'Pine Forest'] },
      { day: 3, activities: ['Pambarai Falls', 'Local markets', 'Departure'] }
    ],
    nearby: ['Pambarai', 'Berijam Lake'],
    food: ['Homestay snacks', 'Street chaat', 'Local biryani'],
    stays: ['The Carlton', 'Kodai Resort', 'Hill View Hotel']
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
    details: 'Ooty, nestled in the Nilgiris, is famous for its scenic toy train rides and sprawling tea estates. Stroll the botanical gardens, sample aromatic teas straight from the plantations and visit nearby Coonoor for more hiking trails. Winters are chilly; pack warm clothes.',
    gallery: ['/assets/ooty1.jpeg', '/assets/ooty2.jpeg', '/assets/ooty3.avif', '/assets/ooty4.jpeg'],
    itinerary: [
      { day: 1, activities: ['Botanical Gardens', 'Ride on toy train'] },
      { day: 2, activities: ['Pykara Lake & falls', 'Rose Garden'] },
      { day: 3, activities: ['Doddabetta Peak trek', 'Tea estate tour'] },
      { day: 4, activities: ['Coonoor day trip', 'Local shopping'] }
    ],
    nearby: ['Coonoor', 'Emerald Lake'],
    food: ['Masala dosa', 'Homemade chocolates', 'South Indian thali'],
    stays: ['Savoy Hotel', 'Gem Park Ooty', 'Fortune Resort'],
    safaris: ['Mudumalai Tiger Reserve safari', 'Dolphin’s Nose viewpoint']
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
    details: 'Munnar is a lush hill town covered in tea gardens. Perfect for wandering through emerald fields, spotting waterfalls, and enjoying cool mountain air. Don\'t miss the tea museum and local spice markets.',
    gallery: ['/assets/munnar1.jpeg','/assets/munnar2.jpeg','/assets/Munnar-18.jpg'],
    itinerary: [
      { day: 1, activities: ['Arrival and tea museum'] },
      { day: 2, activities: ['Trekking to Meesapulimala'] },
      { day: 3, activities: ['Visit Eravikulam National Park'] },
      { day: 4, activities: ['Spice plantation tour'] },
      { day: 5, activities: ['Local markets and departure'] }
    ],
    nearby: ['Chinnar Wildlife Sanctuary', 'Mattupetty Dam'],
    food: ['Kerala fish curry', 'Appam with stew', 'Local tea snacks'],
    stays: ['Chandys Windy Woods', 'The Fog Munnar', 'Munnar Tea Country Resort'],
    safaris: ['Chinnar Sanctuary jeep safari']
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
    details: 'Alleppey is synonymous with serene backwater cruises. Drift past coconut groves, watch villagers fish and dine on freshly caught prawns. Spend a night aboard a traditional houseboat for an unforgettable experience.',
    gallery: ['/assets/Alleppey1.jpeg', '/assets/Alleppwy2.jpeg'],
    itinerary: [
      { day: 1, activities: ['Board houseboat', 'Floating lunch', 'Sunset cruise'] },
      { day: 2, activities: ['Village walk', 'Local markets', 'Disembark'] }
    ],
    nearby: ['Kumarakom', 'Vembanad Lake'],
    food: ['Fresh seafood', 'Kerala sadya'],
    stays: ['Luxury houseboats', 'Backwater resorts']
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
    details: 'Varkala is known for its red-cliff beach, yoga centers, and chilled-out cafes. Enjoy Ayurvedic treatments and watch the fishermen bring in their catch along the shore.',
    gallery: ['/assets/varkala1.jpg','/assets/varkala2.jpeg','/assets/varkala3.jpeg'],
    itinerary: [
      { day: 1, activities: ['Relax on Papanasam Beach', 'Sunset cliff walk'] },
      { day: 2, activities: ['Paragliding', 'Local temple visit'] },
      { day: 3, activities: ['Ayurvedic spa', 'Shopping on cliff road'] }
    ],
    nearby: ['Kappil Beach', 'Anjengo Fort'],
    food: ['Seafood shacks', 'Café culture cuisines'],
    stays: ['Cliff resorts', 'Yoga retreats']
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
    details: 'Coorg, also called Kodagu, is famous for its lush coffee estates and waterfalls. Try the spicy pork curry and take a walk through shady forest trails.',
    gallery: ['/assets/coorg1.jpeg','/assets/coorg2.jpg'],
    itinerary: [
      { day: 1, activities: ['Abbey Falls', 'Madikeri Fort'] },
      { day: 2, activities: ['Coffee plantation tour', 'Raja’s Seat'] },
      { day: 3, activities: ['Talakaveri pilgrimage', 'Departure'] }
    ],
    nearby: ['Madikeri', 'Bylekuppe Tibetan Monastery'],
    food: ['Coorg pork curry', 'Bamboo shoot dishes'],
    stays: ['Plantation homestays', 'Luxury resorts']
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
    details: 'Pondicherry blends Tamil culture with French influence. Bicycle around the French Quarter, eat at bakeries, and relax along the Promenade.',
    gallery: ['/assets/pondicherry1.jpeg','/assets/pondicherry2.webp'],
    itinerary: [
      { day: 1, activities: ['French Quarter walk', 'Promenade Beach'] },
      { day: 2, activities: ['Auroville visit', 'Sri Aurobindo Ashram'] },
      { day: 3, activities: ['Beaches and water sports'] },
      { day: 4, activities: ['Local markets', 'Departure'] }
    ],
    nearby: ['Auroville', 'Chunnambar Boat House'],
    food: ['French bakeries', 'Local Tamil cuisine'],
    stays: ['Boutique guesthouses', 'French villas']
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
    itinerary: [
      { day: 1, activities: ['Virupaksha Temple', 'Hampi Bazaar'] },
      { day: 2, activities: ['Royal Enclosure', 'Lotus Mahal'] },
      { day: 3, activities: ['Sunrise at Matanga Hill', 'Local crafts'] }
    ],
    nearby: ['Badami', 'Anegundi'],
    food: ['Local Karnataka thali', 'Street snacks'],
    stays: ['Heritage hotels', 'Backpacker hostels']
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
    itinerary: [
      { day: 1, activities: ['Marina Beach', 'Fort St. George'] },
      { day: 2, activities: ['Kapaleeshwarar Temple', 'Shopping at T Nagar'] }
    ],
    nearby: ['Mahabalipuram', 'Pondicherry'],
    food: ['Chettinad cuisine', 'Street dosa'],
    stays: ['Seaside hotels', 'Boutique guesthouses']
  },
  {
    id: 10,
    name: 'Goa',
    type: 'Beach',
    duration: '4 days',
    popularity: 5,
    image: '/assets/goa.jpg',
    coords: '15.2993,74.1240',
    summary: 'Sun-kissed beaches, lively nightlife and Portuguese heritage.',
    details: 'Goa is India’s party capital by day and relaxed coastline by evening. From water sports and beach shacks to historic churches and spice farms, it offers something for every traveller. Avoid the crowds by visiting quieter beaches in the south.',
    itinerary: [
      { day: 1, activities: ['Arrival & Baga beach', 'Calangute market'] },
      { day: 2, activities: ['Old Goa churches', 'Spice plantation tour'] },
      { day: 3, activities: ['South Goa beaches (Palolem)', 'Yoga session'] },
      { day: 4, activities: ['Water sports', 'Departure'] }
    ],
    nearby: ['Dudhsagar Falls', 'Anjuna Flea Market'],
    food: ['Goan fish curry', 'Feni', 'Bebinca dessert'],
    stays: ['Beach huts', 'Luxury resorts']
  },
  {
    id: 11,
    name: 'Jaipur',
    type: 'Heritage',
    duration: '3 days',
    popularity: 5,
    image: '/assets/jaipur.jpg',
    coords: '26.9124,75.7873',
    summary: 'Pink City with forts, palaces and royal culture.',
    details: 'Jaipur, the capital of Rajasthan, dazzles with its pink-hued architecture, majestic forts and bustling bazaars. Explore the Amber Fort, City Palace and shop for handicrafts in the old city lanes.',
    itinerary: [
      { day: 1, activities: ['Amber Fort', 'Panna Meena ka Kund'] },
      { day: 2, activities: ['City Palace museum', 'Jantar Mantar'] },
      { day: 3, activities: ['Hawa Mahal', 'Shopping in Johari Bazaar'] }
    ],
    nearby: ['Ajmer', 'Pushkar'],
    food: ['Rajasthani thali', 'Laal maas'],
    stays: ['Heritage hotels', 'Havelis']
  },
  {
    id: 13,
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
      { day: 5, activities: ['Coonoor trip', 'Departure'] }
    ],
    nearby: ['Pambarai', 'Kurinji Trek'],
    food: ['Local hillside cuisine', 'Fresh fruits'],
    stays: ['Budget cottages', 'Premier resorts'],
    safaris: ['Hill area jeep safari']
  },
  {
    id: 14,
    name: 'Goa Beaches',
    type: 'Beach',
    duration: '4 days',
    popularity: 5,
    image: '/assets/goa.jpeg',
    coords: '15.2993,74.1240',
    summary: 'Sun, sand and sea along the Konkan coast.',
    itinerary: [
      { day: 1, activities: ['Arrival & North Goa beaches'] },
      { day: 2, activities: ['Water sports at Calangute', 'Fort Aguada'] },
      { day: 3, activities: ['South Goa relaxation', 'Dudhsagar trek'] },
      { day: 4, activities: ['Local markets', 'Departure'] }
    ],
    nearby: ['Panaji', 'Margao'],
    food: ['Goan fish curry', 'Feni cocktails'],
    stays: ['Beach huts', 'Luxury resorts']
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
    itinerary: [
      { day: 1, activities: ['Shore Temple', 'Five Rathas'] },
      { day: 2, activities: ['Krishna’s Butter Ball', 'Departure'] }
    ],
    nearby: ['Chennai', 'Pondicherry'],
    food: ['Tamil coastal cuisine'],
    stays: ['Heritage hotels', 'Beach resorts']
  }
];