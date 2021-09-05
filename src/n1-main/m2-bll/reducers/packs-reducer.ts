import {handleServerNetworkError} from '../../../utils/error-utils';
import {setAppStatusAC, SetAppStatusActionType, SetIsShowModalActionType, setIsShowModalWindow} from './app-reduser';
import {packsApi, RequestParamsType} from '../../m3-dall/packs-api';
import {ThunkAction} from 'redux-thunk';
import {AppStateType} from '../store';

const initialState = {
    cardPacks: [] as Array<CardsPacksType>,
    cardPacksTotalCount: 0,
    maxCardsCount: 100,
    minCardsCount: 0,
    page: 1,
    pageCount: 4,
    min: 0,
    max: 100,
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
                // cardPacks: [...action.payload.cardPacks]
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
        case 'packs/SET-MIN-MAX-VALUE':

            return {
                ...state,
                min: action.payload.newMin,
                max: action.payload.newMax
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
export const setSearchAC = (search: string) => ({type: 'packs/SET-SEARCH', search} as const)
export const setMinMaxValueAC = (payload: { newMin: number, newMax: number}) => ({
    type: 'packs/SET-MIN-MAX-VALUE',
    payload
} as const)


export const getPacksCardsTC = (params: RequestParamsType, myPacks?: boolean): ThunkType =>
    async (dispatch, getState) => {
    try {

        dispatch(setAppStatusAC('loading'))
        const userId = getState().profile._id
        const {myPacks, pageCount, search, min, max} = getState().packs



        if (myPacks) {
            params = {...params, user_id: userId}
        }
        if (params.packName === undefined) {

            params = {...params, packName: search}
        }
        if (!params.min && !params.max) {
            params = {...params, min, max}
        }
        if (!params.pageCount) {
            params = {...params, pageCount}
        }


        const data = await packsApi.getPacks(params)
        dispatch(setPacksCardsAC(data))

    } catch (e) {
        handleServerNetworkError(e, dispatch)
    } finally {
        dispatch(setAppStatusAC('succeeded'))
    }
}
export const postPackTC = (name: string): ThunkType => async (dispatch) => {

    try {
        dispatch(setAppStatusAC('loading'));
        const data = await packsApi.createPack({name})
        dispatch(getPacksCardsTC({}));
        // dispatch(setIsShowModalWindow({isShowModal:false, modalType: ''}));

    } catch (e) {
        handleServerNetworkError(e, dispatch)

    } finally {
        // dispatch(setAppStatusAC('succeeded'))
        dispatch(setIsShowModalWindow({isShowModal: true, modalType: ''}))
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
        // dispatch(setAppStatusAC('succeeded'))
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
        // dispatch(setAppStatusAC('succeeded'))
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
    | ReturnType<typeof setMinMaxValueAC>
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


