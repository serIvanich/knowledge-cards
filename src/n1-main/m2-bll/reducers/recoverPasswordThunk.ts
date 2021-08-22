import {Dispatch} from 'redux';
import {AppThunkType} from '../store';
import {setAppStatusAC} from './app-reduser';
import {passwordRecoveryApi} from '../../m3-dall/passwordRecovery-api';
import {handleServerNetworkError} from '../../../utils/error-utils';

export const forgotPasswordTC = (email: string): AppThunkType => async (dispatch: Dispatch) => {
    dispatch(setAppStatusAC('loading'))
    return await passwordRecoveryApi.forgot(email)
        .then(() => {
            dispatch(setAppStatusAC('succeeded'))
        })
        .catch((e) => {
            handleServerNetworkError(e, dispatch)
        })
}
