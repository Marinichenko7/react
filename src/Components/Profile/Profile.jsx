import React from 'react';
import st from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Posting from "./Posting/Posting";
import Post from "./Post/Post";

const Profile = (props) => {

    let PostView = props.posts.map( dialog => <Post message={dialog.message} like_count={dialog.like_count} share_count={dialog.share_count} />);

    return (
        <div>
            <ProfileInfo />
            <Posting/>

            <div className={st.posts}>
                { PostView }
            </div>
        </div>
    )
}

export default Profile;