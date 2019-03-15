export function scaleReducer(state = false, action) {
    switch (action.type) {
        case 'DATA_IS_LOADING':
            return {
                ...state,
                isLoading: action.isLoading,
                hasError: false
            };
        case 'DATA_HAS_ERROR':
            return {
                ...state,
                isLoading: false,
                hasError: action.hasError
            };
        case 'BTC_FETCH_DATA_SUCCESS':
            return {
                ...state,
                data: action.data,
                isLoading: false,
                hasError: false
            };
        case 'CHANGE_SCALE':
            return {
                ...state,
                selected: action.select
            };

        default:
            return state;
    }
}
