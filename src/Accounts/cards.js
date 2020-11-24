import React from 'react';
import { motion } from 'framer-motion';

import ProfileIcon from '../../assets/svg/profileIcon';
import './accounts.scss';

const AccountCard = (props) => {
  const account = props.accountData;

  const onSelect = (selectedAccount) => {
    props.selectedCard(selectedAccount);
  };

  return (
    <motion.div
      className="account-card"
      onClick={() => onSelect(account.account_name)}
      layoutId="expandedCard"
      transition={{ duration: 0.5 }}
      animate={{ borderRadius: '10px' }}
    >
      <div className="p-3">
        <p className="card-title pt-1">You're owed</p>
        <div className="d-flex py-3">
          <h2 className="amount-currency">£</h2>
          <p className="account-amount px-1">{account.amount_owed}</p>
        </div>
        <div className="profile-icon-card d-flex">
          <ProfileIcon width="25" height="25" backgroundFill="#ffffff" />
          <p className="my-auto px-2 account-name">{account.account_name}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default AccountCard;
