import React from 'react';
import { Button } from 'antd';
import styled from "styled-components";
import {GooglePlusCircleFilled } from "@ant-design/icons";
import { FacebookFilled  } from "@ant-design/icons";
import {TwitterCircleFilled } from "@ant-design/icons";
const Login=styled.div`
    display:flex;
    flex-direction:column;
    width:400px;
    height:480px;
    transform: translate(140%,25%);
    border:1px solid #12c4c7;
    outline:1px solid #12c4c7;
    /* border-radius:10px;  */
    background-color:#f7ffff;
    h1{
        padding-top:35px;
        align-self: flex-start;
        margin-left:60px;
    }
    h3{
        align-self: flex-start;
        margin-left:60px;
    }
    form{
        width: 90%;
        height:100%;
        margin:auto;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        padding:40px;
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
    i{
        position:absolute;
        bottom:11px;
        font-size:20px;
    }
`;  

const login=(props)=>{
    return(
        <Login>
        <h1>Login</h1>
        <h3>Enter Your details to continue.</h3>
            <form>
                <div className="formatted-input">
                <label className="label" for="username">UserName</label>
                <i class="fa fa-user" aria-hidden="true"></i>
                <input type="text" name="username" required autoComplete="0"/>
                </div>
                <div className="formatted-input">
                <label className="label" for="password">Password</label>
                <i class="fa fa-lock" aria-hidden="true"></i>
                <input type="password" name="password" required />
                </div>
                <a>Forget Password?</a>
                <Button type="primary">Primary Button</Button>
                <div className="connect-bar">
                <h4>Or Sign Up Using</h4>
                <GooglePlusCircleFilled  className="google-icon"/>
                <TwitterCircleFilled className="twitter-icon"/>
                <FacebookFilled className="facebook-icon"/>
                </div>
            </form>
        </Login>        
    )
}

export default login;