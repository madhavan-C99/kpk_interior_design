import logo from '../../assets/navbar/logo.png'
import { useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(prev => !prev)

  return (
    <header>
        <div className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="KPK Enterprise" className="logo" />
      </div>

      {/* desktop center nav */}
      <nav className="navbar-center">
        <a href="#home" className="nav-link active">Home</a>
        <a href="#about" className="nav-link">About</a>
        <a href="#services" className="nav-link">Services</a>
        <a href="#portfolio" className="nav-link">Portfolio</a>
        <a href="#pricing" className="nav-link">Pricing</a>
        <a href="#contact" className="nav-link">Contact</a>
      </nav>

      <div className="navbar-right">
        <button className="primary-outline-btn">
            Free Consultant
        </button>

        <div className="hamburger-wrapper">
          <button
            className="hamburger"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* {menuOpen &&
           ( */}
           
          {/* )} */}
        </div>

    
      </div>
  

       
        </div>

        {menuOpen && (
             <div className = "navbar-content" style = {{marginTop:'92px'}} >
             <nav className="navbar-mobile-menu">
              <a href="#home" className="mobile-link" onClick={toggleMenu}>Home</a>
              <a href="#about" className="mobile-link" onClick={toggleMenu}>About</a>
              <a href="#services" className="mobile-link" onClick={toggleMenu}>Services</a>
              <a href="#portfolio" className="mobile-link" onClick={toggleMenu}>Portfolio</a>
              <a href="#pricing" className="mobile-link" onClick={toggleMenu}>Pricing</a>
              <a href="#contact" className="mobile-link" onClick={toggleMenu}>Contact</a>
              <button className="primary-outline-btns">
          Free Consultant
        </button>
            </nav>
        </div>
        )}
              
    </header>
  )
}

export default Navbar

