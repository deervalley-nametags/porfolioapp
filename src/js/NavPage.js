import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faHome, 
    faProjectDiagram,
    faBars,
    faEnvelope,
    faCaretSquareLeft,
    faCode
} from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import '../css/nav.css';
import { NavLink } from "react-router-dom";

function NavPage() {
    //setup show/hide column B for the nav labels
    const[ colBDisplay, setColBDisplay ] = useState({
        display: "none"
    });
    const toggleColB = ( mode ) => {
        //if mode came in as toggle
        if( mode === "toggle" ){
            //set mode so that the below conditional sets it right
            if( colBDisplay.display === "flex" ){
                //flex, so set it to hide
                mode = "hide";
            }else{
                //none, so set it to show
                mode = "show";
            };
        };
        
        if( mode === "show" ){
            //show mode
            setColBDisplay({
                display: "flex"
            });
        }else{
            //hide mode
            setColBDisplay({
                display: "none"
            });
        }
    };

    //setup show/hide for infoPanelDisplay (project panel info)
    const[ infoPanelDisplay, setInfoPanelDisplay ] = useState({
        display: "none"
    });
    const toggleInfoPanel = ( mode ) => {
        if( mode === "show" ){
            //show mode
            setInfoPanelDisplay({
                display: "flex"
            });
        }else{
            //hide mode
            setInfoPanelDisplay({
                display: "none"
            });
        }
    };

    return (
    <div>
        <div id="navbar-bg">
            <div id="info-panel" style={ infoPanelDisplay }>
                
                <h4>Project Info</h4>
                <p>Name: </p>
                <p>Made With: </p>
                <p>Comments: </p>
                <Button variant="warning">
                    <FontAwesomeIcon icon={faCaretSquareLeft} className="project-info-icon" />BACK
                </Button>
                <Button variant="success">
                    <FontAwesomeIcon icon={faCode} className="project-info-icon" />SOURCE CODE
                </Button>
            </div>
        </div>
        <div id="navbar-container">
            <div className="navbar-row" id="hamburger-stack-container" onClick={ () => toggleColB( "toggle" ) }>
                <div className="navbar-col-a">
                    <FontAwesomeIcon icon={faBars} className="navbar-icon" />
                </div>
            </div>
            <NavLink exact to="/" className="navbar-row" activeClassName="active-navbar-row">
                <div className="navbar-col-a">
                    <FontAwesomeIcon icon={faHome} className="navbar-icon" />
                </div>
                <div style={ colBDisplay } className="navbar-col-b">
                    <h4 className="navbar-h4">Home</h4>
                </div>
            </NavLink>
            <NavLink to="/projects" className="navbar-row" activeClassName="active-navbar-row">
                <div className="navbar-col-a">
                    <FontAwesomeIcon icon={faProjectDiagram} className="navbar-icon" />
                </div>
                <div style={ colBDisplay } className="navbar-col-b">
                    <h4 className="navbar-h4">Projects</h4>
                </div>
            </NavLink>
            <a href="https://github.com/Mercalyn" target="_blank" rel="noopener noreferrer" className="navbar-row" activeclassname="active-navbar-row">
                <div className="navbar-col-a">
                    <FontAwesomeIcon icon={faGithub} className="navbar-icon" />
                </div>
                <div style={ colBDisplay } className="navbar-col-b">
                    <h4 className="navbar-h4">Github</h4>
                </div>
            </a>
            <NavLink to="/contact" className="navbar-row" activeClassName="active-navbar-row">
                <div className="navbar-col-a">
                    <FontAwesomeIcon icon={faEnvelope} className="navbar-icon" />
                </div>
                <div style={ colBDisplay } className="navbar-col-b">
                    <h4 className="navbar-h4">Contact</h4>
                </div>
            </NavLink>
        </div>
    </div>
    );
  }
  
  export default NavPage;
  