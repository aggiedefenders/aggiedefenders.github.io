import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
// import PageHeader from 'react-bootstrap/lib/PageHeader';
// import database from './database';
import { app, base } from '../../base';
import firebase from 'firebase';

var database = firebase.database();

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
        name: userdata[k].name, downloadURL: userdata[k].email, phone: userdata[k].phone
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
  <div className ="pt-card">
      <div className="col-lg-12">
      <h3> Admins </h3>
   </div>
    <BootstrapTable  
        ref='table'
        data={ this.state.products }
        pagination={ true }
        search={ true }>
      <TableHeaderColumn dataField='name' isKey={true} dataSort={true}>Name</TableHeaderColumn>
        <TableHeaderColumn dataField='downloadURL' dataSort={true}>Email</TableHeaderColumn>
        <TableHeaderColumn dataField='phone'>Phone Number</TableHeaderColumn>
      </BootstrapTable>
    </div>
  );
 }
}

export default Admins;