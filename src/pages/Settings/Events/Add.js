import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import { Classes, EditableText, Intent, NumericInput, Switch } from "@blueprintjs/core";
import _backButton from '../../../assets/img/back_btn_white.png';

import firebase from 'firebase';
var database = firebase.database();
var filesRef = firebase.database().ref().child('files');

const containerStyle = {
backgroundColor: '#2980b9',
color: 'white'
};
var database = firebase.database();

class AddEvent extends Component {
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
    this.handleTitle = this.handleTitle.bind(this);
    this.handleURL = this.handleURL.bind(this);
    this.handleTime = this.handleTime.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleContent = this.handleContent.bind(this);
    this.pushToDatabase = this.pushToDatabase.bind(this);
}


 pushToDatabase () {

  
    const id = Date.now();
    let eventsRef = database.ref().child('events/'+id);
    const eventObj = {
        id: id,
        title: this.state.title,
        url: this.state.url,
        date: this.state.date,
        time: this.state.time,
        content: this.state.content,
        file: this.state.file
    }
    eventsRef.update(eventObj)
    alert('New Event Created');


};
render() {

    return (
        <div style={containerStyle} className="pt-card">
            <div className="col-lg-12">
                <h3> Add Event </h3>
                <Link style ={{color: 'white'}}className="pt-button pt-minimal" to="/settings" aria-label="Account"><img src={_backButton} />Back</Link>
                <Form onSubmit={this.handleSubmit.bind(this)}>
                    <FormGroup>
                        <Label for="eventTitle">Event Title</Label>
                        <Input
                            ref="title"
                            type="text" onChange={this.handleTitle}
                            name="title" id="eventTitle" placeholder="Enter a title..." />
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleUrl">Url</Label>
                        <Input ref="url" type="url" name="url"
                            onChange={this.handleURL}
                            id="exampleUrl" placeholder="url placeholder" />
                        <FormText color="muted">
                            Link to Webex or Google Hangout URL
                    </FormText>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleDate">Date</Label>
                        <Input ref="date" type="date" name="date"
                            onChange={this.handleDate} id="date"
                            placeholder="date placeholder" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleTime">Time</Label>
                        <Input ref="time" type="time" name="time"
                            onChange={this.handleTime} id="time"
                            placeholder="time placeholder" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleText">Text Area</Label>
                        <Input ref="content" type="textarea" name="text"
                            onChange={this.handleContent} id="content" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleFile">File</Label>
                        <Input ref="file" type="file" name="file"
                            onChange={this.handleFile} id="exampleFile" />
                        <FormText color="muted">
                            Upload an image that will be attached to an event. If no image is selected a default 'events' image will be attached.
                    </FormText>
                    </FormGroup>



                    <Button color="success" type="submit">Submit</Button>
                </Form>




            </div>

        </div>
    );
}
        handleTitle = (e) => {
            this.setState({
                title: e.target.value
            })
        }
        handleURL = (e) => {
            this.setState({
                url: e.target.value
            })
        }
        handleDate = (e) => {
            this.setState({
                date: e.target.value
            })
        }
        handleTime = (e) => {
            this.setState({
                time: e.target.value
            })
        }
        handleContent = (e) => {
            this.setState({
                content: e.target.value
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

export default AddEvent;