import React,{useContext} from 'react';
import { GlobalContext } from './context/GlobalState';
import Transaction from './Transaction';

function TransactionList() {
    const {transactions} = useContext(GlobalContext);
    console.log(transactions)
    return (
        <><h3>History</h3>
            <ul className="list">
                {
                    transactions.map(getTransac => (
                        <Transaction key={getTransac.id} getTransac={getTransac}/>
                    ))
                }
            </ul></>
    )
}

export default TransactionList
























