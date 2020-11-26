import React from 'react';
import '../setupTests';
import { shallow, mount } from 'enzyme';

import Footer from '../src/Footer';
import NameContext from '../src/.components/nameContext';

describe('Footer tests', () => {
  it('Footer renders home(first) indicator', () => {
    const footer = shallow(<Footer />);
    const homeIndicator = footer.find('Indicator');
    expect(homeIndicator).toHaveLength(1);
  });

  it('Footer renders account indicators with name context', () => {
    const contextWrapper = mount(
      <NameContext>
        <Footer />
      </NameContext>
    );

    const indicators = contextWrapper.find('Indicator').length;
    expect(indicators).toBeGreaterThan(1);
    contextWrapper.unmount();
  });
});
