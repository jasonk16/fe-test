import React from 'react';
import { motion } from 'framer-motion';

import './transaction.scss';
import AddButton from '../../assets/svg/addButton';

const Transactions = ({ selectedAccount }) => {
  const transactionArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  let accountValue = selectedAccount;

  const variantsContainer = {
    open: { zIndex: 'inherit', marginTop: '3rem' },
    closed: { marginTop: '0rem' },
  };
  const variantsCards = {
    expand: { height: '50vh', overflowY: 'auto' },
    contract: { height: '35vh', overflowY: 'auto' },
  };

  return (
    <motion.div
      animate={accountValue ? 'open' : 'closed'}
      variants={variantsContainer}
      transition={{ duration: 1.0 }}
    >
      <div className="transactions-section pt-3">
        <div className="container-content">
          {accountValue && (
            <div className="align-right add-button">
              <AddButton />
            </div>
          )}
          <h2 className={accountValue ? 'pt-4 pb-2' : 'py-2'}>Transactions</h2>
          <motion.div
            animate={accountValue ? 'expand' : 'contract'}
            variants={variantsCards}
          >
            {transactionArray.map((array) => {
              return (
                <div key={array} className="transaction-card my-2 p-3">
                  <p>{array}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Transactions;
