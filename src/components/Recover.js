import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Toaster, Intent } from '@blueprintjs/core'
import { app, base, facebookProvider } from '../base'

const loginStyles = {
  width: "90%",
  maxWidth: "315px",
  margin: "20px auto",
  border: "1px solid #ddd",
  borderRadius: "5px",
  padding: "10px"
}

class PasswordReset extends Component {
  constructor(props) {
    super(props)
    this.authWithFacebook = this.authWithFacebook.bind(this)
    this.authWithEmailPassword = this.authWithEmailPassword.bind(this)
    this.state = {
      redirect: false
    }
  }

  authWithFacebook() {
    app.auth().signInWithPopup(facebookProvider)
      .then((user, error) => {

        const { user: { uid, displayName, photoURL, email } } = user;
        if (error) {
          this.toaster.show({ intent: Intent.DANGER, message: "Unable to sign in with Facebook" })
        } else {
          this.props.setCurrentUser(user)
          this.setState({ redirect: true })
        }
      })
  }




  


  authWithEmailPassword(event) {
    event.preventDefault()
    const email = this.emailInput.value;
  

    app.auth().sendPasswordResetEmail(email)
      .then(() => {
    
          this.loginForm.reset()
          this.toaster.show({ intent: Intent.WARNING, message: "Password Reset was sent to "+email })
      })
      .catch((error) => {
        this.toaster.show({ intent: Intent.DANGER, message: error.message })
      });
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }

    if (this.state.redirect === true) {
      return <Redirect to={from} />
    }

    return (
      <div style={loginStyles}>
        <Toaster ref={(element) => { this.toaster = element }} />
        <form onSubmit={(event) => { this.authWithEmailPassword(event) }} ref={(form) => { this.loginForm = form }}>
          <div style={{marginBottom: "10px"}} className="pt-callout pt-icon-info-sign">
            <h5>Note</h5>
                A recovery email will be sent to the email you provide below.
          </div>
          <label className="pt-label">
            Email
            <input style={{width: "100%"}} className="pt-input" name="email" type="email" ref={(input) => { this.emailInput = input }} placeholder="Email"></input>
          </label>
          <input style={{width: "100%"}} type="submit" className="pt-button pt-intent-primary" value="Send"></input>

        </form>
      </div>
    )
  }
}

export default PasswordReset
