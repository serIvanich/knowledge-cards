import {handleServerNetworkError} from "../../../utils/error-utils";
import {Dispatch} from "redux";
import {setAppStatusAC, SetAppStatusActionType} from "./app-reduser";
import {packsApi, RequestParamsType} from "../../m3-dall/packs-api";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../store";

const initialState = {
    cardPacks: [] as Array<CardsPacksType>,
    cardPacksTotalCount: 0,
    maxCardsCount: 100,
    minCardsCount: 0,
    page: 1,
    pageCount: 10,
    pageSize: 10,
    portionSize: 10
}
export type InitialStatePacksType = typeof initialState

export const packsReducer = (state: InitialStatePacksType = initialState, action: ActionsType) => {
    switch (action.type) {
        case "packs/SET-PACKS-CARDS":
            const newState = {
                ...state,
                ...action.payload,
                cardPacks: [...action.payload.cardPacks]
            }
            return newState

        case "packs/SORT-NAME":

            return {
                ...state,
                cardPacks: [...state.cardPacks].sort((a, b) => a.name < b.name ? -1 : 1)
            }

        case 'packs/CHANGE-PAGE':
            return {
                ...state,
                page: action.payload.page,
                cardPacks: action.payload.cardPacks,
            };

        default:
            return state
    }

}


export const setPacksCardsByPage = (payload: { cardPacks: Array<CardsPacksType>, page:number, pageCount?:number }) => ({type: 'packs/CHANGE-PAGE', payload} as const)
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
export const postPackTC = (): ThunkType => async (dispatch) => {
    try {
        dispatch(setAppStatusAC('loading'))

        const data = await packsApi.createPack({name: 'first fix packName'})
        dispatch(getPacksCardsTC({}))
    } catch (e) {
        handleServerNetworkError(e, dispatch)
    } finally {
        dispatch(setAppStatusAC('succeeded'))
    }
}
export const deletePackTC = (id:string): ThunkType => async (dispatch) => {
    try {
        dispatch(setAppStatusAC('loading'))

        const data = await packsApi.deletePacks(id)
        dispatch(getPacksCardsTC({}))
    } catch (e) {
        handleServerNetworkError(e, dispatch)
    } finally {
        dispatch(setAppStatusAC('succeeded'))
    }
}
export const updatePackTC = (id: string): ThunkType => async (dispatch) => {
    try {
        dispatch(setAppStatusAC('loading'))

        const data = await packsApi.updatePack({_id: id, name: 'update packName'})
        dispatch(getPacksCardsTC({}))
    } catch (e) {
        handleServerNetworkError(e, dispatch)
    } finally {
        dispatch(setAppStatusAC('succeeded'))
    }
}
export const getPacksCardsByPage = (page:number) => async (dispatch:Dispatch) => {
    try {
        dispatch(setAppStatusAC('loading'))
        const res = await packsApi.getPacksByPage(page)
        dispatch(setPacksCardsByPage({ cardPacks:res.data.cardPacks, page }))
    } catch (e) {
        alert(e.response.data.error)
    } finally {
        dispatch(setAppStatusAC('succeeded'))
    }
}

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>
type ActionsType = ReturnType<typeof setPacksCardsAC>
    | ReturnType<typeof sortNameAC>
    | ReturnType<typeof setPacksCardsByPage>
    | SetAppStatusActionType


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
export type PacksType = {
    cardPacks:  Array<CardsPacksType>
    cardPacksTotalCount: number
    maxCardsCount: number
    minCardsCount: number
    page: number
    pageCount: number
}


