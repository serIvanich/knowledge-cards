import React from 'react';
import Modal from './Modal';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../n1-main/m2-bll/store";
import {ModalWindowType, setIsShowModalWindow} from "../../n1-main/m2-bll/reducers/modal-reducer";
import {CardsPacksType, deletePackTC, postPackTC} from "../../n1-main/m2-bll/reducers/packs-reducer";
import {Field, Form, Formik} from "formik";




// const searchFormValidate = (values:any) => {
//     const errors = {}
//     return errors;
// }


const ModalContainer: React.FC = () => {
    const dispatch = useDispatch()
    const modalType = useSelector<AppStateType, ModalWindowType>(state => state.modal.modalType)
    const isShow = useSelector<AppStateType, boolean>(state => state.modal.isShowModal)
    const packId = useSelector<AppStateType, string>(state => state.modal.packId)
    const cardPacks = useSelector<AppStateType, CardsPacksType[]>( state => state.packs.cardPacks)

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

    const backgroundOnClick = (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement, MouseEvent>) => {
        dispatch(setIsShowModalWindow({isShowModal:false, modalType: ''}))
    }

    const deletePack = () => {
       dispatch(deletePackTC(packId))
    }

    const findPackNameById = () => {
        const pack = cardPacks.find( pack => pack._id === packId)
        return pack ? pack.name : ''
    }

    const createNewPackModal = <>
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
    const deletePackModal = <>
            <h2>Delete Pack</h2>
            <div style={{
                marginBottom: '22px',
                fontSize: '22px',

            }}>Do you really want to remove <span style={{
                fontWeight: 'bold',
            }}>Pack "{findPackNameById()}"?</span></div>
               <div style={{
                   marginBottom: '40px',
                   fontSize: '22px',
               }}> All cards will be excluded from this course.</div>
            <div style={{
                display:'flex',
                justifyContent:'space-between',
                alignItems:'center',

            }}>
                <button style={{
                    background: '#D7D8EF',
                    borderRadius: '25px',
                    fontSize:'20px',
                    padding: '9px 40px',
                    color: '#21268F',

                }}
                    onClick={e => backgroundOnClick(e) }>Cancel</button>
                <button style={{
                    backgroundColor: '#F1453D',
                    borderRadius: '25px',
                    fontSize:'20px',
                    padding: '9px 40px',
                    color: '#ECECF9'
                }}  onClick={deletePack}>Delete</button>
            </div>

    </>

    if (!modalType) return null;

    return(

            <Modal backgroundOnClick={backgroundOnClick} isShow={isShow}>
                { modalType === 'CREATE-NEW-PACK' && createNewPackModal}
                { modalType === 'DELETE-PACK' && deletePackModal}
            </Modal>


    )
}

export default ModalContainer;