import React, { Component } from 'react'

const newSongStyles = {
  padding: '10px'
}

class NewSongForm extends Component {
  constructor(props) {
    super(props)
    this.createSong = this.createSong.bind(this)
  }

  createSong(event) {
    event.preventDefault()

    const title = this.titleInput.value
    this.props.addSong(title)

    this.songForm.reset()
    this.props.postSubmitHandler()
  }

  render() {
    return (
      <div style={newSongStyles}>
        <form onSubmit={(event) => this.createSong(event)} ref={(form) => this.songForm = form }>
          <label className="pt-label">
           Add News Title
            <input style={{width: "100%"}} className="pt-input" name="title" type="text" ref={(input) => { this.titleInput = input }} placeholder="Enter News Article"></input>
          </label>
          <input style={{width: "100%"}} type="submit" className="pt-button pt-intent-primary" value="Create Article"></input>
        </form>
      </div>
    )
  }
}

export default NewSongForm
