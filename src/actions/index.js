import axios from 'axios';

const ROOT_URL = 'https://blog-michellecchen.herokuapp.com/api';
const API_KEY = '?key=michelle_chen';

// keys for actiontypes
export const ActionTypes = {
    FETCH_POST: 'FETCH_POST',
    FETCH_POSTS: 'FETCH_POSTS',
    UPDATE_POST: 'UPDATE_POST',
    CREATE_POST: 'CREATE_POST',
    DELETE_POST: 'DELETE_POST',
};

// Methods
// Return function that takes dispatch as its argument
// Runs an axios call
// Dispatches an action

export function fetchPost(id) {
    // Dispatch handles distributing actions ot reducers.
    // Can accept functions alongside action objects.
    // These functions can then run async methods and can manually dispatch more actions
    // upon being returned!
    return (dispatch) => {
        axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`).then((response) => {
            if (!('message' in response.data)) {
                dispatch({
                    type: ActionTypes.FETCH_POST,
                    payload: response.data,
                });
            } else {
                //error?
            }
        }).catch((error) => {
            //...
        });
    };
}

export function fetchPosts() {
    return (dispatch) => {
        axios.get(`${ROOT_URL}/posts${API_KEY}`).then((response) => {
            // do something with response.data (some json)
            console.log('response:');
            console.log(response);
            dispatch({
                type: ActionTypes.FETCH_POSTS,
                payload: response.data,
            });
        }).catch((error) => {
            // hit an error to do someting else!
            console.log('error');
            console.log(error);
        });
    };
}

export function createPost(post, history) {
    return (dispatch) => {
        axios.post(`${ROOT_URL}/posts/${API_KEY}`, post).then((response) => {
            dispatch({
                type: ActionTypes.CREATE_POST,
                payload: response.data,
            });
            // navigate back to starting page
            history.push('/');
            console.log('response');
            console.log(response);
        }).catch((error) => {
            console.log('error');
            console.log(error);
        });
    };
}

// Why callback?
export function updatePost(post, callback) {
    return (dispatch) => {
        axios.put(`${ROOT_URL}/posts/${post.id}${API_KEY}`, post).then((response) => {
            dispatch({
                type: ActionTypes.UPDATE_POST,
                payload: response.data,
            });
            callback();
        }).catch((error) => {
            //...
        });
    };
}

// When you hit delete on a blog post 'Post' page, return to the Posts page.
// history.push('/') for navigation
export function deletePost(id, history) {
    return (dispatch) => {
        axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`).then((response) => {
            dispatch({
                type: ActionTypes.DELETE_POST,
                payload: response.data,
            });
            // navigate back to starting page
            history.push('/');
        }).catch((error) => {
            //...
        });
    };
}
