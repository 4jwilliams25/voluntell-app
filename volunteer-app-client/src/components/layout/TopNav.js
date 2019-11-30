import React from "react";
import { Navbar, NavbarBrand, NavLink } from "reactstrap"

const TopNav = () => {
   
    return (
        <div>
      <Navbar color="success" light expand="md">
          <NavbarBrand href="/" className="text-light">Voluntell</NavbarBrand>  
          <NavLink href="/" className="text-light">User</NavLink>
      </Navbar>
    </div>
    )
};

export default TopNav;