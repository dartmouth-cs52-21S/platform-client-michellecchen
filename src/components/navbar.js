import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navigation">
            <NavLink exact to="/">
                <i className="fas fa-home fa-2x" />
            </NavLink>
            <NavLink to="/posts/new">
                <i className="fas fa-plus-square fa-2x" />
            </NavLink>
        </nav>
    );
};

export default NavBar;
