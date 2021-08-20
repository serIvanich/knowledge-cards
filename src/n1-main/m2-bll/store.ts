import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk, {ThunkAction} from "redux-thunk";
import {authReducer} from "./reducers/auth-reducer";
import {profileReducer} from "./reducers/profile-reducer";
import {appReducer} from "./reducers/app-reduser";

const rootReducers = combineReducers({
    app: appReducer,
    auth: authReducer,
    profile: profileReducer
})

export const store = createStore(rootReducers, applyMiddleware(thunk))


//@ts-ignore
window.__store__ = store


export type AppStateType = ReturnType<typeof rootReducers>
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, any>