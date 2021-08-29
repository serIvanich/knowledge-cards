import React, {useState} from 'react'
import {ForgotPass} from './ForgotPass';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../../../m2-bll/store';
import {forgotPasswordTC} from '../../../../m2-bll/reducers/forgotPasswordThunk';
import Preloader from '../../../common/Preloader/Preloader';
import s from './ForgotPass.module.scss'
import {useFormik} from 'formik';
import CheckEmail from './CheckEmail/CheckEmail';
import {ForgotDataType} from '../../../../m3-dall/app-api';

type FormikErrorType = {
    email?: string
}

export const ForgotContainerPass: React.FC = React.memo(() => {
    const dispatch = useDispatch();
    const error = useSelector((store: AppStateType) => store.app.error);
    const loading = useSelector((store: AppStateType) => store.app.status)
    const [redirectToCheckEmail, setRedirectToCheckEmail] = useState<boolean>(false)

    const formik = useFormik({
        initialValues: {
            email: '',
            from: 'test-front-admin <mail-tanja@mail.ru>',
            message: `<div style="background-color: lime; padding: 15px">
                    password recovery link: 
                        <a href='https://serivanich.github.io/knowledge-cards/#/set-new-password/$token$'>link</a>
                    </div>`
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Email is required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            return errors; // если раскомитить, то ошибка с сервера не будет приходить, будет ошибка формы
        },
        onSubmit: (values: ForgotDataType) => {
            dispatch(forgotPasswordTC(values))
            setRedirectToCheckEmail(true)
        }
    });

    if (redirectToCheckEmail) {

        return <CheckEmail email={formik.values.email} setRedirectToCheckEmail={setRedirectToCheckEmail}/>
    }
    return (
        <div>
            {loading === 'loading' && <Preloader/>}
            <div className={s.registerBlock}>
                <div className={s.registerCard}>

                    <h1 className={s.title}>It-incubator</h1>
                    <h2>Forgot your password?</h2>
                    <div className={s.recoveryPasswordContainer}>
                        <ForgotPass
                            error={error}
                            formik={formik}
                        />
                    </div>


                </div>
            </div>
        </div>
    )
});

export default ForgotContainerPass;