import React from 'react';
import { addPostAction, updatePostAction, setProfileUser } from '../../redux/profileReducer';
import Profile from './Profile';
import { connect } from 'react-redux';
import * as axios from 'axios';

class ProfileContainer extends React.Component {
    
    componentDidMount() {
        setTimeout(() => {
            axios.get(`https://reqres.in/api/users/1`)
                .then(responce => {
                    this.props.setProfileUser(responce.data)
                    
                });
        }, 700)
    }

    render(){
        
        return(
            <Profile {...this.props}  profileData={this.props.profileData}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPost: state.profilePage.newPost,
        profileData: state.profilePage.profileData
    }
}

export default connect(mapStateToProps, {addPostAction, updatePostAction, setProfileUser})(ProfileContainer);