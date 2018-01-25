import React,{Component} from 'react';
import imageUserLonnie from '../../../assets/img/lonnie.jpg';
import imageUserJaekwon from '../../../assets/img/jaekwon.jpg';
import imageSlack from '../../../assets/img/slack.png'
const titleStyle ={
    color: 'black',
    borderBottom: 'weight',
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    fontWeight: 'bold'
}

const imageStyle={
    flex: 1,
    width: "100px",
    height: '100px',
  
    resizeMode: 'contain',
    borderRadius: "50%"
}
class ClubInformation extends Component {
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
    <div className="pt-container">
         <h2 style={titleStyle}><span className="pt-button pt-minimal pt-icon-info-sign"/>Club Information</h2>
                <div className="row">
                    <div className="col-md-6 pt-running-text">
                     The AggieDefenders is shepherded by a distinguished Cisco Cyber Security Specialist, Lonnie Harris. 
                    Lonnie has over 20 years’ experience specializing in cyber security, network security, clouds, and 
                    protection of customer data. He shares his knowledge and time, to help students at North Carolina Agricultural
                    and Technical State University,
                    <b style={{color:'#f1c40f'}}><i> propel forward </i></b>
                    towards success

                    </div>

                    <div className="col-md-6 pt-running-text">
                        <div className = "row">
                            <div className="col-md-6">
                                
                                   <ul>
                                    <img style={imageStyle}
                                        src={imageUserLonnie} data-src=""
                                    data-src-retina="" alt="" className="img-responsive" />
                                    </ul>
                                    <ul>
                                    <i>Lonnie Harris{<br />} Adviser</i>   
                                    </ul>
                                    <ul>
                                    <img style={imageStyle}
                                        src={imageUserJaekwon} data-src=""
                                     data-src-retina="" alt="" className="img-responsive" />
                                     </ul>
                                    <ul>
                                    <i>Jaekwon Smith {<br />} Student Representative</i>   
                                    </ul>
                               
                            </div>
                             <div className="col-md-6">
                                         <p>Come to one of our meetings {<br/>}Thursday, 6:30pm. {<br/>}<b>Cherry Hall Rm. 318</b></p>
                                <a href="https://acmncat.slack.com/"> <img style={{width:'175px',height:'100px', resizeMode:'contain'}}
                                        src={imageSlack} data-src=""
                                     data-src-retina="" alt="" className="img-responsive" /></a>
                                     {<br/>}
                                    <i>Reach us on slack</i>
                             </div>
                            

                        </div>
               
                    </div>
                </div>
    </div>
    
    );
  }
}

export default ClubInformation