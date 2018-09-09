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

import Awareness from './Awareness';


 
const containerStyle={
    backgroundColor: '#45aaf2',
    height:'auto',
    paddingBottom: '5%',
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
                

             
        </div>

    </div>
        
    
    );
  }
}

export default Section1;
