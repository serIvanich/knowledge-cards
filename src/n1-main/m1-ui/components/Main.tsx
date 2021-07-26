import React from 'react'
import {useDispatch} from "react-redux";
import { meTC } from '../../m2-bll/reducers/auth-reducer';


export const Main: React.FC = () => {
    const dispatch = useDispatch()
    const postMe = ()=> {
        dispatch(meTC())
    }
    return (
        <div>
            <h1>MAIN</h1>
            <button onClick={postMe}>postMe</button>
        </div>
    )
}
