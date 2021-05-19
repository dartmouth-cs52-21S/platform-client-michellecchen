import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import App from './components/app';
import './style.scss';

const store = createStore(reducers, {}, compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
));

const token = localStorage.getItem('token');
if (token) {
    store.dispatch({ type: ActionTypes.AUTH_USER });
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('main'),
);
