import React from 'react';
import s from '../LearnList.module.scss';
import {CardType} from '../../../../../m3-dall/cards-api';

export const LearnQuestion: React.FC<LearnQuestionPropsType> =
    ({name, setAnswerTrue, callbackRedirectBack, card}) => {
        const clickOnCancel = () => {
            callbackRedirectBack()
            setAnswerTrue(false)
        }

        return <>
            <h3>Learn {name}</h3>
            <div>
                <h4>Question:</h4>
                {card.question}
            </div>
            <div className={s.buttonBlock}>
                <button onClick={clickOnCancel}>cancel</button>
                <button onClick={() => setAnswerTrue(true)}>Show answer</button>
            </div>
        </>
    }

type LearnQuestionPropsType = {
    name: string
    setAnswerTrue: (answerTrue: boolean) => void
    callbackRedirectBack: () => void
    card: CardType
}

