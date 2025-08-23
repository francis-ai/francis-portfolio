import React from 'react';
import { Container, Box, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import profileImage from '../../assets/profile1.jpg';

const AboutIntro = () => {
  const theme = useTheme();

  return (
    <Container>
      <Box 
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' }, // column on mobile, row on medium+
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          width: { xs: '100%', md: 1200 },
          gap: 2, // optional, adds spacing between items
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <Box
            sx={{
              width: { xs: '220px', md: '280px' },
              height: { xs: '220px', md: '280px' },
              borderRadius: '50%',
              background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              padding: '6px',
              boxShadow: theme.shadows[8],
            }}
          >
            <Box
              component="img"
              src={profileImage}
              alt="Francis Oladotun"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '50%',
              }}
            />
          </Box>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
            About Me
          </Typography>

          <Typography
            variant="body1"
            sx={{
                lineHeight: 1.8,
                textAlign: { xs: 'left', md: 'left' },
                maxWidth: '800px',
                mx: { xs: 'auto', md: 0 },
            }}
          >
            Hello, I’m <strong>Francis Oladotun</strong>, a fullstack developer building modern, responsive, and scalable applications. I specialize in creating seamless user experiences backed by robust backend systems.

            <br /><br />
            My journey in tech started with curiosity and has grown into a career driven by problem-solving. From polished interfaces to secure APIs and cloud deployments, I deliver code that works well.
            I enjoy collaborating with teams, adapting to new technologies, and continuously improving my craft. I bring creativity, precision, and business awareness to every project.

            <br /><br />
            I build with intention, debug with determination, and learn with excitement.
          </Typography>

        </motion.div>
      </Box>
    </Container>
  );
};

export default AboutIntro;