import React from "react";
import s from "../LearnList.module.scss";

import {routes} from "../../../../routes/routes";

export const LearnQuestion: React.FC<LearnQuestionPropsType> = ({name, question, setAnswerTrue}) => {

    return <>
        <h3>Learn {name}</h3>
        <div>
            <h4>Question:</h4>
            {question}
        </div>
        <div className={s.buttonBlock}>
            <button ><a href={routes.mainPacks} className={s.linkOnPacks}>cancel</a></button>
            <button onClick={() => setAnswerTrue(true)}>Show answer</button>
        </div>
    </>
}

type LearnQuestionPropsType = {
    name: string
    question: string
    setAnswerTrue: (answerTrue: boolean) => void
}

