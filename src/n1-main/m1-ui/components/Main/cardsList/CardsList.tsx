import React from 'react'
import {Search} from "../../../../../n2-features/f4-search/Search";
import {CardsListTable} from "../../../../../n2-features/f2-cardsListTable/CardsListTable";
import s from './CardList.module.scss'
import {routes} from "../../../routes/routes";
import image from '../../../../../assecs/image/images.png'
import {NavLink} from 'react-router-dom';
import {Paginator} from "../../../../../n2-features/f3-paginator/Paginator";

export const CardsList: React.FC = () => {

    return (
        <div className={s.cardPage}>
            <div className={s.cardContainer}>
                <div className={s.linkToPacks}>
                    <NavLink to={routes.mainPacks}>
                        <h3><img style={{width: '25px'}} src={image}/> PackName</h3>

                    </NavLink>

                </div>
                <div className={s.searchBlock}>
                    <Search/>
                    <div>
                        <button>add a card</button>
                    </div>
                </div>
                <CardsListTable/>
                <div className={s.paginatorBlock}>
                    <Paginator/>
                </div>

            </div>
        </div>
    )
}