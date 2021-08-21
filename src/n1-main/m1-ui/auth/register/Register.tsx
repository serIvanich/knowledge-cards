import React from 'react'
// import {useDispatch} from "react-redux";
import s from './Register.module.scss';
// import {useFormik} from "formik";


export const Register: React.FC = () => {
    // const dispatch = useDispatch()
    // const formik = useFormik({
    //     initialValues: {
    //         email: '',
    //         password: '',
    //         confirmPassword: ''
    //     }
    // })

    const handleSubmit = () => {

    }

    return (
        <div className={s.registerBlock}>
            <div className={s.registerCard}>
                <h1 className={s.title}>It-incubator</h1>
                <h2>Sign Up</h2>
                <form  onSubmit = {handleSubmit}>
                    <div className={s.formBlock}>
                        <div className={s.inputItem}>
                            <label className={s.labelTitle}>Email</label>
                            <input name='email'/>
                        </div>
                        <div className={s.inputItem}>
                            <label className={s.labelTitle}>Password</label>
                            <input name='password'/>
                        </div>
                        <div className={s.inputItem}>
                            <label className={s.labelTitle}>Confirm Password</label>
                            <input name='confirmPassword'/>
                        </div>
                        <div className={s.buttonsBlock}>
                            <button> Cancel </button>
                            <button> Register </button>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    )
}
