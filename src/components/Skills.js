import React from 'react'
import { skills } from '../data'

export default function Skills() {
  return (
    <div>
      <div className="skills-intro">
        <h1>Skills &amp; Technologies </h1>
        <p>
          Some of the technologies that I have used in projects, assignments, and other coding practices include the following: 
        </p>
       

      </div>
      <div className="skills-info">
        {skills.map((skill) => (
          <img alt="skill-symbol" src={skill.skill}/>
        ))}
      </div>

    <div className="skills-intro-two">  
    <p >
      Other skills and experience include:
    </p>
    <ul>
      <li> Microsoft Word</li>
      <li> Microsoft PowerPoint</li>
      <li> Microsoft Excel</li>
      <li> Google Spreadsheets</li>
    </ul>
    </div>   
    </div>
  )
}
