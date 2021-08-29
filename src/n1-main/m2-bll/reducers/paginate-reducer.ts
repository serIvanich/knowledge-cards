import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Dispatch} from "redux";

export type InitialPaginatorStateType = typeof initialState
const initialState = {
        totalItemsCount:145,
        pageSize: 5,
        currentPage: 1,
        portionSize: 5
}

const paginateSlice = createSlice ({
        name: 'paginate',
        initialState,
        reducers: {
                setCurrentPageAC(state, action:PayloadAction<{ pageNumber:number}>){
                        state.currentPage = action.payload.pageNumber
                },

        }
})

export const paginateReducer = paginateSlice.reducer
export const { setCurrentPageAC } = paginateSlice.actions

export const setCurrentPageTC = (pageNumber:number) => (dispatch:Dispatch) => {
        dispatch(setCurrentPageAC({pageNumber}))
}




