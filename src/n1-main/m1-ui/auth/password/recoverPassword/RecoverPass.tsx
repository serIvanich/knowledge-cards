import React from 'react'
import s from './RecoverPass.module.scss'
import SuperInputText from '../../../common/c1-SuperInputText/SuperInputText';
import SuperButton from '../../../common/c2-SuperButton/SuperButton';
import {NavLink} from 'react-router-dom';
import {routes} from '../../../routes/routes';

type ForgotPropsType = {
    error: string | null
    forgotCallback: () => void
    setEmail: (email: string) => void
    email: string
}

export const RecoverPass: React.FC<ForgotPropsType> = React.memo(({error, forgotCallback, email, setEmail}) => {
    return (
        <>
            {error && <div className={s.error}>{error}</div>}
            <div className={s.item}>
                <SuperInputText
                    type={'email'}
                    placeholder={'enter your email address'}
                    value={email}
                    onChangeText={setEmail}
                />
            </div>
            <div className={s.item}>
                <SuperButton onClick={forgotCallback}>{'Send'}</SuperButton>
            </div>
            <div className={s.item}>
                <NavLink to={routes.login} className={s.btn}>{'Login'}</NavLink>
            </div>

        </>
    )
});