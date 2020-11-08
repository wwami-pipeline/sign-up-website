import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import rrulePlugin from '@fullcalendar/rrule';

import '../App.css'; // Legacy styling

const EventCalendar: React.FC<{ eventClickFn: any, events: any }> = (props) => (
  <FullCalendar
    defaultView="dayGridMonth"
    plugins={[dayGridPlugin, rrulePlugin]}
    eventClick={props.eventClickFn}
    eventLimit={true}
    events={props.events}
  />
);

export default EventCalendar;