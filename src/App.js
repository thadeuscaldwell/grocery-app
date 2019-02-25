import React, { Component } from 'react';
import Header from './Componets/Header'
import AddGrocery from './Components/AddGrocery'
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <Header/>
      <AddGrocery/>
           </div>
         
    );
  }
}

export default App;
