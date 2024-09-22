const hotelData = [
  {
    id: 1,
    name: "Hotel Paradise",
    stars: 4,
    city: "São Paulo",
    state: "SP",
    price: 350,
    image: "https://media-cdn.tripadvisor.com/media/photo-o/17/78/6f/74/panoramica-piscina.jpg?w=1000&h=-1&s=1",
    description: "Um hotel confortável e luxuoso no centro da cidade."
  },
  {
    id: 2,
    name: "Grand Hyatt",
    stars: 5,
    city: "Rio de Janeiro",
    state: "RJ",
    price: 700,
    image: "https://media-cdn.tripadvisor.com/media/photo-o/17/78/6f/74/panoramica-piscina.jpg?w=1000&h=-1&s=1",
    description: "Localizado na Barra da Tijuca, o Grand Hyatt oferece luxo e vistas deslumbrantes da praia."
  },
  {
    id: 3,
    name: "Pestana Palace",
    stars: 5,
    city: "Lisboa",
    state: "Lisboa",
    price: 850,
    image: "https://media-cdn.tripadvisor.com/media/photo-o/17/78/6f/74/panoramica-piscina.jpg?w=1000&h=-1&s=1",
    description: "Este hotel é um palácio restaurado do século XIX, cercado por belos jardins e luxo."
  },
  {
    id: 4,
    name: "Copacabana Palace",
    stars: 5,
    city: "Rio de Janeiro",
    state: "RJ",
    price: 1200,
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/22/66/28/caption.jpg?w=800&h=-1&s=1",
    description: "Famoso hotel de luxo localizado na orla da praia de Copacabana, com serviços exclusivos."
  },
  {
    id: 5,
    name: "Hilton Garden Inn",
    stars: 4,
    city: "Curitiba",
    state: "PR",
    price: 400,
    image: "https://media-cdn.tripadvisor.com/media/photo-s/17/4a/af/61/exterior-view.jpg",
    description: "Moderno e confortável, ideal para viagens de negócios e lazer no centro de Curitiba."
  },
  {
    id: 6,
    name: "Sheraton Porto",
    stars: 5,
    city: "Porto",
    state: "Porto",
    price: 750,
    image: "https://media-cdn.tripadvisor.com/media/photo-s/1a/df/b4/9d/exterior.jpg",
    description: "Luxo no coração da cidade do Porto, com vistas deslumbrantes e serviços premium."
  },
  {
    id: 7,
    name: "Hotel Fasano",
    stars: 5,
    city: "São Paulo",
    state: "SP",
    price: 1500,
    image: "https://media-cdn.tripadvisor.com/media/photo-s/19/6d/3a/77/hotel-fasano-sao-paulo.jpg",
    description: "Luxuoso hotel em São Paulo, famoso pela sua elegância e serviço impecável."
  },
  {
    id: 8,
    name: "The Ritz-Carlton",
    stars: 5,
    city: "New York",
    state: "NY",
    price: 2000,
    image: "https://media-cdn.tripadvisor.com/media/photo-s/16/52/91/a6/hotel-ritz.jpg",
    description: "Um dos hotéis mais luxuosos de Nova York, oferecendo uma experiência única."
  },
  {
    id: 9,
    name: "Palácio Tangará",
    stars: 5,
    city: "São Paulo",
    state: "SP",
    price: 1800,
    image: "https://media-cdn.tripadvisor.com/media/photo-s/19/6d/3b/7a/palacio-tangara.jpg",
    description: "Hotel de altíssimo padrão em meio ao Parque Burle Marx, combinando luxo com natureza."
  },
  {
    id: 10,
    name: "Rosewood São Paulo",
    stars: 5,
    city: "São Paulo",
    state: "SP",
    price: 2200,
    image: "https://media-cdn.tripadvisor.com/media/photo-s/19/7a/bc/7a/rosewood-sao-paulo.jpg",
    description: "Hotel que une arte, design e luxo, com um toque de modernidade no coração de São Paulo."
  },
  {
    id: 11,
    name: "Four Seasons",
    stars: 5,
    city: "Dubai",
    state: "Dubai",
    price: 2500,
    image: "https://media-cdn.tripadvisor.com/media/photo-s/19/8f/a5/5f/four-seasons-hotel-dubai.jpg",
    description: "Hotel icônico em Dubai, famoso por seus serviços de excelência e design luxuoso."
  },
  {
    id: 12,
    name: "Mandarin Oriental",
    stars: 5,
    city: "Bangkok",
    state: "Bangkok",
    price: 1800,
    image: "https://media-cdn.tripadvisor.com/media/photo-s/19/5f/2b/65/mandarin-oriental-bangkok.jpg",
    description: "Um refúgio de luxo à beira do rio Chao Phraya, com uma rica herança cultural."
  },
  {
    id: 13,
    name: "Park Hyatt",
    stars: 5,
    city: "Tokyo",
    state: "Tokyo",
    price: 3000,
    image: "https://media-cdn.tripadvisor.com/media/photo-s/19/6f/9b/5a/park-hyatt-tokyo.jpg",
    description: "Famoso hotel em Tóquio, com vistas espetaculares e design sofisticado."
  },
  {
    id: 14,
    name: "Shangri-La Hotel",
    stars: 5,
    city: "Paris",
    state: "Île-de-France",
    price: 3500,
    image: "https://media-cdn.tripadvisor.com/media/photo-s/19/5f/2b/65/shangri-la-hotel-paris.jpg",
    description: "Um dos hotéis mais prestigiosos de Paris, com vistas para a Torre Eiffel."
  },
  {
    id: 15,
    name: "Le Bristol Paris",
    stars: 5,
    city: "Paris",
    state: "Île-de-France",
    price: 4500,
    image: "https://media-cdn.tripadvisor.com/media/photo-s/19/5f/2b/65/le-bristol-hotel-paris.jpg",
    description: "Clássico hotel de luxo em Paris, oferecendo o melhor da hospitalidade francesa."
  },
  {
    id: 16,
    name: "The Peninsula",
    stars: 5,
    city: "Hong Kong",
    state: "Hong Kong",
    price: 4000,
    image: "https://media-cdn.tripadvisor.com/media/photo-s/19/8f/a5/5f/the-peninsula-hotel.jpg",
    description: "Símbolo de luxo em Hong Kong, com uma longa tradição de excelência em hospitalidade."
  },
  {
    id: 17,
    name: "The Langham",
    stars: 5,
    city: "London",
    state: "London",
    price: 3000,
    image: "https://media-cdn.tripadvisor.com/media/photo-s/19/7a/7d/70/the-langham-hotel-london.jpg",
    description: "Um hotel clássico e luxuoso no coração de Londres, com serviços impecáveis."
  },
  {
    id: 18,
    name: "Waldorf Astoria",
    stars: 5,
    city: "Beverly Hills",
    state: "CA",
    price: 6000,
    image: "https://media-cdn.tripadvisor.com/media/photo-s/19/7a/a1/40/waldorf-astoria-beverly.jpg",
    description: "Luxo e glamour em Beverly Hills, frequentado por celebridades e figuras renomadas."
  },
  {
    id: 19,
    name: "The St. Regis",
    stars: 5,
    city: "New York",
    state: "NY",
    price: 5000,
    image: "https://media-cdn.tripadvisor.com/media/photo-s/19/8f/a5/5f/the-st-regis-new-york.jpg",
    description: "Luxuoso e atemporal, este hotel define o padrão de hospitalidade em Nova York."
  },
  {
    id: 20,
    name: "Conrad Tokyo",
    stars: 5,
    city: "Tokyo",
    state: "Tokyo",
    price: 2800,
    image: "https://media-cdn.tripadvisor.com/media/photo-s/19/7a/91/70/conrad-tokyo.jpg",
    description: "Hotel de alto padrão em Tóquio, oferecendo uma vista deslumbrante para a baía de Tóquio."
  },
  {
    id: 21,
    name: "JW Marriott Marquis",
    stars: 5,
    city: "Dubai",
    state: "Dubai",
    price: 1500,
    image: "https://media-cdn.tripadvisor.com/media/photo-s/19/7a/9b/9d/jw-marriott-marquis-dubai.jpg",
    description: "Hotel de luxo em Dubai, oferecendo uma hospitalidade inigualável e vista panorâmica."
  },
  
];

export default hotelData;
