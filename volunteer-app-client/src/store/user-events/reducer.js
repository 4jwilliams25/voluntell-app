import { GET_USEREVENTS_PENDING, GET_USEREVENTS_SUCCESS, GET_USEREVENTS_FAILED, ADD_USEREVENT_PENDING, ADD_USEREVENT_SUCCESS, ADD_USEREVENT_FAILED, DELETE_USEREVENT_PENDING, DELETE_USEREVENT_SUCCESS } from "./constants";

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_USEREVENTS_PENDING:
            return state;
        case GET_USEREVENTS_SUCCESS:
            return action.payload;
        case GET_USEREVENTS_FAILED:
            return action.payload;
        case ADD_USEREVENT_PENDING:
            return state;
        case ADD_USEREVENT_SUCCESS:
            return [action.payload[0], ...state];
        case ADD_USEREVENT_FAILED:
            return action.payload;
        case DELETE_USEREVENT_PENDING:
            return state;
        case DELETE_USEREVENT_SUCCESS:
            let newState = state.filter(event => event.id !== action.payload[0].id)
            return newState;
        default:
            return state;
    }
}