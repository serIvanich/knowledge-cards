import React from 'react'
import s from '../fogotPassword/ForgotPass.module.scss'
import SuperInputText from '../../../common/c1-SuperInputText/SuperInputText';
import SuperButton from '../../../common/c2-SuperButton/SuperButton';

type ForgotPropsType = {
    error: string
    email: string
    setEmail: (email: string) => void
    forgot: () => void
    loading: boolean
}

export const RecoverPass: React.FC<ForgotPropsType> = React.memo(({email, error, forgot, setEmail, loading}) => {
    return (
        <div>
            <h1>Forgot password</h1>
            {error && <div className={s.error}>{error}</div>}
            <div>
                <SuperInputText
                    type={'email'}
                    value={email}
                    onChangeText={setEmail}
                />
            </div>
            <div>
                <SuperButton onClick={forgot} disabled={loading}>Send</SuperButton>
            </div>
        </div>
    )
});