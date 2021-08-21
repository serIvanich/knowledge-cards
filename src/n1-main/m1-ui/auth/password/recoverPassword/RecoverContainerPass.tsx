import React, {useCallback, useState} from 'react'
import {RecoverPass} from './RecoverPass';
import {useDispatch, useSelector} from 'react-redux';
import { AppStateType } from '../../../../m2-bll/store';
import { forgotTC } from '../../../../m2-bll/reducers/forgot-reducer';

export const RecoverContainerPass: React.FC = React.memo(() => {
    const [email, setEmail] = useState<string>("");
    const error = useSelector((store: AppStateType) => store.forgot.error);
    const dispatch = useDispatch();
    const forgotCallback = useCallback(
        () => dispatch(forgotTC(email)),
        [email, dispatch]
    );
    const loading = useSelector((store: AppStateType) => store.forgot.loading)

    return (
        <div>
            <RecoverPass
                error={error}
                email={email}
                setEmail={setEmail}
                forgot={forgotCallback}
                loading={loading}
            />
        </div>
    )
});

export default RecoverContainerPass;