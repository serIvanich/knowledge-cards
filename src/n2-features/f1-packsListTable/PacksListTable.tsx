import React from 'react'
import s from './PackListTable.module.scss'
import {useSelector} from "react-redux";
import {AppStateType} from "../../n1-main/m2-bll/store";
import {CardsPacksType} from '../../n1-main/m2-bll/reducers/packs-reducer';
import Preloader from "../../n1-main/m1-ui/common/Preloader/Preloader";

export const PacksListTable: React.FC = () => {

    const cardPacks = useSelector<AppStateType, Array<CardsPacksType>>(state => state.packs.cardPacks)

    if (!cardPacks) {
        return <Preloader/>
    }
        // const packs = cardsPacks.map((p, i) => {
        //     return <tr key={i} className={s.tableRow}>
        //         <td className={s.tableCell}>{p.name}</td>
        //         <td className={s.tableCell}>{p.cardsCount}</td>
        //         <td className={s.tableCell}>{p.updated}</td>
        //         <td className={s.tableCell}>{p.created}</td>
        //         <td className={s.tableCell}>{p.rating}</td>
        //     </tr>
        // })
        return (
            <div className={s.tableBlock}>
                <tr className={s.tableRow}>
                    <th className={s.tableCell}>Name</th>
                    <th className={s.tableCell}>Cards</th>
                    <th className={s.tableCell}>Last Updated</th>
                    <th className={s.tableCell}>Created by</th>
                    <th className={s.tableCell}>Actions</th>
                </tr>
                {cardPacks.map((p, i) => {
                    return <tr key={i} className={s.tableRow}>
                        <td className={s.tableCell}>{p.name}</td>
                        <td className={s.tableCell}>{p.cardsCount}</td>
                        <td className={s.tableCell}>{p.updated}</td>
                        <td className={s.tableCell}>{p.created}</td>
                        <td className={s.tableCell}>{p.rating}</td>
                    </tr>
                })}
            </div>

        )

}