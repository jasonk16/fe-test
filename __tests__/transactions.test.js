import React from 'react';
import '../setupTests';
import { shallow, mount } from 'enzyme';
import regeneratorRuntime from 'regenerator-runtime';

import NameContext from '../src/.components/nameContext';
import Transactions from '../src/Transactions';
import TransactionCard from '../src/Transactions/transactionCard';

global.console = {
  log: jest.fn(),
  info: jest.fn(),
  error: jest.fn(),
};

const sampleCardData = {
  id: 123,
  date: '2020-01-01',
  amount: '10',
  label: 'Test transaction',
};

describe('Transaction Tests', () => {
  it('Transaction card renders independently without props', () => {
    const card = shallow(<TransactionCard />);
    const cardDiv = card.find('.transaction-card');
    expect(cardDiv).toHaveLength(1);
    expect(global.console.error).toHaveBeenCalled();
  });

  it('Transaction card renders with props', () => {
    const cardWithProps = shallow(
      <TransactionCard
        cardData={sampleCardData}
        i={123}
        expanded={false}
        setExpanded={jest.fn}
      />
    );
    const cardDiv = cardWithProps.find('.card-date').text();
    expect(cardDiv).toEqual(sampleCardData.date);
  });

  it('Transaction card renders label on click', () => {
    const cardWithLabel = shallow(
      <TransactionCard
        cardData={sampleCardData}
        i={123}
        expanded={123}
        setExpanded={jest.fn}
      />
    );

    const cardDiv = cardWithLabel.find('.card-label-text').text();
    expect(cardDiv).toEqual(sampleCardData.label);
  });

  it('Transaction list renders', () => {
    const contextWrapper = mount(
      <NameContext>
        <Transactions />
      </NameContext>
    );
    const transactionComponent = contextWrapper.find('.container-content')
      .length;
    expect(transactionComponent).toBeGreaterThanOrEqual(1);
    contextWrapper.unmount();
  });
});
