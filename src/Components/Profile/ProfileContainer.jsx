import React from 'react';
import Profile from './Profile';
import {addPostAction, updatePostAction} from '../../redux/profileReducer';

const ProfileContainer = (props) => {
    
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostAction());
    }

    let changePost = (value) => {
        props.store.dispatch(updatePostAction(value));
    }


    return (
        <Profile posts={state.profilePage.postsData.posts}
                newPost={state.profilePage.postsData.newPost} 
                addPost={addPost}
                changePost={changePost} />
    )
}

export default ProfileContainer;