import React, {useEffect} from 'react';
import './App.css';
import {Redirect, Route, Switch} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Register} from '../auth/register/Register';
import {Header} from '../header/Header';
import {routes} from '../common/constants/routes';
import {SetPass} from '../auth/password-pages/setPassword/setPass';
import {Error404} from '../main/error404/Error404';
import {initializeAppTC, RequestStatusType} from '../../bll/reducers/app-reduser';
import {LoginContainer} from '../auth/login/LoginContainer';
import {AppStateType} from '../../bll/store';
import Preloader from '../common/Preloader/Preloader';
import ForgotContainerPass from '../auth/password-pages/forgot-password/ForgotContainerPass';
import {ProfileContainer} from "../profile/ProfileContainer";
import {CardsList} from "../main/cardsList/CardsList";
import {PacksList} from "../main/packsList/PackList";
import ModalContainer from "../features/modals/ModalContainer";
import {LearnList} from "../main/learnList/LearnList";


function App() {
    console.log('app')
    const dispatch = useDispatch()
    const isInitialized = useSelector<AppStateType, boolean>(state => state.app.isInitialized)
    const goToLogin = useSelector<AppStateType, boolean>(state => state.app.goToLogin)

    const status = useSelector<AppStateType, RequestStatusType>(state => state.app.status)
    const isShowModal = useSelector<AppStateType, boolean>(state => state.modal.isShowModal)

    useEffect(() => {

        if (!isInitialized) {
            dispatch(initializeAppTC())
        }
    }, [dispatch, isInitialized])

    let appCss = 'appContainer'

    if (status === 'loading') {
        appCss = 'appPreloader'
    }

if (!isInitialized) {
    if (!goToLogin){
    return <Preloader/>}
}

    return (

        <div className={'app'}>
            {status === 'loading' && <Preloader/>}
            <div className={appCss}>
                <Header/>
                <Switch>
                    <Route exact path={'/'} render={() => <Redirect to={routes.mainPacks}/>}/>
                    <Route exact path={routes.mainPacks} render={() => <PacksList/>}/>
                    <Route exact path={routes.mainCards} render={() => <CardsList/>}/>
                    <Route path={routes.login} render={() => <LoginContainer/>}/>
                    <Route path={routes.register} render={() => <Register/>}/>
                    <Route path={routes.setPass} render={() => <SetPass/>}/>
                    <Route path={routes.forgotPass} render={() => <ForgotContainerPass/>}/>
                    <Route path={routes.profile} render={() => <ProfileContainer/>}/>
                    <Route path={routes.learnQuestion} render={() => <LearnList/>}/>
                    {/*<Route path={routes.testPage} render={() => <TestPage/>}/>*/}
                    <Route path={routes.err404} render={() => <Error404/>}/>
                    <Route path='*' render={() => <Redirect to={routes.err404}/>}/>
                </Switch>
                {isShowModal && <ModalContainer/>}
            </div>

        </div>
    )
}

export default App;
