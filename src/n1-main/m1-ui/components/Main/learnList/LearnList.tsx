import React, {useEffect} from "react";
import s from '../cardsList/CardList.module.scss'
import style from './LearnList.module.scss'
import {useParams} from "react-router-dom";
import {getCardsTC} from "../../../../m2-bll/reducers/cards-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../../m2-bll/store";
import {CardType} from "../../../../m3-dall/cards-api";

type LearnListPropsType = {
    // packName?: string
}

export const LearnList: React.FC<LearnListPropsType> = () => {
    const dispatch = useDispatch()
    const {name, id} = useParams<{ name: string, id: string }>()
    useEffect(() => {
        dispatch(getCardsTC(id))
    }, [])

    const cards = useSelector<AppStateType, CardType[]>(state => state.cards.cards)
    let question = ''
    if (cards[0]) {
        question = cards[0].question
    }

    return (
        <div className={s.cardPage}>
            <div className={`${s.cardContainer} + ${s.learnListContainer}`}>
                <LearnQuetion name={name} question={question}/>
            </div>

        </div>
    )
}

type LearnQuestionPropsType = {
    name: string
    question: string
}
const LearnQuetion: React.FC<LearnQuestionPropsType> = ({name, question}) => {

    return <>
        <h3>Learn {name}</h3>
        <div>
            <h4>Question:</h4>
            {question}
        </div>
        <div className={style.buttonBlock}>
            <button>cancel</button>
            <button>Show answer</button>
        </div>
    </>
}