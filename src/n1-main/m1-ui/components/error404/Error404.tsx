import React from 'react';
import s from './Error404.module.css';
import {useSelector} from "react-redux";
import {AppStateType} from "../../../m2-bll/store";

export const Error404 = () => {
    const registerError = useSelector<AppStateType, string>(state => state.register.error)

    return (

        <div className={s.container}>
            {registerError && <h3 style={{'color':'#fff'}}>{registerError}</h3>}
            <div className={s.rail}>
                <div className={s.stamp + " " + s.four}>4</div>
                <div className={s.stamp + " " + s.zero}>0</div>
                <div className={s.stamp + " " + s.four}>4</div>
                <div className={s.stamp + " " + s.zero}>0</div>
                <div className={s.stamp + " " + s.four}>4</div>
                <div className={s.stamp + " " + s.zero}>0</div>
                <div className={s.stamp + " " + s.four}>4</div>
                <div className={s.stamp + " " + s.zero}>0</div>
                <div className={s.stamp + " " + s.four}>4</div>
                <div className={s.stamp + " " + s.zero}>0</div>
                <div className={s.stamp + " " + s.four}>4</div>
                <div className={s.stamp + " " + s.zero}>0</div>
                <div className={s.stamp + " " + s.four}>4</div>
                <div className={s.stamp + " " + s.zero}>0</div>
                <div className={s.stamp + " " + s.four}>4</div>
                <div className={s.stamp + " " + s.zero}>0</div>
                <div className={s.stamp + " " + s.four}>4</div>
                <div className={s.stamp + " " + s.zero}>0</div>
                <div className={s.stamp + " " + s.four}>4</div>
                <div className={s.stamp + " " + s.zero}>0</div>
            </div>
            <div className={s.world}>
                <div className={s.forward}>
                    <div className={s.box}>
                        <div className={s.wall}></div>
                        <div className={s.wall}></div>
                        <div className={s.wall}></div>
                        <div className={s.wall}></div>
                        <div className={s.wall}></div>
                        <div className={s.wall}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}