// Navbar.jsx
import logo from '../../assets/navbar/logo.png'
import { useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(prev => !prev)
    setServicesOpen(false)
  }

  const toggleServices = () => {
    setServicesOpen(prev => !prev)
  }

  return (
    <header>
      <div className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="KPK Enterprise" className="logo" />
        </div>

        {/* DESKTOP CENTER NAV */}
        <nav className="navbar-center">
          <a href="#home" className="nav-link active">Home</a>
          <a href="#about" className="nav-link">About</a>

          {/* DESKTOP SERVICES */}
          <div className="nav-services-wrapper">
            <button
              className="nav-link nav-services-toggle"
              onClick={toggleServices}
              type="button"
            >
              Services
            </button>

            {servicesOpen && (
              <div className="nav-services-dropdown">
                <a href="/services/wardrobe-unit" className="dropdown-link">Wardrobe Unit</a>
                <a href="/services/modern-kitchen-unit" className="dropdown-link">Modern Kitchen Unit</a>
                <a href="/services/pooja-unit" className="dropdown-link">Pooja Unit</a>
                <a href="/services/tv-unit" className="dropdown-link">TV Unit</a>
              </div>
            )}
          </div>

          <a href="#portfolio" className="nav-link">Portfolio</a>
          <a href="#pricing" className="nav-link">Pricing</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        <div className="navbar-right">
          <button className="primary-outline-btn">Upgrade Today</button>

          <button
            className="hamburger"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* MOBILE / TABLET MENU */}
      {menuOpen && (
        <div className="navbar-content" style={{ marginTop: '92px' }}>
          <nav className="navbar-mobile-menu">
            <a href="#home" className="mobile-link" onClick={toggleMenu}>Home</a>
            <a href="#about" className="mobile-link" onClick={toggleMenu}>About</a>

            {/* MOBILE SERVICES */}
            <button
              className="mobile-link mobile-services-toggle"
              onClick={toggleServices}
              type="button"
            >
              Services
            </button>

            {servicesOpen && (
              <div className="mobile-submenu">
                <a href="/services/wardrobe-unit" className="submenu-link">Wardrobe Unit</a>
                <a href="/services/modern-kitchen-unit" className="submenu-link">Modern Kitchen Unit</a>
                <a href="/services/pooja-unit" className="submenu-link">Pooja Unit</a>
                <a href="/services/tv-unit" className="submenu-link">TV Unit</a>
              </div>
            )}

            <a href="#portfolio" className="mobile-link" onClick={toggleMenu}>Portfolio</a>
            <a href="#pricing" className="mobile-link" onClick={toggleMenu}>Pricing</a>
            <a href="#contact" className="mobile-link" onClick={toggleMenu}>Contact</a>

            <button className="primary-outline-btns">Free Consultant</button>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
