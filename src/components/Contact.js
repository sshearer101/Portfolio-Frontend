import React from 'react'

export default function Contact() {
  return (
    <div>
      <div className="contact-info">
        <h2>EMAIL</h2>
        <a>sshearer101@gmail.com</a>
        <h2>PHONE</h2>
        <p>919-260-1701</p>
      </div>
      <form className="contact-form">
        <h2>Hire Me</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
          suscipit officia aspernatur veritatis. Asperiores, aliquid?
        </p>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
