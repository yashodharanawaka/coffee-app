import { ORDER_COFFEE, ORDER_COFFEE_FAILURE, ORDER_COFFEE_SUCCESS } from "../constants/actionTypes";

const initialState = {
    response: '',
    loading: false,
    hasErrors: false,
};

const requestCoffee = (state = initialState, action) => {
    switch (action.type) {
        case ORDER_COFFEE:
            return { ...state, loading: true };
        case ORDER_COFFEE_FAILURE:
            return { ...state, hasErrors: true };
        case ORDER_COFFEE_SUCCESS:
            return {
                response: action.payload.request,
                loading: false,
                hasErrors: false
            };
        default:
            return state;
    }
}

export default requestCoffee
