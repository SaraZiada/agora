import { observer } from 'mobx-react'
import { Component } from 'react';
import './App.css';
import Market from './components/Market';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Market store={this.props.store} />
      </div>
    );
  }
}

export default observer(App);
