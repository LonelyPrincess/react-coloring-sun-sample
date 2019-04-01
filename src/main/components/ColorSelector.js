import React from 'react';
import PropTypes from 'prop-types';

import '../../res/styles/ColorSelector.css';

const colorSet = [ 'gray', 'cadetblue', 'orange', 'limegreen', 'darkkhaki', 'burlywood', 'gold', 'chartreuse' ];

/**
 * This component displays a predefined list of colors and allows the user to
 * choose any of them.
 *
 * Everytime an item on the rendered list is clicked, the selected color will
 * be passed as an argument to the callback function specified in the component
 * props, so the parent component can do something with the selected value.
 *
 * @module Components/ColorSelector
 * @author Sara Hernández <sara.her.su@gmail.com>
 * @param {function} onColorSelected - Handler function to trigger when a
 *  color item is clicked.
 */
function ColorSelector ({ onColorSelected }) {

  const [ selectedColor, setSelectedColor ] = React.useState(null);

  return (
    <ul className="color-selector">
      {colorSet.map((color, index) => (
        <li key={index} style={{ backgroundColor: color }}
          className={color === selectedColor ? "active" : undefined}
          onClick={() => {
            setSelectedColor(color);
            onColorSelected(color);
          }}>
          {color}
        </li>
      ))}
    </ul>
  );
}

ColorSelector.propTypes = {
  onColorSelected: PropTypes.func.isRequired
};

export default ColorSelector;
