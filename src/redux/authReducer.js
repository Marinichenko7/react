const SET_USER_DATA = "SET_USER_DATA";
const IS_AUTH_USER = "IS_AUTH_USER";

let initialState = {
    token_user: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_USER_DATA: {
            return{
                ...state,
                token_user: action.token_user
            }
        }
        case IS_AUTH_USER: {
            return{
                ...state,
                isAuth: action.done
            }
        }
        default:
            return state;
    }
}

export const authUser = (token_user) => ({type: SET_USER_DATA, token_user})
export const authDoneUser = (done) => ({type: IS_AUTH_USER, done})


export default authReducer;