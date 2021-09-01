import React, {ChangeEvent} from 'react'
import s from './SelectNumberItems.module.scss'
import {useDispatch} from "react-redux";
import {getPacksCardsTC} from "../../n1-main/m2-bll/reducers/packs-reducer";

type PropsType = {
    pageCount: number
}

export const SelectNumberItems: React.FC<PropsType> = ({pageCount}) => {
    const dispatch = useDispatch()

    const maxNumberItems = 55
    let arrayNumberItems = [] as number[]
    for (let i = 1; i <= maxNumberItems; i++) {
        arrayNumberItems.push(i)
    }

    const changeSelectValue = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(getPacksCardsTC({pageCount: +(e.target.value)}))

    }

    return (
        <div className={s.selectBlock}>
            <form>
                <label htmlFor="select" className={s.optionsGroup}>show packs on the page: </label>
                <select value={pageCount} onChange={(e) => changeSelectValue(e)}>

                    {arrayNumberItems.map(i => <option key={i} className={s.selectOption}>{i}</option>)}
                </select>

            </form>

        </div>
    )
}