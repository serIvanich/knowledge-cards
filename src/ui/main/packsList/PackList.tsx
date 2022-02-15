import React, {useEffect} from 'react'
import s from '../../profile/Profile.module.scss';
import {Search} from '../../features/search/Search';
import {PacksListTable} from './packs-list-table/PacksListTable';
import {Paginator} from '../../features/paginator/Paginator';
import {getPacksCardsTC, InitialStatePacksType} from '../../../bll/reducers/packs-reducer';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../../bll/store';
import {DoubleSliderContainer} from '../../features/double-slider/DoubleSliderContainer';
import {Redirect} from 'react-router-dom';
import {routes} from '../../common/constants/routes';
import {SelectNumberItems} from '../../features/select-number-items/SelectNumberItems';
import {ToggleMyPacks} from '../../features/toggle-my-packs/ToggleMyPacks';
import {setIsShowModalWindow} from "../../../bll/reducers/modal-reducer";

export const PacksList: React.FC = () => {

    const dispatch = useDispatch()
    const isLogged = useSelector<AppStateType, boolean>(state => state.auth.isLogged)

    const {pageCount, myPacks} = useSelector<AppStateType, InitialStatePacksType>(state => state.packs)

    useEffect(() => {
        if(!isLogged){
            dispatch(getPacksCardsTC({}))
        }

    }, [myPacks, dispatch, isLogged])


    const createPack = () => {
        dispatch(setIsShowModalWindow({isShowModal: true, modalType: 'CREATE-NEW-PACK'}))

    }
    // if (!cardPacks) {
    //     return <Preloader/>
    // }
    if (!isLogged) {
        return <Redirect to={routes.login}/>
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