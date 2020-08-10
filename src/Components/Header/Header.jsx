import React from 'react';
import st from './Header.module.css';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
    
    return (
        <div>
            <NavLink to='/profile' className={st.logoBtn}>
                <img src="https://w0.pngwave.com/png/159/402/earth-globe-global-warming-world-earth-png-clip-art.png" className={st.logo}></img>
            </NavLink>
            <div className={st.loginBtn}>
                
                {props.authDone ? <div>You did Auth</div> : <NavLink to='/login' className={st.loginLink}>Login</NavLink>}
                
            </div>
        </div>
    )
}

export default Header;