import React from 'react'
import { Link } from 'react-router-dom';

const nav = () => {
  return (
    <nav className="nav-bar">
        <Link to="/">Nancy Yang</Link>
        <ul>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Project">Project</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </ul>
    </nav>
  )
}

export default nav