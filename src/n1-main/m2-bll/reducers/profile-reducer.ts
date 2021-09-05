
const initialState: UserProfileType = {
    _id: "",
    email: "",
    name: "",
    avatar: "",
    publicCardPacksCount: 0,
    created: new Date(2013, 2, 1, 0, 70),
    updated: new Date(2015, 2, 1, 0, 70),
    isAdmin: false,
    verified: false ,
    rememberMe: false,
    error: "",
}

export const profileReducer = (state: UserProfileType = initialState, action: ActionType) => {
switch (action.type) {
    case 'profile/SET-USER-PROFILE-DATA':
        return {
            ...state,
            ...action.data
        }
    default:
        return state
}
}


export const setUserProfileAC = (data:UserProfileType) => ({type:'profile/SET-USER-PROFILE-DATA', data} as const)



export type UserProfileType = {
    _id: string
    email: string
    name: string
    avatar?: string
    publicCardPacksCount: number // количество колод
    created: Date
    updated: Date
    isAdmin: boolean
    verified: boolean // подтвердил ли почту
    rememberMe: boolean
    error?: string
}

type ActionType = ReturnType<typeof setUserProfileAC>