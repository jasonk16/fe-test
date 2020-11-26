import React from 'react';
import '../setupTests';
import { shallow } from 'enzyme';

import Header from '../src/Header';

describe('Header test', () => {
  it('Header renders correctly', () => {
    const header = shallow(<Header />);
    const headerProfileIcon = header.find('ProfileIcon');
    expect(headerProfileIcon).toHaveLength(1);
  });
});
