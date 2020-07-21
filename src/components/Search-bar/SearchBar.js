import React from 'react';
import './SearchBar.css';
const searchBar=(props)=>{
    return(
        <div className="form">
          <form action="#">
              <input type="text" placeholder="Search.."/>
              <button className="button" type="submit"><i className="fa fa-search fa-width" aria-hidden="true"></i></button>
          </form>
        </div>
    );
}

export default searchBar;