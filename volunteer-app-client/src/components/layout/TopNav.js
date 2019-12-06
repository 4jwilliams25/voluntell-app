import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import EventRequestForm from "../forms/EventRequestForm";
import { NavLink } from "react-router-dom";

const TopNav = () => {
   
    return (
        <div>
      <Navbar color="success" light expand="md">
          <NavbarBrand href="/" className="text-light">Voluntell</NavbarBrand>
          <NavLink to="/" className="text-light mr-2">Events</NavLink>  
          <NavLink to={`/UserProfile/1`} className="text-light">User</NavLink>
          <EventRequestForm />
      </Navbar>
    </div>
    )
};

export default TopNav;