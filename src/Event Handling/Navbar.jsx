import React from 'react'

export default function Navbar() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-dark navbar expand-lg">
        <a className="navbar-brand" to="#">Navbar</a>
           <div className="ml-auto">
              <ul className="navbar-nav">
                {/* <li className="nav-item "><a className="nav-link" to="#">State Example</a></li> */}
                <li className="nav-item "><a className="nav-link" to="#">Eveny Binding</a></li>
              </ul>
           </div>
 
      </nav>
    </React.Fragment>
  )
}

