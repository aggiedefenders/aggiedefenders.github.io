import React, { Component } from 'react'


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

const content ={
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
              
            
                    <div style={content} className="row">
                        <div className ="col-md-3"></div>
                        <div className="col-md-6">
                        <h2 style={subtitle}><span className="pt-button pt-minimal pt-icon-lightbulb"/>Awareness and Protection</h2>
                           <hr style={{backgroundColor:'#0984e3'}} />
                        <h4 style={{color: '#fdcb6e',justifyContent: 'left', textAlign:'left'}}>The internet is an ever changing environment.</h4> 
                        <hr style={{backgroundColor:'#0984e3'}} />
                        With increased changes, leads to increased dangers. 
                        Dangers called <b>Cyber Crimes</b>, involving perilous acts by the like of: 
                        <b style={{color:'#2d3436'}}> online fraud, identify theft, computer viruses, and spyware. </b>{<br/>}
                        We know what hackers are, but do you know how they think? A hacker could be anyone. Which is why you need to be conscientious of what your devices are capable of, and how hackers can use them against you. {<br/>}
                        <b style={{color:'#2d3436'}}>Get protected by gaining the knowledge and skills needed to be an active internet user.</b>
                        </div>
                        <div className ="col-md-3"></div>
                    </div>
              
          
            </div>
        );
    }
}

export default Awareness