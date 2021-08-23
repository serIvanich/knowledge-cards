import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'recovery',
    initialState: {
        email:'',
        redirectToCheckEmail: false
    },
    reducers: {
        setRedirectToCheckEmail(state,action:PayloadAction<{redirectToCheckEmail:boolean}>) {
            state.redirectToCheckEmail = action.payload.redirectToCheckEmail
        }
    },
    extraReducers: builder => {

    }
})

export const redirectReducer = slice.reducer
export const {setRedirectToCheckEmail} = slice.actions




// export type InitialPasswordRecoveryType = typeof initialStatePasswordRecovery
// export type ActionsPasswordRecoveryType = ReturnType<typeof setRedirectToCheckEmail>
//
// const initialStatePasswordRecovery = {
//     email: '',
//     redirectToCheckEmail: false
// }
//
// export const redirectReducer = (state: InitialPasswordRecoveryType = initialStatePasswordRecovery, action: ActionsPasswordRecoveryType): InitialPasswordRecoveryType => {
//     switch (action.type) {
//         case "REDIRECT-TO-CHECK-EMAIL":
//             return {...state, ...action.redirectToCheckEmail}
//
//         default: return state
//     }
// }
//
// const setRedirectToCheckEmail = (redirectToCheckEmail:boolean, email:string) => ({
//     type: "REDIRECT-TO-CHECK-EMAIL",
//     redirectToCheckEmail,
//     email
// } as const)





