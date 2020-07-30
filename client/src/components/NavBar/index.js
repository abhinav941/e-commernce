import React from 'react';
import SearchBar from '../SearchBar';
import NavLinks from '../NavLinks';
import Burger from '../Burger';
import { NavBarStyle } from './style';

const NavBar=(props)=>{
    return(
        <NavBarStyle>
        <div className="logoHeader">
        <div className="logo"><i className="fa fa-shopping-cart" aria-hidden="true"></i></div>
        <div className="headerName">E-Cart</div>
        </div>
        <div><Burger click={props.toggle}/></div>
        <SearchBar/>
        <NavLinks/>
      </NavBarStyle>
    );
}

export default NavBar;