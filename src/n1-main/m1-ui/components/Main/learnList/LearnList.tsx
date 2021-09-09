import React, {useEffect, useState} from 'react';
import s from '../cardsList/CardList.module.scss'
import {useHistory, useParams} from 'react-router-dom';
import {getCardsTC} from '../../../../m2-bll/reducers/cards-reducer';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../../../m2-bll/store';
import {CardType} from '../../../../m3-dall/cards-api';
import {LearnQuestion} from './learnQuestion/LearnQuestion';
import {LearnQuestionAnswer} from './learnQuestionAnswer/LearnQuestionAnswer';
import {getRandomCard} from '../../../../../utils/getRandomCard';

type LearnListPropsType = {
    // packName?: string
}

export const LearnList: React.FC<LearnListPropsType> = () => {
    const dispatch = useDispatch()
    const cards = useSelector<AppStateType, CardType[]>(state => state.cards.cards)
    const [first, setFirst] = useState<boolean>(true);
    const [answerTrue, setAnswerTrue] = useState(false)
    const {name, id} = useParams<{ name: string, id: string }>()
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

    useEffect(() => {
        if (first) {
            debugger
            dispatch(getCardsTC(id))
            setFirst(false);
        }
        if (cards && cards.length > 0)
            setCard(getRandomCard(cards));
        return () => {
        }
    }, [dispatch, id, cards, first])

    const onNext = () => {
        setAnswerTrue(false);
        if (cards && cards.length > 0) {
            setCard(getRandomCard(cards));
        }
    }

    useEffect(() => {
        dispatch(getCardsTC(id))
    }, [])
    const history = useHistory();

    const callbackRedirectBack = () => {
        history.goBack()
    }
    return (
        <div className={s.cardPage}>
            <div className={`${s.cardContainer} + ${s.learnListContainer}`}>
                {!answerTrue ?
                    <LearnQuestion
                        name={name}
                        card={card}
                        setAnswerTrue={setAnswerTrue}
                        callbackRedirectBack={callbackRedirectBack}/>
                    :
                    <LearnQuestionAnswer
                        name={name}
                        onNext={onNext}
                        card={card}
                        callbackRedirectBack={callbackRedirectBack}/>}
            </div>

        </div>
    )
}



