import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
// import PageHeader from 'react-bootstrap/lib/PageHeader';
// import database from './database';
import { app, base } from '../../../base';
import firebase from 'firebase';

var database = firebase.database();

function onAfterSaveCell(row, cellName, cellValue) {
  var updateRef = database.ref('events/' + row.id);
  updateRef.update(row);
  console.log(row)
}

function onBeforeSaveCell(row, cellName, cellValue) {
  // You can do any validation on here for editing value,
  // return false for reject the editing
  return true;
}
//table function delete row/s
function onAfterDeleteRow(row, rowKeys) {
console.log(rowKeys[0].fileName)
  for(var i in row){
    console.log(rowKeys[0].fileName)
     var storageRef = firebase.storage().ref().child('files/labs/' + rowKeys[0].fileName);
     var deleteRef = database.ref('files/'+row[i]);
     // Delete the file

        storageRef.delete().then(function() {
          // File deleted successfully
        }).catch(function(error) {
          // Uh-oh, an error occurred!
        });
       deleteRef.remove();
  }
}
//table function
const cellEditProp = {
  mode: 'click',
  blurToSave: true,
  beforeSaveCell: onBeforeSaveCell, // a hook for before saving cell
  afterSaveCell: onAfterSaveCell  // a hook for after saving cell
};
//table function
const selectRowProp = {
  mode: 'checkbox'
};

const options = {
  afterDeleteRow: onAfterDeleteRow  // A hook for after droping rows.
};

class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
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
        id: userdata[k].id, downloadURL: userdata[k].downloadURL, fileName: userdata[k].fileName
      });
    }
    this.setState({ products: newProducts });
  }

  errData = (err) => {
    console.log(err);
  }

  handleClick = (rowKey) => {
    alert(this.refs.table.getPageByRowKey(rowKey));
  }


  render() {

    return (
      <div>
        <div className="col-lg-12">


        </div>
        <BootstrapTable
          ref='table'
          data={this.state.products}
          pagination={true}
          search={true}
          cellEdit={cellEditProp}
          deleteRow={true}
          selectRow={selectRowProp}
          options={options}
          >

          <TableHeaderColumn dataField='id' isKey={true} dataSort={true}>ID</TableHeaderColumn>
          <TableHeaderColumn dataField='fileName' dataSort={true}>File Name</TableHeaderColumn>
          <TableHeaderColumn dataField='downloadURL' dataSort={true}>URL</TableHeaderColumn>
       
        </BootstrapTable>
      </div>
    );
  }
}

export default Show;