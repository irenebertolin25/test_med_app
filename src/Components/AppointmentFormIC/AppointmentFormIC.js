import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AppointmentFormIC = ({ doctorName, doctorSpeciality, onSubmit }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [date, setDate] = useState('');
    const [selectedSlot, setSelectedSlot] = useState(null);
    const navigate = useNavigate();
  
    const handleSlotSelection = (slot) => {
      setSelectedSlot(slot);
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      onSubmit({ name, phoneNumber, date, selectedSlot });
      setName('');
      setPhoneNumber('');
      setDate('');
      setSelectedSlot('');

      navigate("/notification");
    };
  
    return (
      <form onSubmit={handleFormSubmit} className="appointment-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date of Appointment:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="selectedSlot">Book Time Slot:</label>
          <select name="selectedSlot" id="selectedSlot" value={selectedSlot} onChange={(e) => setSelectedSlot(e.target.value)} required>
            <option value="9am">9AM-10AM</option>
            <option value="10am">10AM-11AM</option>
            <option value="4pm">4PM-5PM</option>
            <option value="5pm">5PM-6PM</option>
          </select>
        </div>
        <button type="submit">Book Now</button>
      </form>
    );
  };

export default AppointmentFormIC
