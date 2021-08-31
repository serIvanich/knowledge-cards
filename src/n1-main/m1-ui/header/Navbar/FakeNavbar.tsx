import React from 'react'
import { NavLink } from "react-router-dom"
import {routes} from "../../routes/routes";
import s from '../Header.module.css'


export const FakeNavbar: React.FC = () => {

    return (
        <nav>
            <div className={s.nav}>
                <div className={s.item}>
                    <NavLink to={routes.mainPacks} activeClassName={s.activeLink}>main </NavLink>|
                </div>
                <div className={s.item}>
                    <NavLink to={routes.login} activeClassName={s.activeLink} >login </NavLink>|
                </div>
                <div className={s.item}>
                    <NavLink to={routes.register} activeClassName={s.activeLink} >register </NavLink>|
                </div>
                <div className={s.item}>
                    <NavLink to={routes.err404} activeClassName={s.activeLink} >err404 </NavLink>|
                </div>
                <div className={s.item}>
                    <NavLink to={routes.forgotPass} activeClassName={s.activeLink} >forgot password </NavLink>|
                </div>
                <div className={s.item}>
                    <NavLink to={routes.setPass} activeClassName={s.activeLink} >set password </NavLink>|
                </div>
                <div className={s.item}>
                    <NavLink to={routes.profile} activeClassName={s.activeLink} >profile </NavLink>
                </div>
                {/*<div className={s.item}>*/}
                {/*    <NavLink to={routes.testPage} activeClassName={s.activeLink} >test page </NavLink>*/}
                {/*</div>*/}

            </div>

        </nav>
            )
}
