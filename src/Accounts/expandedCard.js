import React from 'react';
import { motion } from 'framer-motion';

import ChevronLeft from '../../assets/svg/chevronLeft';

const ExpandedCard = ({ accountDetails, triggerBack }) => {
  return (
    <>
      <motion.div
        className="account-card-expanded"
        layoutId="expandedCard"
        transition={{ duration: 0.5 }}
        animate={{ borderRadius: ['20px', '10px', '0px'] }}
        exit={{ borderRadius: ['0px', '10px'] }}
      >
        <div className="expanded-card-container h-100">
          <div className="d-inline-block back-chevron" onClick={triggerBack}>
            <ChevronLeft width="20" height="20" />
          </div>
          <div className="text-container">
            <p className="card-title my-auto">You're owed</p>
            <div className="d-flex py-3 align-middle">
              <h2 className="expanded-amount-currency">£</h2>
              <p className="expanded-account-amount px-1">
                {accountDetails.amount_owed}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ExpandedCard;
