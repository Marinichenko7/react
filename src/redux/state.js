let store = {
    _state: {
        profilePage: {
            PostsData: {
                posts: [
                    { id: 1, message: 'Hi! How are you?', like_count: 2, share_count: 1 },
                    { id: 1, message: 'I was in market to day. So, what did you do?', like_count: 12, share_count: 41 },
                    { id: 1, message: 'I will go to the park and zoo tomorow.', like_count: 18, share_count: 8 },
                    { id: 1, message: 'Hi! How are you?', like_count: 158, share_count: 36 }
                ],
                newPost: "new post"
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
        return this._state
    },
    addPost(){
        let objPost = {
            id: 5,
            message: this._state.profilePage.PostsData.newPost,
            like_count: 0,
            share_count: 0
        }
        this._state.profilePage.PostsData.posts.push(objPost);
        this._callSubscriber(this._state);
        this._state.profilePage.PostsData.newPost = '';
    },
    eventPost(text) {
        this._state.profilePage.PostsData.newPost = text;
        this._callSubscriber(this._state);
    },
    addMessage() {
        let objMessage = {
            id: 10,
            sender: 'Kolya',
            text: this._state.messagePage.MessagesData.newMessage,
            date: "1.07.2020 12:40"
        }
        this._state.messagePage.MessagesData.messages.push(objMessage);
        this._callSubscriber(this._state);
        this._state.messagePage.MessagesData.newMessage = '';
    },
    eventMessage(text) {
        this._state.messagePage.MessagesData.newMessage = text;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

window.state = store;

export default store;