import React from 'react'
import { skills } from '../data'

export default function Skills() {
  return (
    <div>
      <div className="skills-intro">
        <h1>Skills &amp; Technologies </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
          ipsa delectus eum quo voluptas aspernatur accusantium distinctio
          possimus est.
        </p>
      </div>
      <div className="skills-info">
        {skills.map((skill) => (
          <img alt="skill-symbol" src={skill.skill}/>
        ))}
      </div>
    </div>
  )
}
