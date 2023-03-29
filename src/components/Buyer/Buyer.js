import React from 'react';
import './Buyer.css';

const Buyer = ({name, companyName}) => {
  return (
      <div className="buyer">
        <span className="buyer-name">{name}</span> - <span className="company-name">{companyName}</span>
      </div>
  );
};

export default Buyer;
