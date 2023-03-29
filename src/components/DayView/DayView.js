import React, {useState} from 'react';
import Appointment from '../Appointment/Appointment';
import AppointmentForm from '../AppointmentForm/AppointmentForm';
import { generateTimeSlots, formatDate, formatTime } from '../utils';
import './DayView.css';

const DayView = () => {
  const [appointments, setAppointments] = useState([]);
  const [appointmentToEdit, setAppointmentToEdit] = useState(null);

  const today = new Date();
  const timeSlots = generateTimeSlots('09:00', '18:00', 15);

  // Filter appointments for the current day
  const todaysAppointments = appointments.filter(
      (appointment) => formatDate(appointment.date) === formatDate(today)
  );

  const handleCreateOrUpdateAppointment = (appointment) => {
    console.log('Submitted appointment data:', appointment);

    if (appointmentToEdit) {
      const updatedAppointments = appointments.map((app) =>
          app.id === appointment.id ? appointment : app
      );
      setAppointments(updatedAppointments);
      setAppointmentToEdit(null);
    } else {
      setAppointments([...appointments, appointment]);
    }
  };


  const handleEditAppointment = (id) => {
    setAppointmentToEdit(appointments.find((a) => a.id === id));
  };

  const handleDeleteAppointment = (id) => {
    setAppointments(appointments.filter((a) => a.id !== id));
  };

  return (
      <div className="day-view">
        <h2>Appointments for {formatDate(today)}</h2>
        <AppointmentForm onSubmit={handleCreateOrUpdateAppointment} appointmentToEdit={appointmentToEdit}/>
        <div className="time-slots">
          {timeSlots.map((slot) => {
            const appointmentsForSlot = todaysAppointments.filter(
                (appointment) => formatTime(appointment.date) === slot
            );
            return (
                <div className="time-slot" key={slot}>
                  <h3>{slot}</h3>
                  {appointmentsForSlot.length === 0 ? (
                      <p>No appointments</p>
                  ) : (
                      appointmentsForSlot.map((appointment) => (
                          <Appointment
                              key={appointment.id}
                              appointment={appointment}
                              onEdit={handleEditAppointment}
                              onDelete={handleDeleteAppointment}
                          />
                      ))
                  )}
                </div>
            );
          })}
        </div>
      </div>
  );
};

export default DayView;
