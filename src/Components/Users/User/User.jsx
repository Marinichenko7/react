import React from 'react';
import st from './User.module.css';
import { NavLink } from 'react-router-dom';
import { UsersAPI } from '../../../api/api';

const User = (props) => {
    return (
        <div className={st.user_item}>
            <div className={st.pic_and_action}>
                <NavLink to={"/profile/" + props.user_id}>
                    <div className={st.user_pic}>
                        <img src={props.avatar} alt="user-pic" />
                    </div>
                </NavLink>
                <div className={st.user_action}>
                    
                    {   
                        props.following
                            ? <button disabled={props.toggleBtn.some(id => id === props.user_id)} style={props.toggleBtn.some(id => id === props.user_id) ? { "backgroundColor": "grey"} : null} onClick={ () => {
                                props.disableBtn(true, props.user_id)
                                UsersAPI.unfollowUser(props.user_id)
                                    .then(responce => {
                                        
                                        if(responce.status === 200) {
                                            props.unfollowUser(props.user_id)
                                            props.disableBtn(false, props.user_id)
                                        }
                                    })
                            } } className={st.user_unFollow}>Unfollow</button>
                            
                            : <button disabled={props.toggleBtn.some(id => id === props.user_id)} style={props.toggleBtn.some(id => id === props.user_id) ? { "backgroundColor": "grey"} : null} onClick={ () => {
                                
                                props.disableBtn(true, props.user_id)
                                UsersAPI.followUser(props.user_id)
                                    .then(responce => {
                                        
                                        if(responce.status === 200){
                                            props.followUser(props.user_id)
                                            props.disableBtn(false, props.user_id)
                                        }
                                    })
                            } } className={st.user_follow}>Follow</button>
                    }
                </div>
            </div>
            <div className={st.user_info}>
                <div className={st.left_info}>
                    <NavLink to={"/profile/" + props.user_id}>
                        <div className={st.user_name}>{props.fullName}</div>
                    </NavLink>
                    <div className={st.user_status}>{props.status}</div>
                    <div className={st.user_status}>{props.email}</div>
                </div>
                <div className={st.right_info}>
                    <div className={st.user_resides}>{props.last_activ}</div>
                </div>
            </div>
        </div>
    )
}

export default User;