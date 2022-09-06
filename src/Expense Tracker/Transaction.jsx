import React, { useContext } from 'react';
import { GlobalContext } from './context/GlobalState';

export default function Transaction({ getTransac }) {
    const { deleteTransaction } = useContext(GlobalContext)
    const sign = getTransac.amount < 0 ? '-' : '+';


    return (
        <li className={getTransac.amount < 0 ? "minus" : "plus"}>{getTransac.text}
            <span>{sign}${Math.abs(getTransac.amount)}</span>
            <button
                className="delete-btn"
                onClick={()=> deleteTransaction(getTransac.id)}>
                x
            </button>
        </li>
    )
}
