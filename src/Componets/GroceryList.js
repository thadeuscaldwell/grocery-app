import React, { Component } from 'react';

class GroceryList extends Component {
      
    render() {
            console.log(this.props)
            let groceries1 = this.props.data.map((grocery)=> {
                return( <li> {grocery.item+" " + grocery.value}</li>)
            })
                
    

        return (
            <ul>
                {groceries1}
            </ul>
        
        )}
}
export default GroceryList