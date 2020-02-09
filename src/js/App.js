import React from 'react';
import '../css/App.css';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { Container, Row, Col } from 'react-bootstrap';
import NavPage from './NavPage.js';

function App() {
  return (
    <Row>
      <NavPage />

      <Row>
        <Col>
          a
        </Col>
      </Row>
    </Row>
  );
}

export default App;
