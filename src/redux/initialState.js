export const initialState = {
  category: [
    {
      id: 1,
      title: 'Sunny seaside',
      image: '/images/categories/seaside_640.jpg',
    },
    {
      id: 2,
      title: 'Vibrant cities',
      image: '/images/categories/city_640.jpg',
    },
    {
      id: 3,
      title: 'Secret mountains',
      image: '/images/categories/mountains_640.jpg',
    },
    {
      id: 4,
      title: 'Secluded countryside',
      image: '/images/categories/countryside_640.jpg',
    },
  ],


  posts: {
    data: {},
    loading: {
      active: false,
      error: false,
    },
  },
};
