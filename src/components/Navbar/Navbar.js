import React, { useEffect, useState } from 'react';
import { FaLayerGroup, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import { MobileIcon, Nav, NavbarContainer, NavBtnLink, NavIcon, NavItem, NavItemBtn, NavLinks, NavLogo, NavMenu } from './NavbarElements';

function Navbar() {
  /* click and button state variables Defined to update Hamburger menu */
  const [click, setClick ] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }
  /** Hook for button component  */
  useEffect(() => {
    showButton()
  }, [])
  window.addEventListener('resize', showButton);
  return (
    <>
    <IconContext.Provider value={{ color: '#fff' }}>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/' onClick={closeMobileMenu}>
            <NavIcon />
            TaxiStake
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaLayerGroup />}
          </MobileIcon>
          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLinks to='/'>
                Home
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/services'>
                Services
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/products'>
                Products
              </NavLinks>
            </NavItem>
            <NavItemBtn>
              {button ? (
                <NavBtnLink to='/sign-up'>
                  <Button primary>SIGN UP</Button>
                </NavBtnLink>
              ) : (
                <NavBtnLink to='/sign-up'>
                  <Button fontBig primary>
                    SIGN UP
                  </Button>
                </NavBtnLink>
              )}
            </NavItemBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
