import React, { useState } from 'react'

function Message() {
    let [variable,setvariable] = useState("Hello")

    const gmHandler= () => {
        setvariable("Good Morning")
    }
  return (
    <div>
      <h1>Message:{variable}</h1>
      <button className='btn btn-success' onClick={gmHandler}>GM</button>
    </div>
  )
}

export default Message
