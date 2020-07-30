import React from 'react';
// import styled from 'styled-components';
import './style.css';
// const SpinnerStyle=styled.div`
//   .spinner {
// 	position: absolute;
// 	top: 50vh;
// 	left: 50%;
// 	margin: -100px 0 0 -100px;
// 	height: 200px;
// 	width: 200px;
// 	text-indent: 250px;
// 	white-space: nowrap;
//   overflow: hidden;
//   mask-image: url('../../assests/spinner.png');
//   background-color: #000; 
//   animation-name: spinnerRotate;
// 	animation-duration: 2s;
// 	animation-iteration-count: infinite;
//   animation-timing-function: linear;
  
// }
// @keyframes spinnerRotate {
// 	from {
// 		transform:rotate(0deg);
// 	}
// 	to {
// 		transform:rotate(360deg);
// 	}
// }
// `;
const Spinner=(props)=>{
    return(
            <div class="spinner"></div>
    )
}

export default Spinner;