import React from 'react';
import '../css/App.css';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { Container, Row, Col } from 'react-bootstrap';
import NavPage from './NavPage.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <NavPage />

      <Row>
        <Col>
          
        </Col>
      </Row>
    </Router>
  );
}

export default App;
