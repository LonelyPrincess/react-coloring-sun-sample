import React, { Component } from 'react';
import '../res/styles/App.css';

import SunSVG from './components/Sun';
import ColorSelector from './components/ColorSelector';

/**
 * Main component for the application. It keeps track of the currently selected
 * color and updates the UI accordingly.
 *
 * @module ColoringSunApp
 * @author Sara Hernández <sara.her.su@gmail.com>
 */
class App extends Component {
  state = {
    color: 'gold'
  };

  /**
   * Updates the selected color in component' state.
   * @param {string} color
   */
  switchColor = (color) => {
    this.setState({ color });
  };

  /**
   * Returns the view template of the component.
   * @returns JSX template for the component.
   */
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
