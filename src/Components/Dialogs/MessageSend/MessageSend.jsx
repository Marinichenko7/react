import React from 'react';
import st from './MessageSend.module.css';


const MessageSend = (props) => {
    
    let messageHref = React.createRef();

    let messageText = () => {
        let messageText = messageHref.current.value;
        alert(messageText);
    }
    

    console.log(messageText);

    return (
        <div className={st.send_message_block}>
            <input ref={messageHref} className={st.message_input} type='text' placeholder='Message text...'></input>
            <button onClick={messageText} className={st.send_message_btn}>Send</button>
        </div>
    )
}

export default MessageSend;
