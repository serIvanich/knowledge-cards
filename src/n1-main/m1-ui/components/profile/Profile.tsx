import React from 'react'
import {useSelector} from "react-redux";
import {AppStateType} from "../../../m2-bll/store";
import {routes} from "../../routes/routes";
import {Redirect} from "react-router-dom";


export const Profile: React.FC = () => {

    const isInitialized = useSelector<AppStateType, boolean>(state => state.app.isInitialized)
    if (!isInitialized) {
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
        </div>
    )
}
