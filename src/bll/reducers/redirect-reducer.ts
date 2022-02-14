// export type InitialRedirectType = typeof initialStateRedirect
// export type ActionsRedirectType = ReturnType<typeof setRedirectToCheckEmail>
//
// const initialStateRedirect = {
//     redirectToCheckEmail: false
// }
//
// export const redirectReducer = (state: InitialRedirectType = initialStateRedirect, action: ActionsRedirectType): InitialRedirectType => {
//     // switch (action.type) {
//     //     case "password/REDIRECT-TO-CHECK-EMAIL":
//     //         debugger
//     //         return {
//     //
//     //             ...state,
//     //             redirectToCheckEmail: action.redirectToCheckEmail
//     //         }
//     //     default: return state
//     // }
//     return state
// }
//
// export const setRedirectToCheckEmail = (redirectToCheckEmail:boolean) => ({
//     type: "password/REDIRECT-TO-CHECK-EMAIL",
//     redirectToCheckEmail
//
// } as const)
//
//
// //---РАБОТАЕТ и на toolkit!!!!
// // import {createSlice, PayloadAction} from '@reduxjs/toolkit';
// //
// // const slice = createSlice({
// //     name: 'recovery',
// //     initialState: {
// //         email:'',
// //         redirectToCheckEmail: false
// //     },
// //     reducers: {
// //         setRedirectToCheckEmail(state,action:PayloadAction<{redirectToCheckEmail:boolean}>) {
// //             state.redirectToCheckEmail = action.payload.redirectToCheckEmail
// //         }
// //     },
// //     extraReducers: builder => {
// //
// //     }
// // })
// //
// // export const redirectReducer = slice.reducer
// // export const {setRedirectToCheckEmail} = slice.actions
//
//
//
//
//
export default 1