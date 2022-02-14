import React, {useCallback, useState} from 'react';
import s from '../LearnList.module.scss';
import {RateYourself} from '../../../features/rating/RateYourself';
import {CardType} from '../../../../dall/cards-api';
import {getRandomCard} from '../../../../utils/getRandomCard';
import {changeGradeCardTC} from "../../../../bll/reducers/cards-reducer";
import {useDispatch} from "react-redux";
import {Redirect} from "react-router-dom";
import {routes} from "../../../common/constants/routes";

export const LearnQuestionAnswer: React.FC<LearnQuestionAnswerPropsType> = (
    {name, id, card, cards, question, answer,
        setAnswerTrue, callbackRedirectBack}) => {


    const onNext = useCallback(() => {
        setAnswerTrue(false);


        return <Redirect to={routes.learnQuestion}/>
        // if (cards && cards.length > 0) {
        //     setCard(getRandomCard(cards));
        // }

    },[])

    return <>
        {card && <div>
            <div>
                <h3>Learn {name}</h3>
                <h4>Question:</h4>
                {question}
                <h4>Answer:</h4>
                {answer}
            </div>
            <RateYourself  card={card} />
            <div className={s.buttonBlock}>
                <button onClick={callbackRedirectBack}>cancel</button>
                {/*<button onClick={() => setAnswerTrue(false)}>next</button>*/}
                <button onClick={ onNext}>next</button>
            </div>
        </div>}
    </>
}


type LearnQuestionAnswerPropsType = {
    name: string
    question: string
    answer: string
    card: CardType

    callbackRedirectBack: () => void
    setAnswerTrue: (answerTrue: boolean) => void
    cards: CardType[]
    id: string
}