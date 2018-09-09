import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const footerStyle ={
  fontSize: '14px', 
  justifyContent: 'center',
  textAlign: 'center'
}

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = { year: new Date().getFullYear() };
  }

  render() {
    return (
    
    <footer>
      <hr style={{ backgroundColor:'#7f8c8d', opacity: 0.3, border: '1px dotted #ccccc', margin:'50px', color:'white'}}className="my-2" />
    
    <div className="container"
    
      style={{justifyContent:'center',
              textAlign:'center'
              
              }}>

      <div className="row">
        <div className="col-md-4">
          <a className="pt-interactive" href="#/resources" style={footerStyle}>Resources</a>
        </div>
        <div className="col-md-4">
          <a className="pt-interactive" href="#/contact" style={footerStyle}>Contact</a>
        </div>
        <div className="col-md-4">
           <a className="pt-interactive" href="#/files" style={footerStyle}>Downloads</a>
       </div>

      </div>

    </div>

 
    <ul className="site-link">

      <li>
        &copy; {this.state.year} AggieDefenders
      </li>
    </ul>
  
  </footer>
    
    );
  }
}

export default Footer;
