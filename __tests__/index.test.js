import React from 'react';
import { shallow } from 'enzyme';
import '../setupTests'; 

import Main from '../src/Main';

describe('App', () => {
  it('Main index test', () => {
    const index = shallow(<Main />);
  });
});
