import axios from "axios";



export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    // baseURL: "http://localhost:7542/2.0/"

})

export const authApi = {
    me() {
        return instance.post('auth/me', {}).then(res => res.data)
    },
    register(data:RegisterParamsType) {
        return instance.post('/auth/register', data).then(res => res.data)
    },
    login(data: LoginDataType) {
        return instance.post('auth/login', data).then(res => res.data)
    },
    logout() {
        return instance.delete('auth/me')
    },
}

//types
export type RegisterParamsType = {
    email:string
    password:string
}

export type LoginDataType = {
    email:string
    password:string
    rememberMe: boolean
}