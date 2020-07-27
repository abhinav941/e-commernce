import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Login from '../Login';

const Navlinks = styled.ul`
  display:flex;
  align-items:flex-start;
  list-style:none;
  margin-bottom:0;
  margin-right:20px;  
  height:55px;
  box-sizing: border-box;
  li{
    display:flex;
    border-radius:5px;
    width:80px;
    height:95%;
    margin-right:5px;
    font-size:medium;
    color: #000;
    text-decoration: none;
    font-weight: 600;
    transition: background-color .3s ease-out;
  }
  a{
    width:100%;
    color: #000;
    text-decoration: none;
    font-weight: 600;
    padding-top:10px;
  }
  li:hover{
    background-color:#e6e8e8;
  }
  .active{
    border-radius:5px;
    background-color:#e6e8e8;
  }
  .drop{
    display:flex;
    flex-direction:column;
    padding-top:10px;
    width:120px;
  }
  .drop-menu{
    width:100%;
    opacity:0;
    transition:opacity .3s ease;
  }
  .drop-menu:last-child{
    border-bottom-left-radius:10px;
    border-bottom-right-radius:10px;
  }
  .drop-menu > .link{
    padding-top:5px;
    padding-bottom:5px;
  }
  .drop-menu > .link:hover{
    background-color:antiquewhite;
  }
  .drop-menu > .link:hover:last-child{
    border-bottom-left-radius:10px;
    border-bottom-right-radius:10px;
  }

  li:hover > .drop-menu{
    display:flex;
    opacity:1;
    flex-direction:column;
    background-color:#f7f7f7;
  }
`;

const navLinks = () => {
  return (
      <Navlinks>
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
      </Navlinks>
  );
};

export default navLinks;
