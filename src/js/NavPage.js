import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faHome, 
    faProjectDiagram,
    faBars,
    faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Row, Col } from 'react-bootstrap';
import '../css/nav.css';

function NavPage() {
    return (
    <div>
        <div id="navbar-bg">
            <div id="nav-face"></div>
        </div>
        <div id="navbar-container">
            
            <div className="navbar-row" id="hamburger-stack-container" >
                <div className="navbar-col-a">
                    <FontAwesomeIcon icon={faBars} className="navbar-icon" />
                    
                </div>
            </div>
            <div className="navbar-row">
                <div className="navbar-col-a">
                    <FontAwesomeIcon icon={faHome} className="navbar-icon" />
                </div>
                <h4 className="navbar-h4">Home</h4>
            </div>
            <div className="navbar-row">
                <div className="navbar-col-a">
                    <FontAwesomeIcon icon={faProjectDiagram} className="navbar-icon" />
                </div>
                <h4 className="navbar-h4">Projects</h4>
            </div>
            <div className="navbar-row">
                <div className="navbar-col-a">
                    <FontAwesomeIcon icon={faGithub} className="navbar-icon" />
                </div>
                <h4 className="navbar-h4">Github</h4>
            </div>
            <div className="navbar-row">
                <div className="navbar-col-a">
                    <FontAwesomeIcon icon={faEnvelope} className="navbar-icon" />
                </div>
                <h4 className="navbar-h4">Contact</h4>
            </div>
        </div>
    </div>
    );
  }
  
  export default NavPage;
  