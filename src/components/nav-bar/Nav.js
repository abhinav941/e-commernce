import React from 'react';
import SearchBar from '../Search-bar/SearchBar';
import classes from './Nav.module.css';
import NavLinks from '../Nav-links/NavLinks';
import Burger from '../Burger/Burger';

const Nav=(props)=>{
    return(
        <nav className={classes.nav}>
        <div className={classes.logoHeader}>
        <div className={classes.logo}><i className="fa fa-shopping-cart" aria-hidden="true"></i></div>
        <div className={classes.headerName}>E-Cart</div>
        </div>
        <div><Burger click={props.toggle}/></div>
        <SearchBar/>
        <NavLinks/>
      </nav>
    );
}

export default Nav;