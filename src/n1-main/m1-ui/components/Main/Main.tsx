import React from 'react'
import s from "../profile/Profile.module.scss";
import {PacksList} from "./packsList/PackList";




export const Main: React.FC = () => {

    return (
        <div>
            <PacksList />
        </div>
    )
}
