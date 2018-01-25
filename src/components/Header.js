import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Popover, PopoverInteractionKind, Position, NavBarDivider } from '@blueprintjs/core'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import firebase from 'firebase';

import NewSongForm from './NewSongForm'

const navStyle = {
  backgroundColor: '#ecf0f1',
  height: '200px'
}

const logoStyle = {
  fontSize: '25px',
  textDecoration: 'none',
  color: '#2980b9'
}

class Header extends Component {
  constructor(props) {
    super(props)
    // this.closePopover = this.closePopover.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      // popoverOpen: false,
      // collapsed: true,
     
      checked: false,
    }
    this.admin = 'Not Checked'
  }

  // closePopover() {
  //   this.setState({ popoverOpen: false })
  // }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  componentWillMount() {
    //setInterval(() => start(this.state.gapi,true), 30000);
    // var rootRef = firebase.database().ref();
    // var urlRef = rootRef.child("admins");
    // var user = firebase.auth().currentUser;
    // var userEmail = user.email;
    // var isAdmin = false;

    // console.log(userEmail);
    // urlRef.once("value", function (snapshot) {
    //   snapshot.forEach(function (child) {
    //     console.log(child.key + ": " + child.val().email);
    //     if (child.val().email == userEmail) {
    //       isAdmin = true;
    //     }
    //   });
    //   console.log('Check' + isAdmin)
    //   if (isAdmin == true) {
    //     this.setState({
    //       admin: true,

    //     });
    //   }
    //   this.setState({
    //     checked: true
    //   })
    // }.bind(this));
  }



  render() {
    return (
      // <nav className="pt-navbar pt-elevation-3" style={navStyle}>
      // <div className="pt-navbar-group pt-align-left">
      //   <Link className="pt-navbar-heading" to="/" aria-label="Home" style = {logoStyle}>AggieDefenders</Link>
      //   {this.props.authenticated
      //       ? <Link className="pt-button pt-minimal pt-icon-document" to="/files" aria-label="Files">Files</Link>
      //       : null
      //   }
      //      <span className="pt-navbar-divider"></span>
      // </div>

      // {

      //   this.props.authenticated
      //   ? (
      //     <div className="pt-navbar-group">
      //       <Link className="pt-button pt-minimal pt-icon-projects" to="/news">News</Link>
      //       <Link className="pt-button pt-minimal pt-icon-projects" to="/events">Events</Link>
      //       <Popover
      //         content={(<NewSongForm addEvent={this.props.addEvent} postSubmitHandler={this.closePopover} />)}
      //         interactionKind={PopoverInteractionKind.CLICK}
      //         isOpen={this.state.popoverOpen}
      //         onInteraction={(state) => this.setState({ popoverOpen: state })}
      //         position={Position.BOTTOM}>
      //         <button className="pt-button pt-minimal pt-icon-add" aria-label="add new song"></button>
      //       </Popover>
      //       <Link className="pt-button pt-minimal pt-icon-chat" to="/chat" aria-label="Account">chat</Link>
      //       <Link className="pt-button pt-minimal pt-icon-calendar" to="/calendar" aria-label="Account">Calendar</Link>
      //       <Link className="pt-button pt-minimal pt-icon-user" to="/account" aria-label="Account"></Link>
      //       <Link className="pt-button pt-minimal pt-icon-cog" style={{color: 'red'}}to="/settings" aria-label="Settings">Admin</Link>
      //       <Link className="pt-button pt-minimal pt-icon-log-out" to="/logout" aria-label="Log Out"></Link>
      //     </div>
      //   )
      //     : (
      //       <div className="pt-navbar-group pt-align-right">
      //         <Link className="pt-button pt-intent-primary" to="/login">Register/Log In</Link>
      //       </div>
      //     )
      // }
      // </nav>

      <div>
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/" className="mr-auto" style={logoStyle}>AggieDefenders
          <i style={{ fontSize: '10px', color: 'gray' }}>Cyber Security Club</i>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
             <div className="pt-navbar-group pt-align-left">

                {this.props.authenticated
                  ?
                  (
                    <div>
                      <Link className="pt-button pt-minimal pt-icon-document" to="/files" aria-label="Files"></Link>
                      <Link className="pt-button pt-minimal pt-icon-projects" to="/news"></Link>
                      <Link className="pt-button pt-minimal pt-icon-calendar" to="/calendar" aria-label="Account"></Link>
                    </div>
                  )
                  : null
                }
                <span className="pt-navbar-divider"></span>
              </div>
              
              {
                
                this.props.authenticated
                  ? (
                <div className="pt-navbar-group pt-align-right">
                      <NavItem>

                      </NavItem>
                      <NavItem>
                        <Link className="pt-button pt-minimal pt-icon-projects" to="/events">Events</Link>
                      </NavItem>


                      <Link className="pt-button pt-minimal pt-icon-chat" to="/chat" aria-label="Account">chat</Link>
                       <span className="pt-navbar-divider"></span>
                       <Link className="pt-button pt-minimal pt-icon-user" to="/account" aria-label="Account"></Link>
                      <Link className="pt-button pt-minimal pt-icon-log-out" to="/logout" aria-label="Log Out"></Link>
                    </div>   
                  
                  )
                  : (
                    <div className="">
                      <NavItem>
                        <NavLink className="pt-button" href="/#/login">Register/Login</NavLink>
                      </NavItem>
                      <NavItem>
                        <Link className="pt-button pt-minimal pt-icon-document" to="/files" aria-label="Files"></Link>
                        <Link className="pt-button pt-minimal pt-icon-projects" to="/news"></Link>
                        <Link className="pt-button pt-minimal pt-icon-calendar" to="/calendar" aria-label="Calendar"></Link>
                      </NavItem>
                    </div>
                  )
              }

              {
               
                this.props.admin && this.props.authenticated
                  ? (
                  <div className="pt-navbar-group pt-align-right">
                    <Link className="pt-button pt-minimal pt-icon-cog" style={{ color: 'red' }} to="/settings" aria-label="Settings">Admin</Link>
                   </div>
               
                  )
                  : (
                   <div />

                  )
              }








            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );


  }
}

export default Header;
