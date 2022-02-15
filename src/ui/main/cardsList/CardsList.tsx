import React, {useEffect} from 'react'
import {Search} from "../../features/search/Search";
import {CardsListTable} from "./cards-list-table/CardsListTable";
import s from './CardList.module.scss'
import {routes} from "../../common/constants/routes";
import image from '../../../assets/image/images.png'
import {NavLink, Redirect, useParams} from 'react-router-dom';
import {Paginator} from "../../features/paginator/Paginator";
import {useDispatch, useSelector} from "react-redux";
import {getCardsTC} from "../../../bll/reducers/cards-reducer";
import {AppStateType} from "../../../bll/store";
import {setIsShowModalWindow} from "../../../bll/reducers/modal-reducer";

export const CardsList: React.FC = () => {
    const isLogged = useSelector<AppStateType, boolean>(state => state.auth.isLogged)
    const {id, name} = useParams<{ id: string, name: string }>(); //current pack data

    const profileId = useSelector<AppStateType, string>(state => state.profile._id)
    const packUserId = useSelector<AppStateType, string>(state => state.cards.packUserId)
    const disabled = profileId !== packUserId
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCardsTC(id))
    }, [dispatch, id])


    const addCard = () => {
        dispatch(setIsShowModalWindow({isShowModal:true, modalType: "CREATE-NEW-CARD", packId:id}))
    }

    if (!isLogged) {
        return <Redirect to={routes.login}/>
    }
    return (
        <div className={s.cardPage}>
            <div className={s.cardContainer}>
                <div className={s.linkToPacks}>
                    <NavLink to={routes.mainPacks}>
                        <h3><img style={{width: '25px'}} src={image} alt='avatar'/> {name}</h3>

                    </NavLink>

                </div>
                <div className={s.searchBlock}>
                    <Search/>
                    <div>
                        <button onClick={addCard} disabled={disabled}>add a card</button>
                    </div>
                </div>
                <CardsListTable disabled={disabled}/>
                <div className={s.paginatorBlock}>
                    <Paginator/>
                </div>

            </div>
        </div>
    )
}