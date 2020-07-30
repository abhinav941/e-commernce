import styled from 'styled-components';

export const NavBarStyle=styled.nav`
display: flex;
position: fixed;
justify-content: space-between;
align-items: center;
background-color: #4ecccc;
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
  font-size: 40px;
}
.headerName{
  font-size: x-large;
  font-weight: 600; 
}
`