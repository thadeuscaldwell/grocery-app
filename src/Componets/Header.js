import React, { Component } from 'react';
class Header extends Component {
  render() {
    return (
      <div>

        <div id="mySidenav" class="sidenav">
            <a href="#" id="login">Login</a>
            <a href="#" id="groceryList">Grocery List</a>
            <a href="#" id="newList">New List</a>
            {/* <a href="#" id="contact">Contact</a> */}
        </div>
            {/* <img src={require('./Images/store.jpeg')} alt='store'/>   */}
            <img style={{height:"100%"}} src={require('./Images/grocery.jpg')} alt='store'/>

      </div>
         
    )
  }
}

export default Header;
