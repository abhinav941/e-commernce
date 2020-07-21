import React from 'react';
import SearchBar from '../Search-bar/SearchBar';
import NavLinks from '../Nav-links/NavLinks';
import Burger from '../Burger/Burger';
import styled from 'styled-components';

const Navi=styled.nav`
display: flex;
position: fixed;
justify-content: space-between;
align-items: center;
background-color: #86d4d4;
width: 100%;
flex-direction: row;
box-sizing: border-box;
z-index: 2;
.logoHeader{
  display: flex;
  width: 150px;
  justify-content: space-around;
  align-items: center;
  padding-left: 30px;
}
.logo{
  font-size: 50px;
}
.headerName{
  font-size: larger;
  font-weight: 600; 
}
`

const Nav=(props)=>{
    return(
        <Navi>
        <div className="logoHeader">
        <div className="logo"><i className="fa fa-shopping-cart" aria-hidden="true"></i></div>
        <div className="headerName">E-Cart</div>
        </div>
        <div><Burger click={props.toggle}/></div>
        <SearchBar/>
        <NavLinks/>
      </Navi>
    );
}

export default Nav;