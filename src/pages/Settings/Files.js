import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
// import PageHeader from 'react-bootstrap/lib/PageHeader';
// import database from './database';
import { app, base } from '../../base';
import firebase from 'firebase';

var database = firebase.database();

class Files extends Component {
    constructor(props) {
    super(props);
    this.state = {
      text:'',
      products: []
    };

   this.filesRef = database.ref('files');
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
        name: userdata[k].nama, downloadURL: userdata[k].downloadURL, fileName: userdata[k].fileName
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
  <div>
      <div className="col-lg-12">
      <h3>Edit Files </h3>
   </div>
    <BootstrapTable  
        ref='table'
        data={ this.state.products }
        pagination={ true }
        search={ true }>
      <TableHeaderColumn dataField='fileName' isKey={true} dataSort={true}>Name</TableHeaderColumn>
        <TableHeaderColumn dataField='downloadURL' dataSort={true}>URL</TableHeaderColumn>
        <TableHeaderColumn dataField='fileName'>File Name</TableHeaderColumn>
      </BootstrapTable>
    </div>
  );
 }
}

export default Files;