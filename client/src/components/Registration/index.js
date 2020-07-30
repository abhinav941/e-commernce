import React from 'react';

import { RegisterStyle } from './style';
import { Button } from 'antd';
import {GooglePlusCircleFilled,FacebookFilled,TwitterCircleFilled,LinkedinOutlined  } from "@ant-design/icons";

const Registration=(props)=>{
    return(
        <RegisterStyle>
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
        </RegisterStyle>        
    )
}

export default Registration;