import React from 'react';
import st from './DialogsItem.module.css';
import {NavLink} from 'react-router-dom';

const DialogsItem = (props) => {

    let path = "/dialogs/" + props.id;

    return (
        <NavLink to={path} className={st.dialog}>{props.sender}</NavLink>
    )
}

export default DialogsItem;
