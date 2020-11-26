import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import ProfileIcon from '../../assets/svg/profileIcon';
import './accounts.scss';

const AccountCard = ({ accountData, selectedCard }) => {
  const account = accountData;

  const onSelect = (selectedAccount) => {
    selectedCard(selectedAccount);
  };

  return (
    <motion.div
      className="account-card"
      onClick={() => onSelect(account.account_name)}
      layoutId="expandedCard"
      transition={{ duration: 0.5 }}
      animate={{ borderRadius: '10px' }}
      tabIndex={0}
    >
      <div data-testid="accountOverview" className="p-3">
        <p className="card-title pt-1">You&apos;re owed</p>
        <div className="d-flex py-3">
          <h2 className="amount-currency">£</h2>
          <p className="account-amount px-1">{account?.amount_owed}</p>
        </div>
        <div className="profile-icon-card d-flex">
          <ProfileIcon width="25" height="25" />
          <p className="my-auto px-2 account-name">{account?.account_name}</p>
        </div>
      </div>
    </motion.div>
  );
};

AccountCard.propTypes = {
  accountData: PropTypes.shape({
    account_name: PropTypes.string,
    amount_owed: PropTypes.number,
  }).isRequired,
  selectedCard: PropTypes.func,
};

AccountCard.defaultProps = {
  selectedCard: undefined,
};

export default AccountCard;
