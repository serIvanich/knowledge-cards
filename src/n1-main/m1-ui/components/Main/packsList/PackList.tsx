import React, {useEffect} from 'react'
import s from '../../profile/Profile.module.scss';
import {Search} from '../../../../../n2-features/f4-search/Search';
import {PacksListTable} from '../../../../../n2-features/f1-packsListTable/PacksListTable';
import {Paginator} from '../../../../../n2-features/f3-paginator/Paginator';
import {ToggleMyPacks} from '../../../../../n2-features/f5-toggleMyPacks/ToggleMyPacks';
import {CardsPacksType, getPacksCardsTC} from '../../../../m2-bll/reducers/packs-reducer';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../../../m2-bll/store';
import Preloader from '../../../common/Preloader/Preloader';
import {DoubleSliderContainer} from '../../../../../n2-features/f6-doubleSlider/DoubleSliderContainer';

export const PacksList: React.FC = () => {

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getPacksCardsTC({}))
    }, [])
    const packs = useSelector<AppStateType, CardsPacksType []>(state => state.packs.cardPacks)
    if (!packs) {
        return <Preloader/>
    }

    return (
        <div className={s.pagesContainer}>

            <div className={s.sideBar}>
                <ToggleMyPacks/>
                <DoubleSliderContainer/>
            </div>
            <div className={s.mainPart}>
                <h2>PackList</h2>
                <Search/>
                <PacksListTable/>
                <Paginator/>
            </div>


        </div>
    )
}