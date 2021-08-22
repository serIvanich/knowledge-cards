import React, {useCallback, useState} from 'react'
import {RecoverPass} from './RecoverPass';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../../../m2-bll/store';
import {forgotPasswordTC} from '../../../../m2-bll/reducers/recoverPasswordThunk';
import Preloader from '../../../common/Preloader/Preloader';

export const RecoverContainerPass: React.FC = React.memo(() => {
    const dispatch = useDispatch();
    const error = useSelector((store: AppStateType) => store.app.error);
    const loading = useSelector((store: AppStateType) => store.app.status)

    const [email, setEmail] = useState<string>("");

    const forgotCallback = useCallback(
        () => dispatch(forgotPasswordTC(email)),
        [email, dispatch]
    );

    // useEffect(() => {
    //     return () => {
    //         dispatch(setAppStatusAC('idle'))
    //         dispatch(setAppErrorAC(null))
    //     }
    // }, [])

    return (
        <div>
            {loading === 'loading' && <Preloader />}
            <RecoverPass
                error={error}
                email={email}
                setEmail={setEmail}
                forgotCallback={forgotCallback}
            />
        </div>
    )
});

export default RecoverContainerPass;