import React, { useState } from 'react';
import { 
  Container,
  Row,
  Col,
  Button
} from 'react-bootstrap';

//import charts
import '../../node_modules/react-vis/dist/style.css';
import { 
  XYPlot, 
  LineSeries, 
  HorizontalGridLines, 
  VerticalGridLines,
  YAxis,
  XAxis
} from 'react-vis';

//styling import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelopeSquare,
  faPhoneSquareAlt
} from '@fortawesome/free-solid-svg-icons';
import '../css/contact.css';

//img import
import Img from 'react-image'
import EmailWavy from '../img/emailwavy.png';
import PhoneWavy from '../img/phonewavy.png';

function ContactPage() {
  //click fast fun function
  let lastClick = 1001;
  const clickTime = () => {
    //on button click
    let d = new Date();
    let n = d.getMilliseconds();

    //check if it is 1001
    if(lastClick === 1001){
      //means it hasnt been used yet
      lastClick = n;
    }else{
      //been used before

      //check if the number is actually equal or lower
      if(lastClick > n){
        lastClick += 1000;
        console.log("til");
      }

      //do the ms calc
      let msCalc = n - lastClick;
      let numMs = 1000 / msCalc;
      numMs = numMs.toPrecision(3);

      console.log(numMs);

      //push it
      setLineData(lineData.concat({ x: lineData.length, y: numMs}));
    }
  };

  //line chart stuff
  const[ lineData, setLineData ] = useState([{ x: 0, y: 0},{ x:1, y: 0 }]);

  return (
    <Container>
      <Row className="mt-4">
        <Col xs={12} className="contact-col">
          <FontAwesomeIcon id="contact-email" className="contact-icon" icon={faEnvelopeSquare} />
          <Img src={ EmailWavy } />
        </Col>
        <Col xs={12} className="contact-col">
          <FontAwesomeIcon id="contact-phone" className="contact-icon" icon={faPhoneSquareAlt} />
          <Img src={ PhoneWavy } />
        </Col>
      </Row>
      <Row id="contact-chart" className="mt-5">
        <Col xs={12} id="contact-chart-top">
          <h4>Psst! Let's see how fast your mouse is</h4>
          <Button className="ml-2" onClick={ clickTime }>
            CLICK ME
          </Button>
        </Col>
        <Col>
          <XYPlot margin={{top: 30, left: 40, bottom: 40, right: 10}} height={300} width={600}>
            <LineSeries data={lineData} />
            <HorizontalGridLines />
            <VerticalGridLines />
            <XAxis title="# of Click" />
            <YAxis title="CLICKS / SEC" />
          </XYPlot>
        </Col>
      </Row>
    </Container>
  );
}
  
export default ContactPage;