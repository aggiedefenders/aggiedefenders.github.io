import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
        <div className="col-md-4"><p>Resources</p></div>
        <div className="col-md-4"><p>Contact</p></div>
        <div className="col-md-4"><p>Downloads</p></div>
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
