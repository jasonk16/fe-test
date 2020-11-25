/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import { shallow } from 'enzyme';
import regeneratorRuntime from 'regenerator-runtime';
import '../setupTests';

import Accounts from '../src/Accounts';
import AccountCard from '../src/Accounts/accountCard';
import ExpandedCard from '../src/Accounts/expandedCard';

global.console = {
  log: jest.fn(),
  info: jest.fn(),
  error: jest.fn(),
};

const testData = {
  amount_owed: 10,
  account_name: 'Sample Account',
};

describe('Accounts tests', () => {
  it('Card renders with no props', () => {
    const card = shallow(<AccountCard />);
    const element = card.find('[test-id="accountOverview"]');
    expect(element).toHaveLength(1);
    expect(global.console.error).toHaveBeenCalled();
  });

  it('Card renders with props', () => {
    const card = shallow(<AccountCard accountData={testData} />);
    const containsElement = card.find('[test-id="accountOverview"]');
    expect(containsElement).toHaveLength(1);
  });

  it('Expanded Card renders with no props', () => {
    const expandedCard = shallow(<ExpandedCard />);
    const element = expandedCard.find('[test-id="expandedCardContainer"]');
    expect(element).toHaveLength(1);
    expect(global.console.error).toHaveBeenCalled();
  });

  it('Expanded Card renders with props', () => {
    const card = shallow(<ExpandedCard accountData={testData} />);
    const containsElement = card.find('[test-id="expandedCardText"]').text();
    expect(containsElement).toEqual('10');
  });

  it('Account renders succesfully without context', () => {
    const account = shallow(<Accounts />);
    const containsElement = account.find('.accounts-section');
    expect(containsElement).toHaveLength(1);
  });
});
