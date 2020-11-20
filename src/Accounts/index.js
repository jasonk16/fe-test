import React from 'react';

import accountData from '../../assets/data/appData.json';
import './accounts.scss';

const AccountList = () => {
  return (
    <div className="accounts-section">
      <p className="account-title-text">Your accounts</p>
      <div className="card-container">
        <div className="d-flex">
          {accountData.app_accounts[0].account_list.map((account) => {
            return (
              <div key={account.account_name} className="account-card">
                <p>{account.account_name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AccountList;
