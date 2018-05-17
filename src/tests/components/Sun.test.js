import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ColorSelector from '../../main/components/Sun';
import SunSVG from '../../main/components/Sun';

// Enzyme config
Enzyme.configure({ adapter: new Adapter() });

/**
 * Unit tests for the sun svg component.
 *
 * @module test/SunSVG
 * @author Sara Hernández <sara.her.su@gmail.com>
 */
describe('\n --- TESTS FOR SUN SVG COMPONENT --- \n', () => {

  it('renders sun with gold body', () => {
    const wrapper = Enzyme.shallow(
      <SunSVG color="gold" />
    );

    const sunBody = wrapper.find('.body').find('circle').get(0);
    expect(sunBody.props.style.fill).toBe('gold');
  });

});
