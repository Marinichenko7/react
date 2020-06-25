import React from 'react';
import st from './Dialog.module.css';
import { NavLink } from 'react-router-dom';

const Dialog = (props) => {
    let path = "/dialogs/" + props.id_sender
    return (
        <NavLink to={path} className={st.name_dialogs}>{props.sender}</NavLink>
    )
}

export default Dialog;
