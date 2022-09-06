import React from 'react';
import Balance from './Balance';
import Header from './Header';
import './App.css'
import Income from './Income';
import TransactionList from './TransactionList';
import AddTransction from './AddTransction';
import { GlobalProvider } from './context/GlobalState';


function App() {
    return (
        <GlobalProvider>
            <Header />
            <div className="container">
                <Balance />
                <Income />
                <TransactionList />
                <AddTransction />
            </div>
        </GlobalProvider>
    )
}

export default App