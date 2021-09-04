import React from 'react';
import Modal from './Modal';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../n1-main/m2-bll/store";
import {ModalWindowType, setIsShowModalWindow} from "../../n1-main/m2-bll/reducers/app-reduser";
import { postPackTC} from "../../n1-main/m2-bll/reducers/packs-reducer";
import {Field, Form, Formik} from "formik";




const searchFormValidate = (values:any) => {
    const errors = {}
    return errors;
}


const ModalContainer: React.FC = () => {
    const dispatch = useDispatch()
    const modalType = useSelector<AppStateType, ModalWindowType>(state => state.app.modalWindowType)
    const isShow = useSelector<AppStateType, boolean>(state => state.app.isShowModal)

    const submit = (values: { packName:string }, {
        setSubmitting, resetForm }:{
        setSubmitting:(isSubmitting:boolean) => void, resetForm:()=>void} ) => {
            if (!values.packName) {
                alert('Enter Pack Name')
            } else {
                dispatch(postPackTC(values.packName))
            }
            resetForm()
            setSubmitting(false);

    }

    const backgroundOnClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        dispatch(setIsShowModalWindow({isShowModal:false, modalType: ''}))
    }


    const createNewPack = <>
        <h2>Create New Pack</h2>
        <Formik
            initialValues={{ packName: '' }}
            // validate={}
            onSubmit={submit}
        >
            {({isSubmitting}) => (
                <Form style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'start',
                    justifyContent: 'space-around',
                }}>
                    <Field type='text' name='packName' placeholder='Enter Pack Name' >

                    </Field>

                    <button type="submit" disabled={isSubmitting}>Create New Pack</button>
                </Form>
            )}
        </Formik>
    </>

    if (!modalType) return null;

    return(

            <Modal backgroundOnClick={backgroundOnClick} isShow={isShow}>
                { modalType === 'CREATE-NEW-PACK' && createNewPack}
            </Modal>


    )
}

export default ModalContainer;