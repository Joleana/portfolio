import React, { Component } from 'react'
import headshot from '../../images/headshot.jpeg'

import './Resume.scss'



export default class Resume extends Component {
  render() {
    return (
      <section id="save">
    <section className="sheet">
      <aside style={{ background: 'black' }}>
        <section className="headshot">
          <img src={headshot} className="Headshot" alt="headshot" />
        </section>
        <section className="contact">
          <ul>
            <li>
              <h5><i className="fa fa-map-marker-alt" title="Location"></i>Mittenwalder Straße 6</h5>
              <h5 align="center">10961, Berlin DE</h5>
            </li>
            <li>
              <h5><i className="fa fa-phone" title="Cell phone"></i>(+49) 176 851 66567</h5>
            </li>
            <li>
              <h5><i className="fa fa-envelope" title="Email"></i> <a href="mailto:joleanashurley@gmail.com" style={{ color: 'white' }} >joleanashurley@gmail.com</a></h5>
            </li>
          </ul>
        </section>
        <section className="skills">
          <h4>Skills</h4>
          <ul>
             <li><span>Agile methodology</span></li>
              <li><span>Team management</span></li>
              <li><span>Product management</span></li>
              <li><span>Data communication</span></li>
              <li><span>Conflict resolution</span></li>
          </ul>
        </section>
        <section className="technologies">
          <h4>Technologies</h4>
          <ul>
              <li><span>Python</span></li>
              <li><span>R</span></li>
              <li><span>Django</span></li>
              <li><span>Ruby</span></li>
              <li><span>Ruby on Rails</span></li>
              <li><span>CSS</span></li>
              <li><span>HTML</span></li>
              <li><span>Javascript</span></li>
              <li><span>Tableau</span></li>
              <li><span>git</span></li>
              <li><span>postgresql</span></li>
              <li><span>MongoDB</span></li>
          </ul>
        </section>
        <section className="references">
          <h4>References</h4>
          <ul>
              <li><h5><strong>Konstanze Neumann</strong></h5></li>
              <li><h5><strong>Co-Founder, Head of Operations</strong></h5></li>
              <li><h5><strong>AtomLeap GmbH</strong></h5></li>
              <li><h5><strong>(+49) 176 231 99874</strong></h5></li>
              <li><h5><strong><a href="mailto:konstanze@atomleap.com" style={{ color: 'white' }} >konstanze@atomleap.com</a></strong></h5></li>
          </ul>
        </section>
      </aside>
      <section id="page-body">
        <header className="name" aria-label="JoleanaShurey">
          <svg width="550px" height="50px" viewBox="0 -5 260 50" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" font-family="CormorantGaramond-Regular, Cormorant Garamond" font-size="45" font-weight="normal">
              <g id="Letter" transform="translate(-54.000000, -140.000000)" fill="#484848">
                <text id="JOLEANA-SHURLEY">x="100" y="174"><tspan>JOLEANA SHURLEY</tspan></text>
              </g>
            </g>
          </svg>
          <hr/>
        </header>
        <section id="page-content">
          <section className="summary">
            <p className="serif" align="center">
              I thrive in <strong>aligning people, technology, and company culture</strong> through engaged and transparent communication towards a collective technical objective.
            </p>
            <br/>
            <p>
              Analytical and proactive <strong>engineering product manager</strong>, whose technical work blends industry experience in full-stack web development, text analytics and data visualization.
            </p>
            <br/>
          </section>
          <section className="experience">
            <h2>Experience</h2>
            <ol>
              <li>
                <header>
                  <h3 className="sanserif">Teaching Assistant - Web Development Bootcamp</h3>
                    <time>March 2021 - June 2021</time>
                </header>
                  <h6>Freelance</h6>
                  <span><strong>le Wagon GmbH</strong></span>
                <ul>
                  <li>Responsible for on-site support of the students in the Web Development Bootcamp during their daily practice time</li>
                <br/>
                </ul>
              </li>
              <li>
                <header>
                  <h3 className="sanserif">Computational Linguist</h3>
                    <time>September 2020 - March 2021</time>
                </header>
                  <h6>Freelance</h6>
                  <span><strong>Studio Le Grand Jäger</strong></span>
                <ul>
                  <li>Provide NLP solutions and visualizations for original series exploring the emergence of socio-cultural values and belief systems in the development of new technologies</li>
                <br/>
                </ul>
              </li>
              <li>
                <header>
                  <h3 className="sanserif">Head of Development</h3>
                    <time>May 2019 – March 2020</time>
                </header>
                  <span><strong>AtomLeap GmbH</strong></span>
                <ul>
                  <li>Coordinated weekly 'Head Of' internal stakeholders meetings to gather project scpoe and requirements</li>
                  <li>Managed backlog of user stories and roadmapped user journeys into features</li>
                  <li>Allocated resources towards technical debt and priority-scoping towards project compeletion</li>
                  <li>Delivered on technical KPIs ensuring a database growth of 30%+ over two quarters</li>
                  <li>Facilitated daily SCRUM stand-up // weekly set-up and reviews // bi-weekly retrospectives</li>
                  <li>Led 1:1s for professional development of ML, data engineering & analytics team</li>
                  <li>Interviewed and onboarded 10+ successful candidates across engineering department</li>
                <br/>
                </ul>
              </li>
              <li>
                <header>
                  <h3 className="sanserif">Data Engineer</h3>
                    <time>March 2018 – May 2019</time>
                </header>
                  <span><strong>AtomLeap GmbH</strong></span>
                <ul>
                  <li>Developed data visualization suite embedded in website application, a core feature of a propietary market intelligence dashboard</li>
                  <li>Collected, prepared, and analyzed market growth and funding streams via statistical analysis and graphical output for bespoke reports in consultancy projects</li>
                <br/>
                </ul>
              </li>
              <li>
                <header>
                  <h3 className="sanserif">Linguistics Researcher</h3>
                    <time>Sep 2013 – Dec 2017</time>
                </header>
                  <span><strong>University of Edinburgh // University of California, Santa Barbara</strong></span>
                <ul>
                    <li>Modeled language change over time using simulated Bayesian populations</li>
                    <li>Investigated linguistic alignment that occurs between speakers during dialogue</li>
                    <li>Conducted ethnographic fieldwork via socio-cognitive methods and interviews</li>
                </ul>
                <br/>
              </li>
            </ol>
          </section>
            <section className="education">
              <h2>Education</h2>
              <ol>
                <li>
                  <div>
                    <h1 className="sanserif">le Wagon - Batch #531</h1>
                    <time>Jan 2021 – March 2021</time>
                  </div>
                  <div>
                    <span><strong>Full-Stack Development Bootcamp</strong></span>
                    <span>le Wagon Berlin GmbH</span>
                  </div>
                </li>
                <br/>
                <li>
                  <div>
                    <h1 className="sanserif">M.Sc., Evolution of Language and Cognition</h1>
                    <time>Sept 2016 – Dec 2017</time>
                  </div>
                  <div>
                      <span><strong>Second-class Honours</strong></span>
                      <span>University of Edinburgh</span>
                  </div>
                </li>
                <br/>
                <li>
                  <div>
                    <h1 className="sanserif">B.A., Linguistics; Minor in TESOL</h1>
                    <time>Sept 2013 – Jul 2016</time>
                  </div>
                  <div>
                      <span><strong>GPA: 3.91</strong></span>
                      <span>University California, Santa Barbara</span>
                  </div>
                </li>
                <br/>
              </ol>
            </section>
          </section>
      </section>
    </section>
  </section>
    );
  }
}
