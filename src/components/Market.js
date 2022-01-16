import React, { Component } from 'react';
import { inject, observer } from 'mobx-react'
import Item from './Item';

class Market extends Component {
    constructor(){
        super()
        this.state={
            newItemName : "",
            newItemPrice : 0,
            newItemQuantity : 1
        }
    }
    setName = (event) =>{
        this.setState({newItemName : event.target.value})
    }
    setPrice = (event) =>{
        this.setState({newItemPrice : event.target.value})
    }
    setQuantity = (event) =>{
        this.setState({newItemQuantity : event.target.value})
    }
    addItem = () =>{
        this.props.Inventory.addItem(this.state.newItemName,parseInt(this.state.newItemPrice),parseInt(this.state.newItemQuantity))
    }
    render(){
        return(
           <div>
            <label>new Item: </label>
            <div className='newItem'>
                <label>name:</label><input type="text" value={this.state.newItemName} onChange={this.setName} placeholder='name'/>
                <label>Price:</label><input type="number" value={this.state.newItemPrice} onChange={this.setPrice} placeholder='price' />
                <label>Quantity:</label><input type="number" value={this.state.newItemQuantity} onChange={this.setQuantity} placeholder='quantity' />
            </div>
            <button onClick={this.addItem}>Add Item</button><br></br>
            total number of Items: {this.props.Inventory.numItems}
            {this.props.Inventory.items.map(i => <Item key={i.name} item={i}/>)}
           </div>
        );
    }
}
export default inject("Inventory")(observer(Market));