import React from 'react';
import { shallow, mount } from 'enzyme';
import '../setupTests';

import Main from '../src/index';
import Dashboard from '../src/Dashboard';
import Accounts from '../src/Accounts';
import NameContext, { useName } from '../src/.components/nameContext';
import Transactions from '../src/Transactions';
import Footer from '../src/Footer';

describe('Credit App Test', () => {
  let appWrapper;

  beforeAll(() => {
    appWrapper = shallow(<Dashboard />);
  });

  it('Account rendered by parent component', () => {
    const account = appWrapper.containsMatchingElement(Accounts);

    expect(account).toEqual(true);
  });

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
    const footer = shallow(<Main />);
    const footerComponent = footer.containsAllMatchingElements(Footer);

    expect(footerComponent).toEqual(true);
  });
});
