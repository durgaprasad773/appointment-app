import React, { Component } from 'react';
import Calendar from './components/Calendar';
import BookingForm from './components/BookingForm';

class AppointmentApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appointments: [],
    };
  }

  componentDidMount() {
    // Get all appointments from the database.
    fetch('/api/appointments')
      .then(response => response.json())
      .then(appointments => this.setState({ appointments }));
  }

  render() {
    return (
      <div>
        <Calendar />
        <BookingForm />
      </div>
    );
  }
}

export default AppointmentApp;
