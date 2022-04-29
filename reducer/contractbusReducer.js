import { GET_BUSES, GET_CONTRACT_BUS, GET_TICKETS, GET_USERS, REG_BUS, REG_CONTRACT_BUS } from "../actions/types";
const initialState = {
    loading: false,
    errors: null,
    buses: null
}
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CONTRACT_BUS:
            return {
                ...state,
                buses: action.payload
            }
        case REG_CONTRACT_BUS:
            return {
                ...state,
                buses: action.payload
            }
        default:
            return state;

    }
}