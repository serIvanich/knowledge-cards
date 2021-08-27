import {instance} from "./app-api";

export type ForgotDataType = {
    error: string;
}

export const passwordRecoveryApi = {
    // forgot: async (email: string) => {
    //     return await instance.post<ForgotDataType>('auth/forgot', {
    //         email,
    //         from: 'test-front-admin <mail-tanja@mail.ru>',
    //         message: `<div style="background-color: lime; padding: 15px">
    //                 password recovery link:
    //                     <a href='http://localhost:3000/#/set-new-password/$token$'>link</a>
    //
    //                 </div>
    //              `
    //     })
    // },
    setNewPassword(password: string, token: string) {
        return instance.post('/auth/set-new-password', {
            password,
            resetPasswordToken: token,
        })
    }
}
