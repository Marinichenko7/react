import { combineReducers, createStore } from 'redux';
import profileReducer from './profileReducer';
import messagesProducer from './messagesReducer';
import usersReducer from './usersReducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messagesProducer,
    usersPage: usersReducer
});

let store = createStore(reducers);
window.state = store;

export default store;