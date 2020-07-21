import React from 'react';
// import './SideBar.css';
import styled from 'styled-components';

const SideBar=styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  align-items: center;
  top:66.7px;
  height: 100%;
  width: 230px;
  background-color: #86d4d4;
  border-top: 2px solid rgba(0, 0, 0, .2);
  z-index:1;
  transform: ${props=>props.show?"translateX(-100%)":"translateX(0%)"};
  transition: transform .5s ease;
ul{
  list-style: none;
  width: 230px;
  box-sizing: border-box;
  padding: 0;
} 
.profile{
  padding-top: 20px;
}
.profileImage{
  border-radius: 50%;
  width:150px;
}
.username{
  font-weight: 650;
  font-size: 20px;
}

.sidebarContent li{
  line-height: 50px; 
  width: 100%;
  border-bottom: 1px solid  rgba(34, 112, 126,0.4);

}
.sidebarContent li a{
  text-decoration: none;
  color: #032222;
  font-weight: 600;
}
`


const sidebar = (props) => {
  return (
    <SideBar show={props.show}>
      <div className="profile">
        <img className="profileImage" src={require('../../assests/profile_image.jpeg')} alt="profile_Image" />
        <div className="username">Abhishek Sharma</div>
      </div>
      <div>Hello</div>
      <div className="sidebarContent">
        <ul>
          <li>
            <a href="#Categories">Categories</a>
          </li>
          <li>
            <a href="#Orders">Orders</a>
          </li>
          <li>
            <a href="#Address">Address</a>
          </li>
          <li>
            <a href="#Offer Zone">Offer Zone</a>
          </li>
          <li>
            <a href="#Choose Language">Choose Language</a>
          </li>
          <li>
            <a href="#Customer Care">Customer Care</a>
          </li>
          <li>
            <a href="#Account">Account</a>
          </li>
          <li>
            <a href="#Log Out">Log Out</a>
          </li>
        </ul>
      </div>
    </SideBar>
  );
};

export default sidebar;
