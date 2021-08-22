import React from 'react'
import s from './ForgotPass.module.scss'
import {NavLink} from 'react-router-dom';
import {routes} from '../../../routes/routes';
import {FormikProps} from 'formik';

type ForgotPropsType = {
    error: string | null
    forgotCallback: () => void
    formik: FormikProps<any>
}

export const RecoverPass: React.FC<ForgotPropsType> = React.memo(({error, forgotCallback, formik}) => {
    return (
        <>
            {error && <div className={s.error}>{error}</div>}

            <form onSubmit={formik.handleSubmit}>
                <div className={s.formContainer}>
                    <div className={s.formBlock}>
                        <div className={s.inputItem}>
                            <label htmlFor="email" className={s.labelTitle}>Email</label>
                            <input {...formik.getFieldProps('email')}  />
                            <div style={{'color': 'red', 'height': '10px'}}>
                                {formik.touched.email && formik.errors.email && formik.errors.email}
                            </div>
                        </div>
                    </div>
                    <div className={s.buttonItem}>
                        <button onClick={forgotCallback} type="submit"> Send</button>
                    </div>
                    <div>
                        <NavLink to={routes.login}>{'Login'}</NavLink>
                    </div>
                </div>
            </form>
        </>
    )
});