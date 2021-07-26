import React from 'react'
import {useDispatch} from "react-redux";
import {isRegister} from "../../../m2-bll/reducers/login-reducer";


export const Register: React.FC = () => {
    const dispatch = useDispatch()
    const forRegister = () => {
        dispatch(isRegister())
    }

    return (
        <div>
            <h1>REGISTER</h1>
            <button onClick={forRegister}>register</button>
        </div>
    )
}
