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
    backgroundColor:'white', 
    minHeight:'600px'
}
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

class Section2 extends Component {
    constructor(){
        super();
        
        }
  render() {
    return (
    <div style={containerStyle}className="container-fluid pt-info">
        <div className="pt-description">
            <div className="pt-container">

              <h2>News</h2>
              <div className="row">
            
                <div className="col-md-6 pt-running-text">
                    <h4>Something</h4>
                    Blueprint is a collection of <a href="https://facebook.github.io/react/" target="_blank">React</a>
                    UI components that cover the majority of the common interface elements, patterns, and interactions on
                    the web. Using Blueprint ensures that you’ll end up with an elegant and easy-to-use UI, freeing you to
                    focus on building your product&mdash;ninfoot the atomic pieces that comprise it.
                       <Button outline color="success">Get More Info</Button>{' '}

                </div>

                <div className="col-md-6 pt-running-text">
                <h4>Something</h4>
                Blueprint is a collection of <a href="https://facebook.github.io/react/" target="_blank">React</a>
                UI components that cover the majority of the common interface elements, patterns, and interactions on
                the web. Using Blueprint ensures that you’ll end up with an elegant and easy-to-use UI, freeing you to
                focus on building your product&mdash;ninfoot the atomic pieces that comprise it.
                    <Button outline color="success">Get More Info</Button>{' '}

                    </div>
                </div>
            </div>
        </div>
    </div>
    
    );
  }
}

export default Section2;
