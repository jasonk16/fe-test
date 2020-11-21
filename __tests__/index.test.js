import React from 'react';
import { shallow, mount } from 'enzyme';
import '../setupTests';

import Dashboard from '../src/Dashboard';
import Accounts from '../src/Accounts';
import NameContext, { useName } from '../src/.components/nameContext';

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
    const mountedComponent = mount(<Dashboard/>)
    const individualAccount = mountedComponent.find(Accounts);
    const value = individualAccount.find('.account-card').first().childAt(0).simulate('click');
    expect(value.props('SelectedValue')).toBeGreaterThanOrEqual(0); 
  });
});
