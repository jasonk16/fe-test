/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';

import './transaction.scss';
import InformationIcon from '../../assets/svg/informationIcon';

const TransactionCard = ({ cardData, i, expanded, setExpanded }) => {
  const isOpen = i === expanded;

  return (
    <motion.div
      initial={false}
      animate={{ backgroundColor: isOpen ? '#fdeded' : '#f9f9f9' }}
      onClick={() => setExpanded(isOpen ? false : i)}
      className="transaction-card my-2 p-3 d-flex"
    >
      <AnimatePresence initial={false}>
        {isOpen ? (
          <p className="card-label-text">{cardData?.label}</p>
        ) : (
          <div className="d-flex card-unselected">
            <p className="card-date">{cardData?.date}</p>
            <div className="d-flex">
              <h2 className="card-amount pr-3">£ {cardData?.amount}</h2>
              <InformationIcon width="20" height="20" strokeFill="#5154e1" />
            </div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

TransactionCard.propTypes = {
  cardData: PropTypes.shape({
    id: PropTypes.number,
    label: PropTypes.string,
    date: PropTypes.string,
    amount: PropTypes.string,
  }).isRequired,
  i: PropTypes.number.isRequired,
  expanded: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]).isRequired,
  setExpanded: PropTypes.func,
};

TransactionCard.defaultProps = {
  setExpanded: undefined,
};

export default TransactionCard;
