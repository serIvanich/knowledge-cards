import React, {useState} from 'react'
import s from './PackListTable.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../../bll/store";
import {
    
    InitialStatePacksType,
    sortCardsAC,
    sortForCreatorAC,
    sortForUpdateAC,
    sortNameAC,
} from '../../../../bll/reducers/packs-reducer';
import {NavLink} from 'react-router-dom';
import {setIsShowModalWindow} from "../../../../bll/reducers/modal-reducer";
import Preloader from "../../../common/Preloader/Preloader";

export const PacksListTable: React.FC = () => {
    const dispatch = useDispatch()
    let {cardPacks} = useSelector<AppStateType, InitialStatePacksType>(state => state.packs)
    const profileId = useSelector<AppStateType, string>(state => state.profile._id)


    const [nameUpDown, setNameUpDown] = useState<boolean>(true)
    const [cardsUpDown, setCardsUpDown] = useState<boolean>(true)
    const [updateUpDown, setUpdateUpDown] = useState<boolean>(false)
    const [createdUpDown, setCreatedUpDown] = useState<boolean>(true)




    const clickedSort = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
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
    if (!cardPacks) {
        return <Preloader/>
    }
    return (
        <div className={s.tableBlock}>
            <div className={s.tableRow}>
                <div className={s.tableCell}  data-set={'name'} title={'sort name'}
                    onClick={(e) => clickedSort(e)}>Name
                </div>
                <div className={s.tableCell} data-set={'cards'} title={'sort of number cards'}
                    onClick={(e) => clickedSort(e)}>Cards
                </div>
                <div className={s.tableCell}  data-set={'update'} title={'sort of date last update'}
                    onClick={(e) => clickedSort(e)}>Last Updated
                </div>
                <div className={s.tableCell}  data-set={'creator'} title={'sort of creator'}
                    onClick={(e) => clickedSort(e)}>Created by
                </div>
                <div className={s.tableCell}>Actions</div>
            </div>
            {cardPacks
                .map((p, i) => {
                    const dateUpdateStr = p.updated.toString().slice(0, 10)    //.split('').map(l => l === '-'? '.': l)
                    const data = `${dateUpdateStr.slice(8, 10)}.${dateUpdateStr.slice(5, 7)}.${dateUpdateStr.slice(0, 4)}`
                    return <div key={i} className={s.tableRow}>
                        <div className={s.tableCell}><NavLink to={`/main/cards/${p._id}/${p.name}`}>{p.name}</NavLink>
                        </div>
                        <div className={s.tableCell}>{p.cardsCount}</div>
                        <div className={s.tableCell}>{data}</div>
                        <div className={s.tableCell}>{p.user_name}</div>
                        <div className={s.tableCell}>
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
                                    <button>
                                        <NavLink to={`/LearnQuestion/${p.name}/${p._id}`}>
                                            learn
                                        </NavLink>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                })}
        </div>

    )

}


// export type UpDownType = 'up' | 'down'