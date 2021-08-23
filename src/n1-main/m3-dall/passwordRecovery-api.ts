import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true
})

export const passwordRecoveryApi = {
    // forgot: async (email: string) => {
    //     return await instance.post<ForgotDataType>('auth/forgot', {
    //         email,
    //         from: 'test-front-admin <mail-tanja@mail.ru>',
    //         message: `<div style="background-color: lime; padding: 15px">
    //                 password recovery link:
    //                     <a href='http://localhost:3000/knowledge-cards#${routes.setPass}/$token$'>link</a>
    //                 </div>
    //              `
    //     })
    // },
    setNewPassword (password:string, token:string) {
        return instance.post('/auth/set-new-password', {
            password,
            resetPasswordToken: token,
        })
    }
}
