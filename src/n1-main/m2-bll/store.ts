import { createStore } from "redux";
import { applyMiddleware } from "redux";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./reducers/auth-reducer";
import {profileReducer} from "./reducers/profile-reducer";
import {passwordReducer} from "./reducers/password-reducer";

const rootReducers = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    password: passwordReducer
})

export const store = createStore(rootReducers, applyMiddleware(thunk))

//@ts-ignore
window.__store__ = store


export type AppStateType = ReturnType<typeof rootReducers>