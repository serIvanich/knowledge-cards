import {authApi, RegisterParamsType} from "../../../m3-dall/app-api";
import {Dispatch} from "redux";


const initialState = {
    isUserRegistered: false
}

type InitialStateType = typeof initialState

export const registerReducer = (state:InitialStateType = initialState, action:RegisterActionType):InitialStateType => {
    switch (action.type) {
        case 'register/NEW-USER-CREATED':
            return state;

        default: return state;
    }
}

//actions
export const registerAC = (value:boolean) => ({type:'register/NEW-USER-CREATED', value} as const)

//thunk
export const registerTC = (data:RegisterParamsType) => async (dispatch:Dispatch<RegisterActionType>) => {
    try {
        const res = await authApi.register(data)
        console.log(res)
        dispatch(registerAC(true))
    } catch (e) {
        console.log(e)
        dispatch(registerAC(false))
    }


}

export type RegisterActionType = ReturnType<typeof registerAC>