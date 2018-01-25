import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
const fileListStyles = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
}

const fileCardStyles = {
  maxWidth: "30%",
  minWidth: "150px",
  flex: "1",
  margin: "5px",
  overflow: 'hidden'
}

class Files extends Component {
  render() {
    const { files } = this.props
   
    const fileIds = Object.keys(files)

    return (
      <div>
        <h1 style={{marginBottom: "0.5em"}}>Files</h1>

        <div style={fileListStyles}>
          {fileIds.map((id) => {
            const file = files[id]
            return (
              <div key={id} style={fileCardStyles} className="pt-card pt-elevation-0 pt-interactive">
                <a href = {`${file.downloadURL}`} target="_blank"><h5>{file.fileName}</h5></a>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Files
