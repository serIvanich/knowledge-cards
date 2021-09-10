import {handleServerNetworkError} from '../../../utils/error-utils';
import {setAppStatusAC, SetAppStatusActionType } from './app-reduser';
import {packsApi, RequestParamsType} from '../../m3-dall/packs-api';
import {ThunkAction} from 'redux-thunk';
import {AppStateType} from '../store';
import {SetIsShowModalActionType, setIsShowModalWindow} from "./modal-reducer";

const initialState = {
    cardPacks: [] as Array<CardsPacksType>,
    cardPacksTotalCount: 0,
    maxCardsCount: 100,
    minCardsCount: 0,
    page: 1,
    pageCount: 4,

    portionSize: 7,

    myPacks: false,
    search: '',
}
export type InitialStatePacksType = typeof initialState

export const packsReducer = (state: InitialStatePacksType = initialState, action: ActionsType) => {
    switch (action.type) {

        case 'packs/SET-PACKS-CARDS':

            return {
                ...state,
                ...action.payload,
                cardPacks: [...action.payload.cardPacks]
            }

        case 'packs/SORT-NAME':

            return {
                ...state,
                cardPacks: [...state.cardPacks].sort((a, b) => {
                    if (action.value) {
                        return a.name < b.name ? -1 : 1
                    }
                    return a.name > b.name ? -1 : 1
                })
            }
        case 'packs/SORT-CARDS':

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
        case 'packs/SORT-FOR-UPDATE':

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
        case 'packs/SORT-FOR-CREATOR':
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

        case 'packs/SET-MY-PACKS':
            return {
                ...state,
                myPacks: action.myPacks
            };
        case 'packs/SET-USER-ID':
            return {
                ...state,
                user_id: action.userId
            };
        case 'packs/SET-PAGE':
            return {
                ...state,
                page: action.page
            };
        case 'packs/SET-SEARCH':

            return {
                ...state,
                search: action.search
            };
        case 'packs/SET-PAGE-COUNT':
            return {
                ...state,
                pageCount: action.pageCount
            };
        case 'packs/SET-TOTAL-PAGE-COUNT':
            return {
                ...state,
                totalPacksCount: action.totalPacksCount
            };
        case 'packs/PACKS/SET-CURRENT-PAGE':
            return {
                ...state,
                pageNumber: action.pageNumber
            };
        case 'packs/SET-MIN-MAX-VALUE':
            return {
                ...state,
                minCardsCount: action.newMin,
                maxCardsCount: action.newMax
            };


        default:
            return state
    }

}


const setPacksCardsAC = (payload: PacksType) => ({type: 'packs/SET-PACKS-CARDS', payload} as const)
export const sortNameAC = (value: boolean) => ({type: 'packs/SORT-NAME', value} as const)
export const sortCardsAC = (value: boolean) => ({type: 'packs/SORT-CARDS', value} as const)
export const sortForUpdateAC = (value: boolean) => ({type: 'packs/SORT-FOR-UPDATE', value} as const)
export const sortForCreatorAC = (value: boolean) => ({type: 'packs/SORT-FOR-CREATOR', value} as const)
export const setMyPacksAC = (myPacks: boolean) => ({type: 'packs/SET-MY-PACKS', myPacks} as const)
export const setUserIdAC = (userId: string) => ({type: 'packs/SET-USER-ID', userId} as const)
export const setPageAC = (page: number) => ({type: 'packs/SET-PAGE', page} as const)
export const setPageCountAC = (pageCount: number) => ({type: 'packs/SET-PAGE-COUNT', pageCount} as const)
export const setCurrentPageAC = (pageNumber: number) => ({type: 'packs/PACKS/SET-CURRENT-PAGE', pageNumber} as const)
export const setTotalPacksCountAC = (totalPacksCount: number) => ({
    type: 'packs/SET-TOTAL-PAGE-COUNT',
    totalPacksCount
} as const)
export const setSearchAC = (search: string) => ({type: 'packs/SET-SEARCH', search} as const)
export const setMinMaxValueAC = ([newMin, newMax]: number[]) => ({
    type: 'packs/SET-MIN-MAX-VALUE',
    newMin,
    newMax
} as const)


