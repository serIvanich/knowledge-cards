import React from "react";
import style from './Modal.module.scss'


type ModalPropsType = {
    isShow: boolean
    backgroundOnClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>)=>void
}


const Modal: React.FC <ModalPropsType>= ({
    isShow,
    backgroundOnClick,
     children}) => {
        console.log('modal')
    if (!isShow) return null;

    return (
        <div className={ isShow ? `${style.modal} ${style.active}` : `${style.modal}`} onClick={backgroundOnClick}>
            <div className={ isShow ? `${style.modalContent} ${style.active}` : `${style.modalContent}`}
                 onClick={e => e.stopPropagation()}>
                    {children}
            </div>


        </div>
    )
}

export default Modal