import { AuthAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const IS_AUTH_USER = "IS_AUTH_USER";
const LIKE_TO_MY_HISTORY = "LIKE_TO_MY_HISTORY";
const LOG_OUT_USER = "LOG_OUT_USER";

let initialState = {
    data: {},
    isAuth: false,
    authLogin: "",
    authPass: ""
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
                data: { ...state.data, likedPosts: [...state.data.likedPosts, action.id_post] }

            }
        }
        case LOG_OUT_USER: {
            return {
                ...state,
                data: { ...state.data, id: null, login: null, pass: null, token: null, likedPosts: [] },
                isAuth: false
            }
        }
        default:
            return state;
    }
}

export const authUser = (data) => ({ type: SET_USER_DATA, data })
export const authMe = (data) => ({ type: SET_USER_DATA, data })
export const authDoneUser = (done) => ({ type: IS_AUTH_USER, done })
export const likeToMyHistory = (id_post) => ({ type: LIKE_TO_MY_HISTORY, id_post });
export const logOutUser = () => ({ type: LOG_OUT_USER })

export const authUserThunk = (login, pass) => (dispatch) => {
    AuthAPI.auth()
        .then(responce => {
            if (responce.status === 200 && responce.data.login === login && responce.data.pass === pass) {
                dispatch(authUser(responce.data))
                AuthAPI.registeredMe(login, pass)
                    .then(responce => {
                        if(responce.status === 201) {
                            dispatch(authDoneUser(true))
                        }
                    })
            }
        })
}

export const isAuthMe = () => (dispatch) => {
    return AuthAPI.isMe()
        .then(responce => {
            if (responce.status === 200 && responce.data.login === "admin" && responce.data.pass === "1111") {
                dispatch(authMe(responce.data))
                dispatch(authDoneUser(true))
            }
        })
}

export const logOutMe = () => (dispatch) => {
    AuthAPI.logOutMe().then( responce => {
        dispatch(logOutUser())
    })
}


export const likeToHistory = (id_post) => (dispatch) => {
    AuthAPI.likedPosts(id_post)
        .then(responce => {
            if (responce.status === 200) {
                dispatch(likeToMyHistory(id_post))
            }
        })
}

export default authReducer;