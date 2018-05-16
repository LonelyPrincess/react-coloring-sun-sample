import React, { Component } from 'react';
import '../res/styles/App.css';

import SunSVG from './components/Sun';
import ColorSelector from './components/ColorSelector';

class App extends Component {
  state = {
    color: 'gold'
  };

  switchColor = (color) => {
    this.setState({ color });
  };

  render() {
    return (
      <div className="container sky">
        <SunSVG color={this.state.color} />
        <div className="instructions">
          <b>Pick a color</b> for your shining friend
        </div>
        <ColorSelector onColorSelected={this.switchColor} />
      </div>
    );
  }
}

export default App;
