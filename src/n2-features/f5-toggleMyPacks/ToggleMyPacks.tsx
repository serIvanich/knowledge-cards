import React from 'react'
import ss from './ToggleMyPacks.module.scss'
import {useDispatch} from 'react-redux';
import {getPacksCardsTC} from '../../n1-main/m2-bll/reducers/packs-reducer';
import s from '../../n1-main/m1-ui/components/profile/Profile.module.scss'

export const ToggleMyPacks: React.FC = () => {
    const dispatch = useDispatch()
    const showAllPacks = () => {
        dispatch(getPacksCardsTC({}))
    }

    const showMyPacks = () => {
        // dispatch(getMyPacksTC({user_id: userId}))
    }

    return (
        <div className={s.buttonMyAll}>
            Show packs cards
            <div className={ss.buttonContainer}>
                <button onClick={showMyPacks}>My</button>
                <button onClick={showAllPacks}>All</button>
            </div>
        </div>
    )
}