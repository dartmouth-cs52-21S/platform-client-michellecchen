import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Posts from './posts';
import Post from './post';
import NavBar from './navbar';
import NewPost from './newpost';
import Fallback from './fallback';

import SignIn from './signin';
import SignUp from './signup';
import PrivateRoute from './privateRoute';

const App = (props) => {
    return (
        <Router>
            <div>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={Posts} />
                    <PrivateRoute path="/posts/new" component={NewPost} />
                    <Route path="/posts/:postID" component={Post} />
                    <Route path="/signin" component={SignIn} />
                    <Route path="/signup" component={SignUp} />
                    <Route component={Fallback} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
