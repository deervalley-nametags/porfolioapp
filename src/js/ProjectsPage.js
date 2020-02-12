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

//preload projects
const projectList = [{
  id: 0,
  title: "DEER VALLEY NAMETAGS",
  subtext: "An App for Company-Wide Nametags",
  gif: 0,
  page: 0
},{
  id: 1,
  title: "SYNESTHESIA TRAINING",
  subtext: "Training Note-Color Association",
  gif: 0,
  page: 0
},{
  id: 2,
  title: "PURE MOLD SOLUTION",
  subtext: "San Antonio Mold Removal Company",
  gif: 0,
  page: 0
},{
  id: 3,
  title: "RS GOLDSHARK",
  subtext: "Virtual Currency Seller's Site",
  gif: 0,
  page: 0
},{
  id: 4,
  title: "CHAT APPLICATION",
  subtext: "Node-based Web Live Chat",
  gif: 0,
  page: 0
},{
  id: 5,
  title: "ELEVATOR MAN (GAME)",
  subtext: "A Game With... Elevators!",
  gif: 0,
  page: 0
},{
  id: 6,
  title: "SUBWOOFER WIRING",
  subtext: "Subwoofer Wiring Diagram App",
  gif: 0,
  page: 0
}];

function ProjectsPage() {
  return (
    <Container>
      <Row>
        { projectList.map((listItem) => 
          //for each, list out all the projects in columns
          <Col className="project-tile" key={ listItem.id } xs={ xsSize } md={ mdSize } lg={ lgSize } xl={ xlSize }>
            <div className="project-tile-inner">
              <h4 className="projects-h4">{ listItem.title }</h4>
              <p className="font-grey">{ listItem.subtext }</p>
            </div>
          </Col>
        ) }
        
        {/* empty column just so bootstrap doesnt try to center last column if its odd */}
        <Col></Col>
      </Row>
    </Container>
  );
}
  
  export default ProjectsPage;