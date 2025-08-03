import React from 'react';
import { Box, Grid, Typography, Card, CardContent, useTheme } from '@mui/material';
import { Code, Storage, Settings } from '@mui/icons-material';
import { motion } from 'framer-motion';

const skills = [
  {
    title: 'Frontend Development',
    icon: <Code fontSize="large" />,
    description: 'Building responsive, accessible, and interactive interfaces using React, HTML5, CSS3, JavaScript, Tailwind, and Material UI.',
    color: 'primary'
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
    color: 'info'
  },
];

const WhatICanDo = () => {
  const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box id="what-i-do" sx={{ 
      py: { xs: 8, md: 12 }, 
      px: { xs: 3, md: 6 },
      maxWidth: '1200px',
      mx: 'auto'
    }}>
      <Typography variant="h3" sx={{ 
        fontWeight: 700, 
        mb: 6, 
        textAlign: 'center',
        color: theme.palette.text.primary,
        position: 'relative',
        '&:after': {
          content: '""',
          position: 'absolute',
          bottom: -12,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '80px',
          height: '4px',
          backgroundColor: theme.palette.primary.main,
          borderRadius: 2
        }
      }}>
        What I Can Do
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {skills.map((skill, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                elevation={0}
                sx={{
                  height: '100%',
                  background: theme.palette.mode === 'light' 
                    ? 'linear-gradient(145deg, #ffffff, #f5f5f5)' 
                    : 'linear-gradient(145deg, #1e1e1e, #2a2a2a)',
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
                <CardContent sx={{ p: 0 }}>
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
                    fontSize: '2rem'
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
    </Box>
  );
};

export default WhatICanDo;