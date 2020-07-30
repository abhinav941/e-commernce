import styled from 'styled-components';

export const RegisterStyle=styled.div`
display:flex;
flex-direction:column;
width:400px;
height:550px;
transform: translate(140%,20%);
border:1px solid #12c4c7;
outline:1px solid #12c4c7;
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