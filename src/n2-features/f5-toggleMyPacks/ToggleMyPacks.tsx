import React, {useState} from 'react'
import s from '../../n1-main/m1-ui/components/profile/Profile.module.scss'
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../n1-main/m2-bll/store';
import {getMyPacksCardsTC, getPacksCardsTC} from '../../n1-main/m2-bll/reducers/packs-reducer';


export const ToggleMyPacks: React.FC = () => {
    const userId = useSelector<AppStateType, string | undefined>(state => state.profile._id)

    const dispatch = useDispatch()

    const getMyPacks = () => {
        // debugger
        // @ts-ignore
        dispatch(getMyPacksCardsTC(userId))
    }
    const getAllPacks = () => {
        debugger
        dispatch(getPacksCardsTC({}))
    }
    return (
        <div className={s.buttonMyAll}>
            <button onClick={getMyPacks}>My</button>
            <button onClick={getAllPacks}> All</button>
        </div>
    )
}