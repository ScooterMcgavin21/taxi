import React from 'react';
import { Nav, NavbarContainer, NavIcon, NavLogo } from './NavbarElements';

function Navbar() {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/' >
            <NavIcon />
            TaxiStake
          </NavLogo>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
