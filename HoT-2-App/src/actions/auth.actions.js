import {SET_CREDENTIALS} from './actionsTypes';

function setCredentials(credentials) {
    return {
        type: SET_CREDENTIALS,
        payload: credentials
    }
}

export default {
    setCredentials
}
