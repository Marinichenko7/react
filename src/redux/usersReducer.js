const FOLLOW_USER = "FOLLOW-USER";
const UNFOLLOW_USER = "UNFOLLOW-USER";
const SET_DATA_USERS = "SET_DATA_USERS";
const SHOW_MORE_USERS_DATA = "SHOW_MORE_USERS_DATA";
const CLEAR_USERS_DATA = "CLEAR_USERS_DATA";
const TOGGLE_PRELODER = "TOGGLE_PRELODER";

let initialState = {
    users: [],
    page_count: 6,
    toggleFetch: false
}
const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_DATA_USERS:
            return {
                ...state,
                users: [...action.usersData]
            }
        case SHOW_MORE_USERS_DATA:
            return {
                ...state,
                users: [...state.users, ...action.usersData.data],
                page: action.usersData.page
            }
        case CLEAR_USERS_DATA:
            return {
                ...state,
                users: []
            }
        case TOGGLE_PRELODER:
            return {
                ...state,
                toggleFetch: action.isFetching
            }
        case FOLLOW_USER:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.user_id) {
                        return { ...u, following: true }
                    }
                    return u;
                })
            }
        case UNFOLLOW_USER:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.user_id) {
                        return { ...u, following: false }
                    }
                    return u;
                })
            }
        default:
            return state;
    }
}

export const followUser = (id) => ({ type: FOLLOW_USER, user_id: id })
export const unfollowUser = (id) => ({ type: UNFOLLOW_USER, user_id: id })
export const getUserData = (usersData) => ({ type: SET_DATA_USERS, usersData })
export const showMoreUsers = (usersData) => ({ type: SHOW_MORE_USERS_DATA, usersData })
export const clearUserData = () => ({ type: CLEAR_USERS_DATA })
export const togglePreloder = (isFetching) => ({ type: TOGGLE_PRELODER, isFetching })


export default usersReducer;