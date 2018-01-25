import React, { Component } from 'react'
import { Link, Redirect, Route } from 'react-router-dom'

import firebase from 'firebase';
import { app, base } from '../../base';




const fileListStyles = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
}

const fileCardStyles = {
    minWidth: "auto",
    flex: "1",
    margin: "5px",
    backgroundColor: '#2980b9',
    color: 'white',
    textAlign: 'center',
    textDecoration: 'none'
}

const cardStyles2 = {
    backgroundColor: '#2ecc71',
    minWidth: "auto",
    flex: "1",
    margin: "5px",
    color: 'white',
    textAlign: 'center',
    textDecoration: 'none'

}
//show all files


class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            admin: false,
            checked: false,

        }
    }

    componentWillMount() {
        //setInterval(() => start(this.state.gapi,true), 30000);
        var rootRef = firebase.database().ref();
        var urlRef = rootRef.child("admins");
        var user = firebase.auth().currentUser;
        var userEmail = user.email;
        var isAdmin = false;
       
        console.log(userEmail);
        urlRef.once("value", function (snapshot) {
            snapshot.forEach(function (child) {
                // console.log(child.key + ": " + child.val().email);
                if (child.val().email == userEmail) {
                    isAdmin = true;
                }
            });
            // console.log('Check' + isAdmin)
            if (isAdmin == true) {
                this.setState({
                    admin: true,
                    
                });
            }
           this.setState({
               checked: true
           }) 
        }.bind(this));
    }



    render() {

        console.log(this.state.admin, this.state.checked)
        if (this.state.admin == false && this.state.checked == true) {
            console.log(this.state.admin)
            return (
                <Redirect to="/" />
            )


        } else {
            return (
                <div className="container-fluid">
                    <div className="col-md-12">
                        <h3>Admin Console</h3>
                        <hr />

                        <div className="row">
                            <div className="col-md-4">
                                <Link style={fileCardStyles} className="" to="/setings/events" aria-label="Account">
                                    <div className="pt-card pt-interactive" style={fileCardStyles}>
                                        View and Edit{<br />} Events
                                </div>
                                </Link>
                            </div>
                            <div className="col-md-4">
                                <Link style={fileCardStyles} className="" to="/setings/events/add" aria-label="Account">
                                    <div className="pt-card pt-interactive" style={fileCardStyles}>
                                        Add{<br />} Events
                                </div>
                                </Link>
                            </div>
                            <div className="col-md-4">
                                <Link style={fileCardStyles} className="" to="/setings/admins" aria-label="Account">
                                    <div className="pt-card pt-interactive" style={fileCardStyles}>
                                        Show{<br />} Admins
                                </div>
                                </Link>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <Link style={cardStyles2} className="" to="/setings/news" aria-label="News-Articles">
                                    <div className="pt-card pt-interactive" style={cardStyles2}>
                                        View and Edit{<br />} News Articles
                                </div>
                                </Link>
                            </div>
                            <div className="col-md-4">
                                <Link style={cardStyles2} className="" to="/setings/news/add" aria-label="News-Add">
                                    <div className="pt-card pt-interactive" style={cardStyles2}>
                                        Add{<br />} News Article
                                </div>
                                </Link>
                            </div>
                            <div className="col-md-4">
                                <Link style={cardStyles2} className="" to="/settings/files" aria-label="Account">
                                    <div className="pt-card pt-interactive" style={cardStyles2}>
                                        Add and Remove{<br />} Files
                                </div>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            )
        }
    }
}

export default Settings
