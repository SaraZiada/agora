import { observable, makeObservable, action, computed } from 'mobx'
import { Item } from './Item'

export class Inventory {
    constructor() {
        this.items = [];

        makeObservable(this, {
            items: observable,
            addItem: action,
            buyItem: action,
            changePrice: action,
            numItems: computed
        })
    }
    get numItems() {
        return this.items.length;
    }
    addItem = (name, price, quantity = 1) => {
        let item = this.items.find(i => i.name === name && i.price === price)
        if (item !== undefined) {
            item.quantity += quantity
        } else {
            item = new Item(name, price, quantity)
            this.items.push(item)
        }
    }
    buyItem = (name) => {
        let item = this.items.find(i => i.name === name)
        if (item.quantity > 1) {
            item.quantity--
        } else if (item.quantity === 1) {
            let newList = this.items.filter(i => i.name !== name)
            this.items = newList
        }
    }
    changePrice = (name, newPrice) => {
        this.items.find(i => i.name === name).price = newPrice
    }
}