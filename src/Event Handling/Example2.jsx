import React, { useState } from 'react'

function Example2() {
    let [variable,setvaribale] = useState("100")

    const saHandler = () => {
        setvaribale("5k")
    }
    const sbHandler = () => {
        setvaribale("10k")
    }
    const scHandler = () => {
        setvaribale("100")
    }
  return (
    <div>
      <h1>Employee Salary:{variable}</h1>
      <button className='btn btn-success mx-2' onClick={saHandler}>5k</button>
      <button className='btn btn-success mx-2' onClick={sbHandler}>10k</button>
      <button className='btn btn-success mx-2' onClick={scHandler}>0</button>
    </div>
  )
}

export default Example2
