import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { NavLink } from 'react-router-dom';
import "./index.css";

export default function Hire () {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ggkhuup', 'hire_strgglr', form.current, 'vcmod4YECA5SUiPYh')
      .then((result) => {
          console.log(result.text);
          alert("Message sent succesfully")
          window.location.reload();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="hire-container">
        <form  className="form" ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label className='msg'>Message</label>
            <textarea name="message" />
            <input type="submit" className='submit' value="Send" />
        </form>
        <NavLink to='/' className='btn'>Home</NavLink>
    </div>
  );
};