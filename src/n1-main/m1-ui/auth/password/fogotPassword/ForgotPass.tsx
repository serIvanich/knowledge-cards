import React from 'react';
import s from './ForgotPass.module.scss';
import RecoverContainerPass from './RecoverContainerPass';

export const ForgotPass: React.FC = () => {

    return (
        <div className={s.registerBlock}>
            <div className={s.registerCard}>
                <h1 className={s.title}>It-incubator</h1>
                <h2>Recover password</h2>
                <RecoverContainerPass/>
            </div>
        </div>
    )
};
