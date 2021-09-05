import {cardsApi, CardType, ResponseCardsType} from '../../m3-dall/cards-api';
import {ThunkAction} from 'redux-thunk';
import {AppStateType} from '../store';
import {setAppStatusAC, SetAppStatusActionType} from './app-reduser';
import {handleServerNetworkError} from '../../../utils/error-utils';

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
export const createCardTC = (id: string): ThunkType => async (dispatch) => {
    try {

        dispatch(setAppStatusAC('loading'))
        const card = {cardsPack_id: id, question: 'first question', answer: 'first answer'}
        const data = await cardsApi.createCard(card)

        dispatch(getCardsTC(id))
    } catch (e) {
        handleServerNetworkError(e, dispatch)
        // } finally {
        //         dispatch(setAppStatusAC('succeeded'))
    }
}
export const updateCardTC = (cardId: string, packId: string): ThunkType => async (dispatch) => {
    try {

        dispatch(setAppStatusAC('loading'))
        const card = {_id: cardId, question: 'update question', answer: 'update answer'}
        const data = await cardsApi.updateCard(card)

        dispatch(getCardsTC(packId))
    } catch (e) {
        handleServerNetworkError(e, dispatch)
        // } finally {
        //         dispatch(setAppStatusAC('succeeded'))
    }
}
export const deleteCardTC = (cardId: string, packId: string): ThunkType => async (dispatch) => {
    try {

        dispatch(setAppStatusAC('loading'))

        const data = await cardsApi.deleteCard(cardId)

        dispatch(getCardsTC(packId))
    } catch (e) {
        handleServerNetworkError(e, dispatch)
        // } finally {
        //         dispatch(setAppStatusAC('succeeded'))
    }
}

export const changeGradeCardTC = (card_id: string, grade: null | number): ThunkType => async (dispatch) => {
    try {
        dispatch(setAppStatusAC('loading'))
        const data = cardsApi.changeGradeCard(card_id, grade)

        dispatch(setAppStatusAC('succeeded'))
    } catch (e) {
        handleServerNetworkError(e, dispatch)
        // } finally {
        //         dispatch(setAppStatusAC('succeeded'))
    }
}

type ActionsType = ReturnType<typeof setCardsAC>
    | SetAppStatusActionType

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>

