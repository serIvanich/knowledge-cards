import {cardsApi, CardType, ResponseCardsType} from "../../dall/cards-api";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../../bll/store";
import {setAppStatusAC, SetAppStatusActionType} from "./app-reduser";
import {handleServerNetworkError} from "../../utils/error-utils";
import {SetIsShowModalActionType, setIsShowModalWindow} from "./modal-reducer";

const initialState = {
        cards: [] as CardType[],
        cardsTotalCount: 0,
        maxGrade: 4.987525071790364,
        minGrade: 2.0100984354076568,
        page: 1,
        pageCount: 4,
        packUserId: ''

}

type InitialStateCardType = typeof initialState

export const cardsReducer = (state: InitialStateCardType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'cards/SET-CARDS':

            return {
                ...state,
                ...action.payload,
                cards: [...action.payload.cards]
            }

        default:
            return state
    }

}

export const setCardsAC = (payload: ResponseCardsType) => ({type: 'cards/SET-CARDS', payload} as const)

export const getCardsTC = (id: string): ThunkType => async (dispatch) => {
    try {

        dispatch(setAppStatusAC('loading'))
        const params = {cardsPack_id: id,}
        const data = await cardsApi.getCards(params)

        dispatch(setCardsAC(data))
    } catch (e) {
        handleServerNetworkError(e, dispatch)
    } finally {
        dispatch(setAppStatusAC('succeeded'))
    }
}

export const createCardTC = (params: {packId:string, question:string, answer:string }): ThunkType => async (dispatch) => {
        const {packId, question, answer} = params
        try {
                dispatch(setAppStatusAC('loading'))
                const card = {cardsPack_id: packId, question, answer }
                await cardsApi.createCard(card)

        dispatch(getCardsTC(packId))
    } catch (e) {
        handleServerNetworkError(e, dispatch)
        } finally {
                dispatch(setAppStatusAC('succeeded'))
                dispatch(setIsShowModalWindow({isShowModal:false, modalType: '', packId:''}))
        }
}
export const updateCardTC = (params:{ packId: string, cardId: string, question:string, answer:string }): ThunkType => async (dispatch) => {
        const {packId, cardId, question, answer} = params
        try {
                dispatch(setAppStatusAC('loading'))
                const card = {_id: cardId, question, answer}
                await cardsApi.updateCard(card)

                dispatch(getCardsTC(packId))
        } catch (e) {
                handleServerNetworkError(e, dispatch)
        } finally {
                dispatch(setAppStatusAC('succeeded'))
                dispatch(setIsShowModalWindow({isShowModal:false, modalType: '', packId:'', cardId: ''}))
        }
}
export const deleteCardTC = (cardId:string, packId: string): ThunkType => async (dispatch) => {
        try {
                dispatch(setAppStatusAC('loading'))
                await cardsApi.deleteCard(cardId)
                dispatch(getCardsTC(packId))
        } catch (e) {
                handleServerNetworkError(e, dispatch)
        } finally {
                dispatch(setAppStatusAC('succeeded'))
                dispatch(setIsShowModalWindow({isShowModal:false, modalType: '', packId:'', cardId: ''}))
        }
}
export const changeGradeCardTC = (card_id: string, grade: null | number): ThunkType => async (dispatch) => {
    try {
        dispatch(setAppStatusAC('loading'))
        await cardsApi.changeGradeCard(card_id, grade)

    } catch (e) {
        handleServerNetworkError(e, dispatch)
    } finally {
        dispatch(setAppStatusAC('succeeded'))
    }
}
type ActionsType = ReturnType<typeof setCardsAC>
        | SetAppStatusActionType
        | SetIsShowModalActionType


type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>

