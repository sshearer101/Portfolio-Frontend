import React, { useState } from 'react'

export default function Contact() {
const [data, setData] = useState([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    e.target.reset()
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: `${name}`,
        email: `${email}`,
        message: `${message}`,
      }),
    })
      .then((r) => r.json())
      .then((data) => {
        setData(data)
      })
  }

  return (
    <div>
      <div className="contact-info">
        <h2>EMAIL</h2>
        <a>sshearer101@gmail.com</a>
        <h2>PHONE</h2>
        <p>919-260-1701</p>
      </div>
      <form 
      name="contact"
      className="contact-form"
      onSubmit={handleSubmit}
      >
        <h2>Contact Me</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
          suscipit officia aspernatur veritatis. Asperiores, aliquid?
        </p>
        <div>
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            onChange={(e) => setEmail(e.target.value)}
           />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea 
            id="message" 
            name="message" 
            onChange={(e) => setMessage(e.target.value)}
            />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
