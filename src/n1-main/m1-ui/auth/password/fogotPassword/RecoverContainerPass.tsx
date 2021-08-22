import React, {useCallback, useState} from 'react'
import {RecoverPass} from './RecoverPass';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../../../m2-bll/store';
import {forgotPasswordTC} from '../../../../m2-bll/reducers/recoverPasswordThunk';
import Preloader from '../../../common/preloader';
import {useFormik} from 'formik';

type FormikErrorType = {
    email?: string
}

export const RecoverContainerPass: React.FC = React.memo(() => {
    const dispatch = useDispatch();
    const error = useSelector((store: AppStateType) => store.app.error);
    const loading = useSelector((store: AppStateType) => store.app.status)

    const [email, setEmail] = useState<string>('');

    const forgotCallback = useCallback(
        () => dispatch(forgotPasswordTC(email)),
        [email, dispatch]
    );

    const formik = useFormik({
        initialValues: {
            email: ''
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            return errors;
        },
        onSubmit: values => {
            const {email} = values
            dispatch(forgotPasswordTC(email))
            formik.resetForm()
        },
    });

    return (
        <div>
            {loading === 'loading' && <Preloader/>}
            <RecoverPass
                error={error}
                forgotCallback={forgotCallback}
                formik={formik}
            />
        </div>
    )
});

export default RecoverContainerPass;