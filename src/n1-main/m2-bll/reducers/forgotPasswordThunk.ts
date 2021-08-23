import {Dispatch} from 'redux';
import {setAppStatusAC} from './app-reduser';
import {setRedirectToCheckEmail} from './redirect-reducer';
import {authApi, ForgotDataType} from '../../m3-dall/app-api';

export const forgotPasswordTC = (param: ForgotDataType ) => {
    return (dispatch: Dispatch) => {
        dispatch(setAppStatusAC('loading'))
        authApi.forgot(param)
            .then((res) => {
                if(res.status === 200) {
                    dispatch(setRedirectToCheckEmail(true))
                    dispatch(setAppStatusAC('succeeded'))
                }
            })
            .catch(() => {
                dispatch(setAppStatusAC('failed'))
            })
    }
}
