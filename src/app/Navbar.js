import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav>
      <section>
        <h1>Community Board</h1>
        <h4 style={{color: "white"}}>A community board for nuanced discourse.</h4>

        <div className="navContent">
          <div className="navLinks"></div>
          <Link to="/">All Posts Matter</Link>
        </div>
      </section>
    </nav>
  )
}
