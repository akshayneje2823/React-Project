import React from 'react'

export default function Navbar() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" to="#">Navbar</a>
    <div className="collapse navbar-collapse mr-auto" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item "><a className="nav-link" to="#">Home</a></li>
        <li className="nav-item"><a className="nav-link" to="#">Link</a></li>
      </ul>
    </div>
  </div>
</nav>
    </React.Fragment>
  )
}
