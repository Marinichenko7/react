import React from 'react';
import Dialogs from './Dialogs';
import { sendMessage } from '../../redux/messagesReducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";


let mapStateToProps = (state) => {
    return {
        dialogs: state.messagePage.dialogs,
        messages: state.messagePage.messages,
    }
}


export default compose(
    connect(mapStateToProps, { sendMessage }),
    withAuthRedirect
)(Dialogs)
