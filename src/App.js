import React from "react";

import Loading from "./loading.js";
import ReactDOM from 'react-dom';
import AboutPage from './components/pages/AboutPage';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ProjectPage from './components/pages/ProjectPage';
import ContactPage from './components/pages/ContactPage';
import ResumePage from './components/pages/ResumePage';

import "./App.scss";

ReactDOM.render(<Router basename={process.env.PUBLIC_URL}>< App /></Router>, document.getElementById('root'));

function App() {
  return (
    // <Router>
      <div className="App">


          <Route path="/" exact render={() => <Loading />} />
          <Route path="/about" render={() => <AboutPage />} />
          <Route path="/projects" render={() => <ProjectPage />} />
          <Route path="/contact" render={() => <ContactPage />} />
          <Route path="/resume" render={() => <ResumePage />} />

      </div>
    // </Router>
  );
}

export default App; 