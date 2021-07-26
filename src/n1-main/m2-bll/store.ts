import { createStore } from "redux";
import { applyMiddleware } from "redux";
import { combineReducers } from "redux";
import thunk, { ThunkAction } from "redux-thunk";
import { authReducer } from "./reducers/auth-reducer";
import {profileReducer} from "./reducers/profile-reducer";
import {loginReducer} from "./reducers/login-reducer";

const rootReducers = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    login: loginReducer
})

export const store = createStore(rootReducers, applyMiddleware(thunk))


//@ts-ignore
window.__store__ = store


export type AppStateType = ReturnType<typeof rootReducers>
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown,any>