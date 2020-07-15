import React from 'react';
import st from './Nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <ul className={st.nav_items}>
                <li><NavLink to="/profile" activeClassName={st.active}>Profile</NavLink></li>
                <li><NavLink to="/dialogs" activeClassName={st.active}>Messages</NavLink></li>
                <li><NavLink to="/news" activeClassName={st.active}>News</NavLink></li>
                <li><NavLink to="/music" activeClassName={st.active}>Music</NavLink></li>
                <li><NavLink to="/users" activeClassName={st.active}>Users</NavLink></li>
                <li><NavLink to="/settings" activeClassName={st.active}>Settings</NavLink></li>
            </ul>
        </div>
    )
}

export default Nav;