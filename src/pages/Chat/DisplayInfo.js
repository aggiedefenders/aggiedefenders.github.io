import React, { Component } from 'react'

const newSongStyles = {
  padding: '10px'
}

class DisplayInfo extends Component {
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
        <i>TIMESTAMP</i>
      </div>
    )
  }
}

export default DisplayInfo
