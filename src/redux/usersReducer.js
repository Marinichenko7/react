import { UsersAPI } from "../api/api";

const FOLLOW_USER = "FOLLOW-USER";
const UNFOLLOW_USER = "UNFOLLOW-USER";
const SET_DATA_USERS = "SET_DATA_USERS";
const CLEAR_USERS_DATA = "CLEAR_USERS_DATA";
const TOGGLE_PRELODER = "TOGGLE_PRELODER";
const TO_DISABLE_BTN = "TO_DISABLE_BTN";


let initialState = {
    users: [],
    page_count: 6,
    toggleFetch: false,
    toggleBtn: []
}
const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_DATA_USERS:
            return {
                ...state,
                users: [...action.usersData]
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
        case TO_DISABLE_BTN: {
            return {
                ...state,
                toggleBtn: action.isFollow
                    ? [...state.toggleBtn, action.id]
                    : state.toggleBtn.filter( id => id !== action.id )
            }
        }
        default:
            return state;
    }
}

export const followUser = (id) => ({ type: FOLLOW_USER, user_id: id })
export const unfollowUser = (id) => ({ type: UNFOLLOW_USER, user_id: id })
export const getUserData = (usersData) => ({ type: SET_DATA_USERS, usersData })
export const clearUserData = () => ({ type: CLEAR_USERS_DATA })
export const togglePreloder = (isFetching) => ({ type: TOGGLE_PRELODER, isFetching })
export const disableBtn = (isFollow, id) => ({ type: TO_DISABLE_BTN, isFollow, id })


export const getUsers = (page) => {
    return (dispatch) => {
        dispatch(togglePreloder(true))
        dispatch(clearUserData())

        UsersAPI.getAllUsers(page).then(data => {
            dispatch(getUserData(data))
            dispatch(togglePreloder(false))
        });
    }
}

export const unfollow = (user_id) => {
    return (dispatch) => {
        dispatch(disableBtn(true, user_id))
        UsersAPI.unfollowUser(user_id)
            .then(responce => {
                if (responce.status === 200) {
                    dispatch(unfollowUser(user_id))
                    dispatch(disableBtn(false, user_id))
                }
            })
    }
}

export const follow = (user_id) => {
    return (dispatch) => {
        dispatch(disableBtn(true, user_id))
        UsersAPI.followUser(user_id)
            .then(responce => {
                if (responce.status === 200) {
                    dispatch(followUser(user_id))
                    dispatch(disableBtn(false, user_id))
                }
            })
    }
}

export default usersReducer;