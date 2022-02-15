import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../bll/store";
import {routes} from "../common/constants/routes";
import {Redirect} from "react-router-dom";
import {logoutTC} from "../../bll/reducers/auth-reducer";
import {UserProfileType} from "../../bll/reducers/profile-reducer";
import s from './Profile.module.scss'
import {Profile} from "./Profile";
import {PacksListTable} from "../main/packsList/packs-list-table/PacksListTable";
import {Search} from "../features/search/Search";
import {Paginator} from "../features/paginator/Paginator";
import {getPacksCardsTC} from "../../bll/reducers/packs-reducer";

export const ProfileContainer: React.FC = () => {
    console.log('profile container')
    const dispatch = useDispatch()
    const isLogged = useSelector<AppStateType, boolean>(state => state.auth.isLogged)
    const profile = useSelector<AppStateType, UserProfileType>(state => state.profile)

    const {name, _id, } = profile

    useEffect(() => {
        
        dispatch(getPacksCardsTC({user_id: _id}))

    }, [dispatch, _id])
    const isLogout = () => {
        dispatch(logoutTC())
    }

    if (!isLogged) {
        return <Redirect to={routes.login}/>
    }
    return (
        <div className={s.pagesContainer}>
            <div className={s.sideBar}>
                <Profile isLogged={isLogged} profile={profile} isLogout={isLogout}/>
            </div>
            <div className={s.mainPart}>
                <h2>{name}</h2>
                <Search/>
                <PacksListTable />
                <Paginator />
            </div>

        </div>
    )
}


