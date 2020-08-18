import React from 'react';
import Dialogs from './Dialogs';
import { sendMessage, updateTextMessage } from '../../redux/messagesReducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

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
    return {
        dialogs: state.messagePage.dialogs,
        messages: state.messagePage.messages,
        newMessage: state.messagePage.newMessage,
    }
}


export default compose(
    connect(mapStateToProps, { sendMessage, updateTextMessage }),
    withAuthRedirect
)(Dialogs)
