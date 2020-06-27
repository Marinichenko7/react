import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let PostsData = [
  { id: 1, message: 'Hi! How are you?', like_count: 2, share_count: 1 },
  { id: 1, message: 'I was in market to day. So, what did you do?', like_count: 12, share_count: 41 },
  { id: 1, message: 'I will go to the park and zoo tomorow.', like_count: 18, share_count: 8 },
  { id: 1, message: 'Hi! How are you?', like_count: 158, share_count: 36 },
]
let DialogsData = [
  { id: 1, sender: 'Kolya' },
  { id: 2, sender: 'Misha' },
  { id: 3, sender: 'Valentina' },
  { id: 4, sender: 'Dima' }
]
let MessagesData = [
  { id: 1, sender: 'Kolya', text: 'Hi! Whats up?', date: '3 sept 18:31' },
  { id: 2, sender: 'Vitya', text: 'Hello! I`m fine. Now i have a dinner. And you?', date: '3 sept 18:33' }
]


ReactDOM.render(
  <React.StrictMode>
    <App posts={PostsData} dialogs={DialogsData} messages={MessagesData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
