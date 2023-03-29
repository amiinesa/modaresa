import React, { useState, useEffect } from 'react';
import './AppointmentForm.css';

const AppointmentForm = ({ onSubmit, appointmentToEdit }) => {
  const [vendorName, setVendorName] = useState('');
  const [buyerName, setBuyerName] = useState('');
  const [buyerCompany, setBuyerCompany] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [duration, setDuration] = useState(15);

  useEffect(() => {
    if (appointmentToEdit) {
      setVendorName(appointmentToEdit.vendorName);
      setBuyerName(appointmentToEdit.buyerName);
      setBuyerCompany(appointmentToEdit.buyerCompany);
      setDate(appointmentToEdit.date.toISOString().split('T')[0]);
      setTime(appointmentToEdit.date.toISOString().split('T')[1].substr(0, 5));
      setDuration(appointmentToEdit.duration);
    }
  }, [appointmentToEdit]);

  const resetForm = () => {
    setVendorName('');
    setBuyerName('');
    setBuyerCompany('');
    setDate('');
    setTime('');
    setDuration(15);
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    const [hours, minutes] = time.split(':');
    const today = new Date()
    console.log('Date value:', new Date(today));
    console.log('Time value:', time);
    const appointmentDateTime = new Date(today);
    appointmentDateTime.setHours(parseInt(hours, 10));
    appointmentDateTime.setMinutes(parseInt(minutes, 10));

    console.log('Combined date-time:', appointmentDateTime);

    const appointment = {
      id: appointmentToEdit ? appointmentToEdit.id : Date.now(),
      vendorName,
      buyerName,
      buyerCompany,
      date: appointmentDateTime,
      duration,
    };

    onSubmit(appointment);
    resetForm();
  };



  return (
      <form className="appointment-form" onSubmit={handleSubmit}>
        <h3>{appointmentToEdit ? 'Edit Appointment' : 'Create Appointment'}</h3>
        <div className="input-group">
          <label htmlFor="vendor"> Vendor </label>
          <input id="vendor" type="text" value={vendorName} onChange={(e) => setVendorName(e.target.value)}/>
        </div>
        <div className="input-group">
          <label htmlFor="buyer-name"> Buyer Name </label>
          <input id="buyer-name" type="text" value={buyerName} onChange={(e) => setBuyerName(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="duration">Duration (minutes):</label>
          <select
              id="duration"
              name="duration"
              value={duration}
              onChange={(e) => setDuration(parseInt(e.target.value))}
              required
          >
            <option value="15">15</option>
            <option value="30">30</option>
            <option value="60">60</option>
            <option value="120">120</option>
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="buyer-company"> Buyer Company </label>
          <input id="buyer-company" type="text" value={buyerCompany} onChange={(e) => setBuyerCompany(e.target.value)}/>
        </div>
        <div className="input-group">
          <label htmlFor="time"> Time </label>
          <input id="time" type="time" value={time} onChange={(e) => setTime(e.target.value)}/>
        </div>
        <button type="submit">
          {appointmentToEdit ? 'Update Appointment' : 'Create Appointment'}
        </button>
      </form>
  );
};

export default AppointmentForm;
