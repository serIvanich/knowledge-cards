import {authApi, ForgotDataType, LoginDataType} from "../../m3-dall/app-api";
import {Dispatch} from "redux";
import {handleServerNetworkError} from "../../../utils/error-utils";
import {setAppStatusAC, setIsInitializedAC} from "./app-reduser";
import {setUserProfileAC} from "./profile-reducer";
import {passwordRecoveryApi} from "../../m3-dall/passwordRecovery-api";

const initialState = {
    // toLogin: false,
    isLogged: false,
    message: '',
    checkMailPage: false,
}


export const authReducer = (state: InitialStateType = initialState, action: ActionType) => {

    switch (action.type) {
        case 'auth/IS-LOGGED':
            return {
                ...state,
                isLogged: action.isLogged
            }
        // case 'auth/TO-LOGIN':
        //     return {
        //         ...state,
        //         toLogin: action.toLogin
        //     }
        case 'auth/SET-NEW_PASSWORD':
            return {...state, message: action.message}
        default:
            return state
    }

}

export const isLoggedAC = (isLogged: boolean) => ({type: 'auth/IS-LOGGED', isLogged} as const)
export const toLoginAC = (toLogin: boolean) => ({type: 'auth/TO-LOGIN', toLogin} as const)
export const setNewPasswordAC = (message: string) => ({type: 'auth/SET-NEW_PASSWORD', message} as const)


export const loginTC = (payload: LoginDataType) => async (dispatch: Dispatch) => {
    try {
        dispatch(setAppStatusAC('loading'))
        const data = await authApi.login(payload)
        dispatch(isLoggedAC(true))
        dispatch(setIsInitializedAC(true))
        dispatch(setUserProfileAC(data))

    } catch (e) {
        handleServerNetworkError(e, dispatch)
    } finally {
        dispatch(setAppStatusAC('succeeded'))
    }
}

export const logoutTC = () => async (dispatch: Dispatch) => {
    try {
        dispatch(setAppStatusAC('loading'))
        const data = await authApi.logout()
        dispatch(isLoggedAC(false))

    } catch (e) {
        handleServerNetworkError(e, dispatch)
    } finally {
        dispatch(setAppStatusAC('succeeded'))
    }
}

export const setNewPasswordTC = (password: string, token: string) => async (dispatch: Dispatch) => {
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

export const forgotPasswordTC = (param: ForgotDataType ) => async (dispatch: Dispatch) => {
    try {
        dispatch(setAppStatusAC('loading'))
        const res = await authApi.forgot(param)

    }catch(e) {
                handleServerNetworkError(e, dispatch)

    }finally {
        dispatch(setAppStatusAC('succeeded'))
    }
}


type InitialStateType = typeof initialState
type ActionType = ReturnType<typeof isLoggedAC>
    | ReturnType<typeof setNewPasswordAC>
// | ReturnType<typeof toLoginAC>