import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import './transaction.scss';
import InformationIcon from '../../assets/svg/informationIcon';

const TransactionCard = ({ cardData, i, expanded, setExpanded }) => {
  const isOpen = i === expanded;

  return (
    <motion.div
      initial={false}
      animate={{ backgroundColor: isOpen ? '#5154e1' : '#f1f1f1' }}
      onClick={() => setExpanded(isOpen ? false : i)}
      className="transaction-card my-2 p-3 d-flex"
    >
      <AnimatePresence initial={false}>
        {isOpen ? (
          <p className="card-label-text">{cardData.label}</p>
        ) : (
          <div className="d-flex card-unselected">
            <p className="card-date">{cardData.date}</p>
            <div className="d-flex">
              <h2 className="card-amount pr-3">£ {cardData.amount}</h2>
              <InformationIcon width="20" height="20" stroke="#5154e1" />
            </div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default TransactionCard;
