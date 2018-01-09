import React, { Component } from 'react';
import {
    Spinner,
    Menu,
    MenuItem,
    MenuDivider,
    Popover,
    Position
} from "@blueprintjs/core";
import image from "../../assets/img/network.gif";
import {Button} from 'reactstrap';

 
const containerStyle={
    backgroundColor:'#2980b9', 
    height:'600px'}
const titleStyle={
    margin: '0.5em',
    paddingLeft: 0,
    listStyle: 'none',
    color: 'white'
}

const imageStyle={
    flex: 1,
    width: '350px',
    height: null,
    resizeMode: 'contain'
}

class Section1 extends Component {
    constructor(){
        super();
        
        }
  render() {
    return (
    <div style={containerStyle}className="container-fluid pt-info">
        <div className="pt-description">
            <div className="pt-container">

                <h2>Awareness and Protection</h2>
                <div className="row">
                    <div className="col-md-6 pt-running-text">
                        Blueprint is a collection of <a href="https://facebook.github.io/react/" target="_blank">React</a>
                        UI components that cover the majority of the common interface elements, patterns, and interactions on
                        the web. Using Blueprint ensures that you’ll end up with an elegant and easy-to-use UI, freeing you to
                        focus on building your product&mdash;not the atomic pieces that comprise it.


                    </div>

                    <div className="col-md-6 pt-running-text">
                    Blueprint is a collection of <a href="https://facebook.github.io/react/" target="_blank">React</a>
                    UI components that cover the majority of the common interface elements, patterns, and interactions on
                    the web. Using Blueprint ensures that you’ll end up with an elegant and easy-to-use UI, freeing you to
                    focus on building your product&mdash;not the atomic pieces that comprise it.
                    </div>

                </div>
            </div>
                    <div className="pt-container">

                <h2>Club Information</h2>
                <div className="row">
                    <div className="col-md-6 pt-running-text">
                        Blueprint is a collection of <a href="https://facebook.github.io/react/" target="_blank">React</a>
                        UI components that cover the majority of the common interface elements, patterns, and interactions on
                        the web. Using Blueprint ensures that you’ll end up with an elegant and easy-to-use UI, freeing you to
                        focus on building your product&mdash;not the atomic pieces that comprise it.


                    </div>

                    <div className="col-md-6 pt-running-text">
                    Blueprint is a collection of <a href="https://facebook.github.io/react/" target="_blank">React</a>
                    UI components that cover the majority of the common interface elements, patterns, and interactions on
                    the web. Using Blueprint ensures that you’ll end up with an elegant and easy-to-use UI, freeing you to
                    focus on building your product&mdash;not the atomic pieces that comprise it.
                    </div>

                </div>
            </div>
        </div>

    </div>
        
    
    );
  }
}

export default Section1;
