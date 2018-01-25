import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Link } from 'react-router-dom';
import _backButton from '../../assets/img/back_btn_white.png';
import { app, base } from '../../base';
import firebase from 'firebase';

var database = firebase.database();

const containerStyle = {
  backgroundColor: '#2980b9',
  color: 'white'
};


const cardStyle = {

  minWidth: "150px",

  margin: "5px",
}
class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      products: []
    };

    this.filesRef = database.ref('events');
  }

  componentDidMount() {
    this.filesRef.on('value', this.gotData, this.errData);
  }


  gotData = (data) => {
    let newProducts = []
    const userdata = data.val();
    if (userdata) {
      const keys = Object.keys(userdata);

      for (let i = 0; i < keys.length; i++) {
        const k = keys[i];
        newProducts.push({
          id: userdata[k].id, title: userdata[k].title, content: userdata[k].content, file: userdata[k].file, time: userdata[k].time, url: userdata[k].url, date:userdata[k].date
        });
      }
      this.setState({ products: newProducts });
    }
 
  }

  errData = (err) => {
    console.log(err);
  }

  handleClick = (rowKey) => {
    alert(this.refs.table.getPageByRowKey(rowKey));
  }


  render() {

    const events  = this.state.products;
    console.log(events)
    const fileIds = Object.keys(events)

    return (
      <div>
        <h1 style={{marginBottom: "0.5em"}}>Events</h1>

        <div>
          {fileIds.map((id) => {
            const file = events[id]
            return (
              <div  key={id} className="pt-card pt-elevation-0 pt-interactive">
                <h3>{file.title}</h3>
                <hr />
                <p><span className="pt-button pt-minimal pt-icon-calendar" />Date: {file.date}</p>
                <p> <span className="pt-button pt-minimal pt-icon-time" />Time: {file.time}</p>
                <p><span className="pt-button pt-minimal pt-icon-link" />Link to Meeting: <a href = {`${file.url}`} target="_blank">             {file.url} </a></p>
                <p>{file.content}</p>


                
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}



export default Events;