import React, {ChangeEvent} from 'react'
import s from './Rating.module.scss';
import {changeGradeCardTC} from '../../n1-main/m2-bll/reducers/cards-reducer';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../n1-main/m2-bll/store';
import {CardType} from '../../n1-main/m3-dall/cards-api';

const grades = ['Did not know', 'Forgot', 'A lot of thought', 'Confused', 'Knew the answer'];

export const RateYourself: React.FC = () => {

    return (
        <div>
            <form className={s.form}>
                <span className={s.listSpan}>Rate yourself:</span>
                <ul className={s.list}>
                    {grades.map((g, i) => (
                        <li className={s.item} key={'grade-' + i}>
                            <input className={s.input} name="rating" type="radio" id="1"/>
                            <label className={s.label} htmlFor="1">{g}</label>
                        </li>
                    ))}
                </ul>
            </form>
            {/*<ul className={s.rateYourself}> Rate yourself*/}
            {/*    <li value={1} onClick={(e) => (console.log(e.currentTarget.value))}>Did not know</li>*/}
            {/*    <li value={2} onClick={(e) => (alert(e.currentTarget.value))}>Forgot</li>*/}
            {/*    <li value={3} onClick={(e) => (alert(e.currentTarget.value))}>A lot of thought</li>*/}
            {/*    <li value={4} onClick={(e) => (alert(e.currentTarget.value))}>Confused</li>*/}
            {/*    <li value={5} onClick={(e) => (alert(e.currentTarget.value))}>Knew the answer</li>*/}
            {/*</ul>*/}
        </div>
    )
}