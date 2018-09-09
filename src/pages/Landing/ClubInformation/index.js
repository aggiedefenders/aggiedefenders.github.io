
import React, { Component } from 'react';
import { Button } from 'reactstrap';
import imageUserLonnie from '../../../assets/img/lonnie.jpg';
import imageUserJaekwon from '../../../assets/img/jaekwon.jpg';
import imageSlack from '../../../assets/img/slack.png';
import imageSlack2 from './slack2.png';
import imageCalendar from './calendar.png';
import imageResources from './resources.png';




const containerStyle = {

    //  backgroundImage: 'url('+wave+')',
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
    color: '#45aaf2',
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
    width: "250px",
    height: "250px",
   

    resizeMode: 'contain',
    borderRadius: '50%',
    border: '2px solid #45aaf2',
    boxShadow: "0.8px 1px 15px 0.5px white"
}

const controlsStyles = {
    fontSize: '12px',
    textAlign: 'center',
    justifyContent: 'center',
    flex: 0,
    margin: '0 auto',
    gridGap: '20px',
}

const cardStyle = {
    height: '350px',
    width: 'auto',
    flex: 1,
    margin: '',
    padding: '',
    overflow: 'hidden',
    justifyContent: 'center',
    textAlign: 'center'

}

const title2Style = {
    color: '#45aaf2'
}

class ClubInformation extends Component {
    constructor() {
        super();

    }
    render() {
        return (
            <div style={containerStyle} className="pt-container">

                <h2 style={titleStyle}><span className="pt-button pt-minimal pt-icon-info-sign" />Club Information</h2>
                <hr style={{ opacity: 0.8, textAlign: 'center', justifyContent: 'center', paddingLeft: '50%', width: '10px' }} />
                <div className="row">

                    <div className="col-md-6 pt-running-text">
                        The AggieDefenders is shepherded by a distinguished Cisco Cyber Security Specialist, Lonnie Harris.
                        Lonnie has over 20 years’ experience specializing in cyber security, network security, clouds, and
                        protection of customer data. He shares his knowledge and time, to help students at North Carolina Agricultural
                        and Technical State University,
                        <b style={{ color: '#fdcb6e' }}><i> propel forward </i></b>
                        towards success.
                    </div>
                    <div style={{ color: 'black' }} className="col-md-6">
                        <h3> We are located at,{<br />} North Carolina Agricultural and Technical State University</h3>

                    </div>
                </div>




                <div style={{ justifyContent: 'center', textAlign: 'center' }} className="">
                    <hr />
                    <h2 style={title2Style} >Who we are</h2>

                </div>

                <div className="row pt-card pt-elevation-2 pt-interactive" 
                style={{backgroundColor: '#74b9ff', color: 'white',
                        overflow: 'hidden'
                }}>


                    <div className="col-md-1"></div>
                    <div className="col-md-4">
                        <ul style={{marginLeft:'0px'}}>
                            <img style={imageStyle}
                                src={imageUserLonnie} data-src=""
                                data-src-retina="" alt="" className="img-responsive" />
                        </ul>
                        {/*<hr style={{ opacity: 0.8, textAlign: 'center', justifyContent: 'center', marginLeft: '5%',paddingLeft: '50%', paddingRight: '50%', width: '10px' }} />*/}
                        <ul>
                            <i>Lonnie Harris{<br />} Adviser</i>
                        </ul>

                    </div>
                      <div className="col-md-2"></div>

                    <div className="col-md-4">
                        <ul>
                            <img style={imageStyle}
                                src={imageUserJaekwon} data-src=""
                                data-src-retina="" alt="" className="img-responsive" />
                        </ul>
                        {/*<hr style={{ opacity: 0.8, textAlign: 'center', justifyContent: 'center', paddingLeft: '50%', paddingRight: '50%', width: '10px' }} />*/}

                        <ul>
                            <i>Jaekwon Smith {<br />} Student Representative</i>
                        </ul>
                    </div>

                    <div className="col-md-1"></div>


                </div>
                <div style={{ justifyContent: 'center', textAlign: 'center' }} className="">

                </div>
                <div style={{ justifyContent: 'center', textAlign: 'center' }} className="">
                    <hr />
                    <h5 style={title2Style} > Get started now, login and take a look at some of our features.</h5>
                </div>

                <div style={{ justifyContent: 'center', textAlign: 'center' }} className="">

                    <Button style={{ width: '100px', height: '50px', paddingTop: '10px' }} href="#/login" color="success">LOGIN</Button>

                </div>

                <div style={{ justifyContent: 'center', textAlign: 'center' }} className="">
                    <hr />
                    <h5 style={title2Style} > Reach Us on Slack </h5>

                    <a href="https://acmncat.slack.com/"> <img style={{ maxWidth: '250px', height: '150px', resizeMode: 'contain' }}
                        src={imageSlack2} data-src=""
                        data-src-retina="" alt="" className="img-responsive" /></a>

                </div>

                <div style={{ justifyContent: 'center', textAlign: 'center' }} className="">
                    <hr />
                    <h5 style={title2Style} >Calendar</h5>
                    <a href="/#/calendar"> <img style={{ maxWidth: '200px', height: '150px', resizeMode: 'contain' }}
                        src={imageCalendar} data-src=""
                        data-src-retina="" alt="" className="img-responsive" /></a>
                </div>

                 <div style={{ justifyContent: 'center', textAlign: 'center' }} className="">
                    <hr />
                    <h5 style={title2Style} >Resources</h5>
                    <a href="/#/resources"> <img style={{ maxWidth: '200px', height: '150px', resizeMode: 'contain' }}
                        src={imageResources} data-src=""
                        data-src-retina="" alt="" className="img-responsive" /></a>
                </div>






            </div>

        );
    }
}

export default ClubInformation;
