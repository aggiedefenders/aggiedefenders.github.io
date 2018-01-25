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

class AddNews extends Component {
constructor(props) {
    super(props);
    this.state = {
        text: '',
        products: [],
        title: '',
        image_url: '',
        url: '',
        subtitle: '',
        content: '',
    



    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubTitle = this.handleSubTitle.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleURL = this.handleURL.bind(this);
    this.handleImgURL = this.handleImgURL.bind(this);
    this.handleContent = this.handleContent.bind(this);
    this.pushToDatabase = this.pushToDatabase.bind(this);
}


 pushToDatabase () {

    const id = Date.now();
    let eventsRef = database.ref().child('news/'+id);
    const eventObj = {
        id: id,
        title: this.state.title,
        image_url: this.state.image_url,
        url: this.state.url,
        subtitle: this.state.subtitle,
        content: this.state.content,
    }
    eventsRef.update(eventObj)


};
render() {

    return (
        <div style={containerStyle} className="pt-card">
            <div className="col-lg-12">
                <h3> Add News </h3>
                <Link style={{color:'white'}} className="pt-button pt-minimal" to="/settings" aria-label="Account"><img src={_backButton} />Back</Link>
                <Form
                     ref={ form => this.formRef = form }
                     onSubmit={this.handleSubmit.bind(this)}>
                    <FormGroup>
                        <Label for="eventTitle">News Title</Label>
                        <Input
                            ref="title"
                            type="text" onChange={this.handleTitle}
                            name="title" id="newsTitle" placeholder="Enter a title..." />
                    </FormGroup>
                      <FormGroup>
                        <Label for="eventTitle">Sub Title</Label>
                        <Input
                            ref="subtitle"
                            type="text" onChange={this.handleSubTitle}
                            name="title" id="subTitle" placeholder="Enter a title..." />
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleUrl">Link to Source</Label>
                        <Input ref="url" type="url" name="url"
                            onChange={this.handleURL}
                            id="sourceUrl" placeholder="url placeholder" />
                        <FormText color="muted">
                            Link to source
                    </FormText>
                    </FormGroup>
                     <FormGroup>
                        <Label for="exampleUrl">Add Image</Label>
                        <Input ref="imgurl" type="url" name="url"
                            onChange={this.handleImgURL}
                            id="imageUrl" placeholder="url placeholder" />
                        <FormText color="muted">
                            Link to image source
                    </FormText>
                    </FormGroup>
                  
                    <FormGroup>
                        <Label for="exampleText">Text Area</Label>
                        <Input ref="content" type="textarea" name="text"
                            onChange={this.handleContent} id="content" />
                    </FormGroup>
                    <Button color="success" type="submit">Submit</Button>
                </Form>




            </div>

        </div>
    );
}
        handleSubTitle =(e) => {
            this.setState({
                subtitle: e.target.value
            })
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

        handleImgURL = (e) => {
            this.setState({
                img_url: e.target.value
            })
        }

        handleContent = (e) => {
            this.setState({
                content: e.target.value
            })
        }
 
        handleSubmit = (event) => {
            event.preventDefault();
           
            console.log(this.state)
            this.pushToDatabase()
            this.imgurl ='';

            

        }

}

export default AddNews;