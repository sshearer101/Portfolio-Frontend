import React from 'react'

export default function About() {
  return (
    <div className="about">
      <div className="intro">
        <h1 className="title">
          Hi, I'm Sam
          <br />I am a Full-Stack Software Engineer
        </h1>
        <p className="intro-paragraph">
          I am a certfied fullstack developer through Flatiron's Software
          Engineering program. I have experience using frontend languages like
          JavaScript, React, and Redux, and backend languages like Ruby and
          Rails.
          <br/>
          
        </p>
      
        <div className="profile-pic-div">
          <img alt="shearer-img" src="/Images/Shearer.jpg" className="profile-pic"/>
        </div>
        <a
          href="https://www.linkedin.com/in/sam-shearer-101/"
          className="about-links"
        >
          LinkedIn
        </a>
        <br />
        <a href="https://github.com/sshearer101" className="about-links">
          Github
        </a>
      </div>
    </div>
  )
}
