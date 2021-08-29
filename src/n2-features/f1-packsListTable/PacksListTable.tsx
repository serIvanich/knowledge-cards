import React from 'react'
import s from './PackListTable.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../n1-main/m2-bll/store";
import {CardsPacksType, sortNameAC} from '../../n1-main/m2-bll/reducers/packs-reducer';
import { PacksType} from '../../n1-main/m2-bll/reducers/packs-reducer';
import Preloader from "../../n1-main/m1-ui/common/Preloader/Preloader";

export const PacksListTable: React.FC = () => {
const dispatch = useDispatch()
    let cardPacks = useSelector<AppStateType, Array<CardsPacksType>>(state => state.packs.cardPacks)



    const packsState = useSelector<AppStateType, PacksType>(state => state.packs)
    let firstCardIdx = (packsState.currentPage - 1) * packsState.pageSize;
    let lastCardIdx = packsState.currentPage * packsState.pageSize - 1;


    const clickedSort = (e: React.MouseEvent<HTMLTableHeaderCellElement, MouseEvent>) => {
        console.log(e.currentTarget.dataset.set)

        if (e.currentTarget.dataset.set === 'name') {

                dispatch(sortNameAC())
        }

    }

    return (
        <div className={s.tableBlock}>
            <tr className={s.tableRow}>
                <th className={s.tableCell} data-set={'name'} onClick={(e) => clickedSort(e)}>Name</th>
                <th className={s.tableCell} data-set={'cards'} >Cards</th>
                <th className={s.tableCell} data-set={'update'} >Last Updated</th>
                <th className={s.tableCell} data-set={'creator'} >Created by</th>
                <th className={s.tableCell}>Actions</th>
            </tr>
            {cardPacks
                .filter((p, idx) => firstCardIdx >= idx || idx <= lastCardIdx )
                .map((p, i) => {
                const dateUpdateStr = p.updated.toString().slice(0, 10)    //.split('').map(l => l === '-'? '.': l)
                const data = `${dateUpdateStr.slice(8, 10)}.${dateUpdateStr.slice(5, 7)}.${dateUpdateStr.slice(0, 4)}`
                return <tr key={i} className={s.tableRow}>
                    <td className={s.tableCell}>{p.name}</td>
                    <td className={s.tableCell}>{p.cardsCount}</td>
                    <td className={s.tableCell}>{data}</td>
                    <td className={s.tableCell}>{p.user_name}</td>
                    <td className={s.tableCell}>{p.rating}</td>
                </tr>
            })}
        </div>

    )

}