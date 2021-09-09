import React, {useCallback, useState} from 'react';
import s from '../LearnList.module.scss';
import {RateYourself} from '../../../../../../n2-features/f9-Rating/RateYourself';
import {CardType} from '../../../../../m3-dall/cards-api';
import {getRandomCard} from '../../../../../../utils/getRandomCard';

export const LearnQuestionAnswer: React.FC<LearnQuestionAnswerPropsType> = (
    {name, id, cards, question, answer, setAnswerTrue, callbackRedirectBack}) => {
    const [card, setCard] = useState<CardType>({
        _id: 'fake',
        cardsPack_id: '',
        answer: 'answer fake',
        question: 'question fake',
        grade: 0,
        shots: 0,
        type: 'card',
        rating: 0,
        user_id: '',
        __v: 0,
        created: '',
        updated: '',
    });
    const onNext = useCallback(() => {
        setAnswerTrue(false);
        if (cards && cards.length > 0) {
            setCard(getRandomCard(cards));
        }

    },[cards])

    return <>
        {card && <div>
            <div>
                <h3>Learn {name}</h3>
                <h4>Question:</h4>
                {question}
                <h4>Answer:</h4>
                {answer}
            </div>
            <RateYourself cards={cards} card={card} setCard={setCard} id={id}/>
            <div className={s.buttonBlock}>
                <button onClick={callbackRedirectBack}>cancel</button>
                {/*<button onClick={() => setAnswerTrue(false)}>next</button>*/}
                <button onClick={() => onNext()}>next</button>
            </div>
        </div>}
    </>
}


type LearnQuestionAnswerPropsType = {
    name: string
    question: string
    answer: string
    setAnswerTrue: (answerTrue: boolean) => void
    callbackRedirectBack: () => void
    cards: CardType[]
    id: string
}