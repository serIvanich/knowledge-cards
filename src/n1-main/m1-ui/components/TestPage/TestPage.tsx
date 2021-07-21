import React from 'react'
import SuperInputText from "../../common/c1-SuperInputText/SuperInputText";
import SuperButton from '../../common/c2-SuperButton/SuperButton';
import s from './TestPage.module.css'
import SuperCheckbox from "../../common/c3-SuperCheckbox/SuperCheckbox";


export const TestPage: React.FC = () => {
    return (
        <div className={s.testBlock}>

            <SuperInputText
                value={'hi'}
                onChangeText={() => {}}
                // onEnter={showAlert}
                // error={error}
                // spanClassName={s.testSpanError}
            />

            <SuperButton>
                default
            </SuperButton>

            <SuperCheckbox
                checked={true}
                onChangeChecked={() => {}}
            >some text {/*// этот текст попадёт в children*/}
            </SuperCheckbox>


        </div>
    )
}
