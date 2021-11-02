import React, { Component } from 'react'
import headshot from '../images/headshot.jpeg'


export default class About extends Component {
  render() {
    return (
      <div>
        <img src={headshot} className="Headshot" alt="headshot" />
        <ul>
          <p>Freelance Web Developer, Berlin Germany</p>
        </ul>
      </div>
    );
  }
}
