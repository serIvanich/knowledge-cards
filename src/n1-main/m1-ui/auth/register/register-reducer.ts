import {authApi, RegisterParamsType} from "../../../m3-dall/app-api";
import {Dispatch} from "redux";
import {setAppStatusAC} from "../../../m2-bll/reducers/app-reduser";


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
        const res = await authApi.register(data)
        console.log(res)
        dispatch(registerAC(true))
    } catch (e) {
        console.log(`this error is ${e}`)
        dispatch(setErrorAC(e.response.data.error))
    } finally {
        dispatch(setAppStatusAC('succeeded'))
    }


}

export type RegisterActionType =
    ReturnType<typeof registerAC>
    | ReturnType<typeof setErrorAC>