import React from 'react';
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
function App () {

  const [ color, setColor ] = React.useState('gold');

  return (
    <div className="container sky">
      <SunSVG color={color} />
      <div className="instructions">
        <b>Pick a color</b> for your shining friend
      </div>
      <ColorSelector onColorSelected={setColor} />
    </div>
  );
}

export default App;
