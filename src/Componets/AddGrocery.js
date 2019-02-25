import React, { Component } from 'react';


class AddGrocery extends Component {
    render() {
        return (
            <form action="">
            <input type="text" placeholder="Item"/>
            <br/>
            <input type="text" placeholder= "Value"/>
            <br/>
            <input type="submit" placeholder= "Submit"/>

            
            </form>
        )
    }
}
export default AddGrocery