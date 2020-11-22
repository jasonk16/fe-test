import React, { useEffect, useState } from 'react';

import { useName } from '../.components/nameContext';
import Accounts from '../Accounts';
import Transactions from '../Transactions';

import './dashboard.scss';

const Main = () => {
  const accountName = useName();
  const [greeting, setGreeting] = useState();
  const [accountValue, setAccountValue] = useState();

  const getTime = () => {
    let date = new Date();
    let hourOfDay = date.getHours();

    if (hourOfDay < 12) {
      setGreeting('Morning');
    } else if (hourOfDay < 16) {
      setGreeting('Afternoon');
    } else if (hourOfDay < 24) {
      setGreeting('Evening');
    } else {
      setGreeting('Hello');
    }
  };

  const onSelect = (value) => {
    setAccountValue(value);
  };

  useEffect(() => {
    !greeting && getTime();
  });

  return (
    <div className="m-0 dashboard-section">
      <h1 className="greeting-text mt-0">
        {greeting} {accountName}
      </h1>
      <Accounts selectedValue={onSelect} />
      <Transactions selectedAccount={accountValue}/>
    </div>
  );
};

export default Main;
