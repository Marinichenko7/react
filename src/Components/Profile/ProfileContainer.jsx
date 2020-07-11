import React from 'react';
import { addPostAction, updatePostAction } from '../../redux/profileReducer';
import Profile from './Profile';
import {connect} from 'react-redux';

/*const ProfileContainer = (props) => {
    
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
}*/

let mapStateToProps = (state) => {
    return{
        posts: state.profilePage.posts,
        newPost: state.profilePage.newPost
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        addPost: () => {
            dispatch(addPostAction());
        },
        changePost: (value) => {
            dispatch(updatePostAction(value));
        }
    }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);


export default ProfileContainer;