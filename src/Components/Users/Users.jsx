import React from 'react';
import st from './Users.module.css';
import User from './User/User';
import axios from 'axios';

const Users = (props) => {

    axios.get("https://social-network/samuraijs.com/api.1.0/users").then(responce => {
        console.log(responce)
    });

    if(props.users.length === 0){
        props.setUser(
            [
                { id: 0, fullName: "Tolya", age: 28, gender: "man", status: "I alone cook sosiges", followed: false, location: { city: "Moscow", country: "Russia" }, avatar: "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" },
                { id: 1, fullName: "Dmitriy", age: 23, gender: "man", status: "I am a boss", followed: true, location: { city: "Kiev", country: "Ukraine" }, avatar: "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" },
                { id: 2, fullName: "Tolya", age: 28, gender: "man", status: "I alone cook sosiges", followed: false, location: { city: "Moscow", country: "Russia" }, avatar: "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" },
                { id: 3, fullName: "David", age: 35, gender: "man", status: "Who wont go to travel", followed: true, location: { city: "Varshawa", country: "Poland" }, avatar: "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" },
                { id: 4, fullName: "Gretta", age: 20, gender: "woman", status: "I am very wild", followed: false, location: { city: "Berlin", country: "Germany" }, avatar: "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" }
            ]
        )
    }

    let allUsers = props.users.map(u => <User key={u.id}
                                            user_id={u.id}
                                            fullName={u.fullName}
                                            age={u.age}
                                            gender={u.gender}
                                            status={u.status}
                                            followed={u.followed}
                                            location={`${u.location.country},\n${u.location.city}`}
                                            followUser={props.followUser}
                                            unfollowUser={props.unfollowUser}
                                            setUser={props.setUser} />)

    return (
        <div className={st.users_container}>
            <div className={st.users_title}>Users</div>
            <div className={st.users_list}>
                {allUsers}
            </div>
            <div className={st.more_users}>
                <button className={st.show_more_btn}>show more</button>
            </div>
        </div>
    )
}

export default Users;