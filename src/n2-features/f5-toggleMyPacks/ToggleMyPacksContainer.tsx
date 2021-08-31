import React, {useState} from 'react'
import s from '../../n1-main/m1-ui/components/profile/Profile.module.scss'
import {useDispatch, useSelector} from 'react-redux';
import {
    getPacksCardsTC,
    setMyPacksAC,
    setUserIdAC,
} from '../../n1-main/m2-bll/reducers/packs-reducer';
import {RequestParamsType} from '../../n1-main/m3-dall/packs-api';
import {ToggleMyPacks} from './ToggleMyPacks';
import {AppStateType} from '../../n1-main/m2-bll/store';
import {AppInitialStateType} from '../../n1-main/m2-bll/reducers/app-reduser';

export const ToggleMyPacksContainer: React.FC = () => {
    const dataUser = useSelector<AppStateType, AppInitialStateType>(state => state.app)
    const params = useSelector<AppStateType, RequestParamsType>(state => state.packs)
    const [activeMy, setActiveMy] = useState(false)
    const [activeAll, setActiveAll] = useState(true)

    const dispatch = useDispatch()

    const getMyPacks = () => {
        debugger
        setActiveMy(true)
        setActiveAll(false)
        if (dataUser.dataUser?._id) {
            dispatch(setUserIdAC(dataUser.dataUser._id))
            dispatch(getPacksCardsTC(params))
            dispatch(setMyPacksAC(true))
        }
    }
    // const getAllPacks = () => {
    //     debugger
    //     setActiveAll(true)
    //     setActiveMy(false)
    //     dispatch(setUserIdAC(''))
    //     dispatch(getCardsPacksTC())
    // }


    return (
        <div className={s.buttonMyAll}>
            Show packs cards
            <ToggleMyPacks onClick={getMyPacks}/>
        </div>
    )
}