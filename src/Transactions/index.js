import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import getTransactions from '../.components/getTransactions';
import { useName } from '../.components/nameContext';
import TransactionCard from './transactionCard';
import data from '../../assets/data/appData.json';
import './transaction.scss';

const Transactions = ({ selectedAccount }) => {
  const allAccounts = data.app_accounts;
  const accountHolder = useName();
  const [allAccountList, setAllAccountList] = useState();
  const [allTransactions, setAllTransactions] = useState();
  const [selectedTransactions, setSelectedTransactions] = useState();
  const [cardExpanded, setCardExpanded] = useState(false);

  const cardContainerAnimation = {
    open: { zIndex: 'inherit', marginTop: '3rem' },
    closed: { marginTop: '0rem' },
  };

  useEffect(() => {
    const getData = async () => {
      if (allAccounts && accountHolder) {
        const accountsTransaction = await getTransactions(
          allAccounts,
          accountHolder
        );
        setAllAccountList(accountsTransaction[0]);
        setAllTransactions(accountsTransaction[1]);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    if (selectedAccount) {
      for (let i = 0; i < allAccountList.length; i++) {
        if (allAccountList[i].account_name === selectedAccount) {
          setSelectedTransactions(allAccountList[i].transactions);
        }
      }
    }
  }, [selectedAccount]);

  return (
    <motion.div
      animate={selectedAccount ? 'open' : 'closed'}
      variants={cardContainerAnimation}
      transition={{ duration: 0.5 }}
      layout
    >
      <div className="transactions-section pt-3">
        <div className="container-content">
          <h2 className={selectedAccount ? 'pt-4 pb-2' : 'py-2'}>
            Transactions
          </h2>
          {!selectedAccount
            ? allTransactions &&
              allTransactions.map((transaction) => {
                return (
                  <TransactionCard
                    key={transaction.id}
                    cardData={transaction}
                    i={transaction.id}
                    expanded={cardExpanded}
                    setExpanded={setCardExpanded}
                  />
                );
              })
            : selectedTransactions &&
              selectedTransactions.map((transaction) => {
                return (
                  <TransactionCard
                    key={transaction.id}
                    cardData={transaction}
                    i={transaction.id}
                    expanded={cardExpanded}
                    setExpanded={setCardExpanded}
                  />
                );
              })}
        </div>
      </div>
    </motion.div>
  );
};

Transactions.propTypes = {
  selectedAccount: PropTypes.string,
};

Transactions.defaultProps = {
  selectedAccount: undefined,
};

export default Transactions;
