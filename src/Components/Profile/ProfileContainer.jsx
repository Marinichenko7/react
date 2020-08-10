import React from 'react';
import { addPostAction, updatePostAction, setProfileUser, togglePreloder, clearProfileData } from '../../redux/profileReducer';
import Profile from './Profile';
import { connect } from 'react-redux';
import * as axios from 'axios';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {
    
    componentDidMount() {
        
        setTimeout(() => {
            axios.get(`https://reqres.in/api/users/${!this.props.match.params.user_id ? "1":this.props.match.params.user_id}`)
                .then(responce => {
                    this.props.setProfileUser(responce.data)
                    this.props.togglePreloder(true)
                });
        }, 700)
    }

    render(){
        return(
            <Profile {...this.props}  profileData={this.props.profileData} toggleFetch={this.props.toggleFetch} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPost: state.profilePage.newPost,
        profileData: state.profilePage.profileData,
        toggleFetch: state.profilePage.toggleFetch
    }
}

let ProfileContainerRouter = withRouter(ProfileContainer);

export default connect(mapStateToProps, {addPostAction, updatePostAction, setProfileUser, togglePreloder, clearProfileData})(ProfileContainerRouter);