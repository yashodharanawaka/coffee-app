import * as actions from "../constants/actionTypes";

export const initialState = {
    orders: [],
    loading: false,
    hasErrors: false
}

const viewCoffeeOrders = (state = initialState, action) => {
    switch (action.type) {
        case actions.GET_ALL_COFFEE:
            return { ...state, loading: true };
        case actions.GET_ALL_COFFEE_SUCCESS:
            return {
                orders: action.payload.orders,
                loading: false,
                hasErrors: false
            };
        case actions.GET_ALL_COFFEE_FAILURE:
            return { ...state, hasErrors: true };
        default:
            return state;
    }
}

export default viewCoffeeOrders
