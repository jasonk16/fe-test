import React, { useEffect, useState } from 'react';

import { useName } from '../.components/nameContext';
import './footer.scss';
import Indicator from '../../assets/svg/indicator';
import data from '../../assets/data/appData.json';

const Footer = ({ selectedAccount }) => {
  const allAccounts = data.app_accounts;
  const accountName = useName();
  const [accountList, setAccountList] = useState();
  const [highlightedIcon, setHighlightedIcon] = useState();

  useEffect(() => {
    if (!accountList) {
      for (let i = 0; i < allAccounts.length; i++) {
        if (allAccounts[i].account_holder === accountName) {
          setAccountList(allAccounts[i].account_list);
        }
      }
    }
  }, []);

  useEffect(() => {
    // eslint-disable-next-line prefer-const
    let account = selectedAccount;
    setHighlightedIcon(account);
  });

  return (
    <div className="footer d-flex">
      <div className="indicator-icon">
        <Indicator
          name="bottomBarIndicator"
          width="42"
          height="36"
          circleStrokeWidth={2}
          iconColour="#5154e1"
        />
      </div>
      {accountList &&
        accountList.map((account) => {
          return (
            <div className="indicator-icon" key={account.account_name}>
              <Indicator name="bottomBarIndicator" width="42" height="36" />
            </div>
          );
        })}
    </div>
  );
};

export default Footer;
