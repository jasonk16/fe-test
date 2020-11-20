import React from 'react';
import { shallow } from 'enzyme';
import '../setupTests';

import Main from '../src/Main';

describe('App', () => {
  it('Main component shallow render', () => {
    const index = shallow(<Main />);
  });

  it('Accounts are present', () => {
    const accountsList = shallow(<Main />);
    accountsList.find(individualAccountList); 
  });
});
