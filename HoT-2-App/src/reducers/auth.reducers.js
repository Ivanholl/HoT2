import { SET_CREDENTIALS } from '../actions/actionsTypes.js'

const initialState = {
    // auth: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_CREDENTIALS:
            return state = Object.assign({},  action.payload);
        default:
            return state;
    }
}
