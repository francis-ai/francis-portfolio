import React from 'react';
import { 
  Box, 
  Typography, 
  Container,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';

const Contact = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ py: 8, mt: 3 }}>
      <Box 
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        sx={{ mb: 8, textAlign: 'center' }}
      >
        <Typography 
          variant="h3" 
          sx={{
            fontWeight: 800, 
            mb: 2, 
            fontSize: { xs: 35, md: 45 },
            textAlign: 'center',
            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
            backgroundClip: 'text',
            textFillColor: 'transparent',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Get In Touch
        </Typography>
        <Typography 
          variant="h6" 
          sx={{ 
            maxWidth: 600, 
            mx: 'auto',
            mb: 3
          }}
        >
          Have a project in mind or want to collaborate? I'd love to hear from you.
        </Typography>
      </Box>

      <Box container spacing={4}
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' }, // column on mobile, row on medium+
          justifyContent: 'space-between',
          // flexWrap: 'wrap',
          width: { xs: '100%', md: 1200 },
          gap: 1
        }}
      >
        <Box>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ContactForm />
          </motion.div>
        </Box>
        <Box>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <ContactInfo />
          </motion.div>
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;