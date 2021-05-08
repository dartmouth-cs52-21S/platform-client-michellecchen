import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Posts from './posts';
import Post from './post';
import NavBar from './navbar';
import NewPost from './newpost';
import Fallback from './fallback';

const App = (props) => {
    return (
        <Router>
            <div>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={Posts} />
                    <Route path="/posts/new" component={NewPost} />
                    <Route path="/posts/:postID" component={Post} />
                    <Route component={Fallback} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
