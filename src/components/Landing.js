import React, { Component } from 'react';
import {
    Spinner,
    Menu,
    MenuItem,
    MenuDivider,
    Popover,
    Position
} from "@blueprintjs/core";

import {Button} from 'reactstrap';


var imgSource = '';    

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
class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = { year: new Date().getFullYear() };
  }

 

  render() {
    return (

   

            


        <div style={{backgroundColor:'#2c3e50',height: '600px', borderTopLeftRadius:'5px', borderTopRightRadius:'5px'}}className="pt-getting-started">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <div className="container">
                    <h1 style={titleStyle}>AggieDefenders</h1>
                </div>
                <div className="col-md-4"></div>
            </div>

            <div className="container">
                <div className="row">
               <div className ="col-md-4"></div> 
                    <div className="col-md-4">
                        <img style={imageStyle}
                        src={require("../assets/img/network.gif")} data-src="" data-src-retina="" alt="kkk" className="img-responsive" />
                    </div>
                <div className ="col-md-4"></div> 
                </div>
            </div>


            <div className="container">
                <div className="row">
               <div className ="col-md-3"></div> 
                    <div className="col-md-6 col-centered"
                    style={{
                      textAlign:'center',  
                      justifyContent: 'center'
                    }}>
                         <hr style={{ backgroundColor:'#7f8c8d', opacity: 0.9, color:'white'}}className="my-2" />
                         <div className="row">
                            <h4>Learn how to protect your Internet of Things (IOT) devices</h4>
                        </div>
                        <div className="row">
                            <h4>Get awareness of security exploits and reduce your risks</h4>
                        </div>
                         <div className="row">
                            <div className='col-md-3'></div>
                            <div className='col-md-6'><Button href="/login" outline color="primary">LOGIN</Button></div>
                            <div className='col-md-3'></div>
                        </div>
                        <div className="row">
                            <div className='col-md-3'></div>
                            <div className='col-md-6'><p>Keep your Data Secured</p></div>
                            <div className='col-md-3'></div>
                        </div>
                        
                    </div>
                <div className ="col-md-3"></div> 
                </div>
            </div>
        </div>
        </div>
 
    {/*Section 1*/}
    <div style={{backgroundColor:'#2980b9', height:'600px'}}className="container-fluid pt-info">
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


    {/*Section 2*/}
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

export default Landing;
