import { AuthAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const IS_AUTH_USER = "IS_AUTH_USER";

let initialState = {
    login: null,
    pass: null,
    id: null,
    token: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                login: action.login,
                pass: action.pass,
                id: action.id,
                token: action.token
            }
        }
        case IS_AUTH_USER: {
            return {
                ...state,
                isAuth: action.done
            }
        }
        default:
            return state;
    }
}

export const authUser = (login, pass, id, token ) => ({ type: SET_USER_DATA, login, pass, id, token })
export const authDoneUser = (done) => ({ type: IS_AUTH_USER, done })

export const authUserThunk = (login, pass) => (dispatch) => {
    AuthAPI.auth(login, pass)
        .then(responce => {
            if( responce.status === 200 && responce.data.login === "admin" && responce.data.pass === "1111") {
                dispatch(authUser( responce.data.login, responce.data.pass, responce.data.id, responce.data.token ))
                dispatch(authDoneUser(true))
            }
        })
}

export default authReducer;