import React from 'react';
import './Appointment.css';

const Appointment = ({appointment, onEdit, onDelete}) => {
  const {id, vendorName, buyerName, time, buyerCompany} = appointment;

  return (
      <div className="appointment">
        <div className="appointment-info">
          <div className="time">{time}</div>
          <div className="vendor">{vendorName}</div>
          <div className="buyer">
            <span className="buyer-name">{buyerName}</span> - <span className="company-name">{buyerCompany}</span>
          </div>
        </div>
        <div className="appointment-actions">
          <button className="delete-btn" onClick={() => onDelete(id)}>Delete</button>
        </div>
      </div>
  );
};

export default Appointment;
