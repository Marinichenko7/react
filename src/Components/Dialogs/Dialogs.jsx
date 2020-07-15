import React from 'react';
import st from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import MessagesItem from './MessagesItem/MessagesItem';
import MessageSend from './MessageSend/MessageSend';


const Dialogs = (props) => {
    
    let allDialogs = props.dialogs.map( (d) => <DialogsItem key={d.id} id={d.id} sender={d.sender} />);
    let allMessages = props.messages.map( (m) => <MessagesItem key={m.id} id={m.id} sender={m.sender} text ={m.text} date={m.date} />);


    return (
        <div className={st.columns_dialogs}>
            <div className={st.column_dialogs}>
                { allDialogs }
            </div>
            <div className={st.column_messages}>
                <div className={st.block_message}>
                    { allMessages }
                </div>
                <MessageSend newMessage={props.newMessage}
                            changeMessage={props.changeMessage}
                            sendMessage={props.sendMessage} />
            </div>
        </div>
    )
}

export default Dialogs;
