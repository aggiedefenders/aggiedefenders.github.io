import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ChordSheetJS from 'chordsheetjs';
import {Button} from 'reactstrap';
class Article extends Component {
  constructor(props) {
    super(props);
    
  }



  render() {
    const { item: article } = this.props

    return (
      <div>
        <ul className="pt-breadcrumbs">
          <li><Link to="/news" className="pt-breadcrumb">News</Link></li>
          <li><Link to="#" className="pt-breadcrumb">{article.title}</Link></li>
        </ul>
        <h2 style={{margin: "0.5em 0"}}>{article.title}</h2>
        
          <div className="panel">
          {article.content}
        
          </div>
    </div>
    
    );
  }
}

export default Article;
