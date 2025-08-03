import React from 'react';
import { 
  Box, 
  Typography, 
  Divider, 
  Container
} from '@mui/material';
import { motion } from 'framer-motion';
import AboutIntro from '../components/AboutIntro';
import WhatICanDo from '../components/WhatICanDo';

const About = () => {
 

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box 
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        sx={{ mb: 6, mt: 8, textAlign: 'center' }}
      >
        <Typography 
          variant="h3" 
          sx={{ 
            fontWeight: 700, 
            mb: 2,
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
    </Container>
  );
};

export default About;