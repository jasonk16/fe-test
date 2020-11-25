import React from 'react';
import { mount } from 'enzyme';
import '../setupTests';
import regeneratorRuntime from 'regenerator-runtime';

import NameContext, {
  useName,
  useNameUpdate,
} from '../src/.components/nameContext';
import getTransactions from '../src/.components/getTransactions';

describe('Functional component tests', () => {
  it('Update account name in context', () => {
    const AccountName = () => {
      const name = useName();
      const nameUpdate = useNameUpdate();

      return (
        <>
          <button
            id="updateValue"
            label="buttontest"
            type="submit"
            onClick={() => nameUpdate('Jason')}
          />
          <div id="nameValue">{name.toString()}</div>
        </>
      );
    };

    const contextWrapper = mount(
      <NameContext>
        <AccountName />
      </NameContext>
    );

    contextWrapper.find('button').simulate('click');
    const contextValue = contextWrapper.find('[id="nameValue"]').text();
    expect(contextValue).toEqual('Jason');
    contextWrapper.unmount();
  });

  it('getTransaction returns 2 arrays', async () => {
    const sampleData = [
      {
        account_holder: 'Lee',
        account_list: [
          {
            account_name: 'Account A',
            amount_owed: 45,
            transactions: [
              {
                id: 17978,
                date: '2020-10-12',
                amount: '10',
                label: 'Account A - Online Payment',
              },
            ],
          },
        ],
      },
    ];

    const expected = [
      [{ account_name: 'Account A', amount_owed: 45 }],
      [{ id: 17978, date: '2020-10-12', amount: '10' }],
    ];
    const transactions = await getTransactions(sampleData, 'Lee');
    expect(transactions).toMatchObject(expected);
  });

  it('getTransaction returns error', async () => {
    expect(() => {
      getTransactions(undefined);
    }).toThrow('getTransactions failed');
  });
});
