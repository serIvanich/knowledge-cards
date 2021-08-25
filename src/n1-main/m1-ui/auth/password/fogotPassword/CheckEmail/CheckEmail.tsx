import React from 'react';
import s from './CheckEmail.module.scss'
import checkEmail from './../../../../../../assecs/image/checkEmail.svg'
import {NavLink, Redirect} from 'react-router-dom';
import {routes} from "../../../../routes/routes";

type PropsType = {
    email?: string
    setRedirectToCheckEmail: (redirectToCheckEmail: boolean) => void
}
const CheckEmail: React.FC<PropsType> = ({email, setRedirectToCheckEmail}) => {

    const goToEmail = () => {
        setRedirectToCheckEmail(false)

    }

    return (
        <div className={s.checkEmailPage}>
            <div className={s.checkEmailContainer}>
                <h1 className={s.h1}>It-incubator</h1>
                <div className={s.wrapper}>

                    <a className={s.chekEmailImg} href={`mailto:${email}`}>
                        <img onClick={goToEmail} src={checkEmail}/>
                    </a>


                    <span className={s.checkEmail}>Check Email</span>
                    <span className={s.instructions}>We’ve sent an Email with instructions to {email}</span>
                </div>
            </div>
        </div>

    );
};

export default CheckEmail;