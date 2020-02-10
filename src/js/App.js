import React from 'react';
import '../css/App.css';
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
      
    </Router>
  );
}

export default App;
