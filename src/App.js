import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';


import Home from './pages/Home.jsx';
import Experience from './pages/Experience.jsx';
import Education from './pages/Education.jsx';
import Skills from './pages/Skills.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Site from './pages/Site.jsx';
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path={"${process.env.PUBLIC_URL}/home"} component={Home}/>
          <Route path="/experience" component={Experience}/>
          <Route path="/education" component={Education}/>
          <Route path="/skills" component={Skills}/>
          <Route path="/portfolio" component={Portfolio}/>
          <Route path="/site" component={Site}/>
          </div>
      </Router>
    );
  }
}

export default App;
