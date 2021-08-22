import React from 'react'
import s from './setPass.module.scss';
import {useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {Redirect, useParams} from 'react-router-dom';
import {setNewPasswordTC} from "../../../../m2-bll/reducers/auth-reducer";
import {AppStateType} from "../../../../m2-bll/store";
import {routes} from "../../../routes/routes";

type FormikErrorType = {
    password?: string
}


export const SetPass: React.FC = () => {

    const authMessage = useSelector<AppStateType, string>(state => state.auth.message)

    const {id} = useParams<{id:string}>();
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            password:'',
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.password) {
                errors.password = 'Required';
                // } else if (!/^[A-Za-z0-9._%+-]{4,10}$/i.test(values.password)) {
            } else if (values.password.length < 4) {
                errors.password = 'Invalid password - Must be 4 characters or more';
            }

        },
        onSubmit: values => {
            // alert( JSON.stringify(values));
            debugger
            dispatch(setNewPasswordTC(JSON.stringify(values), id))
            formik.resetForm();
        },
    });


    if (authMessage === 'success') {
        return <Redirect to={routes.login} />
    }

    return (
        <div className={s.setNewPasswordBlock}>
            <div className={s.setNewPasswordCard}>
                <h1 className={s.title}>It-incubator</h1>
                <h2>Set password</h2>
                <form  onSubmit={formik.handleSubmit}>
                    <div className={s.formBlock}>
                        <div className={s.inputItem}>
                            {/*<label htmlFor="password" className={s.labelTitle}>Password</label>*/}
                            <input
                                type='password'
                                placeholder='Password'
                                {...formik.getFieldProps('password')}
                            />
                            <div style={{'color':'red', 'height':'10px'}}>
                                {formik.touched.password && formik.errors.password && formik.errors.password }
                                {authMessage === 'error' && 'SOME ERROR. TRY AGAIN'}
                            </div>
                        </div>
                        <div className={s.innerText}>
                            Create new password and we will send you further instructions to email
                        </div>
                        <div className={s.buttonsBlock}>
                            <button type="submit"> Create new password </button>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    )
}
