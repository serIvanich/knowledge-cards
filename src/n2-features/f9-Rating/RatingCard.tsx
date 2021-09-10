import React, {ChangeEvent, useCallback, useState} from 'react'
import {Rating} from '@material-ui/lab';
import {changeGradeCardTC} from '../../n1-main/m2-bll/reducers/cards-reducer';
import {useDispatch} from 'react-redux';

type RatingCardType = {

    grade: number
}

export const RatingCard: React.FC<RatingCardType> = ({ grade}) => {
    // const dispatch = useDispatch()
    // const setNewGradeForCard = useCallback((e: ChangeEvent<{}>, value: number | null) => {
    //     dispatch(changeGradeCardTC(card_id, value))
    // }, [dispatch])
    return (
        <div>
            <Rating
                name="rating"
                defaultValue={grade}
                precision={0.1}
                // onChange={setNewGradeForCard}
                // readOnly
            />
        </div>
    )
}