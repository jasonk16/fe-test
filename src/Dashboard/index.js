/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { useName } from '../.components/nameContext';
import Accounts from '../Accounts';
import Transactions from '../Transactions';

import './dashboard.scss';

const Dashboard = ({ currentAccountName }) => {
  const accountHolder = useName();
  const [greeting, setGreeting] = useState();
  const [selectedAccount, setSelectedAccount] = useState();

  const getTime = () => {
    const date = new Date();
    const hourOfDay = date.getHours();

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
    setSelectedAccount(value);
    currentAccountName(value);
  };

  useEffect(() => {
    !greeting && getTime();
  }, []);

  return (
    <div className="m-0 dashboard-section">
      <h1 test-id="greetingText" className="greeting-text mt-0">
        {greeting} {accountHolder}
      </h1>
      <Accounts selectedAccountName={onSelect} />
      <Transactions selectedAccount={selectedAccount} />
    </div>
  );
};

Dashboard.propTypes = {
  currentAccountName: PropTypes.func,
};

Dashboard.defaultProps = {
  currentAccountName: undefined,
};

export default Dashboard;
