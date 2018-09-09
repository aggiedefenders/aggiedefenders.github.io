import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import GoogleCalendar from './GoogleCalendar';
import { Route, Link } from 'react-router-dom';



const containerStyle={
    backgroundColor: '#ecf0f1'
}
const Calendar = ({match}) => (
  <div style ={containerStyle} className="pt-card pt-elevation-2 pt-interactive">
        <div className="col-lg-12"> 
      
            <h1><span className="pt-button pt-minimal pt-icon-calendar" to="/files" aria-label="Files"></span>Calendar</h1>
        </div>
      <div className="col-lg-12">
                 <hr/>
                 <GoogleCalendar />
         </div>  
    </div>
);

export default Calendar;