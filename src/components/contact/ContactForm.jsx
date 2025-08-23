import React, { useState } from 'react';
import { 
  Box, TextField, Button, Typography, Alert, 
  CircularProgress, useTheme, alpha 
} from '@mui/material';
import { Send, Email, Person } from '@mui/icons-material';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ submitted: false, error: false, message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus({ 
        submitted: true, 
        error: false, 
        message: 'Message sent successfully! I\'ll get back to you soon.' 
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({ 
        submitted: true, 
        error: true, 
        message: 'Failed to send message. Please try again.' 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box 
      component="form" 
      onSubmit={handleSubmit} 
      sx={{ 
        width: '100%',
        p: 4,
        borderRadius: 4,
        background: theme.palette.mode === 'light' 
          ? 'linear-gradient(145deg, #ffffff, #f8f9fa)'
          : 'linear-gradient(145deg, #1e1e1e, #2a2a2a)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h5" sx={{ 
          mb: 3, 
          fontWeight: 700,
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
          backgroundClip: 'text',
          textFillColor: 'transparent',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          Send Me a Message
        </Typography>
        
        {status.message && (
          <Alert 
            severity={status.error ? "error" : "success"} 
            sx={{ 
              mb: 3, 
              borderRadius: 2,
              alignItems: 'center'
            }}
          >
            {status.message}
          </Alert>
        )}
        
        <TextField
          fullWidth
          label="Your Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          margin="normal"
          variant="outlined"
          InputProps={{
            startAdornment: <Person sx={{ color: theme.palette.text.secondary, mr: 1 }} />
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: 2,
              backgroundColor: alpha(theme.palette.background.paper, 0.8),
            }
          }}
        />
        
        <TextField
          fullWidth
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          margin="normal"
          variant="outlined"
          InputProps={{
            startAdornment: <Email sx={{ color: theme.palette.text.secondary, mr: 1 }} />
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: 2,
              backgroundColor: alpha(theme.palette.background.paper, 0.8),
            }
          }}
        />
        
        <TextField
          fullWidth
          label="Your Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          multiline
          rows={4}
          margin="normal"
          variant="outlined"
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: 2,
              backgroundColor: alpha(theme.palette.background.paper, 0.8),
            }
          }}
        />
        
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button
            type="submit"
            variant="contained"
            size="large"
            fullWidth
            endIcon={loading ? <CircularProgress size={20} /> : <Send />}
            disabled={loading}
            sx={{ 
              mt: 3, 
              py: 1.5,
              borderRadius: 2,
              fontWeight: 600,
              background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
              boxShadow: `0 4px 15px ${alpha(theme.palette.primary.main, 0.3)}`,
              '&:hover': {
                boxShadow: `0 6px 20px ${alpha(theme.palette.primary.main, 0.4)}`,
              }
            }}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </Button>
        </motion.div>
      </motion.div>
    </Box>
  );
};

export default ContactForm;