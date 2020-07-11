import React from 'react';
import st from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Posting from "./Posting/Posting";
import Post from "./Post/Post";

const Profile = (props) => {
    
    let PostView = props.posts.map( d => <Post message={d.message} date={d.date} like_count={d.like_count} share_count={d.share_count} />);
    
    return (
        <div>
            <ProfileInfo />
            <Posting newPost={props.newPost}
                    addPost={props.addPost}
                    changePost={props.changePost}/>

            <div className={st.posts}>
                { PostView }
            </div>
        </div>
    )
}

export default Profile;