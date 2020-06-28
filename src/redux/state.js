let state = {
    profilePage: {
        PostsData: [
            { id: 1, message: 'Hi! How are you?', like_count: 2, share_count: 1 },
            { id: 1, message: 'I was in market to day. So, what did you do?', like_count: 12, share_count: 41 },
            { id: 1, message: 'I will go to the park and zoo tomorow.', like_count: 18, share_count: 8 },
            { id: 1, message: 'Hi! How are you?', like_count: 158, share_count: 36 },
        ]
    },
    messagePage: {
        DialogsData: [
            { id: 1, sender: 'Kolya' },
            { id: 2, sender: 'Misha' },
            { id: 3, sender: 'Valentina' },
            { id: 4, sender: 'Dima' }
        ],
        MessagesData: [
            { id: 1, sender: 'Kolya', text: 'Hi! Whats up?', date: '3 sept 18:31' },
            { id: 2, sender: 'Vitya', text: 'Hello! I`m fine. Now i have a dinner. And you?', date: '3 sept 18:33' }
        ]
    }
}

export default state;