import s from "./Register.module.scss";
import React from "react";

type PropsType = {
    formik: any
    name:string
    title:string

}
export const InputItem = (props:PropsType) => {
    const {formik, name,title } = props
    return (
        <div className={s.inputItem}>
            <label htmlFor="email" className={s.labelTitle}>{title}</label>
            <input {...formik.getFieldProps(name)}  />
            <div style={{'color':'red', 'height':'10px'}}>
                {formik.touched.name && formik.errors.name && formik.errors.name }
            </div>

        </div>
    )
}