import React from "react";
import style from "../LearnList.module.scss";
import s from '../../cardsList/CardList.module.scss'
import {LearnQuestionAnswer} from "../learnQuestionAnswer/LearnQuestionAnswer";
import {CardType} from "../../../../../m3-dall/cards-api";

export const LearnQuestion: React.FC<LearnQuestionPropsType> =
    ({
         name, cards, card, question,
         answer, id, callbackRedirectBack, answerTrue, setAnswerTrue
     }) => {

        const clickOnCancel = () => {
            callbackRedirectBack()
            setAnswerTrue(false)
        }
        return <>

            <div className={s.cardPage}>
                <div className={`${s.cardContainer} + ${s.learnListContainer}`}>
                    {answerTrue
                        ? <LearnQuestionAnswer card={card} name={name} id={id} cards={cards} question={question}
                                               answer={answer} setAnswerTrue={setAnswerTrue}
                                               callbackRedirectBack={callbackRedirectBack}/>
                        : <div>
                            <h3>Learn {name}</h3>
                            <div>
                                <h4>Question:</h4>
                                {question}
                            </div>
                            <div className={style.buttonBlock}>
                                <button onClick={clickOnCancel}>cancel</button>
                                <button onClick={() => setAnswerTrue(true)}>Show answer</button>
                            </div>
                        </div>}
                </div>

            </div>
        </>
    }

type LearnQuestionPropsType = {
    answerTrue: boolean
    name: string
    question: string
    id: string
    answer: string
    cards: CardType []
    card: CardType
    callbackRedirectBack: () => void
    setAnswerTrue: (answerTrue: boolean) => void
}

