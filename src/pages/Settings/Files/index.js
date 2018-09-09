import React, { Component } from 'react'
import { Link, Redirect, Route } from 'react-router-dom'
import { Table, Toaster, Intent } from '@blueprintjs/core';
import firebase from 'firebase';
import { app, base } from '../../../base';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import {Button} from 'reactstrap';
import Show from './Show';
import SweetAlert from 'react-bootstrap-sweetalert';

const fileListStyles = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
}

const fileCardStyles = {
  maxWidth: "30%",
  minWidth: "150px",
  flex: "1",
  margin: "5px",
}
//show all files


class Files extends Component {
  constructor(props) {
    super(props);
    this.uploadFile = this.uploadFile.bind(this);
    this.state = {
      file: null,
      alert: null
    }
  }



  uploadFile() {

    if(this.state.file ==  null){
      console.log('Error: No file selected')
    }
    else{
    console.log(this.state.file.name);
    const file = this.state.file;

    var storageRef = firebase.storage().ref().child('files/labs/' + file.name);
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
      let filesRef = firebase.database().ref().child('files/'+id);
      filesRef.update({
        id: id,
        fileName: file.name,
        downloadURL: downloadURL
      });
      return true;
    });
    const getAlert = () => (
      <SweetAlert 
        success 
        title="File Uploaded" 
        onConfirm={() => this.hideAlert()}
      >
        Click okay to continue
      </SweetAlert>
    );

    this.setState({
      alert: getAlert()
    });
    
}

  }
    hideAlert() {
    console.log('Hiding alert...');
    this.setState({
      alert: null
    });
  }

  createMessage = (event) => {
    let status = false;
    console.log("File accepted")
    


    // const  file = event.target.files[0];
    try {
      //  const file = event.target.files[0];
      const file = event.target.files[0];
      console.log(file.name);
      this.setState({ file: file })
      this.toaster.show({ intent: Intent.SUCCESS, message: "File: " + file.name + "  was accepted. Click upload when ready." })
      
    } catch (error) {
      this.toaster.show({ intent: Intent.DANGER, message: error.message })
    };


    // uploadFile(file, () =>{
    //   console.log(downloadURL);
    // });
    event.preventDefault()
    // firebase.auth().onAuthStateChanged((user) => {
    //   if (user) {
     
    //   } else {
    //   // No user is signed in.
    //   console.log('No User Info')
    // }
    // });
  }//close

  //deleteOldFile(user, currentImage);


  



  render() {



    const { files } = this.props
    const fileIds = Object.keys(files)

    return (
      <div className="pt-container">

        <h1 style={{ marginBottom: "0.5em" }}>Manage Files</h1>
        <hr/>
        <div className="pt-card pt-elevation-1 pt-interactive">
          <h5>Files </h5>
          <hr />

          <div className="row">
            <div className="col-md-6">
              <Toaster ref={(element) => { this.toaster = element }} />
            
              
                <input className="pt-elevation-1" ref="fileSelect" type="file"
                  onChange={this.createMessage}
                  ref={(input) => this.messageForm = input}
                />
                {/*<span className="pt-button" onClick={this.uploadFile}>Upload</span>*/}
                <Button onClick={this.uploadFile} outline color="primary">Upload</Button>
                        

             {this.state.alert}
              </div>
              <div className="col-md-6">
    
              </div>
            </div>
              <Show />
          

        </div>
      </div>
    )
  }
}

export default Files
