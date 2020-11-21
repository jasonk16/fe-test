import React from 'react';

import accountData from '../../assets/data/appData.json';
import './accounts.scss';
import ProfileIcon from '../../assets/svg/profileIcon';

const AccountList = (props) => {
  const onSelect = (selectedValue) => {
    props.SelectedValue(selectedValue);
  };

  return (
    <div className="accounts-section">
      <h2 className="account-title-text">Your accounts</h2>
      <div className="card-container py-2">
        <div className="d-flex">
          {accountData.app_accounts[0].account_list.map((account) => {
            return (
              <div
                key={account.account_name}
                className="account-card p-3"
                onClick={() => onSelect(account.amount_owed)}
              >
                <p className="card-title pt-1">You're owed</p>
                <div className="d-flex py-3">
                  <h2 className="amount-currency">£</h2>
                  <p className="account-amount px-1">{account.amount_owed}</p>
                </div>
                <div className="profile-icon-card d-flex">
                  <ProfileIcon
                    width="25"
                    height="25"
                    backgroundFill="#ffffff"
                  />
                  <p className="my-auto px-2 account-name">
                    {account.account_name}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AccountList;
