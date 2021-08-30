import React from 'react'
import s from '../../n1-main/m1-ui/components/profile/Profile.module.scss'

export const ToggleMyPacks: React.FC = () => {

    return (
        <div className={s.buttonMyAll}>
            Show packs cards
            <button>My</button>
            <button>All</button>
        </div>
    )
}