import React, { Component } from 'react';
import '../App.css';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import rrulePlugin from '@fullcalendar/rrule';

export default class EventCalendar extends Component {
    render() {
        return (
            <FullCalendar
                defaultView="dayGridMonth"
                plugins={[ dayGridPlugin, rrulePlugin ]}
                eventClick={this.props.eventClickFn}
                eventLimit='true' 
                events={ [
                    {
                        title: 'my recurring event',
                        rrule: 'DTSTART:20120201T103000Z\nRRULE:FREQ=WEEKLY;INTERVAL=5;UNTIL=20120601;BYDAY=MO,FR',
                        duration: '02:00'
                    } 
            ]}
            />
        )
    }
}
