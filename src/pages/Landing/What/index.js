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
import { Button } from 'reactstrap';
import imagePadlock from './padlock.png';
import imageSecurity from './security_guard.png';
import imageMalware from './malware.png';
import imageFirewall from './firewall.png';
import imageLearn from './learn2.png';



const containerStyle = {
    backgroundColor: '#dfe6e9',
    height: 'auto',
    color: 'black',
    padding: '30px'
}


const learnStyle = {
    paddingTop: '0px',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: '0px',
    border: "1px",
    borderWidth: 0.2,
    color: '#f1c40f',
    backgroundColor: '',

    borderBottomWidth: '20px 5px',
    borderBottom: '4px solid green',

}
const titleStyle = {
    margin: '0.5em',
    paddingLeft: 0,
    listStyle: 'none',
    color: 'white'
}

const subtitle = {
    color: 'black',
    borderBottom: 'weight',
    borderWidth: 0.2,
    borderColor: '#d6d7da',
    fontWeight: 'bold'
}
const imageStyle = {
    flex: 1,
    minWidth: "auto",
    height: '150px',
    resizeMode: 'contain'
}

const controlsStyles = {
    fontSize: '12px',
    textAlign:'center',
    justifyContent:'center',
    flex: 0,
    margin: '0 auto',
    gridGap:'20px',




}

const cardStyle = {

    height: '350px',
    width: 'auto',
    flex: 1,
    margin: '',
    padding: '',
    overflow:'hidden',
    justifyContent: 'center',
    textAlign: 'center'

}


class What extends Component {
    constructor() {
        super();

    }
    render() {
        return (
            <div style={containerStyle} className="pt-container">
                <div style={{ borderRadius: '6px' }}>


                    <div className="row" style={{ textAlign: 'center', justifyContent: 'center' }}><h1>What you will learn

                        </h1>
                        <hr />
                    </div>
                    <div style={controlsStyles} className="row">

                        <div className="col-md-3 col-sm-4 ">
                            <div style={cardStyle} className="pt-card pt-interactive pt-elevation-3">
                                <img style={imageStyle}
                                    src={imagePadlock} data-src="" data-src-retina="" alt="" className="img-responsive" />
                                
                                    <h4>Security{<br/>} Configuration</h4>
                                
                            </div>
                        </div>
              
                        <div className="col-md-3 col-sm-4">
                            <div style={cardStyle} className="pt-card pt-interactive pt-elevation-3">
                                <img style={imageStyle}
                                    src={imageFirewall} data-src="" data-src-retina="" alt="" className="img-responsive" />
                              
                                    <h4>Firewalls {<br/>}and {<br/>}Internet {<br/>}Gateways</h4>
                               
                            </div>
                        </div>
                               <div className="col-md-3 col-sm-4 ">
                            <div style={cardStyle} className="pt-card pt-interactive pt-elevation-3">
                                <img style={imageStyle}
                                    src={imageMalware} data-src="" data-src-retina="" alt="" className="img-responsive" />
                                
                                    <h4>Malware {<br/>}Protection</h4>
                          
                            </div>
                        </div>


                        {/*<div className="col-sm-3">
                            <img style={imageStyle}
                                src={imageMalware} data-src="" data-src-retina="" alt="" className="img-responsive" />

                            <div className="row">
                                <h4>Malware Protection</h4>
                            </div>


                        </div>*/}
                        <hr />
                    </div>
                </div>
            </div>
        );
    }
}

export default What;
