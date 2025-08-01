import React from 'react';
import { Box, Typography, Button, useTheme, useMediaQuery, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Hero = ({ theme }) => {
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));
  const textColor = theme === 'light' ? 'text.primary' : 'common.white';

  const techStack = ['React', 'Node.js', 'MongoDB', 'PHP', 'UI/UX'];
  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/yourusername' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/in/yourusername' },
    { icon: <FaTwitter />, url: 'https://twitter.com/yourusername' },
    { icon: <FaInstagram />, url: 'https://instagram.com/yourusername' }
  ];

  return (
    <Box
      id="home"
      sx={{
        position: 'relative',
        height: '100vh',
        minHeight: '600px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        px: 4
      }}
    >
      <Box
        sx={{
          maxWidth: '1200px',
          width: '100%',
          mx: 'auto',
          position: 'relative',
          zIndex: 1,
          mt: 4,
          textAlign: isMobile ? 'center' : 'left',
        }}
      >
        {/* Introduction Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              color: theme === 'light' ? 'secondary.dark' : 'secondary.light',
              fontWeight: 600,
              mb: 0,
              mt: 6,
              letterSpacing: '2px',
            }}
          >
            Hello, I'm
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Typography
            variant={isMobile ? 'h2' : 'h1'}
            sx={{
              fontWeight: 800,
              lineHeight: 1.2,
              mb: 3,
              color: textColor,
              letterSpacing: '-1.5px',
            }}
          >
            Francis Oladotun
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Typography
            variant={isMobile ? 'h5' : 'h4'}
            sx={{
              fontWeight: 400,
              lineHeight: 1.6,
              mb: 4,
              maxWidth: '700px',
              mx: isMobile ? 'auto' : 'unset',
              color: textColor,
              opacity: 0.9,
            }}
          >
            Designing with purpose. Developing with passion. Delivering experiences that matter.
          </Typography>
        </motion.div>

        {/* Tech Stack Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          style={{ 
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
            marginBottom: '32px',
            justifyContent: isMobile ? 'center' : 'flex-start'
          }}
        >
          {techStack.map((tech) => (
            <Box
              key={tech}
              component={motion.div}
              whileHover={{ y: -3 }}
              sx={{
                px: 2,
                py: 1,
                borderRadius: '20px',
                backgroundColor: theme === 'light' ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.05)',
                color: textColor,
                fontSize: '0.85rem',
                fontWeight: 500,
                border: `1px solid ${theme === 'light' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)'}`,
                '&:hover': {
                    color: theme === 'light' ? 'secondary.dark' : 'secondary.light',
                    borderColor: theme === 'light' ? 'secondary.dark' : 'secondary.light',
                },
                transition: 'all 0.3s ease'
              }}
            >
              {tech}
            </Box>
          ))}
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ display: 'flex', gap: '16px', justifyContent: isMobile ? 'center' : 'flex-start' }}
        >
          <Button
            variant="contained"
            href="projects"
            size="large"
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: '12px',
              fontWeight: 600,
              textTransform: 'none',
              fontSize: '1rem',
              background: theme === 'light' 
                ? 'linear-gradient(135deg, #9e30b4ff 0%, #8e3a8fff 100%)' 
                : 'linear-gradient(135deg, #74146cff 0%, #621573ff 100%)',
                color: 'common.white',
                boxShadow: theme === 'light' 
                ? '0 4px 6px rgba(74, 111, 165, 0.2)' 
                : '0 4px 6px rgba(6, 6, 6, 0.45)',
                '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: theme === 'light' 
                    ? '0 6px 8px rgba(34, 36, 37, 0.3)' 
                    : '0 6px 8px rgba(14, 15, 17, 0.3)',
                },
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            View My Work
          </Button>

          <Button
            variant="outlined"
            href="contact"
            size="large"
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: '12px',
              fontWeight: 600,
              textTransform: 'none',
              fontSize: '1rem',
              borderWidth: '2px',
              color: textColor,
              borderColor: theme === 'light' ? 'secondary.dark' : 'secondary.light',
              '&:hover': {
                borderWidth: '2px',
                backgroundColor: theme === 'light' ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.05)',
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            Let's Talk
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          style={{ 
            display: 'flex', 
            gap: '16px', 
            marginTop: '40px',
            justifyContent: isMobile ? 'center' : 'flex-start'
          }}
        >
          {socialLinks.map((social, index) => (
            <IconButton
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              component={motion.a}
              whileHover={{ y: -3 }}
              sx={{
                color: textColor,
                backgroundColor: theme === 'light' ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.05)',
                '&:hover': {
                  backgroundColor: theme === 'light' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)',
                  color: theme === 'light' ? 'secondary.dark' : 'secondary.light',
                },
                transition: 'all 0.3s ease',
                fontSize: '1.2rem'
              }}
            >
              {social.icon}
            </IconButton>
          ))}
        </motion.div>
      </Box>
    </Box>
  );
};

export default Hero;