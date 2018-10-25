import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
      <a className="navbar-brand js-scroll-trigger" href="/">
        <span className="d-block d-lg-none">Terry Huang</span>
        <span className="d-none d-lg-block">
          <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={require('../img/profile.jpg')} alt=""/>
        </span>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="/">About Me</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="/experience">Work Experience</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="/education">Education</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="/skills">Skills</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="/portfolio">Portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="/site">About Site</a>
          </li>
        </ul>
      </div>
    </nav>
        );
    }
}
export default Navbar