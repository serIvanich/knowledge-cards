import React from 'react'
import s from './ForgotPass.module.scss'
import {NavLink} from 'react-router-dom';
import {routes} from '../../../routes/routes';
import {FormikProps} from 'formik';
import {ForgotDataType} from '../../../../m3-dall/app-api';

type ForgotPropsType = {
    error: string | null
    formik: FormikProps<ForgotDataType>
}

export const ForgotPass: React.FC<ForgotPropsType> = React.memo(({error, formik}) => {

    return (
        <>
            {/*{error && <div className={s.error}>{error}</div>}*/}

            <form onSubmit={formik.handleSubmit}>
                <div className={s.formContainer}>
                    <div className={s.formBlock}>
                        <div className={s.inputItem}>
                            <label htmlFor="email" className={s.labelTitle}>Email</label>
                            <input
                                value={formik.values.email}
                                {...formik.getFieldProps('email')}  />
                            <div style={{'color': 'red', 'height': '10px'}}>
                                {formik.touched.email && formik.errors.email && formik.errors.email}
                            </div>
                        </div>
                    </div>
                    <div className={s.emailText}>
                        <span>Enter your email address and we will send you further instruction</span>
                    </div>
                    <div className={s.buttonItem}>
                        <button type="submit"> Send Instructions</button>
                    </div>
                    <div className={s.passwordText}>
                        <span>Did you remember your password?</span>
                    </div>
                    <div className={s.loginLink}>
                        <NavLink to={routes.login}>{'Try logging in'}</NavLink>
                    </div>
                </div>
            </form>
        </>
    )
});