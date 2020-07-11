import React from 'react';
import Dialogs from './Dialogs';
import { sendMessageAction, updateTextMessageAction } from '../../redux/messagesReducer';
import {connect} from 'react-redux';

/*const DialogsContainer = (props) => {
    
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
}*/

let mapStateToProps = (state) => {
    return{
        dialogs: state.messagePage.dialogs,
        messages: state.messagePage.messages,
        newMessage: state.messagePage.newMessage
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        sendMessage: () => {
            dispatch(sendMessageAction())
        },
        changeMessage: (value) => {
            dispatch(updateTextMessageAction(value))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
