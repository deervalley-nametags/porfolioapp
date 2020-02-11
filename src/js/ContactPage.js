import React, { useState } from 'react';
import { 
  Container,
  Row,
  Col,
  Button
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelopeSquare,
  faPhoneSquareAlt
} from '@fortawesome/free-solid-svg-icons';
import '../css/contact.css';

function ContactPage() {
  //this is the end result, highest amount of clicks per second recorded,
  //but it figures it out between only 2 clicks
  const[ fastestTime, setFastestTime ] = useState("__");
  let lastClick = 0;
  const clickTime = () => {
    //
  };

  return (
    <Container>
      <Row className="mt-4">
        <Col xs={12}>
          <FontAwesomeIcon className="contact-icon" icon={faEnvelopeSquare} />
          Email
        </Col>
        <Col xs={12}>
          <FontAwesomeIcon className="contact-icon" icon={faPhoneSquareAlt} />
          Number
        </Col>
      </Row>
      <Row className="mt-5">
        <Col xs={12}>
          <h4>Psst! Wanna see how fast you can </h4>
          <Button className="ml-2" onClick={ clickTime }>
            CLICK ME?
          </Button>
        </Col>
        <Col>
          <p className="mt-1">You can click: { fastestTime } times per second</p>
        </Col>
      </Row>
    </Container>
  );
}
  
  export default ContactPage;