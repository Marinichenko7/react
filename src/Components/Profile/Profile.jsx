import React from 'react';
import st from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Posting from "./Posting/Posting";
import Post from "./Post/Post";
import Preloader from '../SideEffects/Preloader';

const Profile = (props) => {


    let PostView = [];

    if (Object.keys(props.posts).length !== 0) {
        PostView = props.posts.map(d => <Post
            
            key={d.id}
            id={d.id}
            message={d.message}
            date={d.date}
            like_count={d.like_count}
            share_count={d.share_count}
            avatar={props.profileData.avatar}
            likePostAction={props.likePostAction}
            likePost={props.likePost}
            disabledLiking={props.disabledLiking}
            id_user={props.id_user}
        />);
    }

    return (
        <div>
            {props.toggleFetchInfoUser ? <Preloader /> : <ProfileInfo profileData={props.profileData} />}

            <Posting
                disabledPosting={props.disabledPosting}
                newPost={props.newPost}
                changePost={props.updatePostAction}
                addPost={props.addPost}

            />

            <div className={st.posts}>
                {props.toggleFetchPostsData ? <Preloader /> : PostView}
            </div>
        </div>
    )
}

export default Profile;