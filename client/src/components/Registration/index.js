import React from 'react';

import { Backdrop } from '../Backdrop';
import { RegisterStyle } from './style';
import { Button } from 'antd';
import {GooglePlusCircleFilled,FacebookFilled,TwitterCircleFilled,LinkedinOutlined,CloseOutlined  } from "@ant-design/icons";

const Registration=(props)=>{
    const redirectTo=()=>{
        props.history.push("/");
    }
    return(
        <Backdrop>
        <RegisterStyle>
            <form>
            <CloseOutlined className="close" onClick={redirectTo}/>
            <h1>Registration</h1>
                <div className="formatted-input">
                <label className="label" for="yourname">Your Name</label>
                <i class="fa fa-user" aria-hidden="true"></i>
                <input type="text" name="yourname" required autoComplete="off"/>
                </div>
                <div className="formatted-input">
                <label className="label" for="email">Email</label>
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <input type="email" name="email" required  autoComplete="0"/>
                </div>
                <div className="formatted-input">
                <label className="label" for="username">Userame</label>
                <i class="fa fa-user" aria-hidden="true"></i>
                <input type="text" name="username" required autoComplete="off"/>
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
                <Button type="primary">Sign Up</Button>
                <div className="connect-bar">
                <h3>Or</h3>
                <h3>Sign Up using existing account</h3>
                    <GooglePlusCircleFilled  className="google-icon"/>
                    <TwitterCircleFilled className="twitter-icon"/>
                    <FacebookFilled className="facebook-icon"/>
                    <LinkedinOutlined className="linkedIn-icon"/>
                </div>
            </form>
        </RegisterStyle>    
        </Backdrop>    
    )
}

export default Registration;