import React from 'react'
import {Rating} from '@material-ui/lab';

type RatingCardType = {

    grade: number
}

export const RatingCard: React.FC<RatingCardType> = ({ grade}) => {
    console.log('RatingCard')
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