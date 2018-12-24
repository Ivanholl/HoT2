import { combineReducers } from 'redux';
// import todos from './todos'
// import visibilityFilter from './visibilityFilter'
//
// export default combineReducers({
//   todos,
//   visibilityFilter
// })
//
import authReducers from './auth.reducers';

const rootReducers = {
    auth: authReducers
}

export default combineReducers(rootReducers);
