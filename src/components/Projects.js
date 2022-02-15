import React from 'react'
import { projects } from '../data'

export default function Projects() {
  return (
    <div className="projects-page">
      <div >
        <h1 className="project-title">Apps I've Built</h1>
      </div>
      <div>
        {projects.map((project) => (
          <div className="project-container">
            <img alt="project-image" src={project.image} className="project-image" />
              <br></br>
              <br></br>
              Title: {project.title}
              <br></br>
              Description: {project.description}
              <br></br>
            <a href={project.github} key={project.id}>
              Demo: {project.demo}
              <br/>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
