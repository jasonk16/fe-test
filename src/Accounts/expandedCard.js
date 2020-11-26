/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import ChevronLeft from '../../assets/svg/chevronLeft';

const ExpandedCard = ({ accountData, triggerBack }) => {
  return (
    <>
      <motion.div
        className="account-card-expanded"
        layoutId="expandedCard"
        transition={{ duration: 0.5 }}
        animate={{ borderRadius: ['20px', '10px', '0px'] }}
        exit={{ borderRadius: ['0px', '10px'] }}
      >
        <div
          data-testid="expandedCardContainer"
          className="expanded-card-container h-100"
        >
          <div
            className="d-inline-block back-chevron"
            onClick={triggerBack}
            role="button"
            tabIndex={0}
          >
            <ChevronLeft width="20" height="20" />
          </div>
          <div className="text-container">
            <p className="card-title my-auto">You&apos;re owed</p>
            <div className="d-flex py-3 align-middle">
              <h2 className="expanded-amount-currency">£</h2>
              <p
                data-testid="expandedCardText"
                className="expanded-account-amount px-1"
              >
                {accountData?.amount_owed}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

ExpandedCard.propTypes = {
  accountData: PropTypes.shape({
    account_name: PropTypes.string,
    amount_owed: PropTypes.number,
  }).isRequired,
  triggerBack: PropTypes.func,
};

ExpandedCard.defaultProps = {
  triggerBack: undefined,
};

export default ExpandedCard;
