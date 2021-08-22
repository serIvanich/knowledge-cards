import React, {useEffect} from 'react';
import './App.css';
import {Redirect, Route, Switch} from "react-router-dom";
import {useDispatch} from "react-redux";
import {Main} from "../components/Main";
import {Login} from '../auth/login/Login';
import {Register} from "../auth/register/Register";
import {Header} from "../header/Header";
import {routes} from "../routes/routes";
import {SetPass} from "../auth/password/setPassword/setPass";
import {ForgotPass} from "../auth/password/fogotPassword/forgotPass";
import {Profile} from "../components/profile/Profile";
import {TestPage} from "../components/TestPage/TestPage";
import {Error404} from "../components/error404/Error404";
import {initializeAppTC} from "../../m2-bll/reducers/app-reduser";


function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(initializeAppTC())
    }, [])

    return (
        <div>

            <Header/>
            <Switch>
                <Route exact path={routes.main} render={() => <Main/>}/>
                <Route path={routes.login} render={() => <Login/>}/>
                <Route path={routes.register} render={() => <Register/>}/>
                <Route path={routes.setPass} render={() => <SetPass/>}/>
                <Route path={routes.restorePass} render={() => <ForgotPass/>}/>
                <Route path={routes.profile} render={() => <Profile/>}/>
                <Route path={routes.testPage} render={() => <TestPage/>}/>
                <Route path={routes.err404} render={() => <Error404/>}/>
                <Route path='*' render={() => <Redirect to={routes.err404}/>}/>

            </Switch>


        </div>
    )
}

export default App;
