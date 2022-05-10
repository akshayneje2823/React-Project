import React, { useState } from 'react'

function ToDo() {
    const [inputData,setInputData] = useState("");
    const [item, setItem] = useState("");

    const addItem = ( )=> {
        if(!inputData){

        }else{
            setItem([...item,inputData]);
            setInputData("")
        }
    }

    // delete the item

    const deleteItem  = (id) => {
        const updateitem = item.filter((elem,ind) => {
            return ind === id;
        });
        setItem([]);
    }

 return (
    <React.Fragment>
       <div className="main-div">
           <div className="child-dive">
               <h1>Add List here</h1>
           </div>
           <div className="addIitem">
               <input type="text" placeholder='Add item'
               value={inputData} onChange={(event) => setInputData(event.target.value)}
               />
               <i className='fa fa-plus add-btn' title="Add item" onclick={addItem}></i>
           </div>
           <div className="showItem">
               {
                   item.localeCompare((elem,ind)=>{
                       return(
                           <div className="eachItem" key={ind}>
                               <h3>{elem}</h3>
                               <i className='fa fa-trash-alt add-btn' title="Add item" onclick={deleteItem}></i>
                           </div>
                       )
                   })
               }
           </div>
       </div>
    </React.Fragment>
  )
}

export default ToDo
