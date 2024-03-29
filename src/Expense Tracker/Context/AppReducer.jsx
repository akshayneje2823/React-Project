export default function AppReducer(state, action) {
    switch (action.type) {
        case 'DELETE_TRAN':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        case 'ADD_TRAN':
            return {
                ...state,
                transactions: [...state.transactions,action.payload]
            }
        default:
            return state
    }
}