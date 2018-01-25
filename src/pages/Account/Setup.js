import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import { Classes, EditableText, Intent, NumericInput, Switch } from "@blueprintjs/core";


import firebase from 'firebase';
var database = firebase.database();
var filesRef = firebase.database().ref().child('files');

const containerStyle = {
backgroundColor: '#2980b9',
color: 'white'
};
var database = firebase.database();

class Setup extends Component {
constructor(props) {
    super(props);
    this.state = {
        text: '',
        products: [],
        title: '',
        url: '',
        date: '',
        time: '',
        content: '',
        file: '',



    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleName = this.handleName.bind(this);


    this.handleFile = this.handleFile.bind(this);

    this.pushToDatabase = this.pushToDatabase.bind(this);
}

  createMessage = (event) => {
    let status = false;
    console.log("File accepted")
    


 uploadFile () {
  const file = this.state.file;
  console.log(file);
    var storageRef = firebase.storage().ref().child('user/displaypic/' + file.name);
    var uploadTask = storageRef.put(file);
  

    uploadTask.on('state_changed', function (snap) {
    }, function (error) {

    }, function () {
      var downloadURL = uploadTask.snapshot.downloadURL;
      console.log(downloadURL);
      //var downloadURL = $("#fileURL");
      console.log(downloadURL);
      //img.attr("src", img.attr("src").replace(img.attr("src"), downloadURL));
      const id = Date.now();
      //update firebase user node
    //   let filesRef = firebase.database().ref().child('files/'+id);
    //   filesRef.update({
    //     id: id,
    //     fileName: file.name,
    //     downloadURL: downloadURL
    //   });
      return true;
    });





    // const id = Date.now();
    // let eventsRef = database.ref().child('events/'+id);
    // const eventObj = {
    //     id: id,
    //     title: this.state.title,
    //     url: this.state.url,
    //     date: this.state.date,
    //     time: this.state.time,
    //     content: this.state.content,
    //     file: this.state.file
    // }
    // eventsRef.update(eventObj)


};
render() {

    return (
        <div style={containerStyle} className="pt-card">
            <div className="col-lg-12">
           
                <Form onSubmit={this.handleSubmit.bind(this)}>
                    <FormGroup>
                        <Label for="eventTitle">Full Name</Label>
                        <Input
                            ref="title"
                            type="text" onChange={this.handleName}
                            name="title" id="eventTitle" placeholder="Enter a title..." />
                    </FormGroup>

                
                    <Button color="success" type="submit">Submit</Button>
                </Form>

                <input className="pt-elevation-1" ref="fileSelect" type="file"
                  onChange={this.createMessage}
                  ref={(input) => this.messageForm = input}
                />

                 <Button onClick={this.uploadFile}  color="success">Upload</Button>




            </div>

        </div>
    );
}
        handleName = (e) => {
            this.setState({
                title: e.target.value
            })
        }



        handleFile = (e) => {
            this.setState({
                file: e.target.value
            })
        }
        handleSubmit = (event) => {
            event.preventDefault();
            
            console.log(this.state)
            this.pushToDatabase()

        }

}

export default Setup;