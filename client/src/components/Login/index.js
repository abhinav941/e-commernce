import React from 'react';

import { Link } from 'react-router-dom';
import { LoginStyle } from './style';  
import { Backdrop } from '../Backdrop';
import { Button } from 'antd';
import {GooglePlusCircleFilled,TwitterCircleFilled,FacebookFilled,CloseOutlined  } from "@ant-design/icons";

const Login=(props)=>{
    // console.log(props);
    const redirectTo=()=>{
        props.history.push("/");
    }
    return(<Backdrop>
        <LoginStyle>
        <CloseOutlined  className="close" onClick={redirectTo}/>
        <h1>Login</h1>
        <h3 className='descrip'>Enter Your details to continue.</h3>
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
                <a href="#">Forget Password?</a>
                <Button type="primary">Login</Button>
                <div className="connect-bar">
                    <h4>Don't have an account? <Link to='/registration'>Sign Up Here</Link></h4>
                    <h3>Or</h3>
                <h4> Sign Up Using</h4>
                <GooglePlusCircleFilled  className="google-icon"/>
                <TwitterCircleFilled className="twitter-icon"/>
                <FacebookFilled className="facebook-icon"/>
                </div>
            </form>
        </LoginStyle>     
        </Backdrop>   
    )
}

export default Login;