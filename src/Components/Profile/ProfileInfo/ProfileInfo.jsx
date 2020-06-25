import React from 'react';
import st from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={st.profile_info}>
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
        </div>
    )
}

export default ProfileInfo;