import React, { Component } from 'react';
import '../App.css';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

export default class EventCalendar extends Component {
    render() {
        return (
            <FullCalendar
                defaultView="dayGridMonth"
                plugins={[ dayGridPlugin ]}
                eventClick={this.props.eventClickFn}
                eventLimit='true' 
                events={this.props.events}
            />
        )
    }
}
