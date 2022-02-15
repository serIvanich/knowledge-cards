import {combineReducers} from "redux";
import thunk from "redux-thunk";
import {authReducer} from "./reducers/auth-reducer";
import {profileReducer} from "./reducers/profile-reducer";
import {appReducer} from "./reducers/app-reduser";
import {registerReducer} from "./reducers/register-reducer";
import {cardsReducer} from "./reducers/cards-reducer";
import {packsReducer} from "./reducers/packs-reducer";
import {configureStore} from "@reduxjs/toolkit";
import {modalReducer} from "./reducers/modal-reducer";

const rootReducers = combineReducers({
    app: appReducer,
    auth: authReducer,
    register: registerReducer,
    profile: profileReducer,
    cards: cardsReducer,
    packs: packsReducer,
    modal:modalReducer,



})

export const store = configureStore({
    reducer: rootReducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunk)
})


//@ts-ignore
window.__store__ = store

export type AppStateType = ReturnType<typeof rootReducers>
