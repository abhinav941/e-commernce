import styled from 'styled-components';

export const BurgerStyle=styled.div`
display: flex;
flex-direction: column;
width:30px;
height: 30px;
background-color: transparent;
border: 2px solid rgba(255,255,255,0.8);
border-radius: 2px;
padding:2px 0;
margin-left:-120px;
div{
    width:20px;
    height: 4px;
    background-color: rgba(255,255,255,.92);
    margin: auto;
    border-radius: 2px;
}
`