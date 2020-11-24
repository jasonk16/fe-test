import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';

import { useName } from '../.components/nameContext';
import AccountCard from './cards';
import ExpandedCard from './expandedCard';
import data from '../../assets/data/appData.json';
import AddButton from '../../assets/svg/addButton';
import './accounts.scss';

const AccountList = (props) => {
  const allAccounts = data.app_accounts;
  const accountHolder = useName();
  const [allAccountList, setAllAccountList] = useState();
  const [isActivated, setIsActivated] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState();

  useEffect(() => {
    if (allAccountList === undefined) {
      for (let i = 0; i < allAccounts.length; i++) {
        if (allAccounts[i].account_holder === accountHolder) {
          setAllAccountList(allAccounts[i].account_list);
        }
      }
    }
  }, []);

  const onCardSelect = (accountName) => {
    for (let i = 0; i < allAccountList.length; i++) {
      if (allAccountList[i].account_name === accountName) {
        setSelectedAccount(allAccountList[i]);
        props.selectedValue(accountName);
      }
    }
    setIsActivated(true);
  };

  const goBack = () => {
    setIsActivated(false);
    setSelectedAccount();
    props.selectedValue();
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
                      accountDetails={selectedAccount}
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

AccountList.propTypes = {
  selectedValue: PropTypes.objectOf(PropTypes.object),
};

AccountList.defaultProps = {
  selectedValue: undefined,
};

export default AccountList;
