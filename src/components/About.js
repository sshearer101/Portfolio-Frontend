import React from 'react'

export default function About() {
  return (
    <div className="about">
      <div className="intro">
        <h1>
          Hi, I'm Sam
          <br />I am a Full-Stack Software Engineer
        </h1>
        <p className="intro-paraagraph">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui laborum
          quasi, incidunt dolore iste nostrum cupiditate voluptas? Laborum,
          voluptas natus?
        </p>
        <a
          href="https://www.linkedin.com/in/sam-shearer-101/"
          className="about-links"
        >
          LinkedIn
        </a>
        <br />
        <a
          href="https://github.com/sshearer101"
          className="about-links"
        >
          Github
        </a>
        <div className="profile-pic">
            <img 
                alt="shearer-img"
                src="/Images/Shearer.jpg"
            />
        </div>
      </div>
    </div>
  )
}
