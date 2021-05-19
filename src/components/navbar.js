import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';

import { signoutUser } from '../actions';

const NavBar = (props) => {
    if (props.authenticated) {
        return (
            <nav className="navigation">
                <NavLink exact to="/">
                    <i className="fas fa-home fa-2x" />
                </NavLink>

                <div id="rightside-options">
                    <NavLink to="/posts/new">
                        <i className="fas fa-plus-square fa-2x" />
                    </NavLink>
                    <NavLink to="/" onClick={props.signoutUser}>
                        <i className="fas fa-door-open fa-2x" />
                    </NavLink>
                </div>
            </nav>
        );
    } else {
        return (
            <nav className="navigation">
                <NavLink exact to="/">
                    <i className="fas fa-home fa-2x" />
                </NavLink>
                <div id="rightside-options">
                    <NavLink to="/posts/new">
                        <i className="fas fa-plus-square fa-2x" />
                    </NavLink>
                    <NavLink to="/signin">
                        <Button>Log in</Button>
                    </NavLink>
                    <NavLink to="/signup">
                        <Button>Sign up</Button>
                    </NavLink>
                </div>
            </nav>
        );
    }
};

const mapStateToProps = (reduxState) => {
    return { authenticated: reduxState.auth.authenticated };
};

export default withRouter(connect(mapStateToProps, { signoutUser })(NavBar));
