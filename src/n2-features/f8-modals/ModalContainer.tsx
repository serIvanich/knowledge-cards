import React from 'react';
import Modal from './Modal';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../n1-main/m2-bll/store";
import {ModalWindowType, setIsShowModalWindow} from "../../n1-main/m2-bll/reducers/modal-reducer";
import {CardsPacksType, deletePackTC, postPackTC, updatePackTC} from "../../n1-main/m2-bll/reducers/packs-reducer";
import {Field, Form, Formik} from "formik";
import {createCardTC, updateCardTC} from "../../n1-main/m2-bll/reducers/cards-reducer";
import {CardType} from "../../n1-main/m3-dall/cards-api";




const ModalContainer: React.FC = () => {
    const dispatch = useDispatch()
    const modalType = useSelector<AppStateType, ModalWindowType>(state => state.modal.modalType)
    const isShow = useSelector<AppStateType, boolean>(state => state.modal.isShowModal)
    const packId = useSelector<AppStateType, string>(state => state.modal.packId)
    const cardId = useSelector<AppStateType, string>(state => state.modal.cardId)
    const cardPacks = useSelector<AppStateType, CardsPacksType[]>( state => state.packs.cardPacks)
    const cards = useSelector<AppStateType, CardType[]>(state => state.cards.cards)


    const submit = (values: { name:string, isPrivate:boolean }, {
        setSubmitting, resetForm }:{
        setSubmitting:(isSubmitting:boolean) => void, resetForm:()=>void} ) => {

        if (!values.name) {
                alert('Enter Pack Name')
            } else {
                switch (modalType){
                    case "CREATE-NEW-PACK":
                        dispatch(postPackTC({name:values.name, isPrivate:values.isPrivate}));
                        break;
                    case "UPDATE-PACK":
                        dispatch(updatePackTC({id: packId, name: values.name, isPrivate:values.isPrivate}));
                        break;

                    default: break;
                }
            }
            resetForm()
            setSubmitting(false);

    }

    const submitCard = (values: { question:string, answer:string }, {
        setSubmitting, resetForm }:{
        setSubmitting:(isSubmitting:boolean) => void, resetForm:()=>void} ) => {
        const {question, answer} = values
        if (!question || !answer) {
            alert('Enter question or/and answer')
        } else {
            switch (modalType){
                case "CREATE-NEW-CARD":
                    dispatch(createCardTC({packId, question, answer}));
                    break;
                case "UPDATE-CARD":
                    dispatch(updateCardTC({cardId, packId, question, answer}))
                    break;

                default: break;
            }
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

    const createPackModal = <>
        <h2>Create New Pack</h2>
        <Formik
            initialValues={{ name: '', isPrivate: false }}
            onSubmit={submit}
        >
            {({isSubmitting, values}) => (
                <Form style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'start',
                    justifyContent: 'space-around',
                }}>
                    <Field type='text' name='name' placeholder='Enter Pack Name' >
                    </Field>
                    <label style={{
                        display:'flex',
                        cursor:'pointer',
                    }}>
                        <div>{ values.isPrivate ? 'Private' : 'Public'}</div>
                        <Field type="checkbox" name="isPrivate" />
                    </label>
                    <button type="submit" disabled={isSubmitting}>Create New Pack</button>
                </Form>
            )}
        </Formik>
    </>
    const updatePackModal = <>
        <h2>Update Pack</h2>
        <Formik
            initialValues={{ name: '', isPrivate:false }}
            onSubmit={submit}
        >
            {({isSubmitting, values}) => (
                <Form style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'start',
                    justifyContent: 'space-around',
                }}>
                    <Field type='text' name='name' placeholder='Update Pack Name' >

                    </Field>
                    <label style={{
                        display:'flex',
                        cursor:'pointer',
                    }}>
                        <div>{ values.isPrivate ? 'Private' : 'Public'}</div>
                        <Field type="checkbox" name="isPrivate" />
                    </label>
                    <button type="submit" disabled={isSubmitting}>Update Pack</button>
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
    const createCardModal = <>
        <h2>Create Card</h2>
        <Formik
            initialValues={{ question: '', answer: '' }}
            onSubmit={submitCard}
        >
            {({isSubmitting, values}) => (
                <Form style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'start',
                    justifyContent: 'space-around',
                }}>
                    <Field type='text' name='question' placeholder='Enter question' >
                    </Field>
                    <Field type='text' name='answer' placeholder='Enter answer' >
                    </Field>

                    <button type="submit" disabled={isSubmitting}>Create Card</button>
                </Form>
            )}
        </Formik>
    </>

    const initCard = cards.find(card => card._id === cardId)
    let initQuestion = ''
    let initAnswer = ''
    if (initCard){
        initQuestion = initCard.question
        initAnswer = initCard.answer
    }

    const updateCardModal = <>
        <h2>Update Card</h2>
        <Formik
            initialValues={{ question:initQuestion, answer: initAnswer }}
            onSubmit={submitCard}
        >
            {({isSubmitting, values}) => (
                <Form style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'start',
                    justifyContent: 'space-around',
                }}>
                    <Field type='text' name='question' defaultValue = {initQuestion} >
                    </Field>
                    <Field type='text' name='answer' placeholder='Enter answer' defaultValue = {initAnswer}>
                    </Field>

                    <button type="submit" disabled={isSubmitting}>Update Card</button>
                </Form>
            )}
        </Formik>
    </>

    if (!modalType) return null;
    const getModalBody = () => {
        switch (modalType) {
            case "CREATE-NEW-PACK":
                return createPackModal;
            case "UPDATE-PACK":
                return updatePackModal;
            case "DELETE-PACK":
                return deletePackModal;
            case "CREATE-NEW-CARD":
                return createCardModal;
            case "UPDATE-CARD": {
                return updateCardModal;

            }
            default: break;
        }
    }

    return(
            <Modal backgroundOnClick={backgroundOnClick} isShow={isShow}>
                { getModalBody() }
            </Modal>
    )
}

export default ModalContainer;