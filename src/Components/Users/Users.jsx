import React from 'react';
import st from './Users.module.css';
import User from './User/User';
import Preloder from '../SideEffects/Preloader';

let Users = (props) => {
    
    let allUsers = [];
    let allPages = [];
    
    if (Object.keys(props.users).length !== 0) {
        allUsers = props.users.map(u => <User key={u.id}
            user_id={u.id}
            fullName={`${u.name} ${u.surname}`}
            age={u.age}
            avatar={u.avatar}
            status={u.status}
            online={u.online}
            following={u.following}
            last_activ={u.last_activ}
            follow={props.follow}
            unfollow={props.unfollow}
            toggleBtn={props.toggleBtn}
        />)
        let count_pages = props.users.length / props.page_count;

        for (let i = 1; i <= Math.ceil(count_pages); i++) {
            if (i === 1) {
                allPages.push(<li key={i} className={st.curent_page} onClick={() => { props.onChangePage(i) }} >{i}</li>);
            } else {
                allPages.push(<li key={i} onClick={() => { props.onChangePage(i) }} >{i}</li>);
            }
        }
    }
    return (
        <div className={st.users_container}>
            <div className={st.users_title}>Users</div>

            {props.toggleFetch ? <Preloder /> : null}

            <div className={st.users_list}>
                {allUsers}
            </div>
            <div className={st.wrapp_list_pages}>
                <ul className={st.list_pages}>
                    {allPages}
                </ul>
            </div>
        </div>
    )
}

export default Users;