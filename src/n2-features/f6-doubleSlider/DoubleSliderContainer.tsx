import React, {useState} from 'react'
import {DoubleSlider} from './DoubleSlider';

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
            <div>
                <span>{value1}</span>
                <DoubleSlider value={[value1, value2]}
                              onChangeRange={handleChange}/>
                <span>{value2}</span>
            </div>
        </div>
    )
}