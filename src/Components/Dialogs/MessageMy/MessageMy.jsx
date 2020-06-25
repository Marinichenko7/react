import React from 'react';
import st from './MessageMy.module.css';

const MessageMy = (props) => {
    return (
        <div className={st.message_my_block}>
            <div className={st.message_my}>
                <div className={st.my_name}>{props.sender}</div>
                <div className={st.my_text}>{props.text}</div>
                <div className={st.my_date}>{props.date}</div>
            </div>
        </div>
    )
}

export default MessageMy;
