import axios from "axios"
import { GET_USERS_PENDING, GET_USERS_SUCCESS, GET_USERS_FAILED, ADD_USER_PENDING, ADD_USER_SUCCESS, ADD_USER_FAILED, UPDATE_USER_PENDING, UPDATE_USER_SUCCESS, UPDATE_USER_FAILED, DELETE_USER_PENDING, DELETE_USER_SUCCESS, DELETE_USER_FAILED } from "./constants"

export const getUsers = () => {
    return dispatch => {
        dispatch({
            type: GET_USERS_PENDING
        });
        axios
            .get("http://localhost:8000/users")
            .then(res => {
                dispatch({
                    type: GET_USERS_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                dispatch({
                    type: GET_USERS_FAILED,
                    payload: err
                })
            })
    }
}

export const addUser = (newUser) => {
    return dispatch => {
        dispatch({
            type: ADD_USER_PENDING
        });
        axios
            .post("http://localhost:8000/users", newUser)
            .then(res => {
                dispatch({
                    type: ADD_USER_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                dispatch({
                    type: ADD_USER_FAILED,
                    payload: err
                })
            })
    }
}

export const updateUser = (updatedInfo, id) => {
    return dispatch => {
        dispatch({
            type: UPDATE_USER_PENDING
        });
        axios.patch(`http://localhost:8000/users/${id}`, updatedInfo)
        .then(res => {
            dispatch({
                type: UPDATE_USER_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: UPDATE_USER_FAILED,
                payload: err
            })
        })
    }
}

export const removeUser = (id) => {
    return dispatch => {
        dispatch({
            type: DELETE_USER_PENDING
        });
        axios.delete(`http://localhost:8000/users/${id}`)
        .then(res => {
            dispatch({
                type: DELETE_USER_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: DELETE_USER_FAILED,
                payload: err
            })
        })
    }
}