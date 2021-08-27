import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true
})

export type ForgotDataType = {
    error: string;
}

export const passwordRecoveryApi = {
    setNewPassword(password: string, token: string) {
        return instance.post('/auth/set-new-password', {
            password,
            resetPasswordToken: token,
        })
    }
}
