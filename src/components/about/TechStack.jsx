import React, { useState } from 'react';
import { Box, Grid, Typography, useTheme, Paper, Chip, alpha } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Code, Storage, Palette } from '@mui/icons-material';
import { SiReact, SiNodedotjs, SiMongodb, SiMysql, SiPhp, SiExpress, SiGit, SiGithub, SiFigma, SiFirebase } from 'react-icons/si';

// Mock Data for Tech Stack
const techStack = [
  { name: 'React', icon: <SiReact />, category: 'Frontend' },
  { name: 'Material UI', icon: <Layers fontSize="inherit" />, category: 'Frontend'},
  { name: 'Node.js', icon: <SiNodedotjs />, category: 'Backend'},
  { name: 'Express.js', icon: <SiExpress />, category: 'Backend'},
  { name: 'PHP', icon: <SiPhp />, category: 'Backend'},
  { name: 'MongoDB', icon: <SiMongodb />, category: 'Database'},
  { name: 'MySQL', icon: <SiMysql />, category: 'Database'},
  { name: 'Firebase', icon: <SiFirebase />, category: 'Database'},
  { name: 'Git', icon: <SiGit />, category: 'Tools' },
  { name: 'GitHub', icon: <SiGithub />, category: 'Tools'},
  { name: 'Figma', icon: <SiFigma />, category: 'Design'},
];

const categoryIcons = {
  'Frontend': <Palette />,
  'Backend': <Code />,
  'Database': <Storage />,
  'Tools': <Layers />,
  'Design': <Palette />,
  'All': <Layers />
};

const TechStack = () => {
  const theme = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', ...new Set(techStack.map(tech => tech.category))];
  
  const filteredTechStack = selectedCategory === 'All' 
    ? techStack 
    : techStack.filter(tech => tech.category === selectedCategory);

  return (
    <Box id="tech-stack" sx={{ 
      py: { xs: 8, md: 12 }, 
      px: { xs: 3, md: 6 }, 
      maxWidth: '1500px', 
      mx: 'auto' 
    }}>
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Typography variant="h3" sx={{ 
          fontWeight: 800, 
          mb: 2, 
          fontSize: {xs: 30},
          textAlign: 'center',
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
          backgroundClip: 'text',
          textFillColor: 'transparent',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          My Tech Stack
        </Typography>
        
        <Typography variant="h6" sx={{ 
          textAlign: 'center', 
          mb: 6, 
          maxWidth: '600px',
          mx: 'auto'
        }}>
          Technologies and tools I use to bring ideas to life
        </Typography>
      </motion.div>

      {/* Category Filter */}
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        flexWrap: 'wrap', 
        gap: 1, 
        mb: 6, 
        }}>
        {categories.map((category) => (
            <Chip
            key={category}
            icon={React.cloneElement(categoryIcons[category], {
                sx: { 
                color: selectedCategory === category 
                    ? theme.palette.secondary.main 
                    : theme.palette.text.secondary 
                }
            })}
            label={category}
            onClick={() => setSelectedCategory(category)}
            variant={selectedCategory === category ? "filled" : "outlined"}
            sx={{
                px: 2,
                py: 2,
                fontWeight: 600,
                backgroundColor: selectedCategory === category 
                    ? alpha(theme.palette.secondary.main, 0.1) 
                    : 'transparent',
                borderColor: selectedCategory === category 
                    ? theme.palette.secondary.main 
                    : '',
                color: selectedCategory === category 
                    ? theme.palette.secondary.main 
                    : theme.palette.text.primary,
                '&:hover': {
                    backgroundColor: alpha(theme.palette.secondary.main, 0.15),
                    borderColor: theme.palette.secondary.main,
                },
                // Override default Chip styles
                '& .MuiChip-icon': {
                    color: theme.palette.secondary.main, 
                    marginLeft: '8px',
                    marginRight: '-4px',
                },
                '& .MuiChip-label': {
                    color: theme.palette.mode === 'light' ? '#fff' : '#000', 
                    padding: '0 12px',
                }
            }}
            />
        ))}
      </Box>
   

      {/* Grid */}
      <Grid container spacing={3} justifyContent="center">
        <AnimatePresence mode="wait">
          {filteredTechStack.map((tech, index) => (
            <Grid item xs={6} sm={4} md={3} lg={2} key={tech.name} sx={{ display: 'flex', justifyContent: 'center' }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                layout
                style={{ width: '100%', maxWidth: {xs: 100, md:160} }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    px: {xs:2,md:3},
                    py: {xs:2,md:3},
                    maxWidth: {xs: 100, md:160},
                    maxHeight: 160,
                    borderRadius: 0,
                    textAlign: 'center',
                    background: theme.palette.mode === 'light'
                      ? 'linear-gradient(145deg, #ffffff, #f5f7fa)'
                      : 'linear-gradient(145deg, #1e1e1e, #2a2a2a)',
                    border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: `0 12px 30px ${alpha(theme.palette.primary.main, 0.15)}`,
                      borderColor: alpha(theme.palette.primary.main, 0.3),
                    }
                  }}
                > 
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Box sx={{ 
                      fontSize: '2.8rem', 
                      color: theme.palette.secondary.main, 
                      mb: 2,
                      display: 'flex',
                      justifyContent: 'center'
                    }}>
                      {tech.icon}
                    </Box>
                  </motion.div>
                  
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    {tech.name}
                  </Typography>
                  
                  <Typography variant="caption" sx={{ 
                    color: theme.palette.text.secondary,
                    fontWeight: 500
                  }}>
                    {tech.category}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </AnimatePresence>
      </Grid>

      {/* Empty state */}
      {filteredTechStack.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h6" sx={{ textAlign: 'center', mt: 4, color: theme.palette.text.secondary }}>
            No technologies found in this category.
          </Typography>
        </motion.div>
      )}
    </Box>
  );
};

export default TechStack;