import React, { createContext, useReducer } from 'react';
import Footer from '../components/Footer';
import "../App.css"
// Import the Reducer
import AppReducer from './AppReducer';

// Create the initial state
const initialState = {
    transactions: []
}

// Create the Global Context
export const GlobalContext = createContext(initialState);

// Create a Provider for the Global Context
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions for Transactions

        // Delete Existing Transaction Action
        function deleteTransaction(id) {
            dispatch({
                type: 'DELETE_TRANSACTION',
                payload: id
            });
        }

        // Add New Transaction Action
        function addTransaction(transaction) {
            dispatch({
                type: 'ADD_TRANSACTION',
                payload: transaction
            })
        }

    return (
        <GlobalContext.Provider value={
            {
                transactions: state.transactions,
                deleteTransaction,
                addTransaction
            }
        }>
            <div>{children}</div>
            <hr />
                <Footer></Footer>
        </GlobalContext.Provider>
    );

}