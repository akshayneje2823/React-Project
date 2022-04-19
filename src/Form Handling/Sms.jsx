import React, { useState } from 'react'

function Sms() {
    let [variable,setvariable] = useState({
        maxLimit:100,
        Count:100
    })
    const updateCount = (event) => {
        setvariable({
            ...variable,Count:variable.maxLimit - event.target.value.length
        })
    }
  return (
    <React.Fragment>
      <div className="container mt-4">
        <div className="row">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header bg-dark text-white">
                        <p className='h4'>SMS Applictaion</p>     
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                            <textarea name="" onChange={updateCount} maxLength={variable.maxLimit} rows="5" className='form-control' placeholder='Type here'></textarea>
                            </div>
                        </form>
                    </div>
                    <div className="card-footer">
                        <p className='h4'>Charaters Remaining:
                            <span className='font-weight-bold'>{variable.Count}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Sms
