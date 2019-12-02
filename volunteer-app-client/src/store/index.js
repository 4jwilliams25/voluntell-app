import { createStore, combineReducers, applyMiddleware } from "redux";
import usersReducer from "../store/users/reducer";
import eventsReducer from "../store/events/reducer";
import userEventsReducer from "../store/user-events/reducer";

import thunk from "redux-thunk";
import logger from "redux-logger";

const rootReducer = combineReducers({
    users: usersReducer,
    events: eventsReducer,
    userEvents: userEventsReducer
});

const middleware = [thunk, logger];

export default createStore(rootReducer, applyMiddleware(...middleware));