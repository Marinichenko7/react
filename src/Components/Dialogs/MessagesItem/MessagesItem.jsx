import React from 'react';
import st from './MessagesItem.module.css';

const MessagesItem = (props) => {

    return (
        <div className={st.message_block}>
            <div className={st.message}>
                <div className={st.sender_name}>{props.sender}</div>
                <div className={st.sender_text}>{props.text}</div>
                <div className={st.sender_date}>{props.date}</div>
            </div>
        </div>
    )
}

export default MessagesItem;
