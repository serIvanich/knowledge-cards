import React from 'react'
import s from './Search.module.scss'
import { Formik } from "formik";


type searchFormType = {
    term: string,

}
const searchValidate = () => {}



export const Search: React.FC = () => {


    const submit = (values:searchFormType, {setSubmitting}:{setSubmitting:(isSubmitting:boolean) => void}) => {

        setTimeout(() => {
            alert(JSON.stringify(values));
            setSubmitting(false);
        }, 400);
    }
    return (
        <div className={s.searchBlock}>
            <Formik
                initialValues={{ term: '' }}
                validate={searchValidate}
                onSubmit={submit}
            >
                {props => (
                    <form onSubmit={props.handleSubmit}>
                        <input
                            name="term"
                            type="text"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.term}

                        />
                        {props.errors.term && <div id="feedback">{props.errors.term}</div>}
                        <button type="submit">Search</button>
                    </form>
                )}
            </Formik>
        </div>
    )
}