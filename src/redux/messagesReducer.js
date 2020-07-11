const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_TEXT_MESSAGE = "UPDATE-TEXT-MESSAGE";

let initialState = {
    dialogs: [
        { id: 1, sender: 'Kolya' },
        { id: 2, sender: 'Misha' },
        { id: 3, sender: 'Valentina' },
        { id: 4, sender: 'Dima' }
    ],
    messages: [
        { id: 1, sender: 'Kolya', text: 'Hi! Whats up?', date: '3 sept 18:31' },
        { id: 2, sender: 'Vitya', text: 'Hello! I`m fine. Now i have a dinner. And you?', date: '3 sept 18:33' },
        { id: 1, sender: 'Kolya', text: 'Hi! Whats up?', date: '3 sept 18:31' },
        { id: 2, sender: 'Vitya', text: 'Hello! I`m fine. Now i have a dinner. And you?', date: '3 sept 18:33' },
        { id: 1, sender: 'Kolya', text: 'Hi! Whats up?', date: '3 sept 18:31' },
        { id: 2, sender: 'Vitya', text: 'Hello! I`m fine. Now i have a dinner. And you?', date: '3 sept 18:33' },
        { id: 1, sender: 'Kolya', text: 'Hi! Whats up?', date: '3 sept 18:31' },
        { id: 2, sender: 'Vitya', text: 'Hello! I`m fine. Now i have a dinner. And you?', date: '3 sept 18:33' },
        { id: 1, sender: 'Kolya', text: 'Hi! Whats up?', date: '3 sept 18:31' },
        { id: 2, sender: 'Vitya', text: 'Hello! I`m fine. Now i have a dinner. And you?', date: '3 sept 18:33' },
        { id: 1, sender: 'Kolya', text: 'Hi! Whats up?', date: '3 sept 18:31' },
        { id: 2, sender: 'Vitya', text: 'Hello! I`m fine. Now i have a dinner. And you?', date: '3 sept 18:33' },
        { id: 1, sender: 'Kolya', text: 'Hi! Whats up?', date: '3 sept 18:31' },
        { id: 2, sender: 'Vitya', text: 'Hello! I`m fine. Now i have a dinner. And you?', date: '3 sept 18:33' },
        { id: 1, sender: 'Kolya', text: 'Hi! Whats up?', date: '3 sept 18:31' },
        { id: 2, sender: 'Vitya', text: 'Hello! I`m fine. Now i have a dinner. And you?', date: '3 sept 18:33' }
    ],
    newMessage: ''
}

const messagesProducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:

            let dateAction = new Date().toLocaleString();
            let objMessage = {
                id: state.messages.length,
                sender: 'User',
                text: state.newMessage,
                date: dateAction
            }

            return {
                ...state,
                messages: [
                    ...state.messages,
                    objMessage
                ],
                newMessage: ''
            }

        //stateCopy.messages = [...state.messages];
        //stateCopy.messages.push(objMessage);
        //stateCopy.newMessage = '';
        //return stateCopy;

        case UPDATE_TEXT_MESSAGE:
            return {
                ...state,
                newMessage: action.value
            }
        //stateCopy.newMessage = action.value;
        //return stateCopy;

        default:
            return state;
    }
}

export const sendMessageAction = () => ({ type: SEND_MESSAGE });
export const updateTextMessageAction = (text) => ({ type: UPDATE_TEXT_MESSAGE, value: text });


export default messagesProducer;