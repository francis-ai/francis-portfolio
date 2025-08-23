import React from 'react';
import { Box, Grid, Typography, Card, CardContent, useTheme, Container } from '@mui/material';
import { Code, Storage, Settings } from '@mui/icons-material';
import { motion } from 'framer-motion';

const skills = [
  {
    title: 'Frontend Development',
    icon: <Code fontSize="large" />,
    description: 'Building responsive, accessible, and interactive interfaces using React, HTML5, CSS3, JavaScript, Tailwind, and Material UI.',
    color: 'secondary'
  },
  {
    title: 'Backend Development',
    icon: <Settings fontSize="large" />,
    description: 'Designing RESTful APIs, managing server-side logic, authentication, and data processing with Node.js, Express, and PHP.',
    color: 'secondary'
  },
  {
    title: 'Database Management',
    icon: <Storage fontSize="large" />,
    description: 'Handling relational and non-relational databases including MySQL, PostgreSQL, MongoDB. Skilled in schema design and query optimization.',
    color: 'secondary'
  },
];

const WhatICanDo = () => {
  const theme = useTheme();

  return (
    <Box id="what-i-do" sx={{ py: { xs: 2, md: 6 }, mt: 4}}>
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ 
          fontWeight: 800, 
          mb: 2, 
          fontSize: {xs: 30},
          textAlign: 'center',
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
          backgroundClip: 'text',
          textFillColor: 'transparent',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          What I Can Do
        </Typography>
        <Typography variant="h6" sx={{ 
          textAlign: 'center', 
          mb: 6, 
          maxWidth: '600px',
          mx: 'auto'
        }}>
          My area of specification
        </Typography>

        <Grid container spacing={2} justifyContent="center">
          {skills.map((skill, index) => (
            <Grid item key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{ width: '100%', maxWidth: '330px' }}
              >
                <Card
                  elevation={0}
                  sx={{
                    height: '100%',
                    borderRadius: 4,
                    p: 3,
                    border: `1px solid ${theme.palette.divider}`,
                    boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 28px rgba(0,0,0,0.12)'
                    }
                  }}
                >
                  <CardContent sx={{ p: 0, textAlign: 'center' }}>
                    <Box sx={{ 
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '64px',
                      height: '64px',
                      mb: 3,
                      borderRadius: '50%',
                      background: theme.palette[skill.color].main,
                      color: 'white',
                      fontSize: '2rem',
                      mx: 'auto'
                    }}>
                      {skill.icon}
                    </Box>
                    <Typography variant="h5" sx={{ 
                      fontWeight: 600, 
                      mb: 2,
                      color: theme.palette.text.primary
                    }}>
                      {skill.title}
                    </Typography>
                    <Typography variant="body1" sx={{ 
                      color: theme.palette.text.secondary,
                      lineHeight: 1.7
                    }}>
                      {skill.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhatICanDo;