import React from 'react'
import {useDispatch} from "react-redux";
import {useFormik} from "formik";
import {Login} from "./Login";

type FormikErrorType = {
    email?: string
    password?: string
}

export type InitialValuesType = {
    email: string
    password: string
    rememberMe: boolean
}


export const LoginContainer: React.FC = () => {
    const dispatch = useDispatch()


    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
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

            return errors;
        },
        onSubmit: values => {
            // alert(JSON.stringify(values));


            formik.resetForm();
        },
    });

    const cancelHandler = () => {
        formik.resetForm()
    }


    return (
        <div>
            <Login formik={formik}/>
        </div>
    )
}
