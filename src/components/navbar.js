import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navigation">
            <NavLink exact to="/">
                <i className="fas fa-home" />
            </NavLink>
            <NavLink to="/posts/new">
                <i className="fas fa-plus-square" />
            </NavLink>
        </nav>
    );
};

export default NavBar;
