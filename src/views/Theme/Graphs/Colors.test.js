import React from 'react';
import Graphs from './Graphs';
import { shallow } from 'enzyme'

it('renders without crashing', () => {
  shallow(<Graphs />);
});
