import Axios from 'axios';

/* selectors */
export const getAllApartments = ({apartments}) => apartments.data;
export const getCategoryApartments = ({apartments}, name) => apartments.data.map(item => item.category === name);
export const getOneApartment = ({apartments}, id) => apartments.data.find(item => item.id === id);
export const getFromCart = ({apartments}) => apartments.cart;
export const getOneFromCart = ({apartments}, id) => apartments.cart.find(item => item.id === id);
export const getOne = ({apartments}) => apartments.oneApartment;
export const getLoading = ({apartments}) => apartments.loading;


/* action name creator */
const reducerName = 'apartments';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const FETCH_ONE = createActionName('FETCH_ONE');
const FETCH_CATEGORY = createActionName('FETCH_CATEGORY');
const FETCH_ADD_TO_CART = createActionName('FETCH_ADD_TO_CART');
const FETCH_EDIT_IN_CART = createActionName('FETCH_EDIT_IN_CART');
const FETCH_DELETE_FROM_CART = createActionName('FETCH_DELETE_FROM_CART');
const FETCH_DELETE_ALL_FROM_CART = createActionName('FETCH_DELETE_ALL_FROM_CART');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const fetchOne = payload => ({ payload, type: FETCH_ONE });
export const fetchCategory = payload => ({ payload, type: FETCH_CATEGORY });
export const fetchAddToCart = payload => ({ payload, type: FETCH_ADD_TO_CART });
export const fetchEditInCart = payload => ({ payload, type: FETCH_EDIT_IN_CART});
export const fetchDeleteFromCart = payload => ({ payload, type: FETCH_DELETE_FROM_CART});
export const fetchDeleteAllFromCart = payload => ({ payload, type: FETCH_DELETE_ALL_FROM_CART});

/* thunk creators */
export const fetchAllPublished = () => {
  return(dispatch, getState) => {
    const { apartments } = getState();
    // console.log('apartments', apartments);

    if(apartments.data.length === 0 && apartments.loading.active === false) {
      dispatch(fetchStarted());

      Axios
        .get('http://localhost:8000/api/apartments')
        .then(res => {
          dispatch(fetchSuccess(res.data));
        })
        .catch(err => {
          dispatch(fetchError(err.message || true));
        });
    }
  };
};

export const fetchOnePublished = (id) => {
  return(dispatch, getState) => {
    dispatch(fetchStarted());

    Axios
      .get(`http://localhost:8000/api/apartments/${id}`)
      .then(res => {
        dispatch(fetchOne(res.data));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};

export const fetchCategoryPublished = (category) => {
  return(dispatch, getState) => {
    dispatch(fetchStarted());

    Axios
      .get(`http://localhost:8000/api//apartments/category/${category}`)
      .then(res => {
        dispatch(fetchCategory(res.data));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
          sentToCart: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
          sentToCart: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
          sentToCart: false,
        },
      };
    }
    case FETCH_ONE: {
      // console.log('...statePart:', ...statePart);
      // console.log('action.payload:', action.payload);
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
          sentToCart: false,
        },
        oneApartment: action.payload,
      };
    }
    case FETCH_CATEGORY: {
      // console.log('...statePart:', ...statePart);
      // console.log('action.payload:', action.payload);
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
          sentToCart: false,
        },
        data: [...statePart.data, action.payload],
      };
    }
    case FETCH_ADD_TO_CART: {
      // console.log('...statePart:', ...statePart);
      // console.log('action.payload:', action.payload);
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
          sentToCart: true,
        },
        cart: [...statePart.cart, action.payload],
      };
    }
    case FETCH_EDIT_IN_CART: {
      // console.log('statePart edit:', statePart.cart);
      // console.log('action.payload edit:', action.payload);
      const statePartIndex = statePart.cart.findIndex(booking => booking._id === action.payload._id);
      statePart.cart.splice(statePartIndex, 1, action.payload);


      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
          sentToCart: false,
        },
        cart: [...statePart.cart],
      };
    }
    case FETCH_DELETE_FROM_CART: {
      // console.log('statePart delete:', statePart.cart);
      // console.log('action.payload delete:', action.payload);
      const statePartIndex = statePart.cart.findIndex(booking => booking._id === action.payload._id);
      statePart.cart.splice(statePartIndex, 1);

      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
          sentToCart: false,
        },
        cart: [...statePart.cart],
      };
    }
    case FETCH_DELETE_ALL_FROM_CART: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
          sentToCart: false,
        },
        cart: [],
      };
    }
    default:
      return statePart;
  }
};
