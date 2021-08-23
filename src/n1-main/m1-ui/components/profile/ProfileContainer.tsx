import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../m2-bll/store";
import {routes} from "../../routes/routes";
import {Redirect} from "react-router-dom";
import {logoutTC} from "../../../m2-bll/reducers/auth-reducer";
import {UserProfileType} from "../../../m2-bll/reducers/profile-reducer";
import s from './Profile.module.scss'
import {Profile} from "./Profile";
import {PacksListTable} from "../../../../n2-features/f1-packsListTable/PacksListTable";
import {Search} from "../../../../n2-features/f4-search/Search";
import {Paginator} from "../../../../n2-features/f3-paginator/Paginator";

export const ProfileContainer: React.FC = () => {

    const dispatch = useDispatch()
    const isLogged = useSelector<AppStateType, boolean>(state => state.auth.isLogged)
    const profile = useSelector<AppStateType, UserProfileType>(state => state.profile)
    const {email, name, publicCardPacksCount, avatar} = profile

    const isLogout = () => {
        dispatch(logoutTC())
    }

    if (!isLogged) {
        return <Redirect to={routes.login}/>
    }
    return (
        <div className={s.pagesContainer}>
            <div className={s.sideBar}>
                <Profile/>
            </div>
            <div className={s.mainPart}>
                <h2>{name}</h2>
                <Search/>
                <PacksListTable/>
                <Paginator/>
            </div>

        </div>
    )
}


