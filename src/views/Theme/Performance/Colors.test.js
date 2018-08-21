import React from 'react';
import Performance from './Performance';
import { shallow } from 'enzyme'

it('renders without crashing', () => {
  shallow(<Performance />);
});
