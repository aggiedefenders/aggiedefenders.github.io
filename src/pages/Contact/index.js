import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { IntlProvider, FormattedMessage, FormattedRelative } from 'react-intl'
import Iframe from 'react-iframe'
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
const containerStyle = {
    height: '600px'
}

class Contact extends Component {
    render() {


        return (
            <div style={containerStyle} className="pt-container">
                <div className="row">
                    <div className=" col-md-6">
                        <div className="panel">
                            <h2> Contact Us </h2>
                            <hr />

                            <h3>We would love to hear from you</h3>
                            <p>If you are interested in anything cyber security, come visit us at our next meetings{<br />}
                                <span style={{ color: '#2980b9', fontSize: '20px' }}>On Thursday evening,</span></p>
                            <p>Feel free to reach out to Lonnie or Jaekwon if you have any questions. We are an email away </p>

                            <ul><span className="pt-button pt-minimal pt-icon-envelope" /><a className="pt-interactive" href="mailto:lcharris@ncat.edu" >Lonnie Harris</a>{<br />}
                                <i>Faculty Advisor</i>
                            </ul>
                            <ul><span className="pt-button pt-minimal pt-icon-envelope" /><a className="pt-interactive" href="mailto:jdsmith5@aggies.ncat.edu" >Jaekwon Smith</a>{<br />}
                                <i>Student Representative </i>
                            </ul>
                            <ul><span className="pt-button pt-minimal pt-icon-envelope" /><a className="pt-interactive" href="mailto:rgmwanik@aggies.ncat.edu" >Robert Mwaniki</a>{<br />}
                                <i>Web Admin </i>
                            </ul>

                        </div>
                        <hr />
                    </div>
                    <div className=" col-md-4"><h5>We are located at</h5>
                        <p>Cherry Hall, Room 318</p>
                        <div className="pt-container">
                            <Iframe
                                width="450"
                                height="450"
                                frameborder="0" style="border:0"
                                url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3224.847698519703!2d-79.77779748506427!3d36.07281871600433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885318daee4b942f%3A0x804e0988563358b9!2sCherry+Hall%2C+Greensboro%2C+NC+27401!5e0!3m2!1sen!2sus!4v1516844213631"
                            />

                        </div>


                    </div>
                </div>

            </div >

        )


    }
}

export default Contact
