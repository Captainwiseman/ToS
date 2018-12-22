import React, { Component } from 'react';
// import MainBoard from './Board/Board';
import Worlds from './Mechanics/Worlds';
import Drop from './Mechanics/Drop';
import CardTemplate from './Card/CardTemplate'
import './App.css';

class App extends Component {
  state = {
    item: {item: "None"},
    Card: null,
    currentWorld: Worlds[0]
  }
  drop = () => {
    let item = new Drop(this.state.currentWorld.dropRates, 10)
    console.log(item)
    if (item.item === "None") {
      this.setState({Card: null})
    }
    else {
      this.setState({Card: <CardTemplate item={item} />})
    }
  }
  render() {
    return (
      <div className = "App">
      <button onClick={this.drop}>Roll Drop</button>
      {this.state.Card}
      </div>
    );
  }
}

export default App;
