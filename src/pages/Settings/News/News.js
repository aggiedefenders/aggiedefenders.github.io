import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Link } from 'react-router-dom';
import _backButton from '../../../assets/img/back_btn_white.png';
import firebase from 'firebase';

var database = firebase.database();


const containerStyle = {
  backgroundColor: '#2980b9',
  color: 'white'
};
//table function
//change cell elements
function onAfterSaveCell(row, cellName, cellValue) {
  var updateRef = database.ref('news/' + row.id);
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

  for(var i in row){
    console.log(row[i]);
     var deleteRef = database.ref('news/'+row[i]);
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

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      products: []
    };
    this.handleChange = this.handleChange.bind(this);

    this.filesRef = database.ref('news');
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
        title: userdata[k].title, content: userdata[k].content, id: userdata[k].id, 
        url: userdata[k].url,
        imgurl: userdata[k].image_url
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

  handleChange = (event) => {
    console.log('change')
    alert(event.target.value)
  }

  render() {
    return (
      <div style={containerStyle} className="pt-card">
        <div className="col-lg-12">
          <h3> News </h3>
          <Link style={{color: 'white'}}className="pt-button pt-minimal" to="/settings" aria-label="Account"><img src={_backButton} />Back</Link>
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
          <TableHeaderColumn dataField='title' dataSort={true} onChange={this.handleChange}>Title</TableHeaderColumn>
          <TableHeaderColumn dataField='content' dataSort={true} onChange={this.handleChange} >Content</TableHeaderColumn>
          <TableHeaderColumn dataField='url' dataSort={true} onChange={this.handleChange} >Source URL</TableHeaderColumn>



        </BootstrapTable>
      </div>
    );
  }
}

export default News;