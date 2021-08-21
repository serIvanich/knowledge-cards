import React from 'react'
import {useDispatch} from "react-redux";
import s from "./Login.module.scss";
import {FormikProps} from "formik";
import {InitialValuesType} from "./LoginContainer";
import {NavLink} from 'react-router-dom';
import {routes} from "../../routes/routes";

type LoginPropsType = {
    formik: FormikProps<InitialValuesType>
}

export const Login: React.FC<LoginPropsType> = ({formik}) => {
    const dispatch = useDispatch()


    return (
        <div className={s.registerBlock}>
            <div className={s.registerCard}>
                <h1 className={s.title}>It-incubator</h1>
                <h2>Sign Up</h2>
                <form onSubmit={formik.handleSubmit}>
                    <div className={s.formBlock}>
                        <div className={s.inputItem}>
                            <label htmlFor="email" className={s.labelTitle}>Email</label>
                            <input {...formik.getFieldProps('email')}  />
                            <div style={{'color': 'red', 'height': '10px'}}>
                                {formik.touched.email && formik.errors.email && formik.errors.email}
                            </div>

                        </div>
                        <div className={s.inputItem}>
                            <label htmlFor="password" className={s.labelTitle}>Password</label>
                            <input
                                type='password'
                                {...formik.getFieldProps('password')}
                            />
                            <div style={{'color': 'red', 'height': '10px'}}>
                                {formik.touched.password && formik.errors.password && formik.errors.password}
                            </div>
                        </div>
                        <div>
                            <NavLink to={routes.restorePass}>Forgot password</NavLink>
                        </div>
                        <div className={s.inputItem}>
                            Remember me<input

                            type={'checkbox'}
                            {...formik.getFieldProps("rememberMe")}
                            checked={formik.values.rememberMe}/>


                        </div>
                        <div className={s.buttonsBlock}>

                            <button type="submit"> login</button>
                        </div>
                    </div>
                    <div >
                        Don`t have an account?
                        <NavLink to={routes.register}>Sing Up</NavLink>
                    </div>
                </form>
            </div>

        </div>
    )
}
