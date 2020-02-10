import React from 'react';
import { 
    Container,
    Row,
    Col
} from 'react-bootstrap';
import '../css/home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faReact,
    faNodeJs,
    faHtml5,
    faBootstrap,
    faGoogle,
    faJsSquare
} from '@fortawesome/free-brands-svg-icons';
import { 
    faDatabase,
    faMobile,
    faKeyboard,
    faCode,
    faCommentSlash,
    faSquareRootAlt,
    faMedal,
    faCheckSquare,
    faSkiing,
    faAnchor,
    faFish,
    faTheaterMasks,
    faMugHot,
    faVrCardboard,
    faSitemap
} from '@fortawesome/free-solid-svg-icons';

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
                    <p className="font-grey">No need to reinvent the <s>wheel</s> Web</p>
                    <ul>
                        <li><FontAwesomeIcon className="mini-icon" icon={faReact} />React</li>
                        <li><FontAwesomeIcon className="mini-icon" icon={faNodeJs} />Node</li>
                        <li><FontAwesomeIcon className="mini-icon" icon={faJsSquare} />jQuery</li>
                        <li><FontAwesomeIcon className="mini-icon" icon={faHtml5} />HTML / CSS</li>
                        <li><FontAwesomeIcon className="mini-icon" icon={faBootstrap} />Bootstrap</li>
                        <li><FontAwesomeIcon className="mini-icon" icon={faVrCardboard} />Pixi.js (2d Engine)</li>
                        <li><FontAwesomeIcon className="mini-icon" icon={faGoogle} />Google Firebase / Firestore</li>
                        <li><FontAwesomeIcon className="mini-icon" icon={faDatabase} />MySQL</li>
                        <li><FontAwesomeIcon className="mini-icon" icon={faMobile} />Mobile First / Responsive</li>
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
                        <li><FontAwesomeIcon className="mini-icon" icon={faCode} />Readable Code</li>
                        <li><FontAwesomeIcon className="mini-icon" icon={faKeyboard} />Useful Comment Blocks</li>
                        <li><FontAwesomeIcon className="mini-icon" icon={faCommentSlash} />Don't Repeat Yourself</li>
                        <li><FontAwesomeIcon className="mini-icon" icon={faSquareRootAlt} />Reusable Functions</li>
                        <li><FontAwesomeIcon className="mini-icon" icon={faMedal} />Staying on Top of Best Practices</li>
                        <li><FontAwesomeIcon className="mini-icon" icon={faSkiing} />Agile</li>
                        <li><FontAwesomeIcon className="mini-icon" icon={faCheckSquare} />REST</li>
                        <li><FontAwesomeIcon className="mini-icon" icon={faSitemap} />UI Flow</li>
                    </ul>
                </Col>
            </Row>
            <Row className="mt-3 mb-5">
                <Col xs={xsSize} md={mdSize} lg={lgSize}>
                    <h4 className="home-h4">RANDOM ABOUT ME</h4>
                    <p className="font-grey">Personality Boost in 1.. 2.. 3..</p>
                    <ul>
                        <li><FontAwesomeIcon className="mini-icon" icon={faAnchor} />
                            Once turned a canoe into a sailboat
                        </li>
                        <li><FontAwesomeIcon className="mini-icon" icon={faTheaterMasks} />
                            Enjoy scriptwriting and animating
                        </li>
                        <li><FontAwesomeIcon className="mini-icon" icon={faFish} />
                            Speak quite a bit of Swedish
                        </li>
                        <li><FontAwesomeIcon className="mini-icon" icon={faKeyboard} />
                            I can type, like, a bajillion words per minute
                        </li>
                        <li><FontAwesomeIcon className="mini-icon" icon={faMugHot} />
                            I think I worship coffee
                        </li>
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
