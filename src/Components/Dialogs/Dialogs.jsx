import React from 'react';
import st from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import MessageFrend from './MessageFrend/MessageFrend';
import MessageMy from './MessageMy/MessageMy';

const Dialogs = () => {
    return (
        <div className={st.columns_dialogs}>
            <div className={st.column_dialogs}>
                <Dialog sender='Kolya' />
                <Dialog sender='Misha' />
                <Dialog sender='Valentina' />
                <Dialog sender='Dima' />
            </div>
            <div className={st.column_messages}>
                <MessageFrend sender="Kolya" text="Hi! Whats up?" date="3 sept 18:31" />
                <MessageMy myname="Vitya" mytext="Hello! I`m fine. Now i have a dinner. And you?" mydate="3 sept 18:33" />
                <MessageFrend sender="Kolya" text="Hi! Whats up?" date="3 sept 18:31" />
                <MessageMy myname="Vitya" mytext="Hello! I`m fine. Now i have a dinner. And you?" mydate="3 sept 18:33" />
            </div>
        </div>
    )
}

export default Dialogs;
