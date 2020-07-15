const FOLLOW_USER = "FOLLOW-USER";
const UNFOLLOW_USER = "UNFOLLOW-USER";
const SET_USERS = "SET-USERS";

let initialState = {
    users: []
    /*users: [
        { id: 0, fullName: "Tolya", age: 28, gender: "man", status: "I alone cook sosiges", followed: false, location: { city: "Moscow", country: "Russia" }, avatar: "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" },
        { id: 1, fullName: "Dmitriy", age: 23, gender: "man", status: "I am a boss", followed: true, location: { city: "Kiev", country: "Ukraine" }, avatar: "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" },
        { id: 2, fullName: "Tolya", age: 28, gender: "man", status: "I alone cook sosiges", followed: false, location: { city: "Moscow", country: "Russia" }, avatar: "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" },
        { id: 3, fullName: "David", age: 35, gender: "man", status: "Who wont go to travel", followed: true, location: { city: "Varshawa", country: "Poland" }, avatar: "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" },
        { id: 4, fullName: "Gretta", age: 20, gender: "woman", status: "I am very wild", followed: false, location: { city: "Berlin", country: "Germany" }, avatar: "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" }
    ]*/
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW_USER:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.user_id) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        case UNFOLLOW_USER:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.user_id) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        case SET_USERS:
            return{
                ...state, users: [ ...state.users, ...action.users]
            }
        default:
            return state;
    }

}


export const followAction = (id) => ({ type: FOLLOW_USER, user_id: id })
export const unfollowAction = (id) => ({ type: UNFOLLOW_USER, user_id: id })
export const getUsersAction = (users) => ({ type: SET_USERS, users })

export default usersReducer;