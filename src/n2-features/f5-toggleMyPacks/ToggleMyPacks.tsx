import React from 'react'
import s from './ToggleMyPacks.module.scss'
import {useDispatch} from 'react-redux';
import {getPacksCardsTC} from '../../n1-main/m2-bll/reducers/packs-reducer';

export const ToggleMyPacks: React.FC = () => {
    const dispatch = useDispatch()
    const showAllPacks = () => {
        dispatch(getPacksCardsTC({}))
    }

    const showMyPacks = () => {
        // dispatch(getMyPacksTC({user_id: userId}))
    }

    return (
        <div>
            Show packs cards
            <div className={s.buttonContainer}>
                <button onClick={showMyPacks}>My</button>
                <button onClick={showAllPacks}>All</button>
            </div>
        </div>
    )
}