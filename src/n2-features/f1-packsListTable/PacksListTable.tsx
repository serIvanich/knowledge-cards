import React from 'react'
import s from './PackListTable.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../n1-main/m2-bll/store";
import {
    CardsPacksType,
    deletePackTC,
    InitialStatePacksType,
    sortNameAC,
    updatePackTC
} from '../../n1-main/m2-bll/reducers/packs-reducer';
import {NavLink} from 'react-router-dom';
import {routes} from "../../n1-main/m1-ui/routes/routes";

export const PacksListTable: React.FC = () => {
    const dispatch = useDispatch()
    let cardPacks = useSelector<AppStateType, Array<CardsPacksType>>(state => state.packs.cardPacks)
    const profileId = useSelector<AppStateType, string>(state => state.profile._id)


    const packsState = useSelector<AppStateType, InitialStatePacksType>(state => state.packs)
    let firstCardIdx = (packsState.currentPage - 1) * packsState.pageSize;
    let lastCardIdx = packsState.currentPage * packsState.pageSize - 1;


    const clickedSort = (e: React.MouseEvent<HTMLTableHeaderCellElement, MouseEvent>) => {
        if (e.currentTarget.dataset.set === 'name') {
            dispatch(sortNameAC())
        }
    }
    const deletePack = (id: string) => {

        dispatch(deletePackTC(id))
    }
    const updatePack = (id: string) => {
        dispatch(updatePackTC(id))
    }

    return (
        <div className={s.tableBlock}>
            <tr className={s.tableRow}>
                <th className={s.tableCell} align={"left"} data-set={'name'} onClick={(e) => clickedSort(e)}>Name</th>
                <th className={s.tableCell} align={"left"} data-set={'cards'}>Cards</th>
                <th className={s.tableCell} align={"left"} data-set={'update'}>Last Updated</th>
                <th className={s.tableCell} align={"left"} data-set={'creator'}>Created by</th>
                <th className={s.tableCell}>Actions</th>
            </tr>
            {cardPacks
                .filter((p, idx) => firstCardIdx >= idx || idx <= lastCardIdx)
                .map((p, i) => {
                    const dateUpdateStr = p.updated.toString().slice(0, 10)    //.split('').map(l => l === '-'? '.': l)
                    const data = `${dateUpdateStr.slice(8, 10)}.${dateUpdateStr.slice(5, 7)}.${dateUpdateStr.slice(0, 4)}`
                    return <tr key={i} className={s.tableRow}>
                        <td className={s.tableCell}><NavLink to={`/main/cards/${p._id}/${p.name}`} >{p.name}</NavLink></td>
                        <td className={s.tableCell}>{p.cardsCount}</td>
                        <td className={s.tableCell}>{data}</td>
                        <td className={s.tableCell}>{p.user_name}</td>
                        <td className={s.tableCell}>
                            <div className={s.buttonInTableContainer}>
                                <div className={s.buttonInTable}>
                                    <button disabled={p.user_id !== profileId}
                                            onClick={() => deletePack(p._id)}>delete
                                    </button>
                                </div>
                                <div className={s.buttonInTable}>
                                    <button disabled={p.user_id !== profileId}
                                            onClick={() => updatePack(p._id)}>edit
                                    </button>
                                </div>
                                <div className={s.buttonInTable}>
                                    <button>learn</button>
                                </div>
                            </div>
                        </td>
                    </tr>
                })}
        </div>

    )

}


