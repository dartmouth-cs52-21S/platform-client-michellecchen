import { combineReducers } from 'redux';
import PostsReducer from './posts-reducer';
import AuthReducer from './auth-reducer';

// Root reducer (top level) uses combineReducers
// to combine multiple reducers together into our redux state.
const rootReducer = combineReducers({
    posts: PostsReducer,
    auth: AuthReducer,
});

export default rootReducer;
