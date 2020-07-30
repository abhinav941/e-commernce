import React from 'react';
import styled, { keyframes } from 'styled-components';
// import './style.css';

const  SpinnerRotate=keyframes`
    0% {
		transform:rotate(0deg);
	}
	100% {
		transform:rotate(360deg);
	}
`;

const SpinnerStyle=styled.div`
  .spinner {
	position: absolute;
	top: 50vh;
	left: 50%;
	margin: -100px 0 0 -100px;
	height: 200px;
	width: 200px;
	text-indent: 250px;
	white-space: nowrap;
  overflow: hidden;
  mask-image: url('../../assests/spinner.png');
  background-color: #000; 
  animation: ${SpinnerRotate} 2s linear infinite;
	/* animation-duration: 2s;
	animation-iteration-count: infinite;
  animation-timing-function: linear; */
  
}
`;
const Spinner=(props)=>{
    return(
            <SpinnerStyle class="spinner"></SpinnerStyle>
    )
}

export default Spinner;