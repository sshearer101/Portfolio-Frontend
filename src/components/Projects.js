import React from 'react'
import { projects } from '../data'

export default function Projects() {
  return (
    <div className="project-page">
      <div >
        <h1 className="title">My Education Apps</h1>
      </div>
      <div>
        {projects.map((project) => (
          <div className="project-container">
            <img alt="project-image" src={project.image} className="project-image" />
              <br></br>
              <h2 className='project-title'>
             {project.title}
              </h2>
              <br></br>
              <h3 className='project-description'>
              {project.description}
              </h3>
              <br></br>
            <a href={project.github} key={project.id}>
              <h3 className='demo-link'>
              {project.demo}
              </h3>
              <br/>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
