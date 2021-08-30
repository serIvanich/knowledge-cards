import React from 'react'
import s from './Search.module.scss'
import {Field, Form, Formik} from "formik";


type searchSearchFormObjectTypeFormType = {
    term: string,

}
const searchFormValidate = (values:any) => {
    const errors = {}
    return errors;
}




export const Search: React.FC = () => {


    const submit = (values:searchSearchFormObjectTypeFormType, {setSubmitting}:{setSubmitting:(isSubmitting:boolean) => void}) => {

        setTimeout(() => {
            alert(JSON.stringify(values));
            setSubmitting(false);
        }, 400);
    }
    return (
        <div className={s.searchBlock}>
            <Formik
                initialValues={{ term: '' }}
                validate={searchFormValidate}
                onSubmit={submit}
            >
                {({isSubmitting}) => (
                    <Form>
                        <Field type='text' name='term'>

                        </Field>


                        <button type="submit" disabled={isSubmitting}>Search</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}