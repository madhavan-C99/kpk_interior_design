// // Navbar.jsx
// import logo from '../../assets/navbar/logo.png'
// import { useState } from 'react'
// import { NavLink } from 'react-router-dom'
// import './Navbar.css'

// export const handClick = () => {
//         window.scrollTo({
//                 top: 0,
//                 behavior: "smooth",
//             })
//            setServicesOpen(v => !v)
//         }


// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false)
//   const [servicesOpen, setServicesOpen] = useState(false)

//   const closeAll = () => {
//     setMenuOpen(false)
//     setServicesOpen(false)
//     handClick();
//   }

//   //scroll to top 

//   return (
//     <>
//       <header className="site-header">
//         <div className="navbar">
//           <div className="navbar-left">
//             <img src={logo} alt="KPK Enterprise" className="logo" />
//           </div>

//           {/* DESKTOP NAV */}
//           <nav className="navbar-center">
//             <NavLink to="/" className="nav-link" onClick={handClick}>Home</NavLink>
//             <NavLink to="/about" className="nav-link" onClick={handClick}>About</NavLink>

//             <div className="nav-services-wrapper">
//               <NavLink
//                 to="/services"
//                 className={({ isActive }) =>
//                   `nav-link nav-services-toggle ${isActive ? 'active' : ''}`
//                 }
//                 onClick={(e) => {
//                   e.preventDefault()
//                   setServicesOpen(v => !v)
//                 }}
//               >
//                 Services
//               </NavLink>

//               {servicesOpen && (
//                 <div className="nav-services-dropdown">
//                   <NavLink to="/services/wardrobe" className="dropdown-link" onClick={closeAll}>Wardrobe Unit</NavLink>
//                   <NavLink to="/services/modular/kitchen" className="dropdown-link" onClick={closeAll}>Modern Kitchen Unit</NavLink>
//                   <NavLink to="/services/pooja_unit" className="dropdown-link" onClick={closeAll}>Pooja Unit</NavLink>
//                   <NavLink to="/services/tv_unit" className="dropdown-link" onClick={closeAll}>TV Unit</NavLink>
//                 </div>
//               )}
//             </div>

//             <NavLink to="/portfolio" className="nav-link" onClick={handClick}>Portfolio</NavLink>
//             <NavLink to="/pricing" className="nav-link" onClick={handClick}>Pricing</NavLink>
//             <NavLink to="/contact" className="nav-link" onClick={handClick}>Contact</NavLink>
//           </nav>

//           <div className="navbar-right">
//             <button className="primary-outline-btn">Upgrade Today</button>

//             <button
//               className="hamburger"
//               onClick={() => setMenuOpen(v => !v)}
//               aria-label="Toggle navigation"
//             >
//               <span />
//               <span />
//               <span />
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* MOBILE MENU */}
//       {menuOpen && (
//         <div className="mobile-overlay" onClick={closeAll}>
//           <nav className="navbar-mobile-menu" onClick={e => e.stopPropagation()}>
//             <NavLink to="/" className="mobile-link" onClick={closeAll}>Home</NavLink>
//             <NavLink to="/about" className="mobile-link" onClick={closeAll}>About</NavLink>

//             <NavLink
//               to="/services"
//               className={({ isActive }) =>
//                 `mobile-link mobile-services-toggle ${isActive ? 'active' : ''}`
//               }
//               onClick={(e) => {
//                 e.preventDefault()
//                 setServicesOpen(v => !v)
//               }}
//             >
//               Services
//             </NavLink>

//             {servicesOpen && (
//               <div className="mobile-submenu">
//                 <NavLink to="/services/wardrobe" className="submenu-link" onClick={closeAll}>Wardrobe Unit</NavLink>
//                 <NavLink to="/services/modular/kitchen" className="submenu-link" onClick={closeAll}>Modern Kitchen Unit</NavLink>
//                 <NavLink to="/services/pooja_unit" className="submenu-link" onClick={closeAll}>Pooja Unit</NavLink>
//                 <NavLink to="/services/tv_unit" className="submenu-link" onClick={closeAll}>TV Unit</NavLink>
//               </div>
//             )}

//             <NavLink to="/portfolio" className="mobile-link" onClick={closeAll}>Portfolio</NavLink>
//             <NavLink to="/pricing" className="mobile-link" onClick={closeAll}>Pricing</NavLink>
//             <NavLink to="/contact" className="mobile-link" onClick={closeAll}>Contact</NavLink>

//             <button className="primary-outline-btns">Free Consultant</button>
//           </nav>
//         </div>
//       )}
//     </>
//   )
// }

// export default Navbar

// second

// Navbar.jsx
import logo from '../../assets/navbar/logo.png'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'




export const handClick = () => {
        window.scrollTo({
                top: 0,
                behavior: "smooth",
            })
          //  setServicesOpen(v => !v)
            // e.preventDefault()
                
        }

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  const closeAll = () => {
    setMenuOpen(false)
    setServicesOpen(false)
    handClick();
  }



  return (
    <>
      <header className="site-header">
        <div className="navbar">
          <div className="navbar-left">
            <img src={logo} alt="KPK Enterprise" className="logo" />
          </div>

          {/* DESKTOP NAV */}
          <nav className="navbar-center">
            <NavLink to="/" className="nav-link" onClick={closeAll}>Home</NavLink>
            <NavLink to="/about" className="nav-link" onClick={closeAll}>About</NavLink>

            <div className="nav-services-wrapper">
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `nav-link nav-services-toggle ${isActive ? 'active' : ''}`
                }
                onClick={(e) => {
                  e.preventDefault()
                  setServicesOpen(v => !v)
                }}
              >
                Services
              </NavLink>

              {servicesOpen && (
                <div className="nav-services-dropdown">
                  <NavLink to="/services/wardrobe" className="dropdown-link" onClick={closeAll}>Wardrobe Unit</NavLink>
                  <NavLink to="/services/modular/kitchen" className="dropdown-link" onClick={closeAll}>Modern Kitchen Unit</NavLink>
                  <NavLink to="/services/pooja_unit" className="dropdown-link" onClick={closeAll}>Pooja Unit</NavLink>
                  <NavLink to="/services/tv_unit" className="dropdown-link" onClick={closeAll}>TV Unit</NavLink>
                </div>
              )}
            </div>

            <NavLink to="/portfolio" className="nav-link" onClick={closeAll}>Portfolio</NavLink>
            <NavLink to="/pricing" className="nav-link" onClick={closeAll}>Pricing</NavLink>
            <NavLink to="/contact" className="nav-link" onClick={closeAll}>Contact</NavLink>
          </nav>

          <div className="navbar-right">
            <button className="primary-outline-btn">Upgrade Today</button>

            <button
              className="hamburger"
              onClick={() => setMenuOpen(v => !v)}
              aria-label="Toggle navigation"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="mobile-overlay" onClick={closeAll}>
          <nav className="navbar-mobile-menu" onClick={e => e.stopPropagation()}>
            <NavLink to="/" className="mobile-link" onClick={closeAll}>Home</NavLink>
            <NavLink to="/about" className="mobile-link" onClick={closeAll}>About</NavLink>

            <NavLink
              to="/services"
              className={({ isActive }) =>
                `mobile-link mobile-services-toggle ${isActive ? 'active' : ''}`
              }
              onClick={(e) => {
                e.preventDefault()
                setServicesOpen(v => !v)
              }}
            >
              Services
            </NavLink>

            {servicesOpen && (
              <div className="mobile-submenu">
                <NavLink to="/services/wardrobe" className="submenu-link" onClick={closeAll}>Wardrobe Unit</NavLink>
                <NavLink to="/services/modular/kitchen" className="submenu-link" onClick={closeAll}>Modern Kitchen Unit</NavLink>
                <NavLink to="/services/pooja_unit" className="submenu-link" onClick={closeAll}>Pooja Unit</NavLink>
                <NavLink to="/services/tv_unit" className="submenu-link" onClick={closeAll}>TV Unit</NavLink>
              </div>
            )}

            <NavLink to="/portfolio" className="mobile-link" onClick={closeAll}>Portfolio</NavLink>
            <NavLink to="/pricing" className="mobile-link" onClick={closeAll}>Pricing</NavLink>
            <NavLink to="/contact" className="mobile-link" onClick={closeAll}>Contact</NavLink>

            <button className="primary-outline-btns">Free Consultant</button>
          </nav>
        </div>
      )}
    </>
  )
}

export default Navbar