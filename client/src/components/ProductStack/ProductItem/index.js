import React from 'react';
// import './ProductItem.css';
import styled from 'styled-components';
import { HeartFilled } from '@ant-design/icons';

const Product=styled.div`
display:flex;
position:relative;
flex-direction:column;
align-items:space-between;
padding-top:15px;
background-color:#fff;
border-radius:10px;
transition:box-shadow .2s ease;
&:hover{
    /* outline: 1px solid #d4d2d2; */
    -webkit-box-shadow : 2px 3px 10px -1px rgba(0,0,0,0.33);
    -moz-box-shadow: 2px 3px 10px -1px rgba(0,0,0,0.33);
    box-shadow: 2px 3px 10px -1px rgba(0,0,0,0.33);
}
.i{
    font-size:25px;
    color:#ccc;
    position:absolute;
    right:10px;   
    &:hover{
        color:red;
    }   
}

img{
    width: 220px;
    height: 150px;
    margin: auto;
}
p{
    margin-right:auto;
    padding-left:20px;
}
strike{
    padding-left:1em;
}
`

const productItem=(props)=>{
    return(
        <Product>
                <img src={props.url} alt="product_image" />
                <HeartFilled className="i"/>
                <h4>{props.name}</h4>
                <p><b>Rs. {props.price}</b><strike>Rs. {props.price+2000}</strike></p>
        </Product>
    )
}

export default productItem; 