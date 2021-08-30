import React from 'react'
import s from "../f1-packsListTable/PackListTable.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../n1-main/m2-bll/store";
import {CardType} from "../../n1-main/m3-dall/cards-api";
import {deleteCardTC, updateCardTC} from "../../n1-main/m2-bll/reducers/cards-reducer";

export const CardsListTable: React.FC<{disabled:boolean}> = ({disabled}) => {
    const dispatch = useDispatch()
    const cards = useSelector<AppStateType, CardType[]>(state => state.cards.cards)

    const deleteCard = (cardId: string, packId: string) => {
        dispatch(deleteCardTC(cardId, packId))
    }
    const updateCard = (cardId: string, packId: string) => {
        dispatch(updateCardTC(cardId, packId))
    }

    return (
        <div className={s.tableBlock}>
            <tr className={s.tableRow}>
                <th className={s.tableCell} align={"left"} data-set={'question'}>Question</th>
                <th className={s.tableCell} data-set={'answer'}>Answer</th>
                <th className={s.tableCell} data-set={'last update'}>Last Updated</th>
                <th className={s.tableCell} data-set={'grade'}>Grade</th>
                <th className={s.tableCell}>Actions</th>
            </tr>

            {cards

                .map((c, i) => {
                    const dateUpdateStr = c.updated.toString().slice(0, 10)    //.split('').map(l => l === '-'? '.': l)
                    const data = `${dateUpdateStr.slice(8, 10)}.${dateUpdateStr.slice(5, 7)}.${dateUpdateStr.slice(0, 4)}`
                    return <tr key={i} className={s.tableRow}>
                        <td className={s.tableCell}>{c.question}</td>
                        <td className={s.tableCell}>{c.answer}</td>
                        <td className={s.tableCell}>{data}</td>
                        <td className={s.tableCell}>{c.grade}</td>
                        <td className={s.tableCell}>
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


                        </td>


                    </tr>
                })}

        </div>
    )
}