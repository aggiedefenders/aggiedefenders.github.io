import React, { Component } from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom';
import { Spinner } from '@blueprintjs/core';
import { app, base } from './base';
import firebase from 'firebase';
/* Public Pages */
import Contact from './pages/Contact';
import Landing from './pages/Landing';
import Login from './components/Login';
import Recover from './components/Recover';
import Logout from './components/Logout';
/*Components */
import Header from './components/Header';
import Footer from './components/Footer';

import ChordEditor from './components/ChordEditor';
import SongList from './components/SongList';
import News from './pages/News';
import Article from './pages/News/Article';
import AccessDenied from './pages/AccessDenied';
import Account from './pages/Account/index';
import Settings from './pages/Settings';
import Files from './pages/Files';
import Chat from './pages/Chat';
import Calendar from './pages/Calendar';
import Events from './pages/Events';
import Resources from './pages/Resources';
/*Admin Pages */
import AddEvent from './pages/Settings/Events/Add';
import ShowEvent from './pages/Settings/Events/Events';
import ShowNews from './pages/Settings/News/News';
import EditFiles from './pages/Settings/Files';
import AddNews from './pages/Settings/News/Add';
import Admins from './pages/Settings/Admins'



function AuthenticatedRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => authenticated === true
        ? <Component {...props} {...rest} />
        : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />} />
  )
}

function ShowRoute({ component: Component, items, param, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ match, ...props }) => {
        if (rest.requireAuth === true && !rest.authenticated) {
          return (
            <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
          )
        }

        const item = items[match.params[param]]
        if (item) {
          return <Component item={item} {...props} match={match} {...rest} />
        } else {
          return <h1>Not Found</h1>
        }
      }}
    />
  )
}

class App extends Component {
  constructor() {
    super();
    this.setCurrentUser = this.setCurrentUser.bind(this);
    this.addSong = this.addSong.bind(this);
    this.addEvent = this.addEvent.bind(this);
    this.addMessage = this.addMessage.bind(this);
    this.updateMessage = this.updateSong.bind(this);
    this.updateSong = this.updateSong.bind(this);

    this.state = {
      authenticated: false,
      admin: false,
      currentUser: null,
      loading: true,
      songs: {},
      user: null,
      messages: {},
      files: {},
      news: {},
      events: {},
    };

  }

  addSong(title) {
    const songs = { ...this.state.songs };
    const id = Date.now();
    songs[id] = {
      id: id,
      title: title,
      chordpro: "",
      owner: this.state.currentUser.uid
    };

    this.setState({ songs });
  }

  //add event
  addEvent(title, agenda) {
    const events = { ...this.state.events };
    const id = Date.now();
    events[id] = {
      id: id,
      title: title,
      agenda: agenda,

    };
    this.setState({ events });
  }

  //update song ref 
  updateSong(song) {
    const songs = { ...this.state.songs };
    songs[song.id] = song;

    this.setState({ songs });
  }


  //update event ref 
  updateEvent(event) {
    const events = { ...this.state.events };
    events[event.id] = event;

    this.setState({ events });
  }
  addMessage(content) {
    const messages = { ...this.state.messages };
    const id = Date.now();

    messages[id] = {
      id: id,
      content: content,
      time: id,
      owner: this.state.currentUser.uid
    };

    this.setState({ messages });
  }

  updateMessage(message) {
    const messages = { ...this.state.messages };
    messages[message.id] = message;

    this.setState({ messages });
  }


  setCurrentUser(user) {

    if (user) {
      this.setState({
        currentUser: user,
        authenticated: true
      })
    } else {
      this.setState({
        currentUser: null,
        authenticated: false
      })
    }
  }





  componentDidMount() {


  };


  componentWillMount() {


    this.removeAuthListener = app.auth().onAuthStateChanged((user) => {
      if (user) {
        //check admin 
        console.log(user)


        var rootRef = firebase.database().ref();
        var urlRef = rootRef.child("admins");
        var user = firebase.auth().currentUser;
        var userEmail = user.email;
        var isAdmin = false;

        console.log(userEmail);
        urlRef.once("value", function (snapshot) {
          snapshot.forEach(function (child) {
            if (child.val().email == userEmail) {
              isAdmin = true;
            }
          });
          console.log('Check' + isAdmin)
          if (isAdmin == true) {
            this.setState({
              admin: true,

            });
          }
          this.setState({
            checked: true
          })
        }.bind(this));
        /////
        this.setState({
          authenticated: true,
          currentUser: user,
          loading: false,
        });

        this.songsRef = base.syncState(`songs`, {
          context: this,
          state: 'songs'
        });

        this.mRef = base.syncState(`messages`, {
          context: this,
          state: 'messages'
        });

        this.filesRef = base.syncState(`files`, {
          context: this,
          state: 'files'
        });

        this.eventsRef = base.syncState(`events`, {
          context: this,
          state: 'events'
        });

        this.newsRef = base.syncState(`news`, {
          context: this,
          state: 'news'
        });




      } else {
        this.setState({
          authenticated: false,
          currentUser: null,
          loading: false,
        })

        base.removeBinding(this.songsRef);
        base.removeBinding(this.mRef);
        base.removeBinding(this.filesRef);
        base.removeBinding(this.eventsRef);
        base.removeBinding(this.newsRef);
        //
      }
    })
  }

