import { isAuthMe } from "./authReducer";
import Propmise from "promise";

const INICIALIZED_APP = "INICIALIZED_APP";

let initialState = {
    inicializedApp: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INICIALIZED_APP: {
            return {
                ...state,
                inicializedApp: action.status
            }
        }
        default:
            return state;
    }
}

export const isInicialize = (status) => ({ type: INICIALIZED_APP, status })

export const inicializeThunk = () => (dispatch) => {
    let promise = dispatch(isAuthMe())
    Propmise.all([promise])
        .then(() => {
            dispatch(isInicialize( true ))
        })

}

export default appReducer;