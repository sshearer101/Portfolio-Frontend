import React from 'react'
import ParticlesBg from 'particles-bg'


export default function About() {
  return (
    <div className="about">
      <div className="intro">
        <div className="intro-div">
          <img
            alt="shearer-img"
            src="/Images/Shearer.jpg"
            className="profile-pic"
          />
          <h1 className="title">
            Hi, I'm Sam
            <br />I am a Full-Stack Software Engineer
            <div className="links-div">
            <a
              href="https://www.linkedin.com/in/sam-shearer-101/"
              className="about-links"
            >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
              width="50"
              height="50"
            />
            </a>
            <br />
            <a href="https://github.com/sshearer101" className="about-links">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              width="50"
              height="50"
            />
            </a>
          </div>
          </h1>
        </div>

        <p className="intro-paragraph">
          I am a certfied fullstack developer through Flatiron's Software
          Engineering program. I have experience using frontend languages like
          JavaScript, React, and Redux, and backend languages like Ruby on
          Rails.
          <br />
          <br />
          Before pursuing a career in tech, I was taught English for two years abroad in Florence, Italy, and was a middle and high school social studies teacher in Aurora, Colorado.
          <br />
          <br />
          I have a passion for teaching and learning as well as sports, games, and reading. I value clear communication, hard work, and collaboration in the workplace.
        </p>
      </div>
      <ParticlesBg num={200} color="#9597ad" type="random" bg={true} pointer-events={true}/>
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