  componentWillUnmount() {
    this.removeAuthListener();
    base.removeBinding(this.songsRef);
    base.removeBinding(this.newsRef);
    base.removeBinding(this.mRef);
    base.removeBinding(this.filesRef);
    base.removeBinding(this.eventsRef);
  }

  render() {
    if (this.state.loading === true) {
      return (
        <div style={{ textAlign: "center", position: "absolute", top: "25%", left: "50%" }}>
          <h3>Loading</h3>
          <Spinner />
        </div>
      )
    }

    return (
      <div style={{ maxWidth: "1160px", margin: "0 auto" }}>
        <HashRouter>
          <div>
            <Header addEvent={this.addEvent} authenticated={this.state.authenticated} admin={this.state.admin} />
            <div className="main-content" style={{ padding: "1em" }}>

              <div className="workspace">
                <Route exact path="/" component={Landing} />
                <Route exact path="/login" render={(props) => {
                  return <Login setCurrentUser={this.setCurrentUser} {...props} />
                }} />
                {/*Unauthenticated Routes*/}
                <Route exact path='/password-reset' component={Recover} />
                <Route exact path="/logout" component={Logout} />
                <Route exact path="/calendar" component={Calendar} />
                <Route exact path="/resources" component={Resources} />
                <Route exact path="/contact" component={Contact} />

                {/*Authenticated Routes*/}
                <AuthenticatedRoute
                  exact
                  path="/files"
                  authenticated={this.state.authenticated}
                  component={Files}
                  files={this.state.files} />

                <ShowRoute
                  path="/news/:fileId"
                  component={Article}
                  authenticated={this.state.authenticated}
                  requireAuth={true}
                  param="fileId"
                  updateSong={this.updateSong}
                  items={this.state.news} />
                <AuthenticatedRoute
                  exact
                  path="/news"
                  authenticated={this.state.authenticated}
                  component={News}
                  news={this.state.news} />


                <AuthenticatedRoute
                  exact
                  path="/events"
                  authenticated={this.state.authenticated}
                  component={Events}
                  songs={this.state.songs}
                />

                <AuthenticatedRoute
                  exact
                  path="/account"
                  authenticated={this.state.authenticated}
                  component={Account}
                  songs={this.state.songs}
                />
                <AuthenticatedRoute
                  exact
                  path="/access-restricted"
                  authenticated={this.state.authenticated}
                  component={AccessDenied}
                />
                {/*Admin pages*/}
                <AuthenticatedRoute
                  exact
                  path="/settings"
                  authenticated={this.state.authenticated}
                  component={Settings}
                  files={this.state.files} />

                <AuthenticatedRoute
                  exact
                  path="/setings/events"
                  authenticated={this.state.authenticated}
                  component={ShowEvent}
                  songs={this.state.songs}
                />
                <AuthenticatedRoute
                  exact
                  path="/setings/news"
                  authenticated={this.state.authenticated}
                  component={ShowNews}
                  songs={this.state.songs}
                />
                <AuthenticatedRoute
                  exact
                  path="/setings/events/add"
                  authenticated={this.state.authenticated}
                  component={AddEvent}
                  songs={this.state.songs}
                />
                <AuthenticatedRoute
                  exact
                  path="/setings/news/add"
                  authenticated={this.state.authenticated}
                  component={AddNews}
                  songs={this.state.songs}
                />

                <AuthenticatedRoute
                  exact
                  path="/setings/admins"
                  authenticated={this.state.authenticated}
                  component={Admins}
                  songs={this.state.songs}
                />
                {/*Other pages*/}

                <AuthenticatedRoute
                  exact
                  path="/settings/files"
                  authenticated={this.state.authenticated}
                  component={EditFiles}
                  files={this.state.files} />
                <AuthenticatedRoute
                  addMessage={this.addMessage}
                  exact
                  path="/chat"
                  authenticated={this.state.authenticated}
                  component={Chat}
                  messages={this.state.messages} />

                {/*<ShowRoute
                  path="/messages/:messageId"
                  component={ChordEditor}
                  authenticated={this.state.authenticated}
                  requireAuth={true}
                  param="messageId"
                  updateSong={this.updateMessage}
                  items={this.state.messages} />
                <ShowRoute
                  path="/calendar/:messageId"
                  component={ChordEditor}
                  authenticated={this.state.authenticated}
                  requireAuth={true}
                  param="messageId"
                  updateSong={this.updateMessage}
                  items={this.state.messages} />*/}
              </div>
            </div>
          </div>
        </HashRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
