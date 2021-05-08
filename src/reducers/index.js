import { combineReducers } from 'redux';
import PostsReducer from './posts-reducer';

// Root reducer (top level) uses combineReducers
// to combine multiple reducers together into our redux state.
const rootReducer = combineReducers({
    posts: PostsReducer,
});

export default rootReducer;
