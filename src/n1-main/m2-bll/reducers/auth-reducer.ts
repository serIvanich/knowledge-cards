import {authApi, LoginDataType} from "../../m3-dall/app-api";
import {Dispatch} from "redux";
import {handleServerNetworkError} from "../../../utils/error-utils";
import {setAppStatusAC} from "./app-reduser";
import {setUserProfileAC} from "./profile-reducer";
import {passwordRecoveryApi} from "../../m3-dall/passwordRecovery-api";

const initialState = {
    isLogged: false,
    message: '',
    checkMailPage: false,
}


export const authReducer = (state: InitialStateType = initialState, action: ActionType) => {

    switch(action.type) {
        case 'auth/IS-LOGGED':
            return {
                ...state,
                isLogged: action.isLogged
            }
        case 'auth/SET-NEW_PASSWORD':
            return {...state, message: action.message }
        default:
            return state
    }

}

export const isLoggedAC = (isLogged: boolean) => ({type: 'auth/IS-LOGGED', isLogged }as const)
export const setNewPasswordAC = (message:string) => ({type: 'auth/SET-NEW_PASSWORD', message } as const)


export const loginTC = (payload: LoginDataType) => async (dispatch: Dispatch) => {
    try{
        dispatch(setAppStatusAC('loading'))
        const data = await authApi.login(payload)
        dispatch(isLoggedAC(true))
        dispatch(setUserProfileAC(data))
        dispatch(setAppStatusAC('succeeded'))
    } catch (e) {
        handleServerNetworkError(e, dispatch)
    }
}

export const logoutTC = () => async (dispatch: Dispatch) => {
    try{
        dispatch(setAppStatusAC('loading'))
        const data = await authApi.logout()
        dispatch(isLoggedAC(false))
        dispatch(setAppStatusAC('succeeded'))
    } catch (e) {
        handleServerNetworkError(e, dispatch)
    }
}

export const setNewPasswordTC = (password:string, token:string) => async (dispatch:Dispatch) => {
    try {
        dispatch(setAppStatusAC('loading'))
        const res = await passwordRecoveryApi.setNewPassword(password, token)
        dispatch(setNewPasswordAC('success'))
    } catch (e) {
        handleServerNetworkError(e, dispatch)
        dispatch(setNewPasswordAC('error'))
    } finally {
        dispatch(setAppStatusAC("succeeded"))
    }
}



type InitialStateType = typeof initialState
type ActionType = ReturnType<typeof isLoggedAC> | ReturnType<typeof setNewPasswordAC>