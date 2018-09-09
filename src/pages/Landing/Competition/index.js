import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax';

import {
    Spinner,
    Menu,
    MenuItem,
    MenuDivider,
    Popover,
    Position
} from "@blueprintjs/core";
// import wave from "../../../assets/img/tech2.png";
import { Button } from 'reactstrap';

import img1 from './img/competition.png';
import pdf from './img/pdf.png';
import doc from './img/doc.png';
import zip from './img/zip.png';
import excel from './img/excel.png';


const containerStyle = {
    backgroundColor: 'white',
    height: 'auto',
    paddingBottom: '0%',
    color: 'black'
}



class Competition extends Component {
    constructor() {
        super();

    }
    render() {
        return (

            <div style={containerStyle} className="container-fluid pt-info pt-elevation-3">
                <Parallax strength={900}>
                    <div className="pt-container">

                        <h1>SECCDC</h1>
                        <h5>Southeast Collegiate Cyber Defense</h5>
                        <hr />

                        <div style={{ justifyContent: 'center', textAlign: 'center' }}>

                            <div style={{ opacity: 0.7, backgroundColor: '#45aaf2' }} className="pt-card pt-interactive">
                                <span style={{ opacity: 3, color: 'black' }}>
                                    The Southeast Collegiate Cyber Defense Competition Qualifier (SECCDQC) provides an
                                        opportunity for qualified educational institutions in the Southeast to compete, and is part of a
                                        national organization (see www.nationalccdc.org) to provide a unified approach across nine
                                        regions of the country. Qualified educational institutions include those with information
                                        assurance or computer security curricula. The Southeast Collegiate Cyber Defense Competition
                                        provides a controlled competitive environment that will permit each participating institution to
                                        assess their students’ depth of understanding and operational competency in managing the
                                        challenges inherent in protecting an enterprise network infrastructure and business information
                                        systems.
                                    </span>
                            </div>
                            <div style={{ justifyContent: 'center', marginBottom: '20px' }} className="row">
                                <h4>Downloads</h4>
                                <hr />
                            </div>
                            <div style={{ justifyContent: 'center', fontSize:'10px' }} className="row">
                                <div className="col-sm-6 col-md-1">
                                   <a 
                                   href={"https://firebasestorage.googleapis.com/v0/b/aggiedefenders.appspot.com/o/files%2Flabs%2F2018%20SECCDQC%20TeamPack-02-13-2018.pdf?alt=media&token=4ff3c661-6129-4379-a0a0-fdf7c9c3275b"
                                    }> 
                                        <img style={{ width: 'auto', height: '50px' }} src={pdf} alt="pdf_icon" />
                                  </a>
                                    <br />
                                    2018 SECCDQC TeamPack
                                </div>

                                <div className="col-sm-6 col-md-1">
                                    <a href={"https://firebasestorage.googleapis.com/v0/b/aggiedefenders.appspot.com/o/files%2Flabs%2F2018%20SECCDQC%20Team%20Email_Final.pdf?alt=media&token=df14b3ee-8fb6-4cbe-9a40-ab67fc562d29"
                                    }>
                                        <img style={{ width: 'auto', height: '50px' }} src={pdf} alt="pdf_icon" />
                                    </a>
                                      <br />
                                     2018 SECCDQC Team Email Final
                                </div>

                                <div className="col-sm-6 col-md-1">
                                    <a href={"https://firebasestorage.googleapis.com/v0/b/aggiedefenders.appspot.com/o/files%2Flabs%2F2016%20SECCDC%20Rules.pdf?alt=media&token=399fdcb5-03af-43df-95c4-80e11ef50592"}>
                                        <img style={{ width: 'auto', height: '50px' }} src={pdf} alt="pdf_icon" />
                                    </a>
                                    <br />
                                     2016 SECCDQC Rules
                                </div>
                                <div className="col-sm-6 col-md-1">
                                    <a href={"https://firebasestorage.googleapis.com/v0/b/aggiedefenders.appspot.com/o/files%2Flabs%2FSECCDQC%20Prelim%20Connection%20Test%20and%20Session%20Schedules.docx?alt=media&token=b5be14e6-0364-4dd2-bc3a-b971dd1e5c42"}>
                                        <img style={{ width: 'auto', height: '50px' }} src={doc} alt="doc_icon" />
                                    </a>
                                      <br />
                                    SECCDQC Prelim Connection Test and Session Schedules
                                </div>

                                <div className="col-sm-6 col-md-1">
                                    <a href={"https://firebasestorage.googleapis.com/v0/b/aggiedefenders.appspot.com/o/files%2Flabs%2FMoodleUserShell.csv?alt=media&token=3deddab8-90a6-4dc5-9399-6e85ad4cd1a1"}>
                                        <img style={{ width: 'auto', height: '50px' }} src={excel} alt="excel_icon" />
                                    </a>
                                    <br />
                                    Moodle User Shell
                                </div>
                                <div className="col-sm-6 col-md-1">
                                    <a href={"https://firebasestorage.googleapis.com/v0/b/aggiedefenders.appspot.com/o/files%2Flabs%2FPaloAltoDocs.zip?alt=media&token=ce2f4c2d-0e7e-4515-bc03-6839c7a41c8e"}>
                                        <img style={{ width: 'auto', height: '50px' }} src={zip} alt="zip_icon" />
                                    </a>
                                    <br />
                                    PaloAltoDocs
                                </div>
                                <div className="col-sm-6 col-md-1">
                                    <a href={"https://firebasestorage.googleapis.com/v0/b/aggiedefenders.appspot.com/o/files%2Flabs%2FHALPolicies-Prelim.zip?alt=media&token=c60bc142-d721-4e4d-b912-bc4ede1db75b"}>
                                        <img style={{ width: 'auto', height: '50px' }} src={zip} alt="zip_icon" />
                                     </a>
                                      <br />
                                    HAL_Policies_Prelim
                                </div>
                            </div>
                        </div>
                    </div>
                    <Background className="custom-bg">
                        <img style={{ maxWidth: '600px', width: 'auto', justifyContent: 'center' }} src={img1} alt="fill murray" />
                    </Background>
                </Parallax>

            </div>

        );
    }
}

export default Competition;
