import React from 'react';
import st from './Nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <ul className={st.nav_items}>
                <li><NavLink to="/Profile" activeClassName={st.active}>Profile</NavLink></li>
                <li><NavLink to="/Dialogs" activeClassName={st.active}>Messages</NavLink></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Music</a></li>
                <li><a href="#">Settings</a></li>
            </ul>
        </div>
    )
}

export default Nav;