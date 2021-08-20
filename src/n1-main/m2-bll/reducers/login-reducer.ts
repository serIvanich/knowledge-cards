import {Dispatch} from "redux";
import {authApi} from "../../m3-dall/app-api";

// type InitialStateType = {
//     email:string | null
//     name: null | string
//     publicCardPacksCount: number
//     rememberMe: boolean
//     verified: boolean
//     id: null | string
// }
const initialState = {
    email: null as null | string,
    name: null as null | string,
    publicCardPacksCount: 0,
    rememberMe: false,
    verified: false,
    id: null as null | string

}


export const loginReducer = (state: InitialStateType = initialState, action: ActionType) => {
   switch (action.type) {
       case "IS-LOGIN":
           return {...action.data}

       default:
           return state
   }




}

//action
const loginAC = (data: InitialStateType) => ({type: 'IS-LOGIN', data} as const)



// thunk
export const isRegister = () => async (dispatch: Dispatch) => {
    try {
        const res = await authApi.register()
        alert(res)
    } catch (e) {
        alert(e)
    }
}
export const isLogin = () => async (dispatch: Dispatch) => {
    try {
        const res = await authApi.login()
        console.log(res)
        const  {email, name, publicCardPacksCount, rememberMe, verified, id} = res
        const data = {email, name, publicCardPacksCount, rememberMe, verified, id}

        dispatch(loginAC(data))

    } catch (e) {
        alert(e)
    }
}

export type InitialStateType = typeof initialState
type ActionType = ReturnType<typeof loginAC>