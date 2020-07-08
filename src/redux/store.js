import profileReducer from './profileReducer';
import messagesReducer from './messagesReducer';

let store = {
    _state: {
        profilePage: {
            PostsData: {
                posts: [
                    { id: 1, message: 'Hi! How are you?', date: "10.05.2020, 18:45", like_count: 2, share_count: 1 },
                    { id: 1, message: 'I was in market to day. So, what did you do?', date: "10.05.2020, 18:45", like_count: 12, share_count: 41 },
                    { id: 1, message: 'I will go to the park and zoo tomorow.', date: "10.05.2020, 18:45", like_count: 18, share_count: 8 },
                    { id: 1, message: 'Hi! How are you?', date: "10.05.2020, 18:45", like_count: 158, share_count: 36 }
                ],
                newPost: ""
            }
        },
        messagePage: {
            DialogsData: {
                dialogs: [
                    { id: 1, sender: 'Kolya' },
                    { id: 2, sender: 'Misha' },
                    { id: 3, sender: 'Valentina' },
                    { id: 4, sender: 'Dima' }
                ],
                newDialog: ''
            },
            MessagesData: {
                messages:[
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
        }
    },
    _callSubscriber() {

    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        
        this._state.profilePage.PostsData = profileReducer(this._state.profilePage.PostsData, action);
        this._state.messagePage.MessagesData = messagesReducer(this._state.messagePage.MessagesData, action);
        this._callSubscriber(this._state);
    }
}






window.state = store;

export default store;