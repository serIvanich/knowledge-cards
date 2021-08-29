import {handleServerNetworkError} from "../../../utils/error-utils";
import {Dispatch} from "redux";
import {setAppStatusAC} from "./app-reduser";
import {packsApi, RequestParamsType} from "../../m3-dall/packs-api";

const initialState = {
    cardPacks: [] as Array<CardsPacksType>,
    cardsPacksTotalCount: 0,
    maxCardsCount: 0,
    minCardsCount: 100,
    page: 1,
    pageCount: 10,
}

export const packsReducer = (state: PacksType = initialState, action: ActionType) => {
    switch (action.type) {
        case "packs/SET-PACKS-CARDS":

            const newState = {...state,
                ...action.payload,
                cardPacks: [...action.payload.cardPacks]}
            return newState

        case "packs/SORT-NAME":

            return {
                ...state,
                cardPacks: [...state.cardPacks].sort((a, b) => a.name < b.name? -1: 1)
            }
        default:
            return state
    }

}


const setPacksCardsAC = (payload: PacksType) => ({type: 'packs/SET-PACKS-CARDS', payload} as const)
export const sortNameAC = () => ({type: 'packs/SORT-NAME'} as const)

export const getPacksCardsTC = (params: RequestParamsType) => async (dispatch: Dispatch) => {
    try {
        dispatch(setAppStatusAC('loading'))
        params = {...params, pageCount: 10}
        const data = await packsApi.getPacks(params)
        dispatch(setPacksCardsAC(data))
    } catch (e) {
        handleServerNetworkError(e, dispatch)
    } finally {
        dispatch(setAppStatusAC('succeeded'))
    }
}

type ActionType = ReturnType<typeof setPacksCardsAC> | ReturnType<typeof sortNameAC>


export type CardsPacksType = {
    _id: string
    user_id: string
    name: string
    user_name: string
    path: string
    cardsCount: string
    grade: string
    shots: string
    rating: string
    type: string
    created: Date
    updated: Date
    _v: string
}
export type PacksType = typeof initialState


