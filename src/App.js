import React, { Component } from 'react';
import Header from './Componets/Header'
import AddGrocery from './Componets/AddGrocery.js'
import './App.css';
import $ from 'jquery';
import GroceryList from './Componets/GroceryList.js'




class App extends Component {
constructor(props){ //ajax call
super(props);
this.state = {
  groceryList:[]
  };
}
getGroceryList(){
      $.ajax({
      url:'https://grocery-app-backend.herokuapp.com/groceries',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({groceryList: data});
        console.log(data)
      }.bind(this),
      error: function(xhr, status, err){
        console.log(xhr);
        console.log(status);
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getGroceryList()
  }  
  render() {

    return (
      <div id='wrapper'className='wrapperShow'>
      <Header/>
      <AddGrocery/>
      <GroceryList data={this.state.GroceryList}/>
      <div id='getStarted'>
      </div>
   </div>
         
    );
  }
}
    

export default App;
