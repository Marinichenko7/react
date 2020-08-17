import React from 'react';
import { updatePostAction, clearProfileData, getUser, getPosts, addPost, likePostAction, likePost } from '../../redux/profileReducer';
import Profile from './Profile';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {

    componentDidMount() {
        
        this.props.getUser(this.props.match.params.user_id)
        this.props.getPosts()
    }

    render() {
        return (
            <Profile {...this.props} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPost: state.profilePage.newPost,
        profileData: state.profilePage.profileData,
        toggleFetchInfoUser: state.profilePage.toggleFetchInfoUser,
        toggleFetchPostsData: state.profilePage.toggleFetchPostsData,
        disabledPosting: state.profilePage.disabledPosting,
        disabledLiking: state.profilePage.disabledLiking,
        id_user: state.auth.id_user
    }
}

let ProfileContainerRouter = withRouter(ProfileContainer);

export default connect(mapStateToProps,
    {
        updatePostAction,
        clearProfileData,
        getUser,
        getPosts,
        addPost,
        likePostAction,
        likePost

     })(ProfileContainerRouter);