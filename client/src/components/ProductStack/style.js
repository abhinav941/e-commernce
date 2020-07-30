import styled from 'styled-components';

export const StackStyle=styled.div`
display: grid;
position: absolute;
top:70px;
left:250px;
grid-template-columns: repeat(5,240px);
grid-auto-rows: minmax(350px,auto);
grid-column-gap:10px;
grid-row-gap:10px;
box-sizing:border-box;
margin-bottom:20px;
background-color:transparent;
border-radius:10px;
`