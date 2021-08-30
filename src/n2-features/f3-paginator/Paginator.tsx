import React, {useState} from 'react';
import s from './Paginator.module.scss'
import {AppStateType} from "../../n1-main/m2-bll/store";
import {useDispatch, useSelector} from "react-redux";
import {changeCurrentPageAndPacks, InitialStatePacksType} from "../../n1-main/m2-bll/reducers/packs-reducer";


export const Paginator = () => {
    const packsState = useSelector<AppStateType, InitialStatePacksType>(
        state => state.packs)
    const dispatch = useDispatch()

    const {

        cardPacksTotalCount,
        pageSize,
        currentPage,
        portionSize
    } = packsState

    let pagesCount = Math.ceil(cardPacksTotalCount / pageSize);
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
                <button
                    className = {s.paginatorBtn}
                    disabled={ !(portionNumber > 1) }
                    onClick={() => setPortionNumber(portionNumber - 1)}>
                    {'<<<'}
                </button>
                <div className={s.pageNumbersBlock}>
                    {
                        pages
                            .filter (p => p>= leftPortionPageNumber && p<= rightPortionPageNumber)
                            .map((p) => {
                                return <div className={`${s.pageNumber} ${currentPage === p ? s.selectedPage:''}`}
                                             key = {p}
                                             onClick={ () => dispatch(changeCurrentPageAndPacks(p))  }> {p}</div>
                            })

                    }
                </div>
                <button
                    className = {s.paginatorBtn}
                    disabled={ !(portionCount > portionNumber) }
                        onClick={() => setPortionNumber(portionNumber + 1)}>
                    {'>>>'}
                </button>
            </div>

        </div>
    )
}

