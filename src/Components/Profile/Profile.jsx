import React from 'react';
import st from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Posting from "./Posting/Posting";
import Post from "./Post/Post";
import Preloader from '../SideEffects/Preloader';

const Profile = (props) => {

    if(Object.keys(props.profileData).length == 0){
        
        return(
            <Preloader />
        )
    }

    let PostView = props.posts.map( d => <Post key={d.id} message={d.message} date={d.date} like_count={d.like_count} share_count={d.share_count} />);
   
    return (
        <div>
            <ProfileInfo profileData={props.profileData} />
            
            <Posting newPost={props.newPost}
                    addPost={props.addPostAction}
                    changePost={props.updatePostAction}/>

            <div className={st.posts}>
                { PostView }
            </div>
        </div>
    )
}

export default Profile;