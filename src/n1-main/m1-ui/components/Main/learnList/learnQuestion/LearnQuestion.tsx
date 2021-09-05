import React from "react";
import s from "../LearnList.module.scss";

export const LearnQuestion: React.FC<LearnQuestionPropsType> =
    ({name, question, setAnswerTrue, callbackRedirectBack}) => {
        const clickOnCancel = () => {
            callbackRedirectBack()
            setAnswerTrue(false)
        }
        return <>
            <h3>Learn {name}</h3>
            <div>
                <h4>Question:</h4>
                {question}
            </div>
            <div className={s.buttonBlock}>
                <button onClick={clickOnCancel}>cancel</button>
                <button onClick={() => setAnswerTrue(true)}>Show answer</button>
            </div>
        </>
    }

type LearnQuestionPropsType = {
    name: string
    question: string
    setAnswerTrue: (answerTrue: boolean) => void
    callbackRedirectBack: () => void
}

