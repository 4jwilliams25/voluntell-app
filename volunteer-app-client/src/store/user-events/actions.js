import axios from "axios"
import { GET_USEREVENTS_PENDING, GET_USEREVENTS_SUCCESS, GET_USEREVENTS_FAILED, ADD_USEREVENT_PENDING, ADD_USEREVENT_SUCCESS, ADD_USEREVENT_FAILED, DELETE_USEREVENT_PENDING, DELETE_USEREVENT_SUCCESS, DELETE_USEREVENT_FAILED } from "./constants"

export const getUserEvents = () => {
    return dispatch => {
        dispatch({
            type: GET_USEREVENTS_PENDING
        });
        axios
            .get("http://localhost:8000/user_events")
            .then(res => {
                dispatch({
                    type: GET_USEREVENTS_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                dispatch({
                    type: GET_USEREVENTS_FAILED,
                    payload: err
                })
            })
    }
}

export const addUserEvent = (newEvent) => {
    return dispatch => {
        dispatch({
            type: ADD_USEREVENT_PENDING
        });
        axios
            .post("http://localhost:8000/user_events", newEvent)
            .then(res => {
                dispatch({
                    type: ADD_USEREVENT_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                dispatch({
                    type: ADD_USEREVENT_FAILED,
                    payload: err
                })
            })
    }
}

export const removeUserEvent = (id) => {
    return dispatch => {
        dispatch({
            type: DELETE_USEREVENT_PENDING
        });
        axios.delete(`http://localhost:8000/user_events/${id}`)
        .then(res => {
            dispatch({
                type: DELETE_USEREVENT_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: DELETE_USEREVENT_FAILED,
                payload: err
            })
        })
    }
}