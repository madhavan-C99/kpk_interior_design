import logo from '../../assets/services/images/logo.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
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
        <a href="#home" className="nav-link active"><Link to={'/'}>Home</Link></a>
        <a href="#about" className="nav-link"><Link to={'/about'}>About</Link></a>
        <a href="#services" className="nav-link"><Link to={'/services'}>Services</Link></a>
        <a href="#portfolio" className="nav-link"><Link to={'/portfolio'}>Portfolio</Link></a>
        <a href="#pricing" className="nav-link"><Link to={'/pricing'}>Pricing</Link></a>
        <a href="#contact" className="nav-link"><Link to={'/contact'}>Contact</Link></a>
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

