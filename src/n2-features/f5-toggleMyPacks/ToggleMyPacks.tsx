import React from 'react'
import {useDispatch} from 'react-redux';
import {getPacksCardsTC} from '../../n1-main/m2-bll/reducers/packs-reducer';

export const ToggleMyPacks: React.FC = () => {
    const dispatch = useDispatch()
    const showAllPacks = () => {
        dispatch(getPacksCardsTC({}))
    }
import React, {useState} from 'react'
import s from '../../n1-main/m1-ui/components/profile/Profile.module.scss'

type ToggleMyPacksType = {
    onClick: () => void
}

export const ToggleMyPacks: React.FC<ToggleMyPacksType> = ({onClick}) => {
    return (
        <div className={s.buttonMyAll}>
            <button onClick={onClick}>My</button>
            <button>All</button>
            Show packs cards

                <button onClick={showMyPacks}>My</button>
                <button onClick={showAllPacks}>All</button>

        </div>
    )
}