import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { IntlProvider, FormattedMessage, FormattedRelative } from 'react-intl'

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

class Resources extends Component {
    render() {


        return (
            <div className="pt-container">
                <div className="panel">
                    <h5> Resources </h5>
                    <hr />
                    <p>Take a look at some of the tools we use in the club</p>
                    <ul><a className="pt-interactive" href="https://www.virtualbox.org/" >Virtual Box</a>{<br />}
                        <i>VirtualBox is a general-purpose full virtualizer for x86 hardware </i>
                    </ul>
                    <ul><a className="pt-interactive" href="https://www.wireshark.org/" >WireShark</a>{<br />}
                        <i>Network Protocol analyzer </i>
                    </ul>
                    <ul><a className="pt-interactive" href="https://www.kali.org/downloads/" >Kali Linux</a>{<br />}
                        <i>Open Source Operating System for security training and penetration testing services</i>
                    </ul>
                    <ul><a className="pt-interactive" href="https://www.cybrary.it/">Cybrary</a>{<br />}
                        <i>Free resource to learn more about Cyber Security</i>
                    </ul>
                </div>
                <hr />
                <b> 
                    <a className="pt-interactive" href="/#/files" >We also have helpful documentation you can download, here.</a>
                </b>

            </div>
        )


    }
}

export default Resources
