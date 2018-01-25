import React, { Component } from 'react';
import {
    Spinner,
    Menu,
    MenuItem,
    MenuDivider,
    Popover,
    Position
} from "@blueprintjs/core";

import wave from "../../../assets/img/tech2.png";
import {Button} from 'reactstrap';

import ClubInformation from './ClubInformation';
import Awareness from './Awareness';

 
const containerStyle={
    backgroundColor:'#3498db', 
    //  backgroundImage: 'url('+wave+')',
    height:'auto',
    color: '#ecf0f1'
}



class Section1 extends Component {
    constructor(){
        super();
        
        }
  render() {
    return (
    <div style={containerStyle}className="container-fluid pt-info pt-elevation-3">
        <div className="pt-description">
            <div className="pt-container">
                  <h1>What and Why?</h1>
                <h5>Learn More about Us</h5>
              <hr/>
                  <Awareness />
            </div>
                

               <ClubInformation />

               
            
        </div>

    </div>
        
    
    );
  }
}

export default Section1;
