import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../main/App';
import SunSVG from '../main/components/Sun';
import ColorSelector from '../main/components/ColorSelector';

// Enzyme config
Enzyme.configure({ adapter: new Adapter() });

/**
 * Unit tests for the app component.
 *
 * @module test/App
 * @author Sara Hernández <sara.her.su@gmail.com>
 */
describe('\n --- TESTS FOR APP COMPONENT --- \n', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders a <SunSVG /> component', () => {
    const wrapper = Enzyme.shallow(<App />);
    expect(wrapper.find(SunSVG)).toHaveLength(1);
  });

  it('renders a <ColorSelector /> component', () => {
    const wrapper = Enzyme.shallow(<App />);
    expect(wrapper.find(ColorSelector)).toHaveLength(1);
  });

});