export const getPacksCardsTC = (params: RequestParamsType, myPacks?: boolean): ThunkType => async (dispatch, getState) => {
    try {
        dispatch(setAppStatusAC('loading'))
        const userId = getState().profile._id
        const myPacks = getState().packs.myPacks
        const min = getState().packs.minCardsCount
        const max = getState().packs.maxCardsCount
        const initialPageCount = getState().packs.pageCount
        const initialMin = getState().packs.minCardsCount
        const initialMax = getState().packs.maxCardsCount
        const initialSearch = getState().packs.search


        if (myPacks) {
            params = {...params, user_id: userId}
        }
        if (params.packName === undefined) {

            params = {...params, packName: initialSearch}
        }
        if (params.min === undefined && params.max === undefined) {
            params = {...params, min: initialMin, max: initialMax}
        }
        if (!params.pageCount) {
            params = {...params, pageCount: initialPageCount}
        }

        const data = await packsApi.getPacks(params)
        dispatch(setPacksCardsAC(data))

        dispatch(setMinMaxValueAC([min, max]))
    } catch (e) {
        handleServerNetworkError(e, dispatch)
    } finally {
        dispatch(setAppStatusAC('succeeded'))
    }
}
export const postPackTC = (params:{name: string, isPrivate:boolean}): ThunkType => async (dispatch) => {
    const {name, isPrivate} = params
    try {
        dispatch(setAppStatusAC('loading'));
        const data = await packsApi.createPack({name, private: isPrivate})
        dispatch(getPacksCardsTC({}));

    } catch (e) {
        handleServerNetworkError(e, dispatch)
        alert(e.response.data.error)
    } finally {
        dispatch(setAppStatusAC('succeeded'))
        dispatch(setIsShowModalWindow({isShowModal:false, modalType: ''}))
    }
}
export const deletePackTC = (id: string): ThunkType => async (dispatch) => {
    try {
        dispatch(setAppStatusAC('loading'))

        const data = await packsApi.deletePacks(id)
        dispatch(getPacksCardsTC({}))
    } catch (e) {
        handleServerNetworkError(e, dispatch)
        alert(e.response.data.error)
    } finally {
        dispatch(setAppStatusAC('succeeded'))
        dispatch(setIsShowModalWindow({isShowModal:false, modalType: '', packId:''}))
    }
}
export const updatePackTC = (param:{id: string, name:string, isPrivate:boolean}): ThunkType => async (dispatch) => {
    const {id, name, isPrivate} = param

    try {
        dispatch(setAppStatusAC('loading'))
        const data = await packsApi.updatePack({_id: id, name, private:isPrivate})
        dispatch(getPacksCardsTC({}))
    } catch (e) {
        handleServerNetworkError(e, dispatch)
        alert(e.response.data.error)
    } finally {
        dispatch(setAppStatusAC('succeeded'));
        dispatch(setIsShowModalWindow({isShowModal:false, modalType: '', packId:''}))
    }
}


type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>
type ActionsType = ReturnType<typeof setPacksCardsAC>
    | ReturnType<typeof sortNameAC>


    | ReturnType<typeof sortCardsAC>
    | ReturnType<typeof sortForUpdateAC>
    | ReturnType<typeof sortForCreatorAC>


    | ReturnType<typeof setMyPacksAC>
    | ReturnType<typeof setUserIdAC>
    | ReturnType<typeof setPageAC>
    | ReturnType<typeof setSearchAC>
    | ReturnType<typeof setPageCountAC>
    | ReturnType<typeof setTotalPacksCountAC>
    | ReturnType<typeof setMinMaxValueAC>
    | ReturnType<typeof setCurrentPageAC>
    | SetAppStatusActionType
    | SetIsShowModalActionType


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
    cardPacks: Array<CardsPacksType>
    cardPacksTotalCount: number
    maxCardsCount: number
    minCardsCount: number
    page: number
    pageCount: number
}


