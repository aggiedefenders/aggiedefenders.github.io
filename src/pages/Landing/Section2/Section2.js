import React, { Component } from 'react';
import {
    Spinner,
    Menu,
    MenuItem,
    MenuDivider,
    Popover,
    Position
} from "@blueprintjs/core";
import image from "../../../assets/img/network.gif";
import wave from "../../../assets/img/wave.png";
import city from "./city.gif";
import NewsCard from './NewsCard';
import { Button } from 'reactstrap';


const containerStyle = {
    backgroundColor: 'white',
    minHeight: '600px',
    // backgroundImage: 'url('+city+')',
    overflow: 'hidden',
    borderBottomLeftRadius: '10px',
    borderBottomRightRadius: '10px',

}

const backgroundImage = {
    width: '100%',
    backgroundImage: 'url(' + city + ')',
}
const titleStyle = {
    margin: '0.5em',
    paddingLeft: 0,
    listStyle: 'none',
    color: 'white'
}

const imageStyle = {
    flex: 1,
    position: 'relative',
    padding: '0',
    width: '350px',
    height: null,
    resizeMode: 'contain'
}

class Section2 extends Component {
    constructor() {
        super();

    }
    render() {
        return (
            <div style={containerStyle} className="container-fluid pt-info pt-elevation-2">

                <div className="pt-description">
                    <div className="pt-container">

                        <h1>What's Happening in the World</h1>
                        <h5>Cyber Security News</h5>
                        <hr />

                        <img style={imageStyle}
                            src={city} data-src="" data-src-retina="" alt="kkk" className="img-responsive" />
                        <div className="row">
                            <NewsCard />
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Section2;
