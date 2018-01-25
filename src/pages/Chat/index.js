import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Input from './Input';
import * as ReactDOM from 'react-dom';
import { IntlProvider, FormattedMessage, FormattedRelative } from 'react-intl';
import ReactImageFallback from "react-image-fallback";

import avatarImg from '../../assets/img/avatar.png';
const avatarStyle = {
  width: '50px',
  height: '50px'
}

const messageStyles = {
  color: '#2980b9'
}
const containerStyles = {
  backgroundColor: '#ecf0f1',
  // backgroundColor: '#ecf0f1',
  // backgroundColor: '#bdc3c7'
  flexDirection: 'column'

}
const messageListStyles = {
  display: "flex",
  flex: '1',
  justifyContent: "left",
  textAlign: "left",
  height: '250px',
  marginBottom: '50px',
  padding: '5px',
  flexDirection: "column",
  flexWrap: "nowrap",
}

const messageCardStyles = {
  maxWidth: "100%",
  minWidth: "150px",
  height: 'auto',
  flex: "1",
  margin: "1px",
  padding: '0px',
  flexWrap: 'wrap',
  backgroundColor: '#bdc3c7',
  // backgroundColor: '#ecf0f1',
  contentAlign: 'left',
  justifyContent: 'left'

}


class Chat extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }
  scrollToBottom = () => {
    const { messageList } = this.refs;
    const scrollHeight = messageList.scrollHeight;
    const height = messageList.clientHeight;
    const maxScrollTop = scrollHeight - height;
    ReactDOM.findDOMNode(messageList).scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
  }

  render() {
    const { messages } = this.props
    const songIds = Object.keys(messages)

    return (
      <div className='pt-card pt-elevation-3' style={containerStyles}>
        <h1 style={{ marginBottom: "0.5em" }}>Cyber Chat</h1>
        <div className='container' ref="messageList" style={{ overflow: 'auto' }} >
          <div className='' style={messageListStyles}>
            {songIds.map((id) => {
              const song = messages[id]
              return (

                <div key={id} style={messageCardStyles} className="pt-card pt-elevation-2 pt-interactive">
                  <div className="row">
                    <div className="col-md-1 col-sm-2">

                      <ul style={{padding: '5px'}}>
                        <ReactImageFallback
                          
                          src={song.photoUrl}
                          fallbackImage={avatarImg}
                          initialImage={song.photoUrl}
                          alt="cool image should be here"
                          width="30px"
                          height="30px"
                          className="my-image" />


                      </ul>
                    </div>
                    <div className="col-md-2 col-sm-2">
                      <b><ul style={{ fontSize: '10px', padding: 0, marginLeft: '10px', marginBottom: '0px', marginTop: '0px' }}>
                        {song.name}
                      </ul></b>
                      <ul style={{ fontSize: '8px', marginLeft: '0px', paddingLeft: '10px', paddingRight: '10px'}}> <IntlProvider locale="en">
                        <FormattedRelative value={song.time} />
                      </IntlProvider></ul>
                    </div>

                    <div className="col-md-9 col-sm-8">
                      <b style={messageStyles}>{song.content}</b>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <Input addMessage={this.addMessage} />
      </div>
    )
  }
}

export default Chat