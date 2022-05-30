import React from 'react'
import { projects } from '../data'
import ParticlesBg from 'particles-bg';


export default function Projects() {
  return (
    <div className="project-page">
      <div >
        <h1 className="title">My Education Apps</h1>
      </div>
      <div>
        {projects.map((project) => (
          <div className="project-container">
            <a href={project.github} >
            <img alt="project-image" src={project.image} className="project-image" />
            </a>
              <br></br>
              <h2 className='project-title'>
             {project.title}
              </h2>
              <br></br>
              <h3 className='project-description'>
              {project.description}
              </h3>
              <br></br>
            <a href={project.demo} key={project.id}>
              <h3 className='demo-link'>
              Website Demo
              </h3>
              <br/>
            </a>
          </div>
        ))}
      </div>
      <ParticlesBg num={200} type="cobweb" bg={true} pointer-events={true}/>
    </div>
  )
}


//color
//ball
//lines
//thick
//circle
//cobweb
//polygon
//square
//tadpole
//fountain
//random