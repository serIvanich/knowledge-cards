import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Navbar.module.scss'
import {routes} from "../../routes/routes";


export const Navbar: React.FC = () => {

    return (
        <div className={s.navLoginContainer}>

            <div className={s.navLogotype}>
                IT-incubator
            </div>
            <nav className={s.navLinksBox}>

                <div className={s.navLink}>
                    <NavLink to={routes.main}>Packs list</NavLink>
                </div>
                |
                <div className={s.navLink}>
                    <NavLink to={routes.profile}>Profile</NavLink>
                </div>
            </nav>


        </div>
    )
}
