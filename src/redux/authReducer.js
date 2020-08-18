import { AuthAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const IS_AUTH_USER = "IS_AUTH_USER";
const LIKE_TO_MY_HISTORY = "LIKE_TO_MY_HISTORY";

let initialState = {
    data: {},
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                data: action.data
            }
        }
        case IS_AUTH_USER: {
            return {
                ...state,
                isAuth: action.done
            }
        }
        case LIKE_TO_MY_HISTORY: {
            return {
                ...state,
                data: { ...state.data },
                likedPosts: [ state.data.likedPosts, action.id_post ]
            }
        }
        default:
            return state;
    }
}

export const authUser = (data) => ({ type: SET_USER_DATA, data })
export const authDoneUser = (done) => ({ type: IS_AUTH_USER, done })
export const likeToMyHistory = (id_post) => ({ type: LIKE_TO_MY_HISTORY, id_post });

export const authUserThunk = (login, pass) => (dispatch) => {
    AuthAPI.auth(login, pass)
        .then(responce => {
            if (responce.status === 200 && responce.data.login === "admin" && responce.data.pass === "1111") {

                dispatch(authUser(responce.data))
                dispatch(authDoneUser(true))
            }
        })
}

export const likeToHistory = (id_post) => (dispatch) => {
    AuthAPI.likedPosts(id_post)
        .then(responce => {
            if(responce.status === 200) {
                dispatch(likeToMyHistory(id_post))
            }
        })
}

export default authReducer;