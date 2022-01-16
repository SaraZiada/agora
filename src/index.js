import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Inventory} from './store/Inventory'
import { Provider } from 'mobx-react';

let inventory = new Inventory()
// Inventory.addItem("water",11,6)
ReactDOM.render(<Provider Inventory={inventory}>
    <App />
    </Provider>,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
