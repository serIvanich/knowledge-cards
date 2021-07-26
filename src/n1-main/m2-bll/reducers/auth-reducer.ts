
import {authApi} from "../../m3-dall/app-api";
import {AppThunkType} from "../store";
import {Dispatch} from "redux";

const initialState = {}


export const authReducer = (state: InitialStateType = initialState, action: ActionType) => {

    return state

}

export const meTC = () => async(dispatch: Dispatch) => {
    try {
        const res = await authApi.me()
        alert(res)
    }
    catch (e) {
        alert(e)
    }
}



type InitialStateType = typeof initialState
type ActionType = {}