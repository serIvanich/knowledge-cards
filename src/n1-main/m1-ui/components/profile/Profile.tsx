import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../m2-bll/store";
import {routes} from "../../routes/routes";
import {Redirect} from "react-router-dom";
import {logoutTC} from "../../../m2-bll/reducers/auth-reducer";


export const Profile: React.FC = () => {
    const dispatch = useDispatch()
    const isLogged = useSelector<AppStateType, boolean>(state => state.auth.isLogged)

    const isLogout = () => {
        dispatch(logoutTC())
    }

    if (!isLogged) {
        return <Redirect to={routes.login}/>
    }
    return (
        <div>
            <h1>PROFILE</h1>
            <div>
                <div>my name: 'name'</div>
                <div>my email: 'email'</div>
                <div>publicCardPacksCount: 'publicCardPacksCount'</div>
            </div>
            <div>
                <button onClick={isLogout} >logout</button>
            </div>
        </div>
    )
}
