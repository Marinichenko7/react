import React from 'react';
import st from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    const logo = "https://w0.pngwave.com/png/159/402/earth-globe-global-warming-world-earth-png-clip-art.png";
    return (
        <div>
            <NavLink to='/profile' className={st.logoBtn}>
                <img alt={logo} src={logo} className={st.logo}></img>
            </NavLink>
            <div className={st.loginBtn}>

                {
                    props.isAuth
                        ? <div><NavLink to='/profile' className={st.name_user}>{props.login}</NavLink><button onClick={props.logOutMe}>Log Out</button></div>
                        : <NavLink to='/login' className={st.loginLink}>log in</NavLink>
                }

            </div>
        </div>
    )
}

export default Header;