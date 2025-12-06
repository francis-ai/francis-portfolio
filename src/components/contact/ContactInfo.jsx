import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { 
  Mail,
  Phone,
  Linkedin,
  Github,
  Twitter,
  ExternalLink
} from 'lucide-react';

const ContactInfo = () => {
   const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  // Color schemes
  const colorSchemes = {
    light: {
      bgGradient: 'linear-gradient(135deg, #f8faff 0%, #f0f4ff 50%, #eef2ff 100%)',
      cardBg: 'rgba(255, 255, 255, 0.96)',
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
      cardBg: 'rgba(30, 41, 59, 0.8)',
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

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'hello@example.com',
      link: 'mailto:hello@example.com',
      color: '#8B5CF6'
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: '+44 123 456 7890',
      link: 'tel:+441234567890',
      color: '#3B82F6'
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={22} />,
      label: 'LinkedIn',
      link: 'https://linkedin.com',
      color: '#0A66C2'
    },
    {
      icon: <Github size={22} />,
      label: 'GitHub',
      link: 'https://github.com',
      color: isDarkMode ? '#ffffff' : '#000000'
    },
    {
      icon: <Twitter size={22} />,
      label: 'Twitter',
      link: 'https://twitter.com',
      color: '#1DA1F2'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {/* Contact Info Cards */}
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
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                mb: 4,
                color: colors.textPrimary,
                fontSize: { xs: '1.75rem', md: '2.25rem' }
              }}
            >
              Contact Information
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ textDecoration: 'none' }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 3,
                      p: 3,
                      borderRadius: '20px',
                      background: isDarkMode ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.02)',
                      border: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'}`,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        background: isDarkMode ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.04)',
                        border: `1px solid ${item.color}40`,
                        boxShadow: `0 8px 32px ${item.color}20`
                      }
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 56,
                        height: 56,
                        borderRadius: '16px',
                        background: `${item.color}15`,
                        border: `1px solid ${item.color}30`
                      }}
                    >
                      <Box sx={{ color: item.color }}>
                        {item.icon}
                      </Box>
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          color: colors.textSecondary,
                          mb: 0.5,
                          fontSize: '0.875rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.1em'
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          color: colors.textPrimary,
                          fontWeight: 600
                        }}
                      >
                        {item.value}
                      </Typography>
                    </Box>
                    <ExternalLink size={20} color={colors.textSecondary} />
                  </Box>
                </motion.a>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Social Links */}
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
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                mb: 4,
                color: colors.textPrimary,
                fontSize: { xs: '1.75rem', md: '2.25rem' }
              }}
            >
              Connect With Me
            </Typography>

            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ textDecoration: 'none' }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      p: 3,
                      borderRadius: '20px',
                      background: isDarkMode ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.02)',
                      border: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'}`,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        background: `${social.color}15`,
                        border: `1px solid ${social.color}40`,
                        boxShadow: `0 8px 32px ${social.color}20`,
                        transform: 'translateY(-4px)'
                      }
                    }}
                  >
                    <Box sx={{ color: social.color, mb: 1.5 }}>
                      {social.icon}
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: colors.textPrimary,
                        fontWeight: 600,
                        fontSize: '0.875rem'
                      }}
                    >
                      {social.label}
                    </Typography>
                  </Box>
                </motion.a>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};

export default ContactInfo;