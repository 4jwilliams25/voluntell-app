import { GET_EVENTS_PENDING, GET_EVENTS_SUCCESS, GET_EVENTS_FAILED, ADD_EVENT_PENDING, ADD_EVENT_SUCCESS, ADD_EVENT_FAILED, UPDATE_EVENT_PENDING, DELETE_EVENT_PENDING, DELETE_EVENT_SUCCESS, UPDATE_EVENT_FAILED, UPDATE_EVENT_SUCCESS } from "./constants";

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_EVENTS_PENDING:
            return state;
        case GET_EVENTS_SUCCESS:
            return action.payload;
        case GET_EVENTS_FAILED:
            return action.payload;
        case ADD_EVENT_PENDING:
            return state;
        case ADD_EVENT_SUCCESS:
            return [action.payload, ...state];
        case ADD_EVENT_FAILED:
            return action.payload;
        case UPDATE_EVENT_PENDING:
            return state;
        case UPDATE_EVENT_SUCCESS:
            return state.map(event => event.id === action.payload.id ? action.payload : event);
        case UPDATE_EVENT_FAILED:
            return action.payload
        case DELETE_EVENT_PENDING:
            return state;
        case DELETE_EVENT_SUCCESS:
            return [...state.filter(event => event.id !== action.payload.id)];
        default:
            return state;
    }
}