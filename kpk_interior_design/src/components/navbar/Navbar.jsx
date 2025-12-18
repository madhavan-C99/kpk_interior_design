import logo from '../../assets/services/images/logo.png'
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css'

const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { 
      title: 'Services', path: '/services', 
        isDropdown: true, 
        subLinks: [
          {title:'Modular Kitchen',path:'/services/modular/kitchen'},
            { title: 'Wardrobe', path: '/services/wardrobe' },
            { title: 'TV Unit', path: '/services/tv_unit' },
            { title: 'Poojai Unit', path: '/services/poojai_unit' },
        ]
    },
    { title: 'Portfolio', path: '/portfolio' },
    { title: 'Pricing', path: '/pricing' },
    { title: 'Contact', path: '/contact' },
];


function Navbar() {


       const [menuOpen, setMenuOpen] = useState(false);
    // State for desktop Services dropdown (managed by click/outside click)
    const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
    // State for mobile Services accordion (managed by click)
    const [isMobileAccordionOpen, setIsMobileAccordionOpen] = useState(false);
    
    // Ref for the desktop dropdown wrapper to detect outside clicks
    const dropdownRef = useRef(null); 

    const toggleMenu = () => setMenuOpen(prev => !prev);
    
    // Universal link handler
    const handleNavClick = (e, path) => {
        // Prevent actual navigation in this demo, but log the path
        e.preventDefault(); 
        console.log(`Navigating to: ${path}`);
        
        // Close the mobile menu if open
        if (menuOpen) {
            setMenuOpen(false);
        }
        // If a sublink is clicked, close the desktop dropdown
        if (path.includes('/services/')) {
            setIsDesktopDropdownOpen(false);
        }
    };
    
    // useEffect to handle clicks outside the desktop dropdown
    useEffect(() => {
        function handleClickOutside(event) {
            // Only run if the menu is open and the click is outside the dropdown wrapper
            if (dropdownRef.current && isDesktopDropdownOpen && !dropdownRef.current.contains(event.target)) {
                setIsDesktopDropdownOpen(false);
            }
        }
        
        // Attach the listener
        document.addEventListener("mousedown", handleClickOutside);
        
        // Cleanup the listener
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isDesktopDropdownOpen]); // Re-run effect when the dropdown state changes
    
    // --- Helper Components for Cleanliness ---

    // Component for the Chevron icon
    const Chevron = ({ rotate }) => (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 ml-1 transition-transform" 
            viewBox="0 0 20 20" 
            fill="currentColor"
            style={{ transform: rotate ? 'rotate(180deg)' : 'rotate(0deg)' }}
            width="16" height="16"
        >
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
    );
    const renderLink = (item, isDesktop) => {
        const isServices = item.isDropdown;
        
        if (isServices) {
            // --- Dropdown/Accordion Logic ---
            
            // 1. Desktop Dropdown Wrapper (Click-based)
            if (isDesktop) {
                return (
                    <div 
                        key={item.path}
                        className="mobile-dropdown-wrapper"
                        ref={dropdownRef} // Attach ref for click-outside detection
                    >
                        <a 
                            href="#" 
                            className="nav-link" 
                            // Toggle dropdown on click
                            onClick={(e) => {
                                e.preventDefault();
                                setIsDesktopDropdownOpen(prev => !prev);
                            }}
                        >
                            {item.title}
                            <Chevron rotate={isDesktopDropdownOpen} />
                        </a>
                        
                        {/* Always use the state to conditionally render the dropdown menu */}
                        {isDesktopDropdownOpen && (
                            <div className="dropdown-menu">
                                {item.subLinks.map(subItem => (
                                    <a 
                                        key={subItem.path} 
                                        href="#" 
                                        className="dropdown-item" 
                                        onClick={(e) => handleNavClick(e, subItem.path)}
                                    >
                                       <Link to={subItem.path}> {subItem.title}</Link>
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                );
            }
            
            // 2. Mobile Accordion Wrapper (Click-based) - No changes here
            return (
                <div key={item.path} className="mobile-dropdown-wrapper">
                    <a 
                        href="#" 
                        className="mobile-link" 
                        onClick={(e) => {
                            e.preventDefault(); 
                            setIsMobileAccordionOpen(prev => !prev);
                        }}
                    >
                        {item.title}
                        <Chevron rotate={isMobileAccordionOpen} />
                    </a>
                    
                    {isMobileAccordionOpen && (
                        <div className="mobile-dropdown-menu">
                            {item.subLinks.map(subItem => (
                                <a 
                                    key={subItem.path} 
                                    href="#" 
                                    className="mobile-dropdown-item" 
                                    onClick={(e) => handleNavClick(e, subItem.path)}
                                >
                                    <Link to={subItem.path}> {subItem.title}</Link>
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            );
        }

        // --- Standard Link Logic ---
        return (
            <a 
                key={item.path} 
                href="#" 
                // Set 'active' style only for the Home link in this simple example
                className={`${isDesktop ? "nav-link" : "mobile-link"} ${item.path === '/' && isDesktop ? 'active' : ''}`} 
                onClick={(e) => handleNavClick(e, item.path)}
            >
                <Link to={item.path}>{item.title}</Link>
            </a>
        );
    };
  return (
        <>
     <header>
                <div className="navbar">
                    <div className="navbar-left">
                        <img src={logo} alt="KPK Enterprise" className="logo" />

                    </div>

                    {/* Desktop Center Nav: Mapped from navLinks */}
                    <nav className="navbar-center">
                        {navLinks.map(item => renderLink(item, true))}
                    </nav>

                    <div className="navbar-right">
                        <button className="primary-outline-btn">
                              Upgrade Today
                        </button>

                        <div className="hamburger-wrapper">
                            <button
                                className="hamburger"
                                onClick={toggleMenu}
                                aria-label="Toggle navigation"
                                aria-expanded={menuOpen}
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu (Conditional Rendering): Mapped from navLinks */}
                {menuOpen && (
                    <div className="navbar-content">
                        <nav className="navbar-mobile-menu">
                            {navLinks.map(item => renderLink(item, false))}
                            
                            <button className="primary-outline-btns" onClick={toggleMenu}>
                              Upgrade Today
                            </button>
                        </nav>
                    </div>
                )}
            </header>

        </>
    );

}

export default Navbar