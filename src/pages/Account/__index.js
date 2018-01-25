import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import firebase from 'firebase';
import ReactImageFallback from "react-image-fallback";
import avatarImg from '../../assets/img/avatar.png';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { IntlProvider, FormattedMessage, FormattedRelative } from 'react-intl';
import Setup from './Setup';

const songListStyles = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
}

const titleStyle = {
    color: "#2980b9"
}

function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
    return (
        <div>
            <h1 style={titleStyle}>Hello New User.</h1>
            <h5>Welcome to Aggie Defenders, please enter in your name and upload a display pic</h5>
            <Setup />
        </div>
    )





    
}
function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

class Account extends Component {
    constructor() {
        super();
        this.state = {
            currentItem: '',
            username: '',
            items: [],
            user: null,
            hasName: null // <-- add this line
        };
    
    };

    componentDidMount() {
        console.log(this.props)
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                // User is signed in.
                this.user = firebase.auth().currentUser;
                this.setState({
                    user
                });
                if (user.displayName) {
                    this.setState({
                        hasName: true
                    });
                } else {
                    this.setState({
                        hasName: false
                    });
                    console.log("no user name")
                }

                // this.setState({currentUser: user });
                console.log(user.metadata.lastSignInTime);
            } else {
                // No user is signed in.
                console.log('No User Info')
            }
        });

    };

    componentWillUnmount() {

    };
    render() {
        const { songs } = this.props
        const songIds = Object.keys(songs)

        return (
            <div>
                <Greeting isLoggedIn={false} />,
       </div>
        );
    }


}

export default Account
