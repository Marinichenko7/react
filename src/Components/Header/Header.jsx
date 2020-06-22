import React from 'react';
import st from './Header.module.css';

const Header = () => {
    return (
        <div>
            <a href="#">
                <img src="https://w0.pngwave.com/png/159/402/earth-globe-global-warming-world-earth-png-clip-art.png" className={st.logo}></img>
            </a>
        </div>
    )
}

export default Header;