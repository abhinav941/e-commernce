import React from 'react';

import { NavLinkStyle } from './style';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
  return (
      <NavLinkStyle>
        <li>
          <NavLink to="/Home" >Home</NavLink>
        </li>
        <li>
          <NavLink to="/Products">Products</NavLink>
        </li>
        <li>
          <NavLink to="/Cart">Cart</NavLink>
        </li>
        <li className="drop"><div>Account <i class="fa fa-angle-down" aria-hidden="true"></i></div>
          <div className="drop-menu">
            <NavLink to="/" className="link">Profile</NavLink>
            <NavLink to="/login" className="link">Login</NavLink>
            <NavLink to="/sign-up" className="link">Sign Up</NavLink>
            <NavLink to="/" className="link">My Orders</NavLink>
            <NavLink to="/" className="link">My Orders</NavLink>
            <NavLink to="/" className="link">Sign Out</NavLink>
          </div>
        </li>
      </NavLinkStyle>
  );
};

export default NavLinks;
