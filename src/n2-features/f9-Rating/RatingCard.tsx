import React, {ChangeEvent, useState} from 'react'
import {Rating} from '@material-ui/lab';
import {changeGradeCardTC} from '../../n1-main/m2-bll/reducers/cards-reducer';
import {useDispatch} from 'react-redux';

type RatingCardType = {
    card_id: string
    grade: number
}

export const RatingCard: React.FC<RatingCardType> = ({card_id, grade}) => {
    const dispatch = useDispatch()
    const setNewGradeForCard = (e: ChangeEvent<{}>, value: number | null) => {
        dispatch(changeGradeCardTC(card_id, value))
    }
    return (
        <div>
            <Rating
                name="rating"
                defaultValue={grade}
                precision={0.1}
                onChange={setNewGradeForCard}
                // readOnly
            />
        </div>
    )
}