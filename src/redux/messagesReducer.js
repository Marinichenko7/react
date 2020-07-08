const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_TEXT_MESSAGE = "UPDATE-TEXT-MESSAGE";

const messagesProducer = (state, action) => {
    
    switch(action.type) {
        case SEND_MESSAGE:
            let dateAction = new Date().toLocaleString();
            let objMessage = {
                id: state.messages.length,
                sender: 'User',
                text: state.newMessage,
                date: dateAction
            }
            state.messages.push(objMessage);
            state.newMessage = '';
            return state;

        case UPDATE_TEXT_MESSAGE:
            state.newMessage = action.value;
            return state;

        default:
            return state;
    }
}

export const sendMessageAction = () => ({ type: SEND_MESSAGE });
export const updateTextMessageAction = (text) => ({ type: UPDATE_TEXT_MESSAGE, value: text });


export default messagesProducer;