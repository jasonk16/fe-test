import React from 'react';

import './transaction.scss';

const TransactionCard = ({ cardData }) => {
  return (
    <div className="transaction-card my-2 p-3 d-flex">
      <p className="card-date">{cardData.date}</p>
      <h2 className="card-amount">£ {cardData.amount}</h2>
    </div>
  );
};

export default TransactionCard;
