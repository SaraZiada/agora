import React, { Component } from 'react';
import { inject, observer } from 'mobx-react'

export class Item extends Component {
    buyItem = () =>{
      this.props.Inventory.buyItem(this.props.item.name)  
    }
    changePrice = () =>{
        let newPrice = prompt("Please enter new Price",this.props.item.price)
        if(newPrice != null){
            this.props.Inventory.changePrice(this.props.item.name,newPrice)
        }
    }
    render(){
        let item = this.props.item
        return(
           <li onDoubleClick={this.changePrice}>{item.quantity} {item.name} Available at ${item.price} per item <button onClick={this.buyItem}>Buy Item</button></li>
        );
    }
}
export default inject("Inventory")(observer(Item));