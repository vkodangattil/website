import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <h1 className="nameLeft">Vishnu Kodangattil</h1>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            
            <li className='nav-item'>
              <Link
                className='nav-links'
                onClick={closeMobileMenu}
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Home
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                className='nav-links'
                onClick={closeMobileMenu}
                activeClass="active"
                to="aboutme"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About Me
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                className='nav-links'
                onClick={closeMobileMenu}
                activeClass="active"
                to="resume"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Resume
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                className='nav-links'
                onClick={closeMobileMenu}
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
          {/*
          {button && <Button buttonStyle='btn--outline'>Contact Me</Button>}
          */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;