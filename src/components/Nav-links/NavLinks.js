import React from 'react';
import classes from './NavLinks.module.css'
const navLinks=()=>{
    return(
        <div >
            <ul className={classes.unorderList}>
              <li className={classes.list}><a className={classes.anchor} href="#Home">Home</a></li>
              <li className={classes.list}><a className={classes.anchor} href="#Products">Products</a></li>
              <li className={classes.list}><a className={classes.anchor} href="#Cart">Cart</a></li>
              <li className={classes.list}><a className={classes.anchor} href="#Help">Help</a></li>
            </ul>
          </div>
    );
}

export default navLinks;