import React from 'react';
import st from './User.module.css';

const User = (props) => {
    
    return (
        <div className={st.user_item}>
            <div className={st.pic_and_action}>
                <div className={st.user_pic}>
                    <img src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" alt="user-pic" />
                </div>
                <div className={st.user_action}>
                    {
                        
                        props.followed ? <button onClick={ () => props.unfollowUser(props.user_id) } className={st.user_unFollow}>Unfollow</button> : <button onClick={ () => props.followUser(props.user_id) } className={st.user_follow}>Follow</button>
                    }
                </div>
            </div>
            <div className={st.user_info}>
                <div className={st.left_info}>
                    <div className={st.user_name}>{props.fullName}</div>
                    <div className={st.user_status}>{props.status}</div>
                </div>
                <div className={st.right_info}>
                    <div className={st.user_resides}>{props.location}</div>
                </div>
            </div>
        </div>
    )
}

export default User;