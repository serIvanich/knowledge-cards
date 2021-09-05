import React, {useEffect} from 'react'
import s from '../../profile/Profile.module.scss';
import {Search} from '../../../../../n2-features/f4-search/Search';
import {PacksListTable} from '../../../../../n2-features/f1-packsListTable/PacksListTable';
import {Paginator} from '../../../../../n2-features/f3-paginator/Paginator';
import {
    CardsPacksType,
    getPacksCardsTC,
    InitialStatePacksType,
    postPackTC
} from '../../../../m2-bll/reducers/packs-reducer';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../../../m2-bll/store';
import Preloader from '../../../common/Preloader/Preloader';
import {DoubleSliderContainer} from '../../../../../n2-features/f6-doubleSlider/DoubleSliderContainer';
import {Redirect} from 'react-router-dom';
import {routes} from '../../../routes/routes';
import {SelectNumberItems} from '../../../../../n2-features/f7-selectNumberItems/SelectNumberItems';
import {ToggleMyPacks} from '../../../../../n2-features/f5-toggleMyPacks/ToggleMyPacks';
import {setIsShowModalWindow} from "../../../../m2-bll/reducers/app-reduser";

export const PacksList: React.FC = () => {

    const dispatch = useDispatch()
    const isLogged = useSelector<AppStateType, boolean>(state => state.auth.isLogged)

    const {pageCount, myPacks} = useSelector<AppStateType, InitialStatePacksType>(state => state.packs)

    useEffect(() => {

    dispatch(getPacksCardsTC({}))

    }, [myPacks])





    const createPack = () => {
        // dispatch(postPackTC())
        dispatch(setIsShowModalWindow({isShowModal:true, modalType: 'CREATE-NEW-PACK'}))

    }
    // if (!cardPacks) {
    //     return <Preloader/>
    // }
    if (!isLogged) {
        return <Redirect to={routes.login} />
    }

    return (
        <div className={s.pagesContainer}>

            <div className={s.sideBar}>
                <ToggleMyPacks/>
                <DoubleSliderContainer/>
            </div>
            <div className={s.mainPart}>
                <h2>PackList</h2>
                <div className={s.searchBlock}>
                    <Search/>
                    <div>
                        <button onClick={createPack}>add new pack</button>
                    </div>
                </div>
                <PacksListTable/>
                <div className={s.paginatorBlock}>
                    <Paginator/>
                    <div className={s.select}>
                        <SelectNumberItems pageCount={pageCount}/>
                    </div>

                </div>
            </div>
        </div>
    )
}