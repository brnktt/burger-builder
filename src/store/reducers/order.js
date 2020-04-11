import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  orders: [],
  loading: false,
  purchased: false,
};

const purchaseInit = (state, action) => {
  return updateObject(state, { purchased: false });
};

const purchaseBurgerSuccess = (state, action) => {
  const newOrder = updateObject(action.orderData, { id: action.orderId });
  const updatedState = {
    loading: false,
    purchased: true,
    orders: state.orders.concat(newOrder),
  };
  return updateObject(state, updatedState);
};

const purchaseStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const operationFailed = (state, action) => {
  return updateObject(state, { loading: false });
};

const purchaseOrdersSuccess = (state, action) => {
  const updatedSt = {
    orders: action.orders,
    loading: false,
  };
  return updateObject(state, updatedSt);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_INIT:
      return purchaseInit(state, action);
    case actionTypes.PURCHASE_BURGER_START:
      return purchaseStart(state, action);
    case actionTypes.PURCHASE_BURGER_SUCCESS:
      return purchaseBurgerSuccess(state, action);
    case actionTypes.PURCHASE_BURGER_FAIL:
      return operationFailed(state, action);
    case actionTypes.FETCH_ORDERS_START:
      return purchaseStart(state, action);
    case actionTypes.FETCH_ORDERS_SUCCESS:
      return purchaseOrdersSuccess(state, action);
    case actionTypes.FETCH_ORDERS_FAIL:
      return operationFailed(state, action);
    default:
      return state;
  }
};

export default reducer;
