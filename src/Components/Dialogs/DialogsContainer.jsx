import React from 'react';
import Dialogs from './Dialogs';
import { sendMessageAction, updateTextMessageAction } from '../../redux/messagesReducer';

const DialogsContainer = (props) => {
    
    let state = props.store.getState();

    let sendMessage = () => {
        props.store.dispatch(sendMessageAction());
    }

    let changeMessage = (value) => {
        props.store.dispatch(updateTextMessageAction(value));
    }

    return (
        <Dialogs dialogs={state.messagePage.dialogsData.dialogs}
                messages={state.messagePage.messagesData.messages}
                newMessage={state.messagePage.messagesData.newMessage}
                sendMessage={sendMessage}
                changeMessage={changeMessage} />
    )
}

export default DialogsContainer;
