

const initialState = {
    isShowModal: false,
    modalType: '' as ModalWindowType,
    packId: '',
    cardId: ''
}

export type ModalInitialStateType = typeof initialState

export const modalReducer = (state: ModalInitialStateType = initialState, action: ModalActionsType): ModalInitialStateType => {
    switch (action.type) {
        case 'APP/SET-IS-SHOW-MODAL-WINDOW':
            return {...state,
                ...action.payload
            }


        default:
            return state
    }
}

export const setIsShowModalWindow = (payload:{isShowModal:boolean, modalType: ModalWindowType, packId?:string, cardId?:string}) => ({type: 'APP/SET-IS-SHOW-MODAL-WINDOW', payload} as const)


export type SetIsShowModalActionType = ReturnType<typeof setIsShowModalWindow>
export type ModalWindowType = ''
    | 'CREATE-NEW-CARD'
    | 'CREATE-NEW-PACK'
    | 'DELETE-PACK'
    | 'UPDATE-PACK'


export type ModalActionsType =
    | SetIsShowModalActionType



