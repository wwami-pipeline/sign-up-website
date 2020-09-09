import React, { Component } from 'react';
import '../App.css';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import rrulePlugin from '@fullcalendar/rrule';

export default class EventCalendar extends Component {
  render() {
    return (
      <FullCalendar
        timeZone="UTC"
        defaultView="dayGridMonth"
        plugins={[dayGridPlugin, rrulePlugin]}
        eventClick={this.props.eventClickFn}
        eventLimit="true"
        events={this.props.events}
      />
    );
  }
}
