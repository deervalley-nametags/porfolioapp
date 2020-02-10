import React from 'react';
import { 
    Container,
    Row,
    Col
} from 'react-bootstrap';
import '../css/home.css';

//breakpoint sizes
const xsSize = 12;
const mdSize = 6;
const lgSize = 6;

function HomePage() {
    return (
    <Container>
            <Row className="mt-3">
                <Col xs={xsSize} md={mdSize} lg={lgSize}>
                    <div className="home-pic" id="home-face-pic">face pic</div>
                </Col>
                <Col xs={xsSize} md={mdSize} lg={lgSize}>
                    <h4 className="home-h4">EMILY THOMAS</h4>
                    <p className="font-grey">Web Developer</p>
                    <p>
                        Hi there! I'm Em and I like to stay up late at night doing lines of code!
                    </p>
                    <p className="font-grey">
                        Wait, that didn't sound right.
                    </p>
                    <p>
                        I'm Em and I like to program and learn new technologies! 
                        I've been making websites as a hobby on and off since 2007, but
                        have made a number of professional websites since then
                        (check them out in the Projects tab)
                    </p>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col xs={xsSize} md={mdSize} lg={lgSize}>
                    <h4 className="home-h4">TECHNOLOGIES</h4>
                    <p className="font-grey">No need to reinvent the Web</p>
                    <ul>
                        <li>React</li>
                        <li>Node</li>
                        <li>jQuery</li>
                        <li>HTML / CSS</li>
                        <li>Bootstrap</li>
                        <li>Google Firebase / Firestore</li>
                        <li>MySQL</li>
                        <li>Mobile First / Responsive</li>
                    </ul>
                </Col>
                <Col xs={xsSize} md={mdSize} lg={lgSize}>
                    <div className="home-pic" id="home-npm-pic">npm install EmilyThomas</div>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col xs={xsSize} md={mdSize} lg={lgSize}>
                    <div className="home-pic" id="home-phi-pic">code symbol</div>
                </Col>
                <Col xs={xsSize} md={mdSize} lg={lgSize}>
                    <h4 className="home-h4">DESIGN PHILOSOPHIES</h4>
                    <p className="font-grey">I think Socrates used these too...</p>
                    <ul>
                        <li>Readable Code</li>
                        <li>Useful Comment Blocks</li>
                        <li>Don't Repeat Yourself</li>
                        <li>Reusable Functions</li>
                        <li>Staying on Top of Best Practices</li>
                        <li>Agile</li>
                        <li>REST</li>
                    </ul>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col xs={xsSize} md={mdSize} lg={lgSize}>
                    <h4 className="home-h4">RANDOM ABOUT</h4>
                    <p className="font-grey">Personality Boost in 1.. 2.. 3..</p>
                    <ul>
                        <li>Readable</li>
                    </ul>
                </Col>
                <Col xs={xsSize} md={mdSize} lg={lgSize}>
                    <div className="home-pic" id="home-random-pic">random</div>
                </Col>
            </Row>
    </Container>
    );
  }
  
  export default HomePage;
