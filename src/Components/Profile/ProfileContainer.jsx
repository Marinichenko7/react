import React from 'react';
import { updatePostAction, clearProfileData, getUser, getPosts, addPost, likePostAction, likePost, changeStatus } from '../../redux/profileReducer';
import { likeToHistory } from "../../redux/authReducer";
import Profile from './Profile';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { getUsersPosts, getProfileData, getToggleFetchInfoUser, getToggleFetchPostsData, getDisabledPosting, getDisabledLiking } from './../../redux/profile-selectors';

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
        posts: getUsersPosts(state),
        profileData: getProfileData(state),
        toggleFetchInfoUser: getToggleFetchInfoUser(state),
        toggleFetchPostsData: getToggleFetchPostsData(state),
        disabledPosting: getDisabledPosting(state),
        disabledLiking: getDisabledLiking(state)
    }
}

export default compose(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps, { clearProfileData, getUser, getPosts, addPost, likePostAction, likePost, likeToHistory, changeStatus })
)(ProfileContainer)