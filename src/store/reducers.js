export function scaleReducer(state = false, action) {
    switch (action.type) {
        case 'DAY_SCALE':
            return {
                ...state,
                cart: state.cart.indexOf(action.id) === -1
                    ? [...state.cart, action.id]
                    : state.cart.filter(item => action.id !== item)
            };
        case 'MONTH_SCALE':
            return {
                ...state,
                cart: state.cart.indexOf(action.id) === -1
                    ? [...state.cart, action.id]
                    : state.cart.filter(item => action.id !== item)
            };
        case 'YEAR_SCALE':
            return {
                ...state,
                cart: state.cart.indexOf(action.id) === -1
                    ? [...state.cart, action.id]
                    : state.cart.filter(item => action.id !== item)
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
