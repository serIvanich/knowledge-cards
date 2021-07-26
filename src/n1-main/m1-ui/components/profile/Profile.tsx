import React from 'react'
import {useSelector} from "react-redux";
import {AppStateType} from "../../../m2-bll/store";
import {InitialStateType} from "../../../m2-bll/reducers/login-reducer";


export const Profile: React.FC = () => {
    const name = useSelector<AppStateType, string | null>(state => state.login.name)
    const email = useSelector<AppStateType, string | null>(state => state.login.email)
    const publicCardPacksCount = useSelector<AppStateType, number>(state => state.login.publicCardPacksCount)


    return (
        <div>
            <h1>PROFILE</h1>
            <div>
                <div>my name: {name}</div>
                <div>my email: {email}</div>
                <div>publicCardPacksCount: {publicCardPacksCount}</div>
            </div>
        </div>
    )
}
