import React,{useState,useEffect}  from 'react';
import ProductStack from '../../components/ProductStack';
import SideBar from '../../components/SideBar';
import Nav from '../../components/NavBar';

const HomePage=(props)=>{
    const [show, setShow] = useState(true);
    const [showLogin, setShowLogin] = useState(true);
    useEffect(()=>{
        setShowLogin(false);
        setTimeout(()=>{
            props.history.push("/login");
        },5000)
        },[showLogin,props.history]);

    const toggleHandler=()=>{ setShow((prevState)=>{
        return !prevState;
    })
}
    return(<div>
        <Nav toggle={toggleHandler} />
        <SideBar show={show} />
        <ProductStack />
        </div>
    );
}

export default HomePage;