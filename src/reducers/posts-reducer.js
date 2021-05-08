import { ActionTypes } from '../actions';

const initialState = {
    all: [],
    current: {},
};

// Currently only need to respond to 2 ActionTypes: FETCH_POST and FETCH_POSTS
// FETCH_POSTS: Return the state object with 'all' property set to the new posts
// FETCH_POST: Return single post
// **added UPDATE_POST
const PostsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_POST:
            return {
                ...state,
                current: action.payload,
            };
        case ActionTypes.FETCH_POSTS:
            return {
                ...state,
                all: action.payload,
            };
        case ActionTypes.UPDATE_POST:
            return {
                ...state,
                current: action.payload,
            };
        default:
            return state;
    }
};

export default PostsReducer;
