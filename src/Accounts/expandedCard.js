import React from 'react';
import { motion } from 'framer-motion';

import ChevronLeft from '../../assets/svg/chevronLeft';

const ExpandedCard = ({ accountValue, triggerBack }) => {
  return (
    <motion.div className="account-card-expanded" layoutId="expandedCard">
      <div className="expanded-card-container h-100">
        <div className="d-inline-block back-chevron" onClick={triggerBack}>
          <ChevronLeft width="20" height="20" />
        </div>
        <div className="pt-5">
          <p className="card-title my-auto">You're owed</p>
          <div className="d-flex py-3 align-middle">
            <h2 className="amount-currency">£</h2>
            <p className="account-amount px-1">{accountValue}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExpandedCard;
