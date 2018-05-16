import React from 'react';
import PropTypes from 'prop-types';

import '../../res/styles/ColorSelector.css';

const colorSet = [ 'gray', 'cadetblue', 'orange', 'limegreen', 'darkkhaki', 'burlywood', 'gold', 'chartreuse' ];

function ColorSelector ({ onColorSelected }) {
  return (
    <ul className="color-selector">
      {colorSet.map((color, index) => (
        <li key={index} style={{ backgroundColor: color }}
          onClick={() => { onColorSelected(color) }}>
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
