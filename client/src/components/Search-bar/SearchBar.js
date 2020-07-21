import React from 'react';
import './SearchBar.css';
// import styled from 'styled-components';

// const SearchBar=styled.div`
// .form{
//     display: flex;
// }
// input{
//     width: 250px;
//     height: 28px;
//     transition: all .5s ease;
//     border:none;
//     border-top-left-radius: 5px;     
//     border-bottom-left-radius: 5px;    
// }

// `

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