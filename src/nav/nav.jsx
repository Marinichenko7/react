import React from 'react';
import './nav.css';

const Nav = () => {
    return (
        <nav className="nav">
            <ul className="nav-items">
                <li><a href="#">Profile</a></li>
                <li><a href="#">Messages</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Music</a></li>
                <li><a href="#">Settings</a></li>
            </ul>
        </nav>
    )
}

export default Nav;