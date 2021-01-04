import * as actions from "../constants/actionTypes";
import axios from "axios";

export const getAllCoffee = () => ({
  type: actions.GET_ALL_COFFEE,
});

export const getAllCoffeeSuccess = (orders) => ({
  type: actions.GET_ALL_COFFEE_SUCCESS,
  payload: orders,
});

export const getAllCoffeeFailure = () => ({
  type: actions.GET_ALL_COFFEE_FAILURE,
});

export const orderCoffee = (request) => ({
  type: actions.ORDER_COFFEE,
  payload: {
    id: request.id,
    coffeeType: request.coffeeType,
    amount: request.amount
  }
});

export const orderCoffeeSuccess = (response) => ({
  type: actions.ORDER_COFFEE_SUCCESS,
  payload: response
});

export const orderCoffeeFailure = () => ({
  type: actions.ORDER_COFFEE_FAILURE,
});

// Combine them all in an asynchronous thunk
export function fetchAllTheOrders() {
  return async (dispatch) => {
    dispatch(getAllCoffee());
    try {
      const response = (
        await axios.get(
          "https://56g5y.mocklab.io/allCoffeeOrders"
        )
      ).data;
      console.log(response);
      dispatch(getAllCoffeeSuccess(response));
    } catch (error) {
      dispatch(getAllCoffeeFailure());
    }
  };
}

// (params) => {

// }

export function placeOrder(request) {
  return (dispatch) => {
    dispatch(orderCoffee(request));
    // console.log("Inside placeOrder function");
    try {
      // console.log("Inside try block");
      const response = (
        axios.post(
          "https://56g5y.mocklab.io/placeOrder",
          { id: 7, coffeeType: request.coffeeType, amount: request.amount }
        )
      ).data;
      console.log("response:" + response);
      // dispatch(orderCoffeeSuccess(response));
    } catch (error) {
      // console.log("Inside catch block");
      dispatch(orderCoffeeFailure());
    }
  };
}