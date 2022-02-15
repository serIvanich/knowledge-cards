import React, {useState} from 'react';
import s from './Paginator.module.scss'
import {AppStateType} from "../../../bll/store";
import {useDispatch, useSelector} from "react-redux";
import {
    getPacksCardsTC,
    InitialStatePacksType
} from "../../../bll/reducers/packs-reducer";


export const Paginator = React.memo(() => {
    console.log('paginator')
    const packsState = useSelector<AppStateType, InitialStatePacksType>(
        state => state.packs)
    const dispatch = useDispatch()

    const {
        cardPacksTotalCount,

        pageCount,
        page,
        portionSize
    } = packsState

    let pagesCount = Math.ceil(cardPacksTotalCount / pageCount);
    let pages:number[] = [];

    for (let i = 1; i<=pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber  * portionSize;



    return (
        <div className={s.paginator}>
            <div className={s.paginatorContainer}>
                { portionNumber > 1 &&
                <button
                    className = {s.paginatorBtn}
                    disabled={ !(portionNumber > 1) }
                    onClick={() => setPortionNumber(portionNumber - 1)}>
                    {'<<<'}
                </button>}
                <div className={s.pageNumbersBlock}>
                    {
                        pages
                            .filter (p => p>= leftPortionPageNumber && p<= rightPortionPageNumber)
                            .map((p, i) => {
                                return <div className={`${s.pageNumber} ${page === p ? s.selectedPage:''}`}
                                            key = {i}
                                            onClick={ () => dispatch(getPacksCardsTC({page: p}))  }> {p}</div>
                            })

                    }
                </div>
                { portionCount > portionNumber &&
                <button
                    className = {s.paginatorBtn}
                    disabled={ !(portionCount > portionNumber) }
                    onClick={() => setPortionNumber(portionNumber + 1)}>
                    {'>>>'}
                </button> }

            </div>

        </div>
    )
})

