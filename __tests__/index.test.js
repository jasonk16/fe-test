import React from 'react';
import { shallow, mount } from 'enzyme';
import regeneratorRuntime from "regenerator-runtime";
import '../setupTests';

// import Main from '../src/index';
import Dashboard from '../src/Dashboard';
import Accounts from '../src/Accounts';
import Transactions from '../src/Transactions';
import Footer from '../src/Footer';

import NameContext, { useName } from '../src/.components/nameContext';
import getTransactions from '../src/.components/getTransactions';

import data from '../assets/data/appData.json';

describe('Credit App Test', () => {
  let appWrapper;

  beforeAll(() => {
    appWrapper = shallow(<Dashboard />);
  });

  it('Account rendered by parent component', () => {
    const account = appWrapper.containsMatchingElement(Accounts);

    expect(account).toEqual(true);
  });

  it('Passes a value as prop when clicked', () => {
    const mountedComponent = mount(<Dashboard />);
    const individualAccount = mountedComponent.find(Accounts);
    const value = individualAccount
      .find('.account-card')
      .first()
      .childAt(0)
      .simulate('click');
    expect(value.props('SelectedValue')).toBeGreaterThanOrEqual(0);
  });

  it('Renders transaction component', () => {
    const transaction = appWrapper.containsMatchingElement(Transactions);

    expect(transaction).toEqual(true);
  });

  it('Renders Footer component', () => {
    const footer = shallow(<Dashboard />);
    const footerComponent = footer.containsAllMatchingElements(Footer);

    expect(footerComponent).toEqual(true);
  });
});

describe('functional component test', () => {
  it('Context contains account name', () => {
    const AccountName = () => {
      const name = useName();
      return (
        <>
          <div id="nameValue">{name.toString()}</div>
        </>
      );
    };
    const wrapper = mount(
      <NameContext>
        <AccountName />
      </NameContext>
    );
    const contextValue = wrapper.find('[id="nameValue"]').text();

    expect(contextValue).toEqual('Lee');
  });

  it('getTransaction returns array', async () => {
    const expected = [{}, {}];
    const transactions = await getTransactions(data.app_accounts);

    expect(transactions).toBe(expect.arrayContaining(expected));
  });
});
