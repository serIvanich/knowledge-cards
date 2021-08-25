import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../m2-bll/store";
import {routes} from "../../routes/routes";
import {Redirect} from "react-router-dom";
import {logoutTC} from "../../../m2-bll/reducers/auth-reducer";
import {UserProfileType} from "../../../m2-bll/reducers/profile-reducer";
import s from './Profile.module.scss'

type ProfilePropsType = {
    isLogged: boolean
    profile: UserProfileType
    isLogout: () => void
}

export const Profile: React.FC<ProfilePropsType> = ({isLogged, profile, isLogout}) => {
    const {email, name, publicCardPacksCount, avatar} = profile

    if (!isLogged) {
        return <Redirect to={routes.login}/>
    }
    return (
        <div className={s.profileSidebar}>
            <h1>PROFILE</h1>
            <div className={s.infoBlock}>
                <div>my name: {name}</div>
                <div>
                    <img width={'91%'} src={avatar}/>
                </div>

                <div>my email: {email}</div>
                <div>publicCardPacksCount: {publicCardPacksCount}</div>
            </div>
            <div className={s.buttonLogout}>
                <button onClick={isLogout}>logout</button>
            </div>
        </div>
    )
}
