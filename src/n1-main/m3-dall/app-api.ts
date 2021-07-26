import axios from "axios";

const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true
})

export const authApi = {
    me() {
        return instance.post('auth/me', {}).then(res => res.data)
    },

    register() {
        return instance.post('auth/register', {email: 'serivan1108@gmail.com', password: '11K04G06s'})
            .then(res => res.data)
    },

    login() {
        return instance.post('auth/login', {
            email: 'serivan1108@gmail.com',
            password: '11K04G06s',
            rememberMe: false
        }).then(res => res.data)
    }
}
