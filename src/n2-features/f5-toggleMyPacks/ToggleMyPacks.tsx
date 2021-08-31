import React, {useState} from 'react'
import s from '../../n1-main/m1-ui/components/profile/Profile.module.scss'

type ToggleMyPacksType = {
    onClick: () => void
}

export const ToggleMyPacks: React.FC<ToggleMyPacksType> = ({onClick}) => {
    return (
        <div className={s.buttonMyAll}>
            <button onClick={onClick}>My</button>
            <button>All</button>
        </div>
    )
}