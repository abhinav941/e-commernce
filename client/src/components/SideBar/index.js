import React from 'react';
import styled from 'styled-components';

const SideBar=styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  align-items: center;
  top:62.7px;
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

.sidebarContent li{
  line-height: 50px; 
  border-bottom: 1px solid  rgba(34, 112, 126,0.4);
  transition:background-color .3s ease;
}
.sidebarContent li:hover{
  background-color:#009e9e;

}
.sidebarContent li a{
  display:block;
  text-decoration: none;
  color: #032222;
  font-weight: 600;
}
`


const sidebar = (props) => {
  return (
    <SideBar show={props.show}>
      <div className="sidebarContent">
        <ul>
          <li>
            <a href="#Categories">Categories</a>
          </li>
          <li>
            <a href="#Orders">Orders</a>
          </li>
          <li>
            <a href="#Wishlist">Wishlist</a>
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
            <a href="#MyNotifications">My Notifications</a>
          </li><li>
            <a href="#My Chat">My Chat</a>
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
