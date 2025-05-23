// import React, { useState } from 'react'
import React, { useState } from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import Logo from './Lo2.png'
function Heding() {
  const [isMobileMenuOpens, setMobileMenuOpens] = useState(false);

  const toggleMobileMenus = () => {
    setMobileMenuOpens(!isMobileMenuOpens);
  };
  return (
    <>
      <div className="container-xxl" style={{ position: 'absolute' }}>
        <div className="heder container-xl">
          <div className="sub-heder row" style={{ color: 'white' }}>
            <div className="col-md-2 col-sm-11 col-10">
              <img src={Logo} alt="" style={{ width: '90px', height: '90px' }} />
            </div>
            <div className="header1 col-lg-7 col-md-10  d-none d-md-block " >
              <ul>
                <li>HOME</li>
                <li>SHOP</li>
                <li>PAGES</li>
                <li>BLOG</li>
                <li>ABOUT US</li>
                <li>CONTACT</li>
                <li></li>
              </ul>
            </div>
            <DropdownButton id="dropdown-Light-button" className='col-1  d-md-none d-sm-block' title="">
              <Dropdown.Item href="#/action-1">HOME</Dropdown.Item>
              <Dropdown.Item href="#/action-2">SHOP</Dropdown.Item>
              <Dropdown.Item href="#/action-3">PAGES</Dropdown.Item>
              <Dropdown.Item href="#/action-3">BLOG</Dropdown.Item>
              <Dropdown.Item href="#/action-3">ABOUT US</Dropdown.Item>
              <Dropdown.Item href="#/action-3">CONTACT</Dropdown.Item>
            </DropdownButton>

            <div className="sec-heder col-3">
              <i class="fa-solid fa-user" style={{ fontSize: '30px', marginLeft: '20px', alignItems: 'center', display: 'flex' }}></i>
              <i class="fa-regular fa-heart" style={{ fontSize: '30px', marginLeft: '20px', alignItems: 'center', display: 'flex' }}></i>
              <i class="fa-solid fa-cart-shopping" style={{ fontSize: '30px', marginLeft: '20px', alignItems: 'center', display: 'flex' }}></i>
            </div>
          </div>
        </div>
      </div>


      {/* <header>
        <div className="header-container">
          <div className="logo">
            <img src={Logo} alt="Cafeu Logo" />
          </div>

          <div className="hamburger" onClick={toggleMobileMenus}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>

          <nav className={`nav-menu ${isMobileMenuOpens ? "active" : ""}`}>
            <ul className="nav-list">
              {["Home", "Pages", "Menu", "Blog", "About Us", "Contact"].map(
                (item, idx) => (
                  <li key={idx} className="nav-item">
                    <a
                      href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
                      onClick={() => setMobileMenuOpens(false)}
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
              <li className="nav-item number">
                <a
                  href="tel:+919714051182"
                  className="call-link"
                  onClick={() => setMobileMenuOpens(false)}
                  
                >
            
              <i class="fa-solid fa-user" style={{ fontSize: '30px', marginLeft: '20px', alignItems: 'center', display: 'flex' }}></i>
              <i class="fa-regular fa-heart" style={{ fontSize: '30px', marginLeft: '20px', alignItems: 'center', display: 'flex' }}></i>
              <i class="fa-solid fa-cart-shopping" style={{ fontSize: '30px', marginLeft: '20px', alignItems: 'center', display: 'flex' }}></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header> */}
 
    </>
  )
}

export default Heding
