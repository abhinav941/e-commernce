import React from 'react';
import styled from 'styled-components';

const Navlinks = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style-type: none;
  box-sizing: border-box;
  li {
    width: 100px;
    text-align: center;
  }
  a {
    text-decoration: none;
    font-weight: 600;
    color: #105757;
  }
`;

const navLinks = () => {
  return (
    <div>
      <Navlinks>
        <li>
          <a href="#Home">Home</a>
        </li>
        <li>
          <a href="#Products">Products</a>
        </li>
        <li>
          <a href="#Cart">Cart</a>
        </li>
        <li>
          <a href="#Help">Help</a>
        </li>
      </Navlinks>
    </div>
  );
};

export default navLinks;
