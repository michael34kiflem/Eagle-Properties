import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Paper, Alert } from '@mui/material';
import emailjs from 'emailjs-com';

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
    weekday: 'long',   // e.g., "Thursday"
    year: 'numeric',   // e.g., "2025"
    month: 'long',     // e.g., "August"
    day: 'numeric'     // e.g., "21"
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
    <Box
      sx={{
        py: 6,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(120deg, #e3f2fd 0%, #f5f7fa 100%)',
        minHeight: '70vh',
        fontFamily: 'Roboto, Arial, sans-serif',
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: { xs: 2, md: 6 },
          borderRadius: 2,
          maxWidth: '80vw',
          width: '80vw',
          boxShadow: '0 8px 32px rgba(26,35,126,0.10)',
          background: 'rgba(255,255,255,0.95)',
          height: 'auto',
          minHeight: '50vh',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            flex: 1,
            pr: { md: 6 },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            mb: { xs: 3, md: 0 },
          }}
        >
          <Typography variant="h3" sx={{ mb: 2, color: '#000000', fontWeight: 700, fontFamily: 'Roboto, Arial, sans-serif' }}>
            Book a Free Consultation
          </Typography>
          <Typography variant="h6" sx={{ mb: 3, color: '#444', fontWeight: 500, fontFamily: 'Roboto, Arial, sans-serif' }}>
            Get expert advice from our real estate specialists. Whether you're buying, selling, or investing, we'll help you make the best decision for your future.
          </Typography>
          <Typography variant="body1" sx={{ color: '#444', mb: 2, fontFamily: 'Roboto, Arial, sans-serif' }}>
            Fill out the form and our team will reach out to schedule your personalized session.
          </Typography>
        </Box>
        <Box sx={{ flex: 1 }}>
          {submitted ? (
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
              <Typography variant="h6" sx={{ color: '#388e3c', textAlign: 'center', mt: 2 }}>
                Thank you! We'll contact you soon.
              </Typography>
            </Box>
          ) : (
            <form onSubmit={handleSubmit} id='meeting'>
              {error && (
                <Alert severity="error" sx={{ mb: 2 }}>
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
                sx={{ mb: 2, background: '#f5f7fa', borderRadius: 1 }}
              />
              <TextField
                label="Email Address"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                fullWidth
                required
                sx={{ mb: 2, background: '#f5f7fa', borderRadius: 1 }}
              />
              <TextField
                label="Phone Number"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                fullWidth
                sx={{ mb: 2, background: '#f5f7fa', borderRadius: 1 }}
              />
              <TextField
                label="Your Message"
                name="message"
                value={form.message}
                onChange={handleChange}
                multiline
                rows={3}
                fullWidth
                sx={{ mb: 3, background: '#f5f7fa', borderRadius: 1 }}
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={loading}
                sx={{
                  background: 'linear-gradient(90deg, #1976d2 0%, #1a237e 100%)',
                  color: '#fff',
                  fontWeight: 600,
                  py: 1.2,
                  borderRadius: 1,
                  boxShadow: '0 2px 8px rgba(26,35,126,0.08)',
                  letterSpacing: 1,
                  fontSize: '1.1rem',
                  '&:hover': {
                    background: 'linear-gradient(90deg, #1a237e 0%, #1976d2 100%)',
                  },
                }}
              >
                {loading ? 'Sending...' : 'Book Consultation'}
              </Button>
            </form>
          )}
        </Box>
      </Paper>
    </Box>
  );
}

export default BookConsult;