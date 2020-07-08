import React from 'react';
import st from './MessageSend.module.css';
import { sendMessageAction, updateTextMessageAction } from '../../../redux/messagesReducer';


const MessageSend = (props) => {
    
    let messageHref = React.createRef();

    let messageText = () => {

        props.dispatch(sendMessageAction());
    }

    let changeMessage = () => {
        let messageText = messageHref.current.value;
        props.dispatch(updateTextMessageAction(messageText));
    }

    return (
        <div className={st.send_message_block}>
            <input onChange={changeMessage} ref={messageHref} className={st.message_input} type='text' value={props.messageData.newMessage}></input>
            <button onClick={messageText} className={st.send_message_btn}>Send</button>
        </div>
    )
}

export default MessageSend;
