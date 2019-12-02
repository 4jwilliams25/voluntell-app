import { GET_USERS_PENDING, GET_USERS_SUCCESS, GET_USERS_FAILED, ADD_USER_PENDING, ADD_USER_SUCCESS, ADD_USER_FAILED, UPDATE_USER_PENDING, DELETE_USER_PENDING, DELETE_USER_SUCCESS, UPDATE_USER_FAILED, UPDATE_USER_SUCCESS } from "./constants";

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS_PENDING:
            return state;
        case GET_USERS_SUCCESS:
            return action.payload;
        case GET_USERS_FAILED:
            return action.payload;
        case ADD_USER_PENDING:
            return state;
        case ADD_USER_SUCCESS:
            return [action.payload, ...state];
        case ADD_USER_FAILED:
            return action.payload;
        case UPDATE_USER_PENDING:
            return state;
        case UPDATE_USER_SUCCESS:
            return state.map(user => user.id === action.payload.id ? action.payload : user);
        case UPDATE_USER_FAILED:
            return action.payload
        case DELETE_USER_PENDING:
            return state;
        case DELETE_USER_SUCCESS:
            return [...state.filter(user => user.id !== action.payload.id)];
        default:
            return state;
    }
}