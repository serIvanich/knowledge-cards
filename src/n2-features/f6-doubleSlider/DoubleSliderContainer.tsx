import React, {useState} from 'react'
import {DoubleSlider} from './DoubleSlider';
import s from './DoubleSlider.module.scss'
import {getPacksCardsTC, setMinMaxValueAC} from '../../n1-main/m2-bll/reducers/packs-reducer';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../n1-main/m2-bll/store';
import {RequestParamsType} from '../../n1-main/m3-dall/packs-api';

export const DoubleSliderContainer: React.FC = () => {
    const dispatch = useDispatch()
    const min = useSelector<AppStateType, number>(state => state.packs.minCardsCount);
    const max = useSelector<AppStateType, number>(state => state.packs.maxCardsCount);
    const [value1, setValue1] = useState<number>(min);
    const [value2, setValue2] = useState<number>(max);

    const handleChange = (newValue: number[]) => {
        debugger
        setValue1(newValue[0]);
        setValue2(newValue[1]);
        dispatch(setMinMaxValueAC(newValue))
        dispatch(getPacksCardsTC({}))
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
                              onChangeRange={handleChange}/>
            </div>
        </div>
    )
}