import React, { Component } from 'react'
import { Link, Redirect,Route } from 'react-router-dom'
import { Table, Toaster, Intent} from '@blueprintjs/core';
import firebase from 'firebase';
import { app, base } from '../../base';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import Files from './Files';
import Admins from './Admins';


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

const products=[
  {
    id: 1,
    name: "Example Name",
    price: 23
  },
  {
    id: 2,
    name: "Example Name",
    price: 24
  }
];

class Settings extends Component {
    constructor(props) {
       super(props);
      this.uploadFile = this.uploadFile.bind(this);
      this.state={
        file: null
      }
    }
    // componentDidMount(){
    //   var  admin =
    //       ['rgmwanik@aggies.ncat.edu',
    //       'lonnieharris@ncat.edu',
    //       'robertmwaniki@hotmail.com',
    //       'jdsmith5@aggies.ncat.edu'];
    //   const firebaseUser = firebase.auth().currentUser;
    //   console.log(admin.indexOf(firebaseUser.email));
    //   const check = admin.indexOf(firebaseUser.email);
    //   if(check == -1){
    //       console.log('redirect');
    //       this.props.history.push('/access-restricted'); 
    //   }
    // }
        
    
  
    uploadFile  (){
      console.log(this.state.file.name);
      const file = this.state.file;

      var storageRef =firebase.storage().ref().child('files/labs/'+file.name);
      var uploadTask = storageRef.put(file);
      var filesRef = firebase.database().ref().child('files');

      uploadTask.on('state_changed', function(snap){
                  },function(error){

                  },function () {
                    var downloadURL = uploadTask.snapshot.downloadURL;
                    console.log(downloadURL);
                    //var downloadURL = $("#fileURL");
                    console.log(downloadURL);
                    //img.attr("src", img.attr("src").replace(img.attr("src"), downloadURL));

                    //update firebase user node

                    filesRef.push({
                      fileName: file.name,
                      downloadURL: downloadURL
                    });
                return true;
                  });
    }
   

  createMessage= (event) => {
    let status= false;
    console.log("File accepted")
    // const  file = event.target.files[0];
      try{
        //  const file = event.target.files[0];
         const file = event.target.files[0];
         console.log(file.name);  
         this.setState({file: file})
         this.toaster.show({ intent: Intent.DANGER, message: "File: " + file.name + "  was accepted. Click upload when ready." })
         
     }catch(error) {
        this.toaster.show({ intent: Intent.DANGER, message: error.message })
      };

   
      // uploadFile(file, () =>{
      //   console.log(downloadURL);
      // });
    event.preventDefault()
    // firebase.auth().onAuthStateChanged((user) => {
    //   if (user) {
    //   // this.messageForm.reset()
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
      <div className ="pt-card pt-elevation-3">
        
        <h1 style={{marginBottom: "0.5em"}}>Settings</h1>
        <div className="pt-card pt-elevation-1 pt-interactive">
          <h3>Admin Console</h3>
            <Toaster ref={(element) => { this.toaster = element }} />
          <div className ="row">
            <div className ="col-md-9">
                <input className ="pt-elevation-1" ref="fileSelect" type="file" 
                  onChange ={this.createMessage}
                ref={(input) => this.messageForm = input }
                />
            </div>
            <div className ="col-md-3">
              <span className ="pt-button" onClick={this.uploadFile}>Upload</span>
            </div>
          </div>
           <Files />
           <Admins />
      </div>
      </div>
    )
  }
}

export default Settings
