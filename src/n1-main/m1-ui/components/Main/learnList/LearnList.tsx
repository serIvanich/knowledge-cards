import React, {useEffect, useState} from "react";
import s from '../cardsList/CardList.module.scss'
import style from './LearnList.module.scss'
import {useParams} from "react-router-dom";
import {getCardsTC} from "../../../../m2-bll/reducers/cards-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../../m2-bll/store";
import {CardType} from "../../../../m3-dall/cards-api";
import {LearnQuestion} from "./learnQuestion/LearnQuestion";
import {LearnQuestionAnswer} from "./learnQuestionAnswer/LearnQuestionAnswer";

type LearnListPropsType = {
    // packName?: string
}

export const LearnList: React.FC<LearnListPropsType> = () => {
    const dispatch = useDispatch()
    const [answerTrue, setAnswerTrue] = useState(false)
    const {name, id} = useParams<{ name: string, id: string }>()
    useEffect(() => {
        dispatch(getCardsTC(id))
    }, [])

    const cards = useSelector<AppStateType, CardType[]>(state => state.cards.cards)
    let question = ''
    let answer = ''
    if (cards[0]) {
        question = cards[0].question
        answer = cards[0].answer
    }

    return (
        <div className={s.cardPage}>
            <div className={`${s.cardContainer} + ${s.learnListContainer}`}>
                {!answerTrue ? <LearnQuestion name={name} question={question} setAnswerTrue={setAnswerTrue}/>
                    : <LearnQuestionAnswer name={name} question={question} answer={answer} setAnswerTrue={setAnswerTrue}/>}
            </div>

        </div>
    )
}



