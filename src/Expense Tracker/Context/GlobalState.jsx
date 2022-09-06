import React,{createContext,useReducer} from 'react';
import AppReducer from './AppReducer'
 
// Initial State
const initialState = {
    transactions: [
          { id: 1, text: 'Flower', amount: -20 },
          { id: 2, text: 'Salary', amount: 300 },
          { id: 3, text: 'Book', amount: -10 },
          { id: 4, text: 'Camera', amount: 150 }
        ]
}

// create Context

export const GlobalContext = createContext(initialState)

// Provider Component

export const GlobalProvider = ({children})=>{
    const [state, dispatch] = useReducer(AppReducer,initialState);
    console.log(children)

    // Action
    function deleteTransaction (id){
        dispatch({
            type :"DELETE_TRAN",
            payload: id
        })
    }
    function addTransaction (transaction){
        dispatch({
            type :"ADD_TRAN",
            payload: transaction
        })
    }
    return (
        <GlobalContext.Provider 
        value={{
            transactions: state.transactions,
            deleteTransaction,addTransaction
        }}
        >
            {children}
        </GlobalContext.Provider>
    )
}