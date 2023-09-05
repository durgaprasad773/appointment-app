import React, { Component } from 'react';

class BookingForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Booking Form</h1>
        <input type="text" name="name" placeholder="Your name" />
        <input type="date" name="date" />
        <input type="time" name="time" />
        <button>Book Appointment</button>
      </div>
    );
  }
}

export default BookingForm;
