import React, {ChangeEvent} from 'react'
import {Slider} from '@material-ui/core';

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
}

export const DoubleSlider: React.FC<SuperDoubleRangePropsType> = ({onChangeRange, value}) => {
    const handleChange = (event: ChangeEvent<{}>, newValue: number | number[]) => {
        onChangeRange && onChangeRange(newValue as [number, number])
    }
    return (
        <div>
            <Slider
                style={{width: '250px', color: 'indianred', height: '24px'}}
                value={value}
                onChange={handleChange}
            />
        </div>
    )
}