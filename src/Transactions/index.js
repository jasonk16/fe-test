import React from 'react';
import { motion } from 'framer-motion';

import './transaction.scss';

const Transactions = ({ selectedAccount }) => {
  const transactionArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  let accountValue = selectedAccount;

  const cardContainerAnimation = {
    open: { zIndex: 'inherit', marginTop: '3rem' },
    closed: { marginTop: '0rem' },
  };
  const cardListAnimation = {
    expand: { height: '50vh', overflowY: 'auto' },
    contract: { height: '35vh', overflowY: 'auto' },
  };

  return (
    <>
      <motion.div
        animate={accountValue ? 'open' : 'closed'}
        variants={cardContainerAnimation}
        transition={{ duration: 0.5 }}
        layout
      >
        <div className="transactions-section pt-3">
          <div className="container-content">
            <h2 className={accountValue ? 'pt-4 pb-2' : 'py-2'}>
              Transactions
            </h2>
            <motion.div
              animate={accountValue ? 'expand' : 'contract'}
              variants={cardListAnimation}
              transition={{ duration: 0.5 }}
            >
              {transactionArray.map((array) => {
                return (
                  <div key={array} className="transaction-card my-2 p-3">
                    {/* <p>{array}</p> */}
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Transactions;
