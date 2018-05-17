import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ColorSelector from '../../main/components/ColorSelector';

// Enzyme config
Enzyme.configure({ adapter: new Adapter() });

/**
 * Unit tests for the color selector component.
 *
 * @module test/ColorSelector
 * @author Sara Hernández <sara.her.su@gmail.com>
 */
describe('\n --- TESTS FOR COLOR SELECTOR COMPONENT --- \n', () => {

  it('renders a color list with at least one color', () => {
    const wrapper = Enzyme.shallow(
      <ColorSelector onColorSelected={() => {}} />
    );

    const colorList = wrapper.find('.color-selector');
    expect(colorList).toHaveLength(1);
    expect(colorList.children().length).toBeGreaterThan(0);
  });

  it('callback for color selector obtains the right color code', () => {
    expect.assertions(1);

    let selectedColor;
    const wrapper = Enzyme.shallow(
      <ColorSelector onColorSelected={(color) => {
        expect(color).toBe(selectedColor);
      }} />
    );

    const firstColorBtn = wrapper.find('li').first();
    selectedColor = firstColorBtn.text();

    firstColorBtn.simulate('click');
  });

});
