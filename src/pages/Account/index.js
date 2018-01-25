import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import firebase from 'firebase';
const songListStyles = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
}

const songCardStyles = {
  maxWidth: "30%",
  minWidth: "150px",
  flex: "1",
  margin: "5px",
}

class Account extends Component {
   constructor() {
    super();
    this.state = {
      currentItem: '',
      username: '',
      items: [],
      user: null // <-- add this line
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
        // this.setState({currentUser: user });
        console.log(user.metadata.lastSignInTime);
          
      
        // console.log(this.user);
 


        
    
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
        <h1 style={{marginBottom: "0.5em"}}>Account</h1>
        <div className ="pt-card pt-elevation-3 pt-interactive">
        {this.state.user ?
          <div className="row">
            <div className="col-md-3">
              <div className='user-profile'>
                <img src={this.state.user.photoURL} />
              </div>
            </div>
            <div className ="col-md-3">
              <h5>{this.state.user.displayName}</h5>
            </div>
            <div className ="col-md-3">
              <ul><i>Last Sign in Time</i></ul>
              <ul>{this.state.user.metadata.lastSignInTime}</ul>
            </div>



            </div>
          
          :
          <div className='wrapper'>
            <p>You must be logged in to see the potluck list and submit to it.</p>
          </div>
        }
        
        </div>
        
      </div>
    );
  }
}

export default Account
