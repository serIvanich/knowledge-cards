import {authApi, LoginDataType} from "../../m3-dall/app-api";
import {Dispatch} from "redux";
import {handleServerNetworkError} from "../../../utils/error-utils";

const initialState = {
    isLogged: false
}


export const authReducer = (state: InitialStateType = initialState, action: ActionType) => {

    switch(action.type) {
        case 'auth/IS-LOGGED':
            return {
                ...state,
                isLogged: action.isLogged
            }
        default:
            return state
    }

}

export const isLoggedAC = (isLogged: boolean) => ({type: 'auth/IS-LOGGED', isLogged }as const)

export const loginTC = (payload: LoginDataType) => async (dispatch: Dispatch) => {
    try{
        const data = await authApi.login(payload)
        dispatch(isLoggedAC(true))
    } catch (e) {
        handleServerNetworkError(e, dispatch)
    }
}

export const logoutTC = () => async (dispatch: Dispatch) => {
    try{
        const data = await authApi.logout()
        dispatch(isLoggedAC(false))
    } catch (e) {
        handleServerNetworkError(e, dispatch)
    }
}



type InitialStateType = typeof initialState
type ActionType = ReturnType<typeof isLoggedAC>