import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to="/navbar" className="navbar-brand">React Rendering</Link>
              <div className="collapse navbar-collapse ml-auto">
                  <ul className="navbar-nav ml-auto">
                      <li className="nav-item"><Link to="/todo" className="nav-link">ToDo</Link></li>
                  </ul>
              </div>
      </nav>
    </React.Fragment>
  )
}

