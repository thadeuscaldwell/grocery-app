import React, { Component } from 'react';
class Header extends Component {
  render() {
    return (
      
      <div id= "banner">
        <h1>The Grocery Store App </h1>
        <div id="mySidenav" className="sidenav">
            <a href="Login.js" id="login">Login</a>
            <a href="History.js" id="History">Grocery History</a>
            <a href="New List.js" id="newList">New List</a>      
      
            <img src={require('./Images/store.jpeg')} alt='store'/>

        </div>
      </div>
         
    );
  }
}

export default Header;
