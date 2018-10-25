import React, { Component } from 'react';
import Navbar from '../components/navbar.jsx';
import '../css/resume.css';
import '../css/portfolio.css';

class Portfolio extends Component {
  render() {
    return (
      <div id="page-top">
        <Navbar />
        <div className="container-fluid p-0">

        <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
        <div className="my-auto">
          <h2 className="mb-5">Portfolio Projects</h2>
            <div className="row text-center">
              <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 project wow animated animated4 fadeInLeft mx-auto my-3">
                <div className="project-hover">
                  <h2>TITLE</h2>

                  <hr />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar ex pulvinar est laoreet ullamcorper.</p>
                  <a href="#?">See Project</a>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 project wow animated animated4 fadeInLeft mx-auto my-3">
                <div className="project-hover">
                  <h2>TITLE</h2>

                  <hr />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar ex pulvinar est laoreet ullamcorper.</p>
                  <a href="#?">See Project</a>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 project wow animated animated4 fadeInLeft mx-auto my-3">
                <div className="project-hover">
                  <h2>TITLE</h2>

                  <hr />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar ex pulvinar est laoreet ullamcorper.</p>
                  <a href="#?">See Project</a>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 project wow animated animated4 fadeInLeft mx-auto my-3">
                <div className="project-hover">
                  <h2>TITLE</h2>

                  <hr />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar ex pulvinar est laoreet ullamcorper.</p>
                  <a href="#?">See Project</a>
                </div>
              </div>
              </div>
        </div>
      </section>

        </div>
      </div>
    );
  }
}
export default Portfolio