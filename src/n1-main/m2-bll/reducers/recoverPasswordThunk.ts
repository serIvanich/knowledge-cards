import {Dispatch} from 'redux';
import { AppThunkType } from '../store';
import {setAppErrorAC, setAppStatusAC} from './app-reduser';
import {passwordRecoveryApi} from '../../m3-dall/passwordRecovery-api';

export const forgotPasswordTC = (email: string): AppThunkType => async (dispatch: Dispatch) => {
    dispatch(setAppStatusAC('loading'))
    return passwordRecoveryApi.forgot(email)
        .then(res => {
            if(res.status === 200) {
                dispatch(setAppStatusAC('succeeded'))
                dispatch(setAppErrorAC(`if account "${email}" exist, an email will be sent with further instruction`))
            } else {
                dispatch(setAppStatusAC('failed'))
                dispatch(setAppErrorAC('Error! Try again!'))
            }
        })
        .catch((error) => {
            dispatch(setAppErrorAC(error.response.data.error + ' more details in the console'))
            console.log('Error: ', error.response.data.error)
        })
        .finally(() => {
            dispatch(setAppErrorAC('failed'))
        })
}
