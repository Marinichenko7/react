import React from 'react';
import st from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import MessageFrend from './MessageFrend/MessageFrend';
import MessageMy from './MessageMy/MessageMy';


const Dialogs = (props) => {
    let DialogsItem = props.dialogs.map(dialog => <Dialog id={dialog.id} sender={dialog.sender} />);
    let MessagesItem = props.messages.map( message => <MessageFrend sender={message.sender} text={message.text} date={message.date} />);

    return (
        <div className={st.columns_dialogs}>
            <div className={st.column_dialogs}>
                { DialogsItem }
            </div>
            <div className={st.column_messages}>
                { MessagesItem }
            </div>
        </div>
    )
}

export default Dialogs;
