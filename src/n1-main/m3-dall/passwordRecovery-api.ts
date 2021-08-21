import axios from 'axios';
import {routes} from '../m1-ui/routes/routes';

export const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true
})

export type ForgotDataType = {
    error: string;
}

export const passwordRecoveryApi = {
    forgot: async (email: string) => {
        return await instance.post<ForgotDataType>('auth/forgot', {
            email,
            from: 'test-front-admin <mail-tanja@mail.ru>',
            message: `<div style="background-color: lime; padding: 15px">
                    password recovery link: 
                        <a href='http://localhost:3000/knowledge-cards#/${routes.setPass}/$token$'>link</a>
                    </div>
                 `
        })
    }
}
