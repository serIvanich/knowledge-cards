import React, {useCallback, useEffect, useState} from 'react'
import s from './Rating.module.scss';
import {useDispatch} from 'react-redux';
import {CardType} from '../../n1-main/m3-dall/cards-api';
import {changeGradeCardTC, getCardsTC} from '../../n1-main/m2-bll/reducers/cards-reducer';
import {getRandomCard} from '../../utils/getRandomCard';

const grades = ['Did not know', 'Forgot', 'A lot of thought', 'Confused', 'Knew the answer'];

type RateYourselfType = {
    cards: CardType[]
    card: CardType
    setCard: (card: CardType) => void
    id: string
}

export const RateYourself: React.FC<RateYourselfType> = ({cards, card, setCard, id}) => {
    const dispatch = useDispatch()

    const [first, setFirst] = useState<boolean>(true);

    const myCallBack = useCallback((card_id: string, grade: number) => {
        dispatch(changeGradeCardTC(card_id, grade))
    }, [dispatch])

    useEffect(() => {
        if (first) {
            dispatch(getCardsTC(id))
            setFirst(false);
        }
        if (cards.length > 0) setCard(getRandomCard(cards));
        return () => {
        }
    }, [dispatch, id, cards, first])

    return (
        <div>
            <form className={s.form}>
                <span className={s.listSpan}>Rate yourself:</span>
                <ul className={s.list}>
                    {grades.map((g, i) => {
                        return <li className={s.item} key={'grade-' + i} onClick={() => myCallBack(card._id, i + 1)}>
                            <input className={s.input} value="i" name="rating" type="radio"
                                   id="1"/>
                            <label className={s.label} htmlFor="1">{g}</label>
                        </li>
                    })}
                </ul>
            </form>
            {/*<ul className={s.rateYourself}> Rate yourself*/}
            {/*    <li onClick={() => myCallBack(card._id, 1)}>Did not know</li>*/}
            {/*    <li onClick={() => myCallBack(card._id, 2)}>Forgot</li>*/}
            {/*    <li onClick={() => myCallBack(card._id, 3)}>A lot of thought</li>*/}
            {/*    <li onClick={() => myCallBack(card._id, 4)}>Confused</li>*/}
            {/*    <li onClick={() => myCallBack(card._id, 5)}>Knew the answer</li>*/}
            {/*</ul>*/}
        </div>
    )
}