import React from 'react'
import s from './Search.module.scss'
import {Field, Form, Formik} from "formik";
import { getPacksCardsTC} from "../../n1-main/m2-bll/reducers/packs-reducer";
import {useDispatch} from "react-redux";


type SearchFormObjectTypeFormType = {
    term: string,

}
const searchFormValidate = (values:any) => {
    const errors = {}
    return errors;
}




export const Search: React.FC = React.memo(() => {
    const dispatch = useDispatch();

    const submit = (values:SearchFormObjectTypeFormType, {
        setSubmitting, resetForm }:{
        setSubmitting:(isSubmitting:boolean) => void, resetForm:()=>void} ) => {

        setTimeout(() => {
            dispatch(getPacksCardsTC({packName: values.term}))
            // resetForm();
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
                        <Field type='text' name='term' placeholder='Search' >

                        </Field>


                        <button type="submit" disabled={isSubmitting}>Search</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
})