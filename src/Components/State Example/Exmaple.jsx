import React, { useState } from 'react'

const Example = () => {
    let [variable, setvariable] = useState("hello")

    const gmHandler= () => {
        setvariable("Good Morning")
    }
    const gaHandler= () => {
        setvariable("Good afternoon")
    }
    const gnHandler= () => {
        setvariable("Good Night")
    }
    return(
        <div className="">
            <h1>Message - {variable}</h1>
            <button className='btn btn-success mx-1' onClick={gmHandler}>GM</button>
            <button className='btn btn-primary mx-1' onClick={gaHandler}>GF</button>
            <button className='btn btn-dark mx-1' onClick={gnHandler}>GM</button>
        </div>
    )
}
export default Example
