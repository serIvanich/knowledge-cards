import React, {useState} from 'react'
import {DoubleSlider} from './DoubleSlider';
import s from './DoubleSlider.module.scss'
import {getPacksCardsTC, setMinMaxValueAC} from '../../../bll/reducers/packs-reducer';
import {useDispatch} from 'react-redux';

export const DoubleSliderContainer: React.FC = React.memo(() => {
    const dispatch = useDispatch()
    const [value1, setValue1] = useState<number>(0);
    const [value2, setValue2] = useState<number>(100);

    const handleChange = (newValue: number[]) => {
        setValue1(newValue[0]);
        setValue2(newValue[1]);
        dispatch(setMinMaxValueAC({newMin: newValue[0], newMax: newValue[1]}))
    }

    const handleChangeCommitted = () => {

        dispatch(getPacksCardsTC({min: value1, max: value2}))

    }

    return (
        <div>
            Number of cards
            <div className={s.doubleSliderContainer}>
                <div className={s.valueWrapper}>
                    <span>{value1}</span>
                    <span>{value2}</span>
                </div>
                <DoubleSlider value={[value1, value2]}
                              handleChangeCommitted={handleChangeCommitted}
                              onChangeRange={handleChange}/>
            </div>
        </div>
    )
});