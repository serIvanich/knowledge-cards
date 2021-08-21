export type InitialStateType = {
    loading: boolean;
    success: boolean;
    error: string;
}

type ActionType =
    ReturnType<typeof setLoading> |
    ReturnType<typeof setSuccess> |
    ReturnType<typeof setError>

export const InitialState: InitialStateType = {
    loading: false,
    success: false,
    error: '',
};

export const forgotReducer = (state = InitialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'forgot/SET_LOADING': {
            return {
                ...state,
                loading: action.loading
            }
        }
        case 'forgot/SET_SUCCESS': {
            return {
                ...state,
                success: action.success
            }
        }
        case 'forgot/SET_ERROR': {
            return {
                ...state,
                error: action.error
            }
        }
        default: {
            return state
        }
    }
}

export const setLoading = (loading: boolean) => ({type: 'forgot/SET_LOADING', loading} as const);
export const setSuccess = (success: boolean) => ({type: 'forgot/SET_SUCCESS', success} as const);
export const setError = (error: string) => ({type: 'forgot/SET_ERROR', error} as const);


