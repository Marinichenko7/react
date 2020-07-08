import React from 'react';
import st from './MessageSend.module.css';

const MessageSend = (props) => {
    
    let valueInput = React.createRef();

    let onSendMessage = () => {
        props.sendMessage();
    }

    let onChangeMessage = () => {
        let value = valueInput.current.value;
        props.changeMessage(value);
    }

    return (
        <div className={st.send_message_block}>
            <input onChange={onChangeMessage} ref={valueInput} className={st.message_input} type='text' value={props.newMessage}></input>
            <button onClick={onSendMessage} className={st.send_message_btn}>Send</button>
        </div>
    )
}

export default MessageSend;
