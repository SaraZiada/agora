import React, { Component } from 'react';
import { observer } from 'mobx-react'
import Item from './Item';

class Market extends Component {
    constructor() {
        super()
        this.state = {
            newItemName: "",
            newItemPrice: 0,
            newItemQuantity: 1
        }
    }
    setName = (event) => {
        this.setState({ newItemName: event.target.value })
    }
    setPrice = (event) => {
        this.setState({ newItemPrice: event.target.value })
    }
    setQuantity = (event) => {
        this.setState({ newItemQuantity: event.target.value })
    }
    addItem = () => {
        this.props.store.addItem(this.state.newItemName, this.state.newItemPrice, this.state.newItemQuantity)
    }
    render() {
            console.log(this.props.store)
            return ( <
                div >
                <
                label > new Item: < /label> <
                div className = 'newItem' >
                <
                label > name: < /label><input type="text" value={this.state.newItemName} onChange={this.setName} placeholder='name'/ >
                <
                label > Price: < /label><input type="number" value={this.state.newItemPrice} onChange={this.setPrice} placeholder='price' / >
                <
                label > Quantity: < /label><input type="number" value={this.state.newItemQuantity} onChange={this.setQuantity} placeholder='quantity' / >
                <
                /div> <
                button onClick = { this.addItem } > Add Item < /button>

                {
                    this.props.store.items.map(i => < Item item = { i }
                        store = { this.props.store }
                        />)} <
                        /div>
                    );
                }
            }
            export default observer(Market);