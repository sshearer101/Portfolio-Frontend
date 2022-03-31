import React from 'react'
import { skills } from '../data'

export default function Skills() {


  return (
    <div>
      <div className="skills-intro">
        <h1>Skills &amp; Technologies </h1>
        <p>
          Since beginning the pursuit of my tech career in July of 2021, I have worked with both frontend and backend languages. 
          <br></br>
          <br></br>
          I have been able to create responsive user-friendly websites that cater to my interests and are built with best practices. My main area of expertise is with frontend development languages like HTML, CSS, and JavaScript to build small web apps that provide animations, interactive platforms, and interact with backend servers.
          <br></br>
          <br></br>
          I also have experience with backend languages like Ruby on Rails. 
          <br></br>
          <br></br>
          {/* Visit my LinkedIn profile for more details to contact me! */}
          Visit my <a href="https://www.linkedin.com/in/sam-shearer-101/"> LinkedIn</a> for more details to contact me
        

        </p>
       

      </div>
      <div className="skills-info">
        {skills.map((skill) => (
          <img alt="skill-symbol" src={skill.skill} className="skill-symbol"/>
        ))}
      </div>
{/* 
    <div className="skills-intro-two">  
    <p >
      Other skills and experience include:
    </p>
    <ul className='skill-list'>
      <li> Microsoft Word</li>
      <li> Microsoft PowerPoint</li>
      <li> Microsoft Excel</li>
      <li> Google Spreadsheets</li>
      <li> Github</li>

    </ul>
    </div>    */}
    </div>
  )
}
