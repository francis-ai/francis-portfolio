import React from 'react';
import { Box, Grid, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import profileImage from '../assets/profile1.jpg';

const AboutIntro = () => {
  const theme = useTheme();

  return (
    <Box id="about" sx={{ py: { xs: 4, md: 6 }, px: { xs: 2, md: 2 } }}>
      <Grid container spacing={6} justifyContent="center" textAlign="center">
        {/* Image Section */}
        <Grid item xs={12}>
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
        </Grid>

        {/* Text Section */}
        <Grid item xs={12} md={10}>
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
                Hello, I’m <strong>Francis Oladotun</strong>, a passionate and versatile fullstack developer with a strong foundation in building end-to-end digital solutions. I specialize in creating modern, responsive, and scalable applications that combine seamless user experiences with robust backend architecture.

                <br /><br />
                My journey in tech began with curiosity and has grown into a career driven by purpose and problem-solving. Whether it’s crafting polished user interfaces, building secure APIs, designing clean database schemas, or deploying applications to the cloud, I take pride in delivering code that not only works, but works well.

                <br /><br />
                I enjoy collaborating with teams, adapting quickly to new technologies, and continuously improving my craft. I’ve worked on a range of projects, from startup MVPs to enterprise systems and I bring a balance of creativity, precision, and business awareness to everything I do.

                <br /><br />
                Let’s just say: I build with intention, I debug with determination, and I learn with excitement. This is more than just a job for me, it’s a calling.
            </Typography>

          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutIntro;
