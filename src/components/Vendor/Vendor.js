import React from 'react';
import './Vendor.css';

const Vendor = ({name}) => {
  return (
      <div className="vendor">
        <span className="vendor-name">{name}</span>
      </div>
  );
};

export default Vendor;
