import {authApi, RegisterParamsType} from "../../dall/app-api";
import {Dispatch} from "redux";
import {setAppStatusAC} from "./app-reduser";
import {handleServerNetworkError} from "../../utils/error-utils";


const initialState = {
    isUserRegistered: false,
    error:''
}

export type RegisterInitialStateType = typeof initialState

export const registerReducer = (state:RegisterInitialStateType = initialState, action:RegisterActionType):RegisterInitialStateType => {
    switch (action.type) {
        case 'register/NEW-USER-CREATED':
            return {...state, isUserRegistered: action.value};
        case 'register/SET-ERROR':
            return {...state, error: action.value};
        default: return state;
    }
}

//actions
export const registerAC = (value:boolean) => ({type:'register/NEW-USER-CREATED', value} as const)
export const setErrorAC = (value:string) => ({type:'register/SET-ERROR', value} as const)

//thunk
export const registerTC = (data:RegisterParamsType) => async (dispatch:Dispatch) => {
    dispatch(setAppStatusAC('loading'))
    try {
        await authApi.register(data)
        dispatch(registerAC(true))
    } catch (e) {
        handleServerNetworkError(e, dispatch)
    } finally {
        dispatch(setAppStatusAC('succeeded'))
    }


}

export type RegisterActionType =
    ReturnType<typeof registerAC>
    | ReturnType<typeof setErrorAC>