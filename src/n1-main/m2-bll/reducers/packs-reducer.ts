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
    portionSize: 10,
    term:'',
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
                cardPacks: [...state.cardPacks].sort((a, b) => {
                    if (action.value) {
                        return a.name < b.name ? -1 : 1
                    }
                    return a.name > b.name ? -1 : 1
                })
            }
        case "packs/SORT-CARDS":

            return {
                ...state,
                cardPacks: [...state.cardPacks]
                    .sort((a, b) => {
                        if (action.value) {
                            return Number(a.cardsCount) - Number(b.cardsCount)
                        }
                        return Number(b.cardsCount) - Number(a.cardsCount)
                    })
            }
        case "packs/SORT-FOR-UPDATE":

            return {
                ...state,
                cardPacks: [...state.cardPacks]
                    .sort((a, b) => {
                        if (action.value) {
                            return a.updated < b.updated ? -1 : 1
                        }
                        return a.updated > b.updated ? -1 : 1
                    })
            }
        case "packs/SORT-FOR-CREATOR":
            return {
                ...state,
                cardPacks: [...state.cardPacks]
                    .sort((a, b) => {
                        if (action.value) {
                            return a.user_name < b.user_name ? -1 : 1
                        }
                        return a.user_name > b.user_name ? -1 : 1
                    })
            }

        default:
            return state
    }

}


const setPacksCardsAC = (payload: PacksType) => ({type: 'packs/SET-PACKS-CARDS', payload} as const)
export const sortNameAC = (value: boolean) => ({type: 'packs/SORT-NAME', value} as const)
export const sortCardsAC = (value: boolean) => ({type: 'packs/SORT-CARDS', value} as const)
export const sortForUpdateAC = (value: boolean) => ({type: 'packs/SORT-FOR-UPDATE', value} as const)
export const sortForCreatorAC = (value: boolean) => ({type: 'packs/SORT-FOR-CREATOR', value} as const)


export const getPacksCardsTC = (params: RequestParamsType) => async (dispatch: Dispatch) => {
    try {
        dispatch(setAppStatusAC('loading'))
        if (params.pageCount === undefined) {
            params = {...params, pageCount: initialState.pageCount}
        } else {
            params = {...params}
        }
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
export const deletePackTC = (id: string): ThunkType => async (dispatch) => {
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


type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>
type ActionsType = ReturnType<typeof setPacksCardsAC>
    | ReturnType<typeof sortNameAC>


    | ReturnType<typeof sortCardsAC>
    | ReturnType<typeof sortForUpdateAC>
    | ReturnType<typeof sortForCreatorAC>

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


