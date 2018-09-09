import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Head from './Head';
import Competition from './Competition';
import Section1 from './Section1';
import Section2 from './Section2/Section2';
import ClubInformation from './ClubInformation';
import What from './What';
const messageStyles ={
  color: '#2980b9'
}
const containerStyles ={
    backgroundColor: '#ecf0f1',
    // backgroundColor: '#bdc3c7'
   
}
const example1Styles = {
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

const example2Styles = {
}

class Landing extends Component {
    constructor(props) {
    super(props)
    this.state = {   
    }
  }


  render() {
    return (
        <div className="">
            <Head />
            <Competition />
            <Section1 />
            <ClubInformation />
             <What />
            <Section2 />
        </div>
    )
  }
}

export default Landing;
