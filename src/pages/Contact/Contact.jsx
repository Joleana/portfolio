import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [emailForm, setEmailForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('Send');
  const [result, setResult] = useState('');

  const handleEmailFormChange = (e) => {
    setEmailForm({ ...emailForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const response = await axios.post('http://localhost:3001/send-email', emailForm);
      setResult(response.data.message);
      setStatus('Send');
      setEmailForm({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('There was an error sending the email:', error);
      setResult(error.response?.data.message || 'Failed to send the message. Please try again later.');
      setStatus('Send');
    }
  };

  return (
    <div className='contact'>
      <h1>Contact Me</h1>
      <form id='contact-form' className='contact-form' onSubmit={handleSubmit} method='POST'>
        <input
          placeholder='Name'
          type='text'
          name='name'
          required
          value={emailForm.name}
          onChange={handleEmailFormChange}
        />
        <input
          placeholder='Email Address'
          type='email'
          name='email'
          required
          value={emailForm.email}
          onChange={handleEmailFormChange}
        />
        <textarea
          maxLength={300}
          placeholder='Message (max 300 characters)'
          name='message'
          required
          value={emailForm.message}
          onChange={handleEmailFormChange}
        />
        <button type='submit'>{status}</button>
        <h3>{result}</h3>
      </form>
    </div>
  );
};

export default Contact;
