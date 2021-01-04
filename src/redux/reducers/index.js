import { combineReducers } from "redux";
import requestCoffeeReducer from "./requestCoffee";
import viewCoffeeOrdersReducer from "./viewCoffeeOrders";

const rootReducer = combineReducers({
    request: requestCoffeeReducer,
    orders: viewCoffeeOrdersReducer

});

export default rootReducer
