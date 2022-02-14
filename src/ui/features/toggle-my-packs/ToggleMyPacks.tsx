import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {InitialStatePacksType, setMyPacksAC} from '../../../bll/reducers/packs-reducer';
import s from '../../profile/Profile.module.scss'
import {AppStateType} from "../../../bll/store";

export const ToggleMyPacks: React.FC = () => {
const {myPacks} = useSelector<AppStateType, InitialStatePacksType>(state => state.packs)
    const dispatch = useDispatch()
    const showAllPacks = () => {
        dispatch(setMyPacksAC(false))
    }
    const showMyPacks = () => {

        dispatch(setMyPacksAC(true))
    }


    return (
        <div className={s.buttonMyAll}>
            <h4>Show packs cards</h4>

            <button className={myPacks ? s.buttonMyAllIsOn : ''} onClick={showMyPacks}>My</button>
            <button className={!myPacks ? s.buttonMyAllIsOn : ''} onClick={showAllPacks}>All</button>
        </div>
    )
}