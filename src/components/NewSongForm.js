import React, { Component } from 'react'

const newEventStyles = {
  padding: '10px'
}

class NewSongForm extends Component {
  constructor(props) {
    super(props)
    this.createEvent = this.createEvent.bind(this)
  }

  createEvent(event) {
    event.preventDefault()

    const title = this.titleInput.value;
    const agenda = this.contextInput.value;
    this.props.addEvent(title, agenda)

    this.eventForm.reset()
    this.props.postSubmitHandler()
  }

  render() {
    return (
      <div style={newEventStyles}>
        <form onSubmit={(event) => this.createEvent(event)} ref={(form) => this.eventForm = form }>
          <label className="pt-label">
           Add Event Title
            <input style={{width: "100%"}} className="pt-input" name="title" type="text" ref={(input) => { this.titleInput = input }} placeholder="Enter Event Title"></input>
            <input style={{width: "100%", height: "100px"}} className="pt-input" name="title" type="text" ref={(input) => { this.contextInput = input }} placeholder="Agenda Description"></input>
        
         
          </label>
          <input style={{width: "100%"}} type="submit" className="pt-button pt-intent-primary" value="Create Event"></input>
        </form>
      </div>
    )
  }
}

export default NewSongForm
