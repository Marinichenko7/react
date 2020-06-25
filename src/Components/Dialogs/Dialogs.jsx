import React from 'react';
import st from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import MessageFrend from './MessageFrend/MessageFrend';
import MessageMy from './MessageMy/MessageMy';

const Dialogs = () => {
    return (
        <div className={st.columns_dialogs}>
            <div className={st.column_dialogs}>
                <Dialog id_sender='1' sender='Kolya' />
                <Dialog id_sender='2' sender='Misha' />
                <Dialog id_sender='3' sender='Valentina' />
                <Dialog id_sender='4' sender='Dima' />
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
