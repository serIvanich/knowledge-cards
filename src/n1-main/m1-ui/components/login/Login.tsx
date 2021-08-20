import React from 'react'
import {useDispatch} from "react-redux";
import {isLogin} from "../../../m2-bll/reducers/login-reducer";


export const Login: React.FC = () => {
    const dispatch = useDispatch()
    const forLogin = () => {
        dispatch(isLogin())
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <button onClick={forLogin}>login</button>
        </div>
    )
}
