import React from 'react';
import st from './MessageMy.module.css';

const MessageMy = (props) => {
    return (
        <div className={st.message_my}>
            <div className={st.my_name}>{props.myname}</div>
            <div className={st.my_text}>{props.mytext}</div>
            <div className={st.my_date}>{props.mydate}</div>
        </div>
    )
}

export default MessageMy;
