import React from 'react';
import st from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={st.nav}>
            <ul className={st.nav_items}>
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