import React from 'react';
import st from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Posting from "./Posting/Posting";
import Post from "./Post/Post";

const Profile = () => {
    return (
        <div>
            <ProfileInfo />
            

            <Posting/>

            <div className={st.posts}>

                <Post message="Hi! How are you?" like_count="10" share_count="3" />
                <Post message="I was in market to day. So, what did you do?" like_count="6" share_count="1" />
                <Post message="I will go to the park and zoo tomorow." like_count="18" share_count="8" />

            </div>
        </div>
    )
}

export default Profile;