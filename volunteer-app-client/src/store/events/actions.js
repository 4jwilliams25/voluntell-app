import axios from "axios"
import { GET_EVENTS_PENDING, GET_EVENTS_SUCCESS, GET_EVENTS_FAILED, ADD_EVENT_PENDING, ADD_EVENT_SUCCESS, ADD_EVENT_FAILED, UPDATE_EVENT_PENDING, UPDATE_EVENT_SUCCESS, UPDATE_EVENT_FAILED, DELETE_EVENT_PENDING, DELETE_EVENT_SUCCESS, DELETE_EVENT_FAILED } from "./constants"

export const getEvents = () => {
    return dispatch => {
        dispatch({
            type: GET_EVENTS_PENDING
        });
        axios
            .get("http://localhost:8000/events")
            .then(res => {
                dispatch({
                    type: GET_EVENTS_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                dispatch({
                    type: GET_EVENTS_FAILED,
                    payload: err
                })
            })
    }
}

export const addEvent = (newEvent) => {
    return dispatch => {
        dispatch({
            type: ADD_EVENT_PENDING
        });
        axios
            .post("http://localhost:8000/events", newEvent)
            .then(res => {
                dispatch({
                    type: ADD_EVENT_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                dispatch({
                    type: ADD_EVENT_FAILED,
                    payload: err
                })
            })
    }
}

export const updateEvent = (updatedInfo, id) => {
    return dispatch => {
        dispatch({
            type: UPDATE_EVENT_PENDING
        });
        axios.patch(`http://localhost:8000/events/${id}`, updatedInfo)
        .then(res => {
            dispatch({
                type: UPDATE_EVENT_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: UPDATE_EVENT_FAILED,
                payload: err
            })
        })
    }
}

export const removeEvent = (id) => {
    return dispatch => {
        dispatch({
            type: DELETE_EVENT_PENDING
        });
        axios.delete(`http://localhost:8000/events/${id}`)
        .then(res => {
            dispatch({
                type: DELETE_EVENT_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: DELETE_EVENT_FAILED,
                payload: err
            })
        })
    }
}