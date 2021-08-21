import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk, {ThunkAction} from "redux-thunk";
import {authReducer} from "./reducers/auth-reducer";
import {profileReducer} from "./reducers/profile-reducer";
import {appReducer} from "./reducers/app-reduser";
import {registerReducer} from "../m1-ui/auth/register/register-reducer";

const rootReducers = combineReducers({
    app: appReducer,
    auth: authReducer,
    register:registerReducer,
    profile: profileReducer
})

export const store = createStore(rootReducers, applyMiddleware(thunk))


//@ts-ignore
window.__store__ = store

export type AppStateType = ReturnType<typeof rootReducers>
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, any>