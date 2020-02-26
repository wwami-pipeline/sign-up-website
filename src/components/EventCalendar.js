import React, { Component } from 'react';
import '../App.css';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { withStyles } from '@material-ui/core';

const styles = () => {
    return {
      h2: {
        fontFamily: 'Lato'
      }
    };
  };

class EventCalendar extends Component {
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

export default withStyles(styles)(EventCalendar);