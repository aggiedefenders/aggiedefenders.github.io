import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {IntlProvider, FormattedMessage,FormattedRelative} from 'react-intl'

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

class News extends Component {
  render() {
    const {news} = this.props
   
    const fileIds = Object.keys(news)

    return (
      <div>
        <h1 style={{marginBottom: "0.5em"}}>News</h1>

        <div>
          {fileIds.map((id) => {
            const article = news[id]
            return (
              <div key={id}  className="pt-card pt-elevation-0 pt-interactive">
                 <h5><Link to={`/news/${id}`}>{article.title}</Link></h5>
                <ul style={{fontSize:'10px'}}> 
                  <IntlProvider locale="en">
                        <FormattedRelative value={article.id} />
                  </IntlProvider>
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default News
