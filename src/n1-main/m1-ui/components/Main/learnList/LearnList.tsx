import React, {useEffect, useState} from 'react';
import s from '../cardsList/CardList.module.scss'
import {useHistory, useParams} from 'react-router-dom';
import {getCardsTC} from '../../../../m2-bll/reducers/cards-reducer';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../../../m2-bll/store';
import {CardType} from '../../../../m3-dall/cards-api';
import {LearnQuestion} from './learnQuestion/LearnQuestion';
import {LearnQuestionAnswer} from './learnQuestionAnswer/LearnQuestionAnswer';

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
    const [answerTrue, setAnswerTrue] = useState(false)
    const [question, setQuestion] = useState('')
    const [answer, setAnswer] = useState('')
    const cards = useSelector<AppStateType, CardType[]>(state => state.cards.cards)

    const [card, setCard] = useState<CardType>({
        _id: 'fake',
        cardsPack_id: '',

        answer: 'answer fake',
        question: 'question fake',
        grade: 0,
        shots: 0,
        type: '',
        rating: 0,
        user_id: 'fakeid',
        created: '',
        updated: '',
        __v: 1
    });
    useEffect(() => {


        if (!answerTrue && cards.length > 0) {
            let newCard = getCard(cards)
            if (newCard._id === card._id) {
                newCard = getCard(cards)
            }
            setCard(newCard)
            setQuestion(newCard.question)
            setAnswer(newCard.answer)
        }

    }, [cards, id, answerTrue])
    const history = useHistory();


    const getCard = (cards: CardType[]) => {
        const sum = cards.reduce((acc, card) => acc + (6 - card.grade) * (6 - card.grade), 0);
        const rand = Math.random() * sum;
        const res = cards.reduce((acc: { sum: number, id: number }, card, i) => {
                const newSum = acc.sum + (6 - card.grade) * (6 - card.grade);
                return {sum: newSum, id: newSum < rand ? i : acc.id}
            }
            , {sum: 0, id: -1});
        console.log('test: ', sum, rand, res)

        return cards[res.id + 1];
    }


    const callbackRedirectBack = () => {
        history.goBack()
    }
    return <>
        <LearnQuestion answerTrue={answerTrue} setAnswerTrue={setAnswerTrue} name={name} card={card} answer={answer}
                       question={question} id={id}
                       cards={cards}
                       callbackRedirectBack={callbackRedirectBack}/>
    </>

        </div>
    )
}



