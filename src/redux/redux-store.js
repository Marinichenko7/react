import { combineReducers, createStore, applyMiddleware } from 'redux';
import profileReducer from './profileReducer';
import messagesProducer from './messagesReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import thunk from 'redux-thunk';

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messagesProducer,
    usersPage: usersReducer,
    auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunk));
window.state = store;

export default store;