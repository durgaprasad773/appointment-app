import React, { Component } from 'react';

class Calendar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Calendar</h1>
        <table>
          <thead>
            <tr>
              <th>Day</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {this.props.appointments.map(appointment => (
              <tr key={appointment.id}>
                <td>{appointment.day}</td>
                <td>{appointment.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Calendar;
