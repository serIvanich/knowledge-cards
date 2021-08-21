import axios from "axios";



export const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true
})

export const authApi = {
    me() {
        return instance.post('auth/me', {}).then(res => res.data)
    },
    register(data:RegisterParamsType) {
        return instance.post('/auth/register', data).then(res => res.data)
    }
}

//types
export type RegisterParamsType = {
    email:string
    password:string
}