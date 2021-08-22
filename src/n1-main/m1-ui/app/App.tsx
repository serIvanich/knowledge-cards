import React, {useEffect} from 'react';
import './App.css';
import {Redirect, Route, Switch} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Main} from "../components/Main";
import {Register} from "../auth/register/Register";
import {Header} from "../header/Header";
import {routes} from "../routes/routes";
import {SetPass} from "../auth/password/setPassword/setPass";
import {Profile} from "../components/profile/Profile";
import {TestPage} from "../components/TestPage/TestPage";
import {Error404} from "../components/error404/Error404";

import {initializeAppTC, RequestStatusType} from "../../m2-bll/reducers/app-reduser";
import {LoginContainer} from "../auth/login/LoginContainer";
import {AppStateType} from "../../m2-bll/store";
import Preloader from "../common/Preloader/Preloader";

import {ForgotPass} from '../auth/password/fogotPassword/ForgotPass';



function App() {
    const dispatch = useDispatch()
    const isInitialized = useSelector<AppStateType, boolean>(state => state.app.isInitialized)
    const status = useSelector<AppStateType, RequestStatusType>(state => state.app.status)
    useEffect(() => {
        if (!isInitialized) {
            dispatch(initializeAppTC())
        }
    }, [])
    let appCss = 'appContainer'
    if (status === 'loading') {
        appCss = 'appPreloader'
    }

    return (
        <div>
            {status === 'loading' && <Preloader/>}
            <div className={appCss}>


                <Header/>
                <Switch>
                    <Route exact path={'/'} render={() => <Redirect to={routes.main}/>}/>
                    <Route exact path={routes.main} render={() => <Main/>}/>
                    <Route path={routes.login} render={() => <LoginContainer/>}/>
                    <Route path={routes.register} render={() => <Register/>}/>
                    <Route path={`${routes.setPass}/:id`} render={() => <SetPass/>}/>
                    <Route path={routes.forgotPass} render={() => <ForgotPass/>}/>
                    <Route path={routes.profile} render={() => <Profile/>}/>
                    <Route path={routes.testPage} render={() => <TestPage/>}/>
                    <Route path={routes.err404} render={() => <Error404/>}/>
                    <Route path='*' render={() => <Redirect to={routes.err404}/>}/>

                </Switch>
            </div>

        </div>
    )
}

export default App;
