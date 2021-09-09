import React from 'react';
import s from '../LearnList.module.scss';
import {RateYourself} from '../../../../../../n2-features/f9-Rating/RateYourself';
import {CardType} from '../../../../../m3-dall/cards-api';

export const LearnQuestionAnswer: React.FC<LearnQuestionAnswerPropsType> = (
    {name, card, onNext, callbackRedirectBack}) => {

    return <>
        <div>
            <h3>Learn {name}</h3>
            <h4>Question:</h4>
            {card.question}
            <h4>Answer:</h4>
            {card.answer}
        </div>
        <RateYourself card={card}/>
        <div className={s.buttonBlock}>
            <button onClick={callbackRedirectBack}>cancel</button>
            <button onClick={onNext}>next</button>
        </div>
    </>
}

type LearnQuestionAnswerPropsType = {
    name: string
    card: CardType
    onNext: () => void
    callbackRedirectBack: () => void
}