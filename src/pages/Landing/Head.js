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
import Background from "../../assets/img/bg_b.jpg";
import { Button } from 'reactstrap';
import data from '../../assets/img/data.png';

const backgroundImage = {
    backgroundImage: (data),
    flex: 1,
    width: null,
    height: null

}
//#2980b9
const containerStyle = {
    backgroundColor: '#2c3e50',
    height: 'auto',
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px'

}
const titleStyle = {
    margin: '0.5em',
    justifyContent: 'center',
    textAlign: 'center',
    listStyle: 'none',
    color: 'white'
}

const imageStyle = {

    width: '350px',

}

const fontStyle1 = {
    color: '#ecf0f1'

}

class Head extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }

    }
    render() {
        return (
            <div style={backgroundImage} className="pt-container">

                <div style={containerStyle} className="pt-getting-started">
                    <div className="row">
                        <div className="col-md-4 col-sm-4"></div>
                        <div className="col-md-4 col-sm-4">

                            <h1 style={titleStyle}>AggieDefenders</h1>
                        </div>
                        <div className="col-md-4 col-sm-4"></div>
                    </div>

                    <div className="row">
                        <div className="col-md-4 col-sm-3"></div>
                        <div className="col-md-4 col-sm-6">
                            <img style={imageStyle} src={image} data-src="" data-src-retina="" alt="image" className="img-responsive" />
                        </div>
                        <div className="col-md-4 col-sm-3"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-2 col-sm-3"></div>
                        <div className="col-md-8">
                            <h3 style={{ textAlign: 'center', justifyContent: 'center', backgroundColor: '#7f8c8d', opacity: 0.9, color: 'white' }}>Learn how to protect your Internet of Things (IOT) devices</h3>
                        </div>
                        <div className="col-md-2"></div>
                    </div>

                    <div className="row">
                        <div className="col-md-2 col-sm-3"></div>
                        <div className="col-md-8">
                            <h4 style={{ textAlign: 'center', justifyContent: 'center', opacity: 0.9, color: '#16a085' }}>
                                Get awareness of security exploits and reduce your risks</h4>

                        </div>
                        <div className="col-md-2"></div>
                    </div>

                    <div className="row">
                        <div className='col-md-3'></div>

                        <div className='col-md-6'>
                           <div style={{textAlign: 'center',justifyContent:'center'}}>
                            {/*{
                                
                                this.props.authenticated
                                    ? (
                                        <Button href="#/login" outline color="primary">LOGIN</Button>
                                    )
                                    : (
                                        <Button href="#/logout" color="danger">LOGOUT</Button>
                                    )
                            }*/}
                            </div>
                        </div>
                        <div className='col-md-3'></div>
                    </div>

                     <div className="row">
                                        <div className='col-md-3'></div>
                                        <div className='col-md-6 data' style={{ color: '#3498db', textAlign:'center' }}><p>Keep your Data Secured{<br />}
                                            <img src={data} style={{ justifyContent: 'center', width: '50px', heigt: '50px' }} />
                                        </p></div>
                                        <div className='col-md-3'>
                                        </div>
                    </div>
                    {/*<div className="row">
                            
                            <div className="col-md-4 col-sm-6">

                                <img style ={imageStyle} src={image} data-src="" data-src-retina="" alt="image" className="img-responsive" />
                           
                                </div>
                                <div className="col-md-4 col-sm-3"></div>
                            </div>*/}



                    {/*<div className="row">
                                <div className="container">
                                    <div className="col-md-4"></div>
                                    <div className="col-md-4">
                                     
                                    <div className="col-md-4"></div>
                                </div>
                            </div>*/}


                    {/*<div className="container">
                            <div className="row">
                                <div className="col-md-3"></div>
                                <div className="col-md-6 col-centered"
                                    style={{
                                        textAlign: 'center',
                                        justifyContent: 'center'
                                    }}>
                                    <hr style={{ backgroundColor: '#7f8c8d', opacity: 0.9, color: 'white' }} className="my-2" />
                                    <div className="row" style={{ color: '#f39c12' }}>
                                        <h3>Learn how to protect your Internet of Things (IOT) devices</h3>
                                    </div>
                                    <div className="row" style={{ color: '#16a085' }}>
                                        <h4>Get awareness of security exploits and reduce your risks</h4>
                                    </div>
                                    <div className="row">
                                        <div className='col-md-3'></div>

                                        <div className='col-md-6'>
                                            {
                                                this.props.authenticated
                                                    ? (
                                                        <Button href="#/login" outline color="primary">LOGIN</Button>
                                                    )
                                                    : (
                                                        <Button href="#/logout" color="danger">LOGOUT</Button>
                                                    )
                                            }
                                        </div>
                                        <div className='col-md-3'></div>
                                    </div>
                                    <div className="row">
                                        <div className='col-md-3'></div>
                                        <div className='col-md-6 data' style={{ color: '#3498db' }}><p>Keep your Data Secured{<br />}
                                            <img src={data} style={{ justifyContent: 'center', width: '50px', heigt: '50px' }} />
                                        </p></div>
                                        <div className='col-md-3'>
                                        </div>
                                    </div>


                                </div>
                                <div className="col-md-3"></div>
                            </div>
                        </div>*/}




                </div>
            </div>


        );
    }
}

export default Head;
