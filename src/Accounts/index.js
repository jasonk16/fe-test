import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';

import getTransactions from '../.components/getTransactions';
import { useName } from '../.components/nameContext';
import AccountCard from './accountCard';
import ExpandedCard from './expandedCard';
import data from '../../assets/data/appData.json';
import AddButton from '../../assets/svg/addButton';
import './accounts.scss';

const Accounts = ({ selectedAccountName }) => {
  const allAccounts = data.app_accounts;
  const accountHolder = useName();
  const [allAccountList, setAllAccountList] = useState();
  const [isActivated, setIsActivated] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState();

  useEffect(() => {
    const getData = async () => {
      if (allAccounts && accountHolder) {
        const accountsTransaction = await getTransactions(
          allAccounts,
          accountHolder
        );
        setAllAccountList(accountsTransaction[0]);
      }
    };
    getData();
  }, []);

  const onCardSelect = (accountName) => {
    for (let i = 0; i < allAccountList.length; i++) {
      if (allAccountList[i].account_name === accountName) {
        setSelectedAccount(allAccountList[i]);
        selectedAccountName(accountName);
      }
    }
    setIsActivated(true);
  };

  const goBack = () => {
    setIsActivated(false);
    setSelectedAccount();
    selectedAccountName();
  };

  return (
    <div className="accounts-section">
      <h2 className="account-title-text pb-2">Your accounts</h2>
      <div
        className={`py-2 card-container ${!isActivated && 'card-list-margin'}`}
      >
        <AnimatePresence>
          {allAccountList &&
            allAccountList.map((account) => {
              return (
                <AnimateSharedLayout key={account.account_name} type="switch">
                  {!isActivated ? (
                    <AccountCard
                      accountData={account}
                      selectedCard={onCardSelect}
                    />
                  ) : (
                    <ExpandedCard
                      accountData={selectedAccount}
                      triggerBack={() => goBack()}
                    />
                  )}
                </AnimateSharedLayout>
              );
            })}
          {selectedAccount && (
            <motion.div
              className="add-button"
              animate={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5 }}
              exit={{ opacity: 0, scale: 0.5 }}
            >
              <AddButton width="60" height="60" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

Accounts.propTypes = {
  selectedAccountName: PropTypes.func,
};

Accounts.defaultProps = {
  selectedAccountName: undefined,
};

export default Accounts;
