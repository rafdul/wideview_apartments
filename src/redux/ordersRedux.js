import Axios from 'axios';

/* selectors */
export const getAllOrders = ({orders}) => orders.data;
export const getLoading = ({orders}) => orders.loading;

/* action name creator */
const reducerName = 'orders';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_ORDERS_START = createActionName('FETCH_ORDERS_START');
const FETCH_ORDERS_SUCCESS = createActionName('FETCH_ORDERS_SUCCESS');
const FETCH_ORDERS_ERROR = createActionName('FETCH_ORDERS_ERROR');
const FETCH_ORDERS_SAVE = createActionName('FETCH_ORDERS_SAVE');

/* action creators */
export const fetchOrdersStarted = payload => ({ payload, type: FETCH_ORDERS_START });
export const fetchOrdersSuccess = payload => ({ payload, type: FETCH_ORDERS_SUCCESS });
export const fetchOrdersError = payload => ({ payload, type: FETCH_ORDERS_ERROR });
export const fetchOrdersSave = payload => ({ payload, type: FETCH_ORDERS_SAVE });

/* thunk creators */
export const fetchAddNewOrder = (order) => {
  return(dispatch, getState) => {
    // console.log('getState w fetchu', getState);
    console.log('order', order);

    dispatch(fetchOrdersStarted());

    Axios
      .post('http://localhost:8000/api/cart', order)
      .then(res => {
        dispatch(fetchOrdersSave(order));
      })
      .catch(err => {
        dispatch(fetchOrdersError(err.message || true));
      });
  };
};

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case FETCH_ORDERS_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_ORDERS_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ORDERS_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    case FETCH_ORDERS_SAVE: {
      console.log('action.payload w fetch orders save:', action.payload);
      console.log('statePart w fetch orders save:', statePart);
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
          done: true,
        },
        data: [...statePart.data, action.payload],
      };
    }
    default:
      return statePart;
  }
};
