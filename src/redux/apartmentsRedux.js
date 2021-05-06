/* selectors */
export const getAllApartments = ({apartments}) => apartments.data;
export const getOneApartment = ({apartments}, id) => apartments.data.find(item => item.id === id);
export const getFromCart = ({apartments}) => apartments.cart;
export const getOneFromCart = ({apartments}, id) => apartments.cart.find(item => item.id === id);

/* action name creator */
const reducerName = 'apartments';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const FETCH_ADD_TO_CART = createActionName('FETCH_ADD_TO_CART');
const FETCH_EDIT_IN_CART = createActionName('FETCH_EDIT_IN_CART');
const FETCH_DELETE_FROM_CART = createActionName('FETCH_DELETE_FROM_CART');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const fetchAddToCart = payload => ({ payload, type: FETCH_ADD_TO_CART });
export const fetchEditInCart = payload => ({ payload, type: FETCH_EDIT_IN_CART});
export const fetchDeleteFromCart = payload => ({ payload, type: FETCH_DELETE_FROM_CART});


/* thunk creators */

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
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
        },
      };
    }
    case FETCH_ADD_TO_CART: {
      // console.log('...statePart:', ...statePart);
      // console.log('action.payload:', action.payload);
      return {
        ...statePart,
        cart: [...statePart.cart, action.payload],
      };
    }
    case FETCH_EDIT_IN_CART: {
      const statePartIndex = statePart.cart.findIndex(booking => booking.id === action.payload.id);
      statePart.cart.splice(statePartIndex, 1, action.payload);
      // console.log('action.payload', action.payload);

      return {
        ...statePart,
        cart: [...statePart.cart],
      };
    }
    case FETCH_DELETE_FROM_CART: {
      const statePartIndex = statePart.cart.findIndex(booking => booking.id === action.payload.id);
      statePart.cart.splice(statePartIndex, 1);
      console.log('action.payload', action.payload);
      return {
        ...statePart,
        cart: [...statePart.cart],
      };
    }
    default:
      return statePart;
  }
};
