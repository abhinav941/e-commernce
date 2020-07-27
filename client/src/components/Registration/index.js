import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import {GooglePlusCircleFilled,FacebookFilled,TwitterCircleFilled,LinkedinOutlined  } from "@ant-design/icons";
// import {  } from "@ant-design/icons";
// import {  } from "@ant-design/icons";
// import {  } from "@ant-design/icons";

const Register=styled.div`
    display:flex;
    flex-direction:column;
    width:400px;
    height:550px;
    transform: translate(140%,20%);
    border:1px solid #12c4c7;
    outline:1px solid #12c4c7;
    /* border-radius:10px;  */
    background-color:#f7ffff;
    h1{
        padding-top:20px;
        align-self: flex-start;
        margin-left:60px;
    }
    h3{
        align-self: flex-start;
        margin-left:60px;
    }
    form{
        width: 90%;
        /* height:100%; */
        flex-grow:1;
        margin:auto;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        padding:30px;
    }
    a{
        align-self: flex-start;
    }
    
    form input{
        width:100%;
        margin-top:25px;
        background:transparent;
        font-weight:500;
        border:none;
        outline:none;
        border-bottom:1px solid rgba(0,0,0,0.5);
        /* text-align:center; */
        padding-left:25px;
    }
    .formatted-input{
        display:block;
        position:relative;
        height:60px;
        
    }
    form input:valid{
        border-bottom:2px solid #12c4c7;
    }
    
    .label{
        position:absolute;
        font-weight:600;
        font-size:medium;
    }
    /* .connect-bar{
        display:flex;
    }   */
    .google-icon{
        color:red;
        font-size:30px;
    }
    .facebook-icon{
        margin-left:15px;   
        color:blue;
        font-size:30px;
    }
    .twitter-icon{
        margin-left:15px;
        color: #00acee;
        font-size:30px;
    }
    .linkedIn-icon{
        margin-left:15px;
        color: #0E76A8;
        font-size:30px;
    }
    i{
        position:absolute;
        bottom:11px;
        font-size:20px;
    }
`;  


const Registration=(props)=>{
    return(
        <Register>
        <h1>Registration</h1>
        <h3>Sign Up using existing account</h3>
        <div className="connect-bar">
            <GooglePlusCircleFilled  className="google-icon"/>
            <TwitterCircleFilled className="twitter-icon"/>
            <FacebookFilled className="facebook-icon"/>
            <LinkedinOutlined className="linkedIn-icon"/>
        </div>
            <form>
                <div className="formatted-input">
                <label className="label" for="username">UserName</label>
                <i class="fa fa-user" aria-hidden="true"></i>
                <input type="text" name="username" required autoComplete="off"/>
                </div>
                <div className="formatted-input">
                <label className="label" for="email">Email</label>
                <i class="fa fa-lock" aria-hidden="true"></i>
                <input type="email" name="email" required  autoComplete="0"/>
                </div>
                <div className="formatted-input">
                <label className="label" for="password">Password</label>
                <i class="fa fa-lock" aria-hidden="true"></i>
                <input type="password" name="password" required />
                </div>
                <div className="formatted-input">
                <label className="label" for="Conf-pass">Confirm Password</label>
                <i class="fa fa-lock" aria-hidden="true"></i>
                <input type="password" name="Conf-pass" required />
                </div>
                <Button type="primary">Primary Button</Button>
            </form>
        </Register>        
    )
}

export default Registration;