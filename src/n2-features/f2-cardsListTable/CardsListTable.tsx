import React from 'react'
import s from "../f1-packsListTable/PackListTable.module.scss";

export const CardsListTable: React.FC = () => {

    return (
        <div className={s.tableBlock}>
            <tr className={s.tableRow}>
                <th className={s.tableCell} align={"left"} data-set={'question'}>Question</th>
                <th className={s.tableCell} data-set={'answer'}>Answer</th>
                <th className={s.tableCell} data-set={'last update'}>Last Updated</th>
                <th className={s.tableCell} data-set={'grade'}>Grade</th>
                <th className={s.tableCell}>Actions</th>
            </tr>

        </div>
    )
}