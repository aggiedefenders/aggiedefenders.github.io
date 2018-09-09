import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { app, base } from '../../../base';
import { Button } from 'reactstrap';

import firebase from 'firebase';
var database = firebase.database();
var filesRef = firebase.database().ref().child('news');


const containerStyle = {
    backgroundColor: '#2980b9',
    color: 'white'
};




const cardStyle = {
    minWidth: "150px",
    minHeight: '400px',
    padding: '10px',
    margin: "5px",
}


class NewsCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            products: []
        };

        this.filesRef = database.ref('news');
    }

    componentDidMount() {


        this.filesRef.on('value', this.gotData, this.errData);
    }


    gotData = (data) => {
        let newProducts = []
        const userdata = data.val();
        if (userdata) {
            const keys = Object.keys(userdata);

            for (let i = 0; i < keys.length; i++) {
                const k = keys[i];
                newProducts.push({
                    id: userdata[k].id, title: userdata[k].title, content: userdata[k].content, subtitle: userdata[k].subtitle, time: userdata[k].id,
                    url: userdata[k].url
                });
            }
            this.setState({ products: newProducts });
        }

    }

    errData = (err) => {
        console.log(err);
    }




    render() {

        const events = this.state.products;
        console.log(events)
        const fileIds = Object.keys(events)
        var MAX_CONTENT_LENGTH = 350;
        var MAX_TITLE_LENGTH = 50;
        return (
            <div className="panel">
                {/*<h1 style={{marginBottom: "0.5em"}}>news</h1>*/}

                <div className="row">
                    {fileIds.map((id) => {
                        const file = events[id]
                        var title = file.title.substring(0, MAX_TITLE_LENGTH);
                        var content = file.content.substring(0, MAX_CONTENT_LENGTH).concat("...");
                        if (title.length > 20) {
                            title = title.concat("...")
                        }
                
                        return (
                            <div className="col-md-6 pt-running-text">
                                <div style={cardStyle} className="pt-card pt-elevation-2 pt-interactive">
                                    <h4>{title}</h4>
                                    {content}
                                <div style={{justifyContent:'center', textAlign:'center'}}>
                                 <hr style={{ paddingLeft: '20px',paddingRight: '20px', width: '80%', textAlign: 'center', justifyContent:'center' }} /> 
                                </div>
                                    <Button outline color="success" href={file.url}>Get More Info</Button>
                                </div>
                            </div>

                        )
                    })}
                </div>
            </div>
        )
    }
}



export default NewsCard;