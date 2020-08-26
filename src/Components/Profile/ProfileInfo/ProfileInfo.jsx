import React from 'react';
import st from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks';

const ProfileInfo = (props) => {
    
    return (
        <div>
            <div className={st.profile_info}>
                <img src="https://img5.goodfon.ru/wallpaper/big/3/94/mmmmmm-n-nnnnnnnn-bbbbbbbbb-vvvvvvvv-cccccccccccccccc.jpg"></img>
            </div>

            <div className={st.user_info}>
                <div className={st.user_pic_block}>
                    <img className={st.user_pic} src={props.profileData.avatar}></img>
                </div>
                <div className={st.user_describe}>
                    <div className={st.user_name}>{`${props.profileData.name} ${props.profileData.surname}`}</div>
                    {/* <div className={st.user_born}>{`${props.profileData.status}`}</div> */}
                    <div className={st.user_status}>
                        <ProfileStatusWithHooks status={props.profileData.status} id_user={props.profileData.id} changeStatus={props.changeStatus} />
                    </div>


                    <div className={st.user_city}>City: Kharkov</div>
                    <div className={st.user_education}>Education: ESU 11</div>
                    <div className={st.user_web_site}>Web-site: Vkontakte.com</div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;