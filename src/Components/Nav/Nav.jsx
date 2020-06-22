import React from 'react';
import st from './Nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <ul className={st.nav_items}>
                <li><NavLink to="/Profile" activeClassName={st.active}>Profile</NavLink></li>
                <li><NavLink to="/Dialogs" activeClassName={st.active}>Messages</NavLink></li>
                <li><NavLink to="/News" activeClassName={st.active}>News</NavLink></li>
                <li><NavLink to="/Music" activeClassName={st.active}>Music</NavLink></li>
                <li><NavLink to="/Settings" activeClassName={st.active}>Settings</NavLink></li>
            </ul>
        </div>
    )
}

export default Nav;