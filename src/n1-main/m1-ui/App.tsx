import React from 'react';
import './App.css';
import {HashRouter, Route, Switch} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "../m2-bll/store";
import {Main} from "./components/Main";
import {Login} from './components/login/Login';
import {Register} from "./components/login/Register";
import {Header} from "./header/Header";
import {routes} from "./routes/routes";
import {SetPass} from "./components/password/setPass";
import {ForgotPass} from "./components/password/forgotPass";
import {Profile} from "./components/profile/Profile";
import {TestPage} from "./components/TestPage/TestPage";
import {Err404} from "./components/404err";

function App() {
    return (
        <div>
            <HashRouter>
                <Provider store={store}>
                    <Header/>
                    <Switch>
                        <Route exact path={routes.main} render={() => <Main/>}/>
                        <Route path={routes.login} render={() => <Login/>}/>
                        <Route path={routes.register} render={() => <Register/>}/>
                        <Route path={routes.setPass} render={() => <SetPass/>}/>
                        <Route path={routes.restorePass} render={() => <ForgotPass/>}/>
                        <Route path={routes.profile} render={() => <Profile/>}/>
                        <Route path={routes.testPage} render={() => <TestPage/>}/>
                        <Route path={routes.err404} render={() => <Err404/>}/>
                    </Switch>

                </Provider>
            </HashRouter>
        </div>
    )
}

export default App;
