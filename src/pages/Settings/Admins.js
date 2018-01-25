import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import {Link} from 'react-router-dom';
import _backButton from '../../assets/img/back_btn_white.png';
import { app, base } from '../../base';
import firebase from 'firebase';

var database = firebase.database();

const containerStyle = {
    backgroundColor: '#2980b9',
    color: 'white'
};

class Admins extends Component {
    constructor(props) {
    super(props);
    this.state = {
      text:'',
      products: []
    };

   this.filesRef = database.ref('admins');
  }
  
  componentDidMount() {
    this.filesRef.on('value', this.gotData, this.errData); 
  }


  gotData = (data) => {
    let newProducts = []
    const userdata = data.val();
    const keys = Object.keys(userdata);
    for (let i = 0; i < keys.length; i++) {
      const k = keys[i];
      newProducts.push({
        name: userdata[k].name, email: userdata[k].email, phone: userdata[k].phone
      });
    }
    this.setState({products: newProducts});
  }

  errData = (err) => {
   console.log(err);
 }

  handleClick = (rowKey) => {
    alert(this.refs.table.getPageByRowKey(rowKey));
  }


render(){

  return (
  <div style ={containerStyle} className ="pt-card">
      <div className="col-lg-12">
      <h3> Admins </h3>
      <Link style={{color: 'white'}}className="pt-button pt-minimal" to="/settings" aria-label="Account"><img src={_backButton} />Back</Link>
                  
   </div>
    <BootstrapTable  
        ref='table'
        data={ this.state.products }
        pagination={ true }
        search={ true }>
      <TableHeaderColumn dataField='name' isKey={true} dataSort={true}>Name</TableHeaderColumn>
        <TableHeaderColumn dataField='email' dataSort={true}>Email</TableHeaderColumn>
        <TableHeaderColumn dataField='phone'>Phone Number</TableHeaderColumn>
      </BootstrapTable>
    </div>
  );
 }
}

export default Admins;