import React, {ChangeEvent} from 'react'
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
        debugger
        dispatch(changeGradeCardTC(card_id, value))
    }
    return (
        <div>
            <Rating
                defaultValue={grade}
                precision={0.5}
                onChange={setNewGradeForCard}
            />
        </div>
    )
}