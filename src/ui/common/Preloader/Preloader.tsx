import React, { FC } from 'react'
import preload from '../../../assets/image/1486.gif'
import s from './Preloader.module.scss'


const Preloader: FC<PropsType> = () => {
    return (
    <div className={s.preloaderContainer}>

            <img src={preload} alt='preload...'/>

    </div> )
}
export default Preloader
type PropsType = {
}