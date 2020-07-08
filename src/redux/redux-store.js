import { combineReducers, createStore } from 'redux';
import profileReducer from './profileReducer';
import messagesProducer from './messagesReducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messagesProducer
});

let store = createStore(reducers);
window.state = store;

export default store;