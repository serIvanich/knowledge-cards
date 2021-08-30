import React, {useState} from 'react'
import {DoubleSlider} from './DoubleSlider';
import s from './DoubleSlider.module.scss'

export const DoubleSliderContainer: React.FC = () => {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(100);

    const handleChange = (newValue: number[]) => {
        setValue1(newValue[0]);
        setValue2(newValue[1]);
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