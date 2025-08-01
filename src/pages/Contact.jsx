import React from 'react';
import { 
  Box, 
  Typography, 
  Divider, 
  Container
} from '@mui/material';
import { motion } from 'framer-motion';

const Contact = () => {
 

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box 
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        sx={{ mb: 6, mt: 4, textAlign: 'center' }}
      >
        <Typography 
          variant="h3" 
          sx={{ 
            fontWeight: 700, 
            mb: 2,
          }}
        >
          Contact
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
    </Container>
  );
};

export default Contact;