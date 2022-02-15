import React, {ChangeEvent} from 'react'
import {Slider} from '@material-ui/core';

type SuperDoubleRangePropsType = {
    onChangeRange: (value: [number, number]) => void
    value: [number, number]
    handleChangeCommitted: () => void
}

export const DoubleSlider: React.FC<SuperDoubleRangePropsType> = ({onChangeRange, value, handleChangeCommitted}) => {
    console.log('double slider')
    const handleChange = (event: ChangeEvent<{}>, newValue: number | number[]) => {
       
        onChangeRange(newValue as [number, number])
    }

    return (
        <div>
            <Slider
               
                style={ {color: 'indianred'}}
                value={value}
                onChange={handleChange}
                onChangeCommitted={handleChangeCommitted}
                
            />
        </div>
    )
}