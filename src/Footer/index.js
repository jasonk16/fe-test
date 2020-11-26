import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

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
  }, [selectedAccount]);

  return (
    <footer className="footer d-flex">
      <div className="indicator-icon">
        <Indicator
          name="bottomBarIndicator"
          width="42"
          height="36"
          active={highlightedIcon === undefined}
        />
      </div>
      {accountList &&
        accountList.map((account) => {
          return (
            <div className="indicator-icon" key={account.account_name}>
              <Indicator
                name="bottomBarIndicator"
                width="42"
                height="36"
                active={highlightedIcon === account.account_name}
              />
            </div>
          );
        })}
    </footer>
  );
};

Footer.propTypes = {
  selectedAccount: PropTypes.string,
};

Footer.defaultProps = {
  selectedAccount: undefined,
};

export default Footer;
