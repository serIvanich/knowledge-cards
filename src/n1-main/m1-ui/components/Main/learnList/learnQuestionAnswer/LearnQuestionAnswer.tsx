import React from 'react';
import s from '../LearnList.module.scss';
import {RateYourself} from '../../../../../../n2-features/f9-Rating/RateYourself';

export const LearnQuestionAnswer: React.FC<LearnQuestionAnswerPropsType> = (
    {name, question, answer, setAnswerTrue}) => {

    return <>
        <div>
            <h3>Learn {name}</h3>
            <h4>Question:</h4>
            {question}
            <h4>Answer:</h4>
            {answer}
        </div>
        <RateYourself/>
        <div className={s.buttonBlock}>
            <button onClick={() => setAnswerTrue(false)}>cancel</button>
            <button>Show answer</button>
        </div>
    </>
}

type LearnQuestionAnswerPropsType = {
    name: string
    question: string
    answer: string
    setAnswerTrue: (answerTrue: boolean) => void
}