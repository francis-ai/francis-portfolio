import React from 'react';
import { 
  Box, 
  Typography, 
  Divider, 
  Container,
  useTheme
} from '@mui/material';
import { motion } from 'framer-motion';
import AboutIntro from '../components/about/AboutIntro';
import WhatICanDo from '../components/about/WhatICanDo';
import TechStack from '../components/about/TechStack';
import Experience from '../components/about/Experience';
import CTAButton from '../components/CTAbutton';

const About = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ py: 6, mt: 3 }}>
      <Box 
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        sx={{ mb: 6, mt: 8, textAlign: 'center' }}
      >
        <Typography 
          variant="h3" sx={{ 
          fontWeight: 800, 
          mb: 2, 
          fontSize: {xs: 35, md: 45},
          textAlign: 'center',
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
          backgroundClip: 'text',
          textFillColor: 'transparent',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
        >
          Get to Know Me
        </Typography>
        <Divider 
          sx={{ 
            width: '100px', 
            height: '4px', 
            mx: 'auto',
            mb: 4
          }} 
        />
      </Box>
      <AboutIntro />
      <WhatICanDo />
      <TechStack/>
      <Experience />
      <CTAButton />
    </Container>
  );
};

export default About;