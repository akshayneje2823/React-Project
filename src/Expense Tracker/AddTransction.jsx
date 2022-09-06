import React,{useState,useContext} from 'react';
import { GlobalContext } from './context/GlobalState';

export default function AddTransction() {
    const [text,setText] = useState('')
    const [amount,setAmount] = useState(0);

    const {addTransaction} = useContext(GlobalContext);

    const onSubmitHandler = (e)=>{
        e.preventDefault();

       const newTransaction = {
            id : Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        };
        addTransaction(newTransaction)
    }
    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" placeholder="Enter text..." value={text} onChange={(e)=>setText(e.target.value)} />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br /></label>
                    <input type="number" placeholder="Enter amount..." value={amount} onChange={(e)=>setAmount(e.target.value)}/>
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </div>
    )
}
