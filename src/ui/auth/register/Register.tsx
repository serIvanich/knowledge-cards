import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import s from './Register.module.scss';
import {useFormik} from "formik";
import {RegisterInitialStateType, registerTC, setErrorAC} from "../../../bll/reducers/register-reducer";
import {AppStateType} from "../../../bll/store";
import {Redirect} from "react-router-dom";

type FormikErrorType = {
    email?: string
    password?: string
    confirmPassword?: string
}


export const Register: React.FC = () => {
    const dispatch = useDispatch()
    const registerState = useSelector<AppStateType, RegisterInitialStateType>(state => state.register)

    const formik = useFormik({
        initialValues: {
            email: '',
            password:'',
            confirmPassword:''
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            if (!values.password) {
                errors.password = 'Required';
                // } else if (!/^[A-Za-z0-9._%+-]{4,10}$/i.test(values.password)) {
            } else if (values.password.length < 4) {
                errors.password = 'Invalid password - Must be 4 characters or more';
            }

            if (!values.confirmPassword) {
                errors.confirmPassword = 'Required'
            } else if (!(values.password===values.confirmPassword)) {
               errors.confirmPassword = 'Mismatch passwords'
            }
            return errors;
        },
        onSubmit: values => {
            // alert(JSON.stringify(values));
            const {email, password} = values

            dispatch(registerTC({email, password}))
            formik.resetForm();
        },
    });

    const cancelHandler = () => {
        formik.resetForm()
    }

   if (registerState.isUserRegistered) {
       return <Redirect to={'/login'} />
   }
    if (registerState.error) {
        alert(registerState.error)
        dispatch(setErrorAC(''))
    }

    return (
        <div className={s.registerBlock}>
            <div className={s.registerCard}>
                <h1 className={s.title}>It-incubator</h1>
                <h2>Sign Up</h2>
                <form  onSubmit={formik.handleSubmit}>
                    <div className={s.formBlock}>
                        <div className={s.inputItem}>
                            <label htmlFor="email" className={s.labelTitle}>Email</label>
                            <input {...formik.getFieldProps('email')}  />
                            <div style={{'color':'red', 'height':'10px'}}>
                                {formik.touched.email && formik.errors.email && formik.errors.email }
                            </div>

                        </div>
                        <div className={s.inputItem}>
                            <label htmlFor="password" className={s.labelTitle}>Password</label>
                            <input
                                type='password'
                                {...formik.getFieldProps('password')}
                            />
                            <div style={{'color':'red', 'height':'10px'}}>
                                {formik.touched.password && formik.errors.password && formik.errors.password }
                            </div>
                        </div>
                        <div className={s.inputItem}>
                            <label htmlFor="confirmPassword" className={s.labelTitle}>Confirm Password</label>
                            <input
                                // name='confirmPassword'
                                type='password'
                                {...formik.getFieldProps('confirmPassword')}
                            />
                            <div style={{'color':'red', 'height':'10px'}}>
                                {formik.touched.confirmPassword && formik.errors.confirmPassword && formik.errors.confirmPassword }
                            </div>
                        </div>
                        <div className={s.buttonsBlock}>
                            <button type='button' onClick={cancelHandler}> Cancel </button>
                            <button type="submit"> Register </button>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    )
}
