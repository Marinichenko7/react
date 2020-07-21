import React from 'react';
import st from './Users.module.css';
import User from './User/User';

let Users = (props) => {

    let allUsers = [];
    let allPages = [];

    if (Object.keys(props.data).length != 0) {
        allUsers = props.data.data.map(u => <User key={u.id}
            user_id={u.id}
            fullName={`${u.first_name} ${u.last_name}`}
            email={u.email}
            avatar={u.avatar} />)

        for (let i = 1; i <= props.data.total_pages; i++) {
            if (i === props.data.page) {
                allPages.push(<li key={i} className={st.curent_page} onClick={() => { props.onChangePage(i) }} >{i}</li>);
            } else {
                allPages.push(<li key={i} onClick={() => { props.onChangePage(i) }} >{i}</li>);
            }
        }
    }
    return (

        <div className={st.users_container}>
            <div className={st.users_title}>Users</div>
            <div className={st.users_list}>
                {allUsers}
            </div>
            <div className={st.wrapp_list_pages}>
                <ul className={st.list_pages}>
                    {allPages}
                </ul>
            </div>
            <div className={st.more_users}>
                <button className={st.show_more_btn}>show more</button>
            </div>
        </div>

    )
}

export default Users;