import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {setMyPacksAC} from '../../n1-main/m2-bll/reducers/packs-reducer';
import s from '../../n1-main/m1-ui/components/profile/Profile.module.scss'
import {AppStateType} from "../../n1-main/m2-bll/store";

export const ToggleMyPacks: React.FC = () => {
const myPacks = useSelector<AppStateType, boolean>(state => state.packs.myPacks)
    const dispatch = useDispatch()
    const showAllPacks = () => {
        dispatch(setMyPacksAC(false))
    }
    const showMyPacks = () => {

        dispatch(setMyPacksAC(true))
    }


    return (
        <div className={s.buttonMyAll}>
            Show packs cards

            <button className={myPacks? s.buttonMyAllIsOn: ''} onClick={showMyPacks}>My</button>
            <button className={!myPacks? s.buttonMyAllIsOn: ''} onClick={showAllPacks}>All</button>

        </div>
    )
}