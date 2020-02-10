import React, { lazy, Suspense } from 'react';
import '../css/app.css';
import NavPage from './NavPage.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { 
  Container,
  Spinner
} from 'react-bootstrap';

//lazy imports
const HomePage = lazy( () => import('./HomePage.js'));
const ContactPage = lazy( () => import('./ContactPage.js'));
const ProjectsPage = lazy( () => import('./ProjectsPage.js'));

//lazy load spinner
const renderLoader = () => <Spinner variant="danger" animation="border" role="status"><span className="sr-only">Loading...</span></Spinner>;


//start main app
function App() {
  return (
    <Router>
      <NavPage />
      <Container id="main-content-container">
        <Switch>
          <Route exact path="/">
            <Suspense fallback={ renderLoader }>
              <HomePage />
            </Suspense>
          </Route>
          <Route path="/projects">
            <Suspense fallback={ renderLoader }>
              <ProjectsPage />
            </Suspense>
          </Route>
          <Route path="/contact">
            <Suspense fallback={ renderLoader }>
              <ContactPage />
            </Suspense>
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
