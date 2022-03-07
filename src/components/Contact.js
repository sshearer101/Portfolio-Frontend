import React, { useState } from 'react'
import ButtonMailto from './ButtonMailto'


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
        <ButtonMailto label="Write me an E-Mail" mailto="sshearer101@gmail.com" />
        {/* <a href="sshearer101@gmail.com">sshearer101@gmail.com</a> */}
        <h2>PHONE</h2>
        <p>919-260-1701</p>
      </div>
      <form 
      name="contact"
      className="contact-form"
      onSubmit={handleSubmit}
      >
        <h2 className='contact-title'>Contact Me</h2>
        <p className='contact-message'>
          Please provide the contact information below, and I will get back to you in a timely manner.
          <br/> Thank you!
        </p>
        <div className='input-div'>
          <label htmlFor="name">Name</label>
          <br/>
          <input 
            type="text" 
            id="name" 
            name="name" 
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='input-div'>
          <label htmlFor="email">Email</label>
          <br/>
          <input 
            type="email" 
            id="email" 
            name="email" 
            onChange={(e) => setEmail(e.target.value)}
           />
        </div>
        <div className='input-div'>
          <label htmlFor="message">Message</label>
          <br/>
          <textarea 
            id="message" 
            name="message" 
            onChange={(e) => setMessage(e.target.value)}
            />
        </div>
        <button type="submit" className='submit-button'>Submit</button>
      </form>
    </div>
  )
}
