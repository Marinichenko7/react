import React from 'react';
import st from './MessageSend.module.css';


const MessageSend = (props) => {
    
    let messageHref = React.createRef();

    let messageText = () => {
        
        props.dispatch({ type: "SEND-MESSAGE" });
    }

    let changeMessage = () => {
        let messageText = messageHref.current.value;
        props.dispatch({ type: "UPDATE-TEXT-MESSAGE", text: messageText });
    }

    return (
        <div className={st.send_message_block}>
            <input onChange={changeMessage} ref={messageHref} className={st.message_input} type='text' value={props.messageData.newMessage}></input>
            <button onClick={messageText} className={st.send_message_btn}>Send</button>
        </div>
    )
}

export default MessageSend;
