import React from 'react';
import { Box, Typography, IconButton, Divider } from '@mui/material';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = ({ theme }) => {
  const accentColor = theme === 'light' ? 'secondary.dark' : 'secondary.light';
  const textColor = theme === 'light' ? 'text.primary' : 'common.white';

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: <FaTwitter />, url: 'https://twitter.com/dahyor_tweet', label: 'Twitter' },
    { icon: <FaInstagram />, url: 'https://instagram.com/francis_oladotun', label: 'Email' }
  ];

  return (
    <Box 
      component="footer"
      sx={{
        py:2, px:2
      }}
    >
      <Box
        sx={{
          maxWidth: '1200px',
          mx: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4
        }}
      >
        {/* Social Links */}
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}
        >
          {socialLinks.map((social, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <IconButton
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                sx={{
                  color: textColor,
                  backgroundColor: theme === 'light' ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.05)',
                  '&:hover': {
                    backgroundColor: theme === 'light' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)',
                    color: accentColor,
                  },
                  transition: 'all 0.3s ease',
                  width: '40px',
                  height: '40px'
                }}
              >
                {social.icon}
              </IconButton>
            </motion.div>
          ))}
        </Box>

        {/* Divider */}
        <Divider 
          sx={{ 
            width: '100%', 
            // maxWidth: '400px', 
            borderColor: theme === 'light' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)' 
          }} 
        />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="body2"
            sx={{
              color: theme === 'light' ? 'secondary.dark' : 'secondary.light',
              textAlign: 'center',
              '& a': {
                color: accentColor,
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline'
                }
              }
            }}
          >
            © {new Date().getFullYear()} Francis Oladotun. All rights reserved. 
            <br />
          </Typography>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Footer;