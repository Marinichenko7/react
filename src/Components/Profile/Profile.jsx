import React from 'react';
import st from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Posting from "./Posting/Posting";
import Post from "./Post/Post";

let PostsData = [
    {id: 1, message: 'Hi! How are you?', like_count: 2, share_count: 1},
    {id: 1, message: 'I was in market to day. So, what did you do?', like_count: 12, share_count:41},
    {id: 1, message: 'I will go to the park and zoo tomorow.', like_count: 18, share_count: 8},
    {id: 1, message: 'Hi! How are you?', like_count: 158, share_count: 36},
]

const Profile = () => {
    return (
        <div>
            <ProfileInfo />
            

            <Posting/>

            <div className={st.posts}>

                <Post message={PostsData[0].message} like_count={PostsData[0].like_count} share_count={PostsData[0].share_count} />
                <Post message={PostsData[1].message} like_count={PostsData[1].like_count} share_count={PostsData[1].share_count} />
                <Post message={PostsData[2].message} like_count={PostsData[2].like_count} share_count={PostsData[2].share_count} />
                <Post message={PostsData[3].message} like_count={PostsData[3].like_count} share_count={PostsData[3].share_count} />

            </div>
        </div>
    )
}

export default Profile;