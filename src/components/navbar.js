import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signoutUser } from '../actions';

const NavBar = (props) => {
    if (props.authenticated) {
        return (
            <nav className="navigation">
                <NavLink exact to="/">
                    <i className="fas fa-home fa-2x" />
                </NavLink>
                <NavLink to="/posts/new">
                    <i className="fas fa-plus-square fa-2x" />
                </NavLink>
                <NavLink to="/" onClick={props.signoutUser}>
                    <i className="fas fa-door-open" />
                </NavLink>
            </nav>
        );
    } else {
        return (
            <nav className="navigation">
                <NavLink exact to="/">
                    <i className="fas fa-home fa-2x" />
                </NavLink>
                <NavLink to="/posts/new">
                    <i className="fas fa-plus-square fa-2x" />
                </NavLink>
                <NavLink to="/signIn">Sign in</NavLink>
                <NavLink to="/signUp">Sign up</NavLink>
            </nav>
        );
    }
};

const mapStateToProps = (reduxState) => {
    return { authenticated: reduxState.auth.authenticated };
};

export default connect(mapStateToProps, { signoutUser })(NavBar);
