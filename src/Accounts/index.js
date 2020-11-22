import React, { useState } from 'react';
import { AnimateSharedLayout } from 'framer-motion';

import AccountCard from './cards';
import ExpandedCard from './expandedCard';
import accountData from '../../assets/data/appData.json';
import './accounts.scss';

const AccountList = (props) => {
  const accountList = accountData.app_accounts[0].account_list;
  const [isActivated, setIsActivated] = useState(false);
  const [accountValue, setAccountValue] = useState();

  // const containerAnimation = {
  //   hidden: { opacity: 0 },
  //   show: {
  //     opacity: 1,
  //     transition: {
  //       staggerChildren: 0.08,
  //     },
  //   },
  // };

  // const cardAnimation = {
  //   hidden: { opacity: 0 },
  //   show: { opacity: 1 },
  // };

  const onCardSelect = (accountAmount) => {
    setAccountValue(accountAmount);
    setIsActivated(true);
    props.selectedValue(accountAmount);
  };

  const goBack = () => {
    setIsActivated(false);
    setAccountValue();
    props.selectedValue();
  };

  return (
    <div className="accounts-section">
      <h2 className="account-title-text pb-2">Your accounts</h2>
      <div className="py-2 card-container">
        {accountList.map((account) => {
          return (
            <AnimateSharedLayout key={account.account_name} type="crossfade">
              {!isActivated ? (
                <AccountCard
                  accountData={account}
                  selectedCard={onCardSelect}
                />
              ) : (
                <ExpandedCard
                  accountValue={accountValue}
                  triggerBack={() => goBack()}
                />
              )}
            </AnimateSharedLayout>
          );
        })}
      </div>
    </div>
  );
};

export default AccountList;
