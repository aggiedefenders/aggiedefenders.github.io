import React, { Component } from 'react'
import imagePadlock from './padlock.png';
import imageSecurity from './security_guard.png';
import imageMalware from './malware.png';
import imageFirewall from './firewall.png';
import imageLearn from './learn2.png';

import image from "../../../assets/img/bg_b.jpg";
const learnStyle = {
    paddingTop: '0px',
    marginTop: '0px',
    border: "2px",
    borderWidth: 0.5,
    color: '#f1c40f',
    backgroundColor: '#00cec9',
    fontSize: '25px',
    borderBottomWidth: '50px 10px',
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
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    fontWeight: 'bold'
}
const imageStyle = {
    flex: 1,
    width: "100px",
    height: '100px',
    resizeMode: 'contain'
}

const controlsStyles = {
    fontSize: '12px',
    justifyContent: 'center',
    textAlign: 'center'
}
class Awareness extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.input.value);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h2 style={subtitle}><span className="pt-button pt-minimal pt-icon-lightbulb"/>Awareness and Protection</h2>
                <div className="row">
                    <div className="col-md-6 pt-running-text">
                        The internet is an ever changing environment. With increased changes, leads to increased dangers. {<br />}
                        Dangers called <span style={{color:"#d63031"}}>Cyber Crimes</span>, involving perilous acts by the like of: 
                        <i style={{color:'#ffeaa7'}}> online fraud, identify theft, computer viruses, spyware, and the list goes on...</i>{<br />}
                        We know what hackers are, but do you know how they think? A hacker could be anyone. Which is why you need to be conscientious of what your devices do, and how hackers can use them against you.
                        Get protected by gaining the knowledge and skills needed to be an active internet user.

                    </div>
                    <div className="col-md-6 pt-running-text">
                    <div style ={{ padding: '15px', borderRadius: '6px'}}>
                        <div style={learnStyle} className="">
                            <i><img
                                src={imageLearn} data-src="" data-src-retina="" alt="" className="img-responsive" />
                                WHAT YOU LEARN
                            </i>
                        </div>
                        <div style={controlsStyles} className="row">
                            <div className="col-sm-3">
                                <img style={imageStyle}
                                    src={imagePadlock} data-src="" data-src-retina="" alt="" className="img-responsive" />
                                Security Configuration
                                </div>

                            <div className="col-sm-3">
                                <img style={imageStyle}
                                    src={imageSecurity} data-src="" data-src-retina="" alt="" className="img-responsive" />
                                Malware Protection</div>
                            <div className="col-sm-3">
                                <img style={imageStyle}
                                    src={imageFirewall} data-src="" data-src-retina="" alt="" className="img-responsive" />
                                Firewalls and Internet Gateways</div>
                            <div className="col-sm-3">
                                <img style={imageStyle}
                                    src={imageMalware} data-src="" data-src-retina="" alt="" className="img-responsive" />
                                Malware Protection</div>

                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Awareness