import React from 'react';
import st from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import MessageFrend from './MessageFrend/MessageFrend';
import MessageMy from './MessageMy/MessageMy';

let DialogsData = [
    {id: 1, sender: 'Kolya'},
    {id: 2, sender: 'Misha'},
    {id: 3, sender: 'Valentina'},
    {id: 4, sender: 'Dima'}
]
let MessagesData = [
    {id: 1, sender: 'Kolya', text: 'Hi! Whats up?', date: '3 sept 18:31'},
    {id: 2, sender: 'Vitya', text: 'Hello! I`m fine. Now i have a dinner. And you?', date: '3 sept 18:33'}
]

const Dialogs = () => {
    return (
        <div className={st.columns_dialogs}>
            <div className={st.column_dialogs}>
                <Dialog id={DialogsData[0].id} sender={DialogsData[0].sender} />
                <Dialog id={DialogsData[1].id} sender={DialogsData[1].sender} />
                <Dialog id={DialogsData[2].id} sender={DialogsData[2].sender} />
                <Dialog id={DialogsData[3].id} sender={DialogsData[3].sender} />
            </div>
            <div className={st.column_messages}>
                <MessageFrend sender={MessagesData[0].sender} text={MessagesData[0].text} date={MessagesData[0].date} />
                <MessageMy sender={MessagesData[1].sender} text={MessagesData[1].text} date={MessagesData[1].date} />
            </div>
        </div>
    )
}

export default Dialogs;
