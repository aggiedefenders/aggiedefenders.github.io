import React, {Component} from 'react'
import { render } from 'react-dom'
import Iframe from 'react-iframe'

import BigCalendar from 'react-big-calendar';
// // this weird syntax is just a shorthand way of specifying loaders

// BigCalendar.momentLocalizer(moment)

const GoogleCalendar = () =>(

<div>
   <Iframe url="https://calendar.google.com/calendar/embed?src=aggies.ncat.edu_vqtee9j77oiqf0h1dr6njc0fp0%40group.calendar.google.com&ctz=America/New_York"
        width="100%"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
        allowFullScreen/>
  </div>
);

export default GoogleCalendar;
 



