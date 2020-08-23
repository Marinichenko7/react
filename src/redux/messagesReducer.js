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
        { id: 0, sender: 'Vitya', text: 'Hello! I`m fine. Now i have a dinner. And you?', date: '3 sept 18:33' },
        { id: 1, sender: 'Kolya', text: 'Hi! Whats up?', date: '3 sept 18:31' },
        { id: 2, sender: 'Vitya', text: 'Hello! I`m fine. Now i have a dinner. And you?', date: '3 sept 18:33' },
        { id: 3, sender: 'Kolya', text: 'Hi! Whats up?', date: '3 sept 18:31' },
        { id: 4, sender: 'Vitya', text: 'Hello! I`m fine. Now i have a dinner. And you?', date: '3 sept 18:33' },
        { id: 5, sender: 'Kolya', text: 'Hi! Whats up?', date: '3 sept 18:31' },
        { id: 6, sender: 'Vitya', text: 'Hello! I`m fine. Now i have a dinner. And you?', date: '3 sept 18:33' }
    ]
}

const messagesProducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:

            let dateAction = new Date().toLocaleString();
            let objMessage = {
                id: state.messages.length,
                sender: 'User',
                text: action.text,
                date: dateAction
            }

            return {
                ...state,
                messages: [ ...state.messages, objMessage ]
            }
        default:
            return state;
    }
}

export const sendMessage = (text) => ({ type: SEND_MESSAGE, text });


export default messagesProducer;