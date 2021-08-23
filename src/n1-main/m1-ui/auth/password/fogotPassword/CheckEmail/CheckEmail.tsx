import React from 'react';
import s from './CheckEmail.module.scss'
import checkEmail from './../../../../../../assecs/image/checkEmail.svg'

type PropsType = {
    email: string
}
const CheckEmail = (props: PropsType) => {
    const {
        email
    } = props

    return (
        <div className={s.checkEmailContainer}>
            <h1 className={s.h1}>It-incubator</h1>
            <div className={s.wrapper}>
                <img className={s.chekEmailImg} src={checkEmail} alt="Check email"/>
                <span className={s.checkEmail}>Check Email</span>
                <span className={s.instructions}>We’ve sent an Email with instructions to {email}</span>
            </div>
        </div>
    );
};

export default CheckEmail;