import React, { useState } from 'react'
import emailjs from '@emailjs/browser';




export default function Contact() {
  const [name, setName] = useState('')
  const [subject, setSubject] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    e.target.reset()

    if(name === ""){
      alert("Don't forget your name!")
  } else if(subject === ""){
      alert("Ooops you need to add a subject.")
  } else if (email === ""){
      alert("Add your email so we can be in touch.")
  } else if (message === ""){
      alert("don't forget to write a message!")
  }
  
 else {
  emailjs.sendForm('service_e8wg1ho', 'template_qrrij1w', e.target, 'RdpFbdsFwvYviV4Iu')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
   
  }
  setName('')
  setSubject('')
  setEmail('')
  setMessage('')

  }



  return (
    <div>
   
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
          <label htmlFor="name"></label>
          <br/>
          <input 
            className='input-text'
            type="text" 
            id="name" 
            name="name" 
            placeholder='Name'
            onChange={(e) => setName(e.target.value)}
          />
        {/* </div>
        <div className='input-div'> */}
          <label htmlFor="email"></label>
          <br/>
          <input 
            className='input-text'
            type="text" 
            id="email" 
            name="email" 
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
           />
        </div>
        <div className='input-div'>
          <label htmlFor="subject"></label>
          {/* <br/> */}
          <input 
            className='input-subject'
            type="text" 
            id="subject" 
            name="subject" 
            placeholder='Subject'
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className='input-div'>
          <label htmlFor="message"></label>
          {/* <br/> */}
          <textarea 
            className='input-message'
            id="message" 
            name="message" 
            placeholder='Message'
            onChange={(e) => setMessage(e.target.value)}
            />
        </div>
        <button type="submit" className='submit-button'>Send Message!</button>
      </form>
    </div>
  )
}
