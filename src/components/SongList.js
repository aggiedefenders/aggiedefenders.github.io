import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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

class SongList extends Component {
  render() {
    const { news } = this.props
    const songIds = Object.keys(news)

    return (
      <div>
        <h1 style={{marginBottom: "0.5em"}}>Title</h1>

        <div style={songListStyles}>
          {songIds.map((id) => {
            const song = news[id]
            return (
              <div key={id} style={songCardStyles} className="pt-card pt-elevation-0 pt-interactive">

                
                <h5><Link to={`/news`}>{song.title}</Link></h5>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default SongList
