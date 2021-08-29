import {handleServerNetworkError} from "../../../utils/error-utils";
import {Dispatch} from "redux";
import {setAppStatusAC} from "./app-reduser";
import {packsApi, RequestParamsType} from "../../m3-dall/packs-api";

const initialState = {
    cardPacks: [] as Array<CardsPacksType>,
    cardPacksTotalCount: 0,
    maxCardsCount: 0,
    minCardsCount: 100,
    page: 1,
    pageCount: 4,
    pageSize: 10,
    currentPage: 1,
    portionSize: 10
}

export const packsReducer = (state: PacksType = initialState, action: ActionType) => {
    switch (action.type) {
        case "packs/SET-PACKS-CARDS":

            const newState = {...state,
                ...action.payload,
                cardPacks: [...action.payload.cardPacks,
                    ...action.payload.cardPacks,
                    ...action.payload.cardPacks,
                    ...action.payload.cardPacks,
                    ...action.payload.cardPacks,
                    ...action.payload.cardPacks,
                    ...action.payload.cardPacks,
                    ...action.payload.cardPacks,
                    ...action.payload.cardPacks,
                    ...action.payload.cardPacks,
                    ...action.payload.cardPacks,
                    ...action.payload.cardPacks,
                    ...action.payload.cardPacks,
                    ...action.payload.cardPacks,
                    ...action.payload.cardPacks,
                    ...action.payload.cardPacks,
                    ...action.payload.cardPacks,
                    ...action.payload.cardPacks,
                    ...action.payload.cardPacks,
                    ...action.payload.cardPacks,
                    ...action.payload.cardPacks,
                    ...action.payload.cardPacks,
                    ...action.payload.cardPacks,
                    ...action.payload.cardPacks,
                    ...action.payload.cardPacks,
                    ...action.payload.cardPacks,
                    ...action.payload.cardPacks,
                    ...action.payload.cardPacks,
                    ...action.payload.cardPacks,
                ]}

            return newState

        case 'packs/SET-CURRENT-PAGE':
            return {
                ...state,
                currentPage: action.payload
            };

        default:
            return state
    }

}


const setPacksCards = (payload: PacksType) => ({type: 'packs/SET-PACKS-CARDS', payload} as const)
export const setCurrentPage = (payload: number ) => ({type: 'packs/SET-CURRENT-PAGE', payload} as const )

export const getPacksCardsTC = (params: RequestParamsType) => async (dispatch: Dispatch) => {
    try {
        dispatch(setAppStatusAC('loading'))
        const data = await packsApi.getPacks(params)
        dispatch(setPacksCards(data))
    } catch (e) {
        handleServerNetworkError(e, dispatch)
    } finally {
        dispatch(setAppStatusAC('succeeded'))
    }
}

type ActionType =
    ReturnType<typeof setPacksCards>
    | ReturnType<typeof setCurrentPage>


export type CardsPacksType = {
    _id: string
    user_id: string
    name: string
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


