import React from 'react';
import st from './Dialog.module.css';

const Dialog = (props) => {
    return (
        <div className={st.name_dialogs}>{props.sender}</div>
    )
}

export default Dialog;
