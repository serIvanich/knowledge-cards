import React, {useState} from 'react'
import s from './PackListTable.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../n1-main/m2-bll/store";
import {
    CardsPacksType,
    InitialStatePacksType,
    sortCardsAC,
    sortForCreatorAC,
    sortForUpdateAC,
    sortNameAC,
} from '../../n1-main/m2-bll/reducers/packs-reducer';
import {NavLink} from 'react-router-dom';
import {setIsShowModalWindow} from "../../n1-main/m2-bll/reducers/modal-reducer";

export const PacksListTable: React.FC = () => {
    const dispatch = useDispatch()
    let cardPacks = useSelector<AppStateType, Array<CardsPacksType>>(state => state.packs.cardPacks)
    const profileId = useSelector<AppStateType, string>(state => state.profile._id)

const [nameUpDown, setNameUpDown] = useState<boolean>(true)
const [cardsUpDown, setCardsUpDown] = useState<boolean>(true)
const [updateUpDown, setUpdateUpDown] = useState<boolean>(false)
const [createdUpDown, setCreatedUpDown] = useState<boolean>(true)

    const packsState = useSelector<AppStateType, InitialStatePacksType>(state => state.packs)



    const clickedSort = (e: React.MouseEvent<HTMLTableHeaderCellElement, MouseEvent>) => {
        if (e.currentTarget.dataset.set === 'name') {
            dispatch(sortNameAC(nameUpDown))
            setNameUpDown(!nameUpDown)
        } else if (e.currentTarget.dataset.set === 'cards') {
            dispatch(sortCardsAC(cardsUpDown))
            setCardsUpDown(!cardsUpDown)
        } else if (e.currentTarget.dataset.set === 'update') {
            dispatch(sortForUpdateAC(updateUpDown))
            setUpdateUpDown(!updateUpDown)
        } else if (e.currentTarget.dataset.set === 'creator') {
            dispatch(sortForCreatorAC(createdUpDown))
            setCreatedUpDown(!createdUpDown)
        }
    }
    const deletePack = (packId: string) => {
        dispatch(setIsShowModalWindow({isShowModal:true, modalType: 'DELETE-PACK', packId}))
    }

    const updatePack = (packId: string) => {
        dispatch(setIsShowModalWindow({isShowModal:true, modalType: "UPDATE-PACK", packId }))
    }

    return (
        <div className={s.tableBlock}>
            <tr className={s.tableRow}>
                <th className={s.tableCell} align={"left"} data-set={'name'} title={'sort name'}
                    onClick={(e) => clickedSort(e)}>Name
                </th>
                <th className={s.tableCell} align={"left"} data-set={'cards'} title={'sort of number cards'}
                    onClick={(e) => clickedSort(e)}>Cards
                </th>
                <th className={s.tableCell} align={"left"} data-set={'update'} title={'sort of date last update'}
                    onClick={(e) => clickedSort(e)}>Last Updated
                </th>
                <th className={s.tableCell} align={"left"} data-set={'creator'} title={'sort of creator'}
                    onClick={(e) => clickedSort(e)}>Created by</th>
                <th className={s.tableCell}>Actions</th>
            </tr>
            {cardPacks
                .map((p, i) => {
                    const dateUpdateStr = p.updated.toString().slice(0, 10)    //.split('').map(l => l === '-'? '.': l)
                    const data = `${dateUpdateStr.slice(8, 10)}.${dateUpdateStr.slice(5, 7)}.${dateUpdateStr.slice(0, 4)}`
                    return <tr key={i} className={s.tableRow}>
                        <td className={s.tableCell}><NavLink to={`/main/cards/${p._id}/${p.name}`}>{p.name}</NavLink>
                        </td>
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


export type UpDownType = 'up' | 'down'