import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Input from './Input';

const messageStyles ={
  color: '#2980b9'
}
const containerStyles ={
    backgroundColor: '#ecf0f1',
    // backgroundColor: '#bdc3c7'
   
}
const songListStyles = {
  display: "flex",
 
  justifyContent: "center",
  textAlign: "center",
  height: '250px',
  overflowY: 'auto',
  marginBottom: '20px',
  padding: '5px',
  
  flexDirection: "column",
  flexWrap: "nowrap",
  

}

const songCardStyles = {
  maxWidth: "100%",
  minWidth: "150px",
  height: 'auto',
  flex: "1",
  margin: "1px",
  padding: '5px',
  flexWrap: 'wrap',
  backgroundColor: '#ecf0f1',

}

class Chat extends Component {
    constructor(props) {
    super(props)
  
    this.state = {
      
    }
  }


  render() {
    const { messages } = this.props
   
    console.log(messages);
    const songIds = Object.keys(messages)

    return (
      <div className='pt-card pt-elevation-3' style={containerStyles}>
        <h1 style={{marginBottom: "0.5em"}}>Cyber Chat</h1>

        <div className ='' style={songListStyles}>
          {songIds.map((id) => {
            const song = messages[id]
            return (
         
              <div key={id} style={songCardStyles} className="pt-card pt-elevation-2 pt-interactive">
               <div className="row">
                 <div className="col-md-8">
                   <b style={messageStyles}>{song.content}</b>
                </div>
                  <div className="col-md-4"><i>{song.owner}</i></div>
              </div>
            </div>
            )
          })}
        </div>
        <Input addMessage={this.addMessage} />
      </div>
    )
  }
}

export default Chat
