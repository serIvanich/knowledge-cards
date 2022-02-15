import React from 'react'
import s from "../../packsList/packs-list-table/PackListTable.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../../bll/store";
import {CardType} from "../../../../dall/cards-api";

import {setIsShowModalWindow} from "../../../../bll/reducers/modal-reducer";
import {RatingCard} from '../../../features/rating/RatingCard';

export const CardsListTable: React.FC<{disabled:boolean}> = ({disabled}) => {
    console.log('card list table')
    const dispatch = useDispatch()
    const cards = useSelector<AppStateType, CardType[]>(state => state.cards.cards)

    const deleteCard = (cardId: string, packId: string) => {
        // dispatch(deleteCardTC(cardId, packId))
        dispatch(setIsShowModalWindow({isShowModal:true, modalType: 'DELETE-CARD', packId, cardId}))
    }
    const updateCard = (cardId: string, packId: string) => {
        dispatch(setIsShowModalWindow({isShowModal:true, modalType: 'UPDATE-CARD', packId, cardId}))
    }


    return (
        <div className={s.tableBlock}>
            <div className={s.tableRow}>
                <div className={s.tableCell} data-set={'question'}>Question</div>
                <div className={s.tableCell} data-set={'answer'}>Answer</div>
                <div className={s.tableCell} data-set={'last update'}>Last Updated</div>
                <div className={s.tableCell} data-set={'grade'}>Grade</div>
                <div className={s.tableCell}>Actions</div>
            </div>

            {cards

                .map((c, i) => {
                    const dateUpdateStr = c.updated.toString().slice(0, 10)    //.split('').map(l => l === '-'? '.': l)
                    const data = `${dateUpdateStr.slice(8, 10)}.${dateUpdateStr.slice(5, 7)}.${dateUpdateStr.slice(0, 4)}`
                    return <div key={i} className={s.tableRow}>
                        <div className={s.tableCell}>{c.answer}</div>
                        <div className={s.tableCell}>{data}</div>
                        <div className={s.tableCell}>
                            {c.grade}
                            <RatingCard

                                grade={c.grade}
                            />
                        </div>
                        <div className={s.tableCell}>
                            <div className={s.buttonInTableContainer}>
                                <div className={s.buttonInTable}>
                                    <button onClick={() => deleteCard(c._id, c.cardsPack_id)} disabled={disabled}>
                                        delete
                                    </button>
                                </div>
                                <div className={s.buttonInTable}>
                                    <button onClick={() => updateCard(c._id, c.cardsPack_id)} disabled={disabled}>
                                        edit
                                    </button>
                                </div>

                            </div>


                        </div>


                    </div>
                })}

        </div>
    )
}