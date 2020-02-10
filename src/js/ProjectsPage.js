import React from 'react';
import { 
    Container,
    Row,
    Col
} from 'react-bootstrap';
import '../css/home.css';
import '../css/projects.css';

//col sizing
const xsSize = 12;
const mdSize = 12;
const lgSize = 6;
const xlSize = 4;

function ProjectsPage() {
    return (
      <Container>
        <Row>
          <Col className="project-tile" xs={xsSize} md={mdSize} lg={lgSize} xl={xlSize}>
            <div className="project-tile-inner">
              <h4 className="projects-h4">DEER VALLEY NAMETAGS</h4>
              <p className="font-grey">An App for Company-Wide Nametags</p>
            </div>
          </Col>
          <Col className="project-tile" xs={xsSize} md={mdSize} lg={lgSize} xl={xlSize}>
            <div className="project-tile-inner">
            <h4 className="projects-h4">SYNESTHESIA TRAINING</h4>
              <p className="font-grey">Training Note-Color Association</p>
            </div>
          </Col>
          <Col className="project-tile" xs={xsSize} md={mdSize} lg={lgSize} xl={xlSize}>
            <div className="project-tile-inner">
            <h4 className="projects-h4">PURE MOLD SOLUTION</h4>
              <p className="font-grey">San Antonio Mold Removal Company</p>
            </div>
          </Col>
          <Col className="project-tile" xs={xsSize} md={mdSize} lg={lgSize} xl={xlSize}>
            <div className="project-tile-inner">
            <h4 className="projects-h4">RS GOLDSHARK</h4>
              <p className="font-grey">Virtual Currency Seller's Site</p>
            </div>
          </Col>
          <Col className="project-tile" xs={xsSize} md={mdSize} lg={lgSize} xl={xlSize}>
            <div className="project-tile-inner">
            <h4 className="projects-h4">CHAT APPLICATION</h4>
              <p className="font-grey">Node-based Web Live Chat</p>
            </div>
          </Col>
          <Col className="project-tile" xs={xsSize} md={mdSize} lg={lgSize} xl={xlSize}>
            <div className="project-tile-inner">
            <h4 className="projects-h4">ELEVATOR MAN (GAME)</h4>
              <p className="font-grey">A Game With... Elevators!</p>
            </div>
          </Col>
          <Col className="project-tile" xs={xsSize} md={mdSize} lg={lgSize} xl={xlSize}>
            <div className="project-tile-inner">
            <h4 className="projects-h4">SUBWOOFER WIRING</h4>
              <p className="font-grey">Subwoofer Wiring Diagram App</p>
            </div>
          </Col>

          <Col></Col>
        </Row>
      </Container>
    );
  }
  
  export default ProjectsPage;