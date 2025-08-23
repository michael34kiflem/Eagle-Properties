import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Paper, Alert } from '@mui/material';
import emailjs from 'emailjs-com';
import './BookConsult.css';

function BookConsult() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  function getFormattedDate() {
    const now = new Date(Date.now());
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    return now.toLocaleDateString('en-US', options);
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    // EmailJS configuration with your credentials
    const serviceID = 'service_fg1nddw';
    const templateID = 'template_a3vn9kj';
    const userID = 'nrnYDB_DQBLZF8Tt6';
    
    // Send email using EmailJS
    emailjs.send(serviceID, templateID, {
      from_name: form.name,
      from_email: form.email,
      phone: form.phone,
      message: `${form.name}    
             ${form.phone}
              ${form.email}   
              ${form.message}
              ${getFormattedDate()}
            `,
      to_email: 'biniyamsamuel664@gmail.com'
    }, userID)
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setSubmitted(true);
      setLoading(false);
    })
    .catch((err) => {
      console.error('FAILED...', err);
      setError('There was an error sending your message. Please try again later.');
      setLoading(false);
    });
  };

  return (
    <Box className="book-consult-container" id="meeting">
      <Paper className="book-consult-paper">
        <Box className="book-consult-content">
          <Box className="book-consult-info">
            <Typography variant="h3" className="book-consult-title">
              Book a Free Consultation
            </Typography>
            <Typography variant="h6" className="book-consult-subtitle">
              Get expert advice from our real estate specialists. Whether you're buying, selling, or investing, we'll help you make the best decision for your future.
            </Typography>
            <Typography variant="body1" className="book-consult-description">
              Fill out the form and our team will reach out to schedule your personalized session.
            </Typography>
          </Box>
          
          <Box className="book-consult-form-container">
            {submitted ? (
              <Box className="success-message">
                <Typography variant="h6" className="success-text">
                  Thank you! We'll contact you soon.
                </Typography>
              </Box>
            ) : (
              <form onSubmit={handleSubmit} className="book-consult-form">
                {error && (
                  <Alert severity="error" className="error-alert">
                    {error}
                  </Alert>
                )}
                <TextField
                  label="Full Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  fullWidth
                  required
                  className="form-field"
                />
                <TextField
                  label="Email Address"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  fullWidth
                  required
                  className="form-field"
                />
                <TextField
                  label="Phone Number"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  fullWidth
                  className="form-field"
                />
                <TextField
                  label="Your Message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  multiline
                  rows={3}
                  fullWidth
                  className="form-field message-field"
                />
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  disabled={loading}
                  className="submit-button"
                >
                  {loading ? 'Sending...' : 'Book Consultation'}
                </Button>
              </form>
            )}
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

export default BookConsult;