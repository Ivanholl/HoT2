import {SET_CREDENTIALS} from './actionsTypes';
import axiosInstance from '../axiosInstance.js';

function setCredentials(credentials) {
    return {
        type: SET_CREDENTIALS,
        payload: credentials
    }
}

function logout() {
    return (dispatch) => dispatch(setCredentials(''))
}

function login(credentials) {
    return (dispatch) => {
        axiosInstance.axiosPost('/users/login', credentials)
            .then((response) => {
                console.log(response);
                dispatch(setCredentials(response))
            })
            .catch((error) => {
                console.error(error);
            });
    }

}

function register(credentials) {
    return (dispatch) => {
        axiosInstance.axiosPost('/users/register', credentials)
            .then((response) => {
                console.log(response);
                dispatch(setCredentials(response))
            })
            .catch((error) => {
                console.error(error);
            });
    }

}
export default {
    login,
    logout,
    register
}
