import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Navbar.module.scss'
import {routes} from "../../common/constants/routes";


export const Navbar: React.FC = () => {

    return (
        <div className={s.navLoginContainer}>

            <div className={s.navLogotype}>
                IT-incubator
            </div>
            <nav className={s.navLinksBox}>

                <div className={s.navLink}>
                    <NavLink to={routes.mainPacks} activeClassName={s.activeLink}>Packs list</NavLink>
                </div>
                |
                <div className={s.navLink}>
                    <NavLink to={routes.profile} activeClassName={s.activeLink}>Profile</NavLink>
                </div>
            </nav>


        </div>
    )
}
