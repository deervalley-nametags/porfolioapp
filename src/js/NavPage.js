import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faHome, 
    faProjectDiagram,
    faBars,
    faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import '../css/nav.css';
import { Link } from "react-router-dom";

function NavPage() {
    const[ showColB, setShowColB ] = useState("hide");
    const toggleColB = () => {
        if( showColB === "hide" ){
            setShowColB("navbar-col-b");
        }else{
            setShowColB("hide");
        }
    }

    return (
    <div>
        <div id="navbar-bg"></div>
        <div id="navbar-container">
            
            <div className="navbar-row" id="hamburger-stack-container" onClick={toggleColB}>
                <div className="navbar-col-a">
                    <FontAwesomeIcon icon={faBars} className="navbar-icon" />
                </div>
            </div>
            <Link to="/" className="navbar-row">
                <div className="navbar-col-a">
                    <FontAwesomeIcon icon={faHome} className="navbar-icon" />
                </div>
                <div className={ showColB }>
                    <h4 className="navbar-h4">Home</h4>
                </div>
            </Link>
            <Link to="/projects" className="navbar-row">
                <div className="navbar-col-a">
                    <FontAwesomeIcon icon={faProjectDiagram} className="navbar-icon" />
                </div>
                <div className={ showColB }>
                    <h4 className="navbar-h4">Projects</h4>
                </div>
            </Link>
            <Link to="github" className="navbar-row">
                <div className="navbar-col-a">
                    <FontAwesomeIcon icon={faGithub} className="navbar-icon" />
                </div>
                <div className={ showColB }>
                    <h4 className="navbar-h4">Github</h4>
                </div>
            </Link>
            <Link to="/contact" className="navbar-row">
                <div className="navbar-col-a">
                    <FontAwesomeIcon icon={faEnvelope} className="navbar-icon" />
                </div>
                <div className={ showColB }>
                    <h4 className="navbar-h4">Contact</h4>
                </div>
            </Link>
        </div>
    </div>
    );
  }
  
  export default NavPage;
  