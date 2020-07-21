import React from 'react';
import './SideBar.css'

const sidebar=(props)=>{
    let sidebaropen='sidebar';
    if(props.show){
        sidebaropen='sidebar open';
    }
    return(
        <div className={sidebaropen}>
            <div className="profile">
                <img className="profileImage" src={require('../../assests/profile_image.jpeg')} alt="profile_Image" />
                <div className="username">Abhishek Sharma</div>
            </div>
            <div className="sidebarContent">
                <ul>
                    <li><a href="#Categories">Categories</a></li>
                    <li><a href="#Orders">Orders</a></li>
                    <li><a href="#Address">Address</a></li>
                    <li><a href="#Offer Zone">Offer Zone</a></li>
                    <li><a href="#Choose Language">Choose Language</a></li>
                    <li><a href="#Customer Care">Customer Care</a></li>
                    <li><a href="#Account">Account</a></li>
                    <li><a href="#Log Out">Log Out</a></li>
                </ul>
            </div>
        </div>  
    );
}

export default sidebar;