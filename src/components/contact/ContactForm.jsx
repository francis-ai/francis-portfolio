import React, { useState } from 'react';
import { 
  Box, TextField, Button, Typography, Alert, useTheme, Snackbar
} from '@mui/material';
import { 
  Send,
  CheckCircle,
  Loader2,
} from 'lucide-react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  // Color schemes
  const colorSchemes = {
    light: {
      bgGradient: 'linear-gradient(135deg, #f8faff 0%, #f0f4ff 50%, #eef2ff 100%)',
      cardBg: 'linear-gradient(135deg, #f8faff 0%, #f0f4ff 50%, #eef2ff 100%)',
      cardBorder: 'rgba(124, 58, 237, 0.12)',
      shadow: '0 25px 80px rgba(106, 13, 173, 0.1)',
      accentGradient: 'linear-gradient(135deg, #8B5CF6 0%, #6366F1 50%, #3B82F6 100%)',
      accentGlow: '0 0 60px rgba(139, 92, 246, 0.15)',
      textPrimary: '#1e293b',
      textSecondary: '#64748b',
      success: '#10b981',
      error: '#ef4444'
    },
    dark: {
      bgGradient: 'linear-gradient(135deg, #0f0f23 0%, #1a1b3e 50%, #0f172a 100%)',
      cardBg: 'linear-gradient(135deg, #0f0f23 0%, #1a1b3e 50%, #0f172a 100%)',
      cardBorder: 'rgba(139, 92, 246, 0.2)',
      shadow: '0 25px 80px rgba(0, 0, 0, 0.4)',
      accentGradient: 'linear-gradient(135deg, #8B5CF6 0%, #818cf8 50%, #60a5fa 100%)',
      accentGlow: '0 0 80px rgba(139, 92, 246, 0.25)',
      textPrimary: '#f1f5f9',
      textSecondary: '#94a3b8',
      success: '#34d399',
      error: '#f87171'
    }
  };

  const colors = isDarkMode ? colorSchemes.dark : colorSchemes.light;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.length < 10) newErrors.message = 'Message should be at least 10 characters';
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setIsSubmitting(true);
    setErrors({});
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleCloseSnackbar = () => {
    setSubmitStatus(null);
  };

  return (
    <Box>
      {/* Success/Error Snackbar */}
      <Snackbar
        open={submitStatus !== null}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={submitStatus === 'success' ? 'success' : 'error'}
          sx={{
            width: '100%',
            borderRadius: '12px',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
            backdropFilter: 'blur(10px)',
            background: submitStatus === 'success' ? `${colors.success}15` : `${colors.error}15`,
            border: `1px solid ${submitStatus === 'success' ? colors.success : colors.error}30`
          }}
          icon={
            submitStatus === 'success' ? (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                <CheckCircle />
              </motion.div>
            ) : null
          }
        >
          <Typography variant="body1" fontWeight={600}>
            {submitStatus === 'success' 
              ? '🎉 Message sent successfully! I\'ll get back to you soon.' 
              : '❌ Failed to send message. Please try again.'}
          </Typography>
        </Alert>
      </Snackbar>
    
      <motion.div
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Box
          sx={{
            background: colors.cardBg,
            backdropFilter: 'blur(20px)',
            borderRadius: '32px',
            border: `1px solid ${colors.cardBorder}`,
            boxShadow: colors.shadow,
            overflow: 'hidden',
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '6px',
              background: colors.accentGradient,
              zIndex: 1
            }
          }}
        >
          <Box sx={{ p: { xs: 4, md: 6 } }}>
            <Box sx={{ mb: 5 }}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  mb: 1,
                  color: colors.textPrimary,
                  fontSize: { xs: '1.75rem', md: '2.25rem' }
                }}
              >
                Send a Message
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: colors.textSecondary,
                  fontSize: '1.1rem'
                }}
              >
                Fill out the form below and I'll get back to you within 24 hours.
              </Typography>
            </Box>

            <form onSubmit={handleSubmit}>
              <Box sx={{ display: 'grid', gap: 3 }}>
                {/* Name */}
                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.995 }}>
                  <TextField
                    fullWidth
                    label="Fullname"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    error={!!errors.name}
                    helperText={errors.name}
                    disabled={isSubmitting}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '16px',
                        backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.02)',
                        '&:hover': {
                          backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.04)'
                        }
                      }
                    }}
                  />
                </motion.div>

                {/* Email */}
                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.995 }}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={!!errors.email}
                    helperText={errors.email}
                    disabled={isSubmitting}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '16px',
                        backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.02)',
                        '&:hover': {
                          backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.04)'
                        }
                      }
                    }}
                  />
                </motion.div>

                {/* Message */}
                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.995 }}>
                  <TextField
                    fullWidth
                    label="Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    error={!!errors.message}
                    helperText={errors.message}
                    disabled={isSubmitting}
                    multiline
                    rows={6}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '16px',
                        backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.02)',
                        '&:hover': {
                          backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.04)'
                        }
                      }
                    }}
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    fullWidth
                    sx={{
                      py: 2.5,
                      borderRadius: '16px',
                      background: colors.accentGradient,
                      color: 'white',
                      fontWeight: 600,
                      fontSize: '1.1rem',
                      textTransform: 'none',
                      boxShadow: colors.accentGlow,
                      position: 'relative',
                      overflow: 'hidden',
                      '&:hover': {
                        background: colors.accentGradient,
                        boxShadow: `0 0 80px ${isDarkMode ? 'rgba(139, 92, 246, 0.4)' : 'rgba(139, 92, 246, 0.3)'}`,
                        transform: 'translateY(-2px)'
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: '-100%',
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
                        transition: '0.5s'
                      },
                      '&:hover::before': {
                        left: '100%'
                      }
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={20} style={{ marginRight: 8, animation: 'spin 1s linear infinite' }} />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} style={{ marginRight: 8 }} />
                        Send Message
                      </>
                    )}
                  </Button>
                </motion.div>
              </Box>
            </form>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
};

export default ContactForm;