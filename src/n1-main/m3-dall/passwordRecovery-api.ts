import {instance} from "./app-api";

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
