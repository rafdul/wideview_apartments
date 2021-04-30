export const initialState = {
  category: [
    {
      id: 1,
      name: 'seaside',
      title: 'Sunny seaside',
      image: '/images/categories/seaside_640.jpg',
    },
    {
      id: 2,
      name: 'cities',
      title: 'Vibrant cities',
      image: '/images/categories/city_640.jpg',
    },
    {
      id: 3,
      name: 'mountains',
      title: 'Secret mountains',
      image: '/images/categories/mountains_640.jpg',
    },
    {
      id: 4,
      name: 'countryside',
      title: 'Secluded countryside',
      image: '/images/categories/countryside_640.jpg',
    },
  ],


  apartments: {
    data: [
      {
        id: 'a1',
        category: 'seaside',
        name: 'Sea Apartment Lux',
        city: 'Barcelona',
        description: 'Maecenas eget velit non eros vulputate leo ac lacus euismod pede, molestie vitae, cursus a, sodales tempor. Phasellus semper convallis. Praesent tristique enim, sagittis tortor. ',
        price: 500,
        bedrooms: 3,
        kitchen: 1,
        swimpool: 'private',
        balcony: 1,
        image: '/images/offers/sea1864448_640.jpg',
      },
      {
        id: 'a2',
        category: 'seaside',
        name: 'Beach Apartment Lux',
        city: 'Capri',
        description: 'Maecenas eget velit non eros vulputate leo ac lacus euismod pede, molestie vitae, cursus a, sodales tempor. Phasellus semper convallis. Praesent tristique enim, sagittis tortor. ',
        price: 750,
        bedrooms: 5,
        kitchen: 2,
        swimpool: 'private',
        balcony: 2,
        image: '/images/offers/sea3100785_640.jpg',
      },
      {
        id: 'a3',
        category: 'seaside',
        name: 'Ocean Penthouse',
        city: 'Laguna Beach',
        description: 'Maecenas eget velit non eros vulputate leo ac lacus euismod pede, molestie vitae, cursus a, sodales tempor. Phasellus semper convallis. Praesent tristique enim, sagittis tortor. ',
        price: 400,
        bedrooms: 2,
        kitchen: 1,
        swimpool: 'public',
        balcony: 1,
        image: '/images/offers/sea3715707_640.jpg',
      },
      {
        id: 'a4',
        category: 'seaside',
        name: 'Baltic Apartment',
        city: 'Sopot',
        description: 'Maecenas eget velit non eros vulputate leo ac lacus euismod pede, molestie vitae, cursus a, sodales tempor. Phasellus semper convallis. Praesent tristique enim, sagittis tortor. ',
        price: 500,
        bedrooms: 3,
        kitchen: 2,
        swimpool: 'private',
        balcony: 3,
        image: '/images/offers/sea5114392_640.jpg',
      },
      {
        id: 'a5',
        category: 'seaside',
        name: 'Atlantic Apartment High',
        city: 'Miami',
        description: 'Maecenas eget velit non eros vulputate leo ac lacus euismod pede, molestie vitae, cursus a, sodales tempor. Phasellus semper convallis. Praesent tristique enim, sagittis tortor. ',
        price: 800,
        bedrooms: 4,
        kitchen: 1,
        swimpool: 'public',
        balcony: 3,
        image: '/images/offers/sea1030758_640.jpg',
      },
      {
        id: 'b1',
        category: 'cities',
        name: 'Westminster Penthouse',
        city: 'London',
        description: 'Maecenas eget velit non eros vulputate leo ac lacus euismod pede, molestie vitae, cursus a, sodales tempor. Phasellus semper convallis. Praesent tristique enim, sagittis tortor. ',
        price: 900,
        bedrooms: 3,
        kitchen: 1,
        swimpool: 'no',
        balcony: 1,
        image: '/images/offers/city460762_640.jpg',
      },
      {
        id: 'b2',
        category: 'cities',
        name: 'Manhattan Office',
        city: 'New York',
        description: 'Maecenas eget velit non eros vulputate leo ac lacus euismod pede, molestie vitae, cursus a, sodales tempor. Phasellus semper convallis. Praesent tristique enim, sagittis tortor. ',
        price: 700,
        bedrooms: 2,
        kitchen: 1,
        swimpool: 'no',
        balcony: 1,
        image: '/images/offers/city1927719_640.jpg',
      },
      {
        id: 'b3',
        category: 'cities',
        name: 'Japanstyle Penthouse',
        city: 'Tokyo',
        description: 'Maecenas eget velit non eros vulputate leo ac lacus euismod pede, molestie vitae, cursus a, sodales tempor. Phasellus semper convallis. Praesent tristique enim, sagittis tortor. ',
        price: 650,
        bedrooms: 3,
        kitchen: 1,
        swimpool: 'no',
        balcony: 1,
        image: '/images/offers/city2614141_640.jpg',
      },
      {
        id: 'b4',
        category: 'cities',
        name: 'Koala Apartment',
        city: 'Sydney',
        description: 'Maecenas eget velit non eros vulputate leo ac lacus euismod pede, molestie vitae, cursus a, sodales tempor. Phasellus semper convallis. Praesent tristique enim, sagittis tortor. ',
        price: 400,
        bedrooms: 2,
        kitchen: 1,
        swimpool: 'no',
        balcony: 1,
        image: '/images/offers/city3137416_640.jpg',
      },
      {
        id: 'c1',
        category: 'mountains',
        name: 'Alpine House',
        city: 'Courchevel',
        description: 'Maecenas eget velit non eros vulputate leo ac lacus euismod pede, molestie vitae, cursus a, sodales tempor. Phasellus semper convallis. Praesent tristique enim, sagittis tortor. ',
        price: 400,
        bedrooms: 3,
        kitchen: 1,
        swimpool: 'no',
        balcony: 2,
        image: '/images/offers/mount54906_640.jpg',
      },
      {
        id: 'c2',
        category: 'mountains',
        name: 'Sniezka Resthouse',
        city: 'Karpacz',
        description: 'Maecenas eget velit non eros vulputate leo ac lacus euismod pede, molestie vitae, cursus a, sodales tempor. Phasellus semper convallis. Praesent tristique enim, sagittis tortor. ',
        price: 300,
        bedrooms: 2,
        kitchen: 1,
        swimpool: 'no',
        balcony: 1,
        image: '/images/offers/mount726325_640.jpg',
      },
      {
        id: 'c3',
        category: 'mountains',
        name: 'Caucasian Dream',
        city: 'Sochi',
        description: 'Maecenas eget velit non eros vulputate leo ac lacus euismod pede, molestie vitae, cursus a, sodales tempor. Phasellus semper convallis. Praesent tristique enim, sagittis tortor. ',
        price: 600,
        bedrooms: 4,
        kitchen: 2,
        swimpool: 'private',
        balcony: 2,
        image: '/images/offers/mount1626578_640.jpg',
      },
      {
        id: 'c4',
        category: 'mountains',
        name: 'Executive Suite',
        city: 'Aspen',
        description: 'Maecenas eget velit non eros vulputate leo ac lacus euismod pede, molestie vitae, cursus a, sodales tempor. Phasellus semper convallis. Praesent tristique enim, sagittis tortor. ',
        price: 400,
        bedrooms: 2,
        kitchen: 1,
        swimpool: 'no',
        balcony: 1,
        image: '/images/offers/mount2881296_640.jpg',
      },
      {
        id: 'c5',
        category: 'mountains',
        name: 'Transilvania Secret',
        city: 'Clusenburg',
        description: 'Maecenas eget velit non eros vulputate leo ac lacus euismod pede, molestie vitae, cursus a, sodales tempor. Phasellus semper convallis. Praesent tristique enim, sagittis tortor. ',
        price: 250,
        bedrooms: 3,
        kitchen: 1,
        swimpool: 'no',
        balcony: 1,
        image: '/images/offers/mount3178666_640.jpg',
      },
      {
        id: 'd1',
        category: 'countryside',
        name: 'Masurian Silence',
        city: 'Kruklanki',
        description: 'Maecenas eget velit non eros vulputate leo ac lacus euismod pede, molestie vitae, cursus a, sodales tempor. Phasellus semper convallis. Praesent tristique enim, sagittis tortor. ',
        price: 300,
        bedrooms: 3,
        kitchen: 1,
        swimpool: 'no',
        balcony: 1,
        image: '/images/offers/country389264_640.jpg',
      },
      {
        id: 'd2',
        category: 'countryside',
        name: 'Green Silence',
        city: 'Village Corner',
        description: 'Maecenas eget velit non eros vulputate leo ac lacus euismod pede, molestie vitae, cursus a, sodales tempor. Phasellus semper convallis. Praesent tristique enim, sagittis tortor. ',
        price: 450,
        bedrooms: 4,
        kitchen: 2,
        swimpool: 'private',
        balcony: 2,
        image: '/images/offers/country1882178_640.jpg',
      },
      {
        id: 'd3',
        category: 'countryside',
        name: 'Stone Tower',
        city: 'Mestia',
        description: 'Maecenas eget velit non eros vulputate leo ac lacus euismod pede, molestie vitae, cursus a, sodales tempor. Phasellus semper convallis. Praesent tristique enim, sagittis tortor. ',
        price: 250,
        bedrooms: 3,
        kitchen: 1,
        swimpool: 'no',
        balcony: 2,
        image: '/images/offers/country962240_640.jpg',
      },
    ],
    loading: {
      active: false,
      error: false,
    },
  },
};
