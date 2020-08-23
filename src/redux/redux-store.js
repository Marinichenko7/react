import { combineReducers, createStore, applyMiddleware } from 'redux';
import profileReducer from './profileReducer';
import messagesProducer from './messagesReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import appReducer from './appReducer';
import thunk from 'redux-thunk';
import { reducer as formReducer } from "redux-form";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messagesProducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

let store = createStore(reducers, applyMiddleware(thunk));
window.state = store;

export default store;