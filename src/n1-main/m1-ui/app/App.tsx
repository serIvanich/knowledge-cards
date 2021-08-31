import React, {useEffect} from 'react';
import './App.css';
import {Redirect, Route, Switch} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Register} from '../auth/register/Register';
import {Header} from '../header/Header';
import {routes} from '../routes/routes';
import {SetPass} from '../auth/password/setPassword/setPass';
import {Error404} from '../components/error404/Error404';
import {initializeAppTC, RequestStatusType} from '../../m2-bll/reducers/app-reduser';
import {LoginContainer} from '../auth/login/LoginContainer';
import {AppStateType} from '../../m2-bll/store';
import Preloader from '../common/Preloader/Preloader';
import ForgotContainerPass from '../auth/password/fogotPassword/ForgotContainerPass';
import {ProfileContainer} from "../components/profile/ProfileContainer";
import {Main} from '../components/Main/Main';
import {getPacksCardsTC} from "../../m2-bll/reducers/packs-reducer";
import {CardsList} from "../components/Main/cardsList/CardsList";
import {PacksList} from "../components/Main/packsList/PackList";


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
        <div className={'app'}>
            {status === 'loading' && <Preloader/>}
            <div className={appCss}>
                <Header/>
                <Switch>
                    <Route exact path={'/'} render={() => <Redirect to={routes.mainPacks}/>}/>
                    <Route exact path={routes.mainPacks} render={() => <PacksList />}/>
                    <Route exact path={routes.mainCards} render={() => <CardsList/>}/>
                    <Route path={routes.login} render={() => <LoginContainer/>}/>
                    <Route path={routes.register} render={() => <Register/>}/>
                    <Route path={routes.setPass} render={() => <SetPass/>}/>
                    <Route path={routes.forgotPass} render={() => <ForgotContainerPass/>}/>
                    <Route path={routes.profile} render={() => <ProfileContainer/>}/>
                    {/*<Route path={routes.testPage} render={() => <TestPage/>}/>*/}
                    <Route path={routes.err404} render={() => <Error404/>}/>
                    <Route path='*' render={() => <Redirect to={routes.err404}/>}/>
                </Switch>
            </div>

        </div>
    )
}

export default App;
