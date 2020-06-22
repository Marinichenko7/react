import React from 'react';
import st from './Profile.module.css';
import Posting from "./Posting/Posting";
import Post from "./Post/Post";

const Profile = () => {
    return (
        <div>
            <div className={st.background_user}>
                <img src="https://img5.goodfon.ru/wallpaper/big/3/94/mmmmmm-n-nnnnnnnn-bbbbbbbbb-vvvvvvvv-cccccccccccccccc.jpg"></img>
            </div>
            <div className={st.user_info}>
                <div className={st.user_pic_block}>
                    <img className={st.user_pic} src="https://static.mk.ru/upload/entities/2019/05/08/00/articles/detailPicture/c7/b5/08/6e/5dda626cb409b1fa6942c29040609e17.jpg"></img>
                </div>
                <div className={st.user_describe}>
                    <div className={st.user_name}>Valentin Dikiy</div>
                    <div className={st.user_born}>Date of birth: 2 january</div>
                    <div className={st.user_city}>City: Kharkov</div>
                    <div className={st.user_education}>Education: ESU 11</div>
                    <div className={st.user_web_site}>Web-site: Vkontakte.com</div>
                </div>
            </div>

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