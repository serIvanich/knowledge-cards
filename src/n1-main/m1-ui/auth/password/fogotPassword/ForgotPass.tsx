import React from 'react';
import s from './ForgotPass.module.scss';
import RecoverContainerPass from '../recoverPassword/RecoverContainerPass';

export const ForgotPass: React.FC = () => {

    return (
        <div className={s.wrapper}>
            <h1>Recover password</h1>
            <RecoverContainerPass/>
        </div>
    )
};
