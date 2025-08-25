import React, { useState } from 'react';
import { 
  TextField, 
  Button, 
  Typography, 
  Box, 
  Paper, 
  Alert,
  ThemeProvider,
  createTheme 
} from '@mui/material';
import emailjs from 'emailjs-com';
import './BookConsult.css';

// Create a custom theme to ensure proper styling
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#1a237e',
    },
    background: {
      default: 'linear-gradient(120deg, #e3f2fd 0%, #f5f7fa 100%)',
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            color: '#000000',
            backgroundColor: '#f5f7fa',
            '& fieldset': {
              borderColor: '#ddd',
            },
            '&:hover fieldset': {
              borderColor: '#1976d2',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#1976d2',
            },
          },
          '& .MuiInputLabel-root': {
            color: '#666',
          },
          '& .MuiInputBase-input': {
            color: '#000000',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
        },
      },
    },
  },
});

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
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return now.toLocaleDateString('en-US', options);
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!form.name.trim() || !form.email.trim()) {
      setError('Please fill in all required fields');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setError('Please enter a valid email address');
      return;
    }

    setLoading(true);
    setError('');
    
    // EmailJS configuration
    const serviceID = 'service_fg1nddw';
    const templateID = 'template_a3vn9kj';
    const userID = 'nrnYDB_DQBLZF8Tt6';
    
    const templateParams = {
      from_name: form.name.trim(),
      from_email: form.email.trim(),
      phone: form.phone.trim() || 'Not provided',
      message: `
Name: ${form.name.trim()}
Phone: ${form.phone.trim() || 'Not provided'}
Email: ${form.email.trim()}
Message: ${form.message.trim() || 'No message provided'}
Date: ${getFormattedDate()}
      `.trim(),
      to_email: 'biniyamsamuel664@gmail.com',
      subject: `New Consultation Request from ${form.name.trim()}`
    };
    
    emailjs.send(serviceID, templateID, templateParams, userID)
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setSubmitted(true);
      setLoading(false);
      // Reset form
      setForm({ name: '', email: '', phone: '', message: '' });
    })
    .catch((err) => {
      console.error('FAILED...', err);
      setError('There was an error sending your message. Please try again later or contact us directly.');
      setLoading(false);
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Box className="book-consult-container" id="meeting">
        <Paper className="book-consult-paper" elevation={0}>
          <Box className="book-consult-content">
            <Box className="book-consult-info">
              <h2 variant="h4" component="h2" className="book-consult-title">
                Book a Free Consultation
              </h2>
              <h4 variant="h6" component="p" className="book-consult-subtitle">
                Get expert advice from our real estate specialists. Whether you're buying, selling, or investing, we'll help you make the best decision for your future.
              </h4>
              <p variant="body1" className="book-consult-description">
                Fill out the form and our team will reach out to schedule your personalized session within 24 hours.
              </p>
            </Box>
            
            <Box className="book-consult-form-container">
              {submitted ? (
                <Box className="success-message">
                  <Typography variant="h6" className="success-text">
                    Thank you for your inquiry! 
                  </Typography>
                  <Typography variant="body1" style={{ color: '#666', marginTop: '10px' }}>
                    We'll contact you within 24 hours to schedule your consultation.
                  </Typography>
                </Box>
              ) : (
                <form onSubmit={handleSubmit} className="book-consult-form" noValidate>
                  {error && (
                    <Alert severity="error" className="error-alert" onClose={() => setError('')}>
                      {error}
                    </Alert>
                  )}
                  
                  <TextField
                    label="Full Name *"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    fullWidth
                    required
                    className="form-field"
                    disabled={loading}
                    inputProps={{ 'aria-label': 'Full Name' }}
                  />
                  
                  <TextField
                    label="Email Address *"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    fullWidth
                    required
                    className="form-field"
                    disabled={loading}
                    inputProps={{ 'aria-label': 'Email Address' }}
                  />
                  
                  <TextField
                    label="Phone Number"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    fullWidth
                    className="form-field"
                    disabled={loading}
                    inputProps={{ 'aria-label': 'Phone Number' }}
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
                    disabled={loading}
                    inputProps={{ 'aria-label': 'Your Message' }}
                    placeholder="Tell us about your real estate needs, preferred contact time, or any specific questions you have..."
                  />
                  
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    disabled={loading}
                    className="submit-button"
                    aria-label={loading ? 'Sending message' : 'Book consultation'}
                  >
                    {loading ? 'Sending...' : 'Book Consultation'}
                  </Button>
                  
                  <Typography variant="body2" style={{ color: '#666', marginTop: '10px', textAlign: 'center', fontSize: '0.8rem' }}>
                    * Required fields
                  </Typography>
                </form>
              )}
            </Box>
          </Box>
        </Paper>
      </Box>
    </ThemeProvider>
  );
}

export default BookConsult;