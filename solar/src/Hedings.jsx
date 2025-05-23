import { Box } from '@mui/material'
import React, { useState } from 'react'
import logo from './Solarlogo.png'

const Hedings = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };
    return (
        <>
            <Box sx={{width:"100%"}}>
                <Box className="header-container">
                    <Box className="logo">
                        <img src={logo} alt="Cafeu Logo" />
                    </Box>

                    <Box className="hamburger" onClick={toggleMobileMenu}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </Box>

                    <nav className={`nav-menu ${isMobileMenuOpen ? "active" : ""}`}>
                        <ul className="nav-list">
                            {["Home", "Pages", "Menu", "Blog", "About Us", "Contact"].map(
                                (item, idx) => (
                                    <li key={idx} className="nav-item">
                                        <a
                                            href={`#${item.toLowerCase()}`}
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {item}
                                        </a>
                                    </li>
                                )
                            )}

                        </ul>
                    </nav>
                </Box>
            </Box>
        </>
    )
}

export default Hedings
