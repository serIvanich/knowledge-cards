import {Dispatch} from "redux"
import {handleServerNetworkError} from "../../utils/error-utils";
import {authApi} from "../../dall/app-api";
import {isLoggedAC} from "./auth-reducer";
import {setUserProfileAC, UserProfileType} from './profile-reducer';

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
    status: 'succeeded' as RequestStatusType,
    error: null as string | null,
    isInitialized: false,
    goToLogin: false,
    dataUser: {} as UserProfileType | null,
}

export type AppInitialStateType = typeof initialState

export const appReducer = (state: AppInitialStateType = initialState, action: AppActionsType): AppInitialStateType => {
    
    switch (action.type) {
        
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        case 'APP/SET-ERROR':
            return {...state, error: action.error}

        case "APP/SET-IS-INITIALIZED":
            return {...state, isInitialized: action.isInitialized}
        case "APP/SET-GO-TO-LOGIN":
            return {...state, goToLogin: action.goToLogin}


        default:
            return state
    }
}

export const setAppStatusAC = (status: RequestStatusType) => ({type: 'APP/SET-STATUS', status} as const)
export const setAppErrorAC = (error: string | null) => ({type: 'APP/SET-ERROR', error} as const)
export const setIsInitializedAC = (isInitialized: boolean) => ({type: 'APP/SET-IS-INITIALIZED', isInitialized} as const)
export const setGoToLoginAC = (goToLogin: boolean) => ({type: 'APP/SET-GO-TO-LOGIN', goToLogin} as const)


export const initializeAppTC = () => async (dispatch: Dispatch) => {
    dispatch(setAppStatusAC('loading'))
    try {

        const data = await authApi.me()
        dispatch(isLoggedAC(true))
        dispatch(setUserProfileAC(data))
        dispatch(setIsInitializedAC(true))
       

    } catch (e) {
       
       
        dispatch(setGoToLoginAC(true))
        
        handleServerNetworkError(e, dispatch)
    } finally {
        dispatch(setAppStatusAC('succeeded'))
    }
}

export type SetAppStatusActionType = ReturnType<typeof setAppStatusAC>
export type SetAppErrorActionType = ReturnType<typeof setAppErrorAC>
export type SetIsInitializedActionType = ReturnType<typeof setIsInitializedAC>
export type SetGoToLoginActionType = ReturnType<typeof setGoToLoginAC>
export type AppActionsType =
    SetAppStatusActionType
    | SetAppErrorActionType
    | SetIsInitializedActionType
    | SetGoToLoginActionType


