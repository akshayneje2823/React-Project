import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/home" className="navbar-brand">React Rendering</Link>
                <div className="collapse navbar-collapse ml-auto">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item"><Link to="/home" className="nav-link">Home</Link></li>
                        <li className="nav-item"><Link to="/about" className="nav-link">About Us</Link></li>
                        <li className="nav-item"><Link to="/service" className="nav-link">Services</Link></li>
                        <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
                    </ul>
                </div>
       </nav>
    </React.Fragment>
  )
}

