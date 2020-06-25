import React from 'react';
import st from './MessageFrend.module.css';

const MessageFrend = (props) => {
    return (
        <div className={st.message_frend_block}>
            <div className={st.message_frend}>
                <div className={st.sender_name}>{props.sender}</div>
                <div className={st.sender_text}>{props.text}</div>
                <div className={st.sender_date}>{props.date}</div>
            </div>
        </div>
    )
}

export default MessageFrend;
