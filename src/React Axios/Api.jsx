import React, { Component, useState } from 'react'
import Axios from 'axios'

let [variable,setvariable] = useState({
  user:[]
});
// componentDidMount(){
//     Axios.get().then().catch()
// }
function Api() {
  return (
    <React.Fragment>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8">

          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Api
