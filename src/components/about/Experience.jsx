import React from 'react';
import { Box, Typography, Paper, useTheme, Chip } from '@mui/material';
import { CalendarToday } from '@mui/icons-material';
import { motion } from 'framer-motion';

const experiences = [
  {
    id: 1,
    title: "Web Developer",
    company: "Edmoss Global Ventures Limited",
    period: "Aug 2025 – Present",
    type: "Remote",
    description: "Promoted from intern to permanent remote developer after I.T. project success. Handle fullstack responsibilities across multiple internal and client projects.",
    skills: ["PHP", "Git", "React", "Node.js", "Express", "MongoDB"]
  },
  {
    id: 2,
    title: "Web Developer Intern",
    company: "Edmoss Global Ventures Limited",
    period: "Feb 2025 – July 2025",
    type: "Internship",
    description: "Participated in software design and development across real-world fullstack applications. Contributed to project architecture and frontend/backend task execution.",
    skills: ["PHP", "Git", "React", "Node.js", "Express", "MongoDB"]
  },
  {
    id: 3,
    title: "Freelance Developer",
    company: "Self-Employed",
    period: "2020 – Present",
    type: "Freelance",
    description: "Worked on various personal and client projects, improving project management and delivery skills. Focused on educational software and dashboards for academic use.",
    skills: ["React", "PHP", "UI/UX", "HTML/CSS"]
  }
];

const Experience = () => {
  const theme = useTheme();

  return (
    <Box id="experience" sx={{ 
      py: 8, 
      px: { xs: 0, sm: 4, md: 4 },
      maxWidth: '1000px',
      mx: 'auto'
    }}>
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
          WebkitTextFillColor: 'transparent',
        }}>
          Work Experience
        </Typography>
        
        <Typography variant="h6" sx={{ 
          textAlign: 'center', 
          mb: 6, 
          maxWidth: '600px',
          mx: 'auto'
        }}>
          My professional journey and career growth
        </Typography>
      </motion.div>

      <Box sx={{ position: 'relative' }}>
        {/* Timeline connector */}
        <Box sx={{
          position: 'absolute',
          left: 20,
          top: 0,
          bottom: 0,
          width: '2px',
          backgroundColor: theme.palette.divider,
          zIndex: 1,
        }} />
        
        {experiences.map((exp, index) => (
          <Box key={exp.id} sx={{ 
            position: 'relative', 
            pl: 6, 
            mb: 4 
          }}>
            {/* Timeline dot */}
            <Box sx={{
              position: 'absolute',
              left: 12,
              top: 8,
              width: 16,
              height: 16,
              borderRadius: '50%',
              backgroundColor: theme.palette.secondary.main,
              border: `3px solid ${theme.palette.background.default}`,
              zIndex: 2,
            }} />
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Paper
                elevation={1}
                sx={{
                  p: 3,
                  borderRadius: 0,
                  backgroundColor: theme.palette.background.paper,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: theme.shadows[4],
                    transform: 'translateY(-2px)'
                  }
                }}
              >
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                      {exp.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: theme.palette.secondary.main, fontWeight: 500 }}>
                      {exp.company}
                    </Typography>
                  </Box>
                  
                  <Chip
                    icon={<CalendarToday sx={{ fontSize: '16px' }} />}
                    label={exp.period}
                    size="small"
                    sx={{
                      mt: { xs: 1, sm: 0 },
                      backgroundColor: theme.palette.mode === 'light' 
                        ? `${theme.palette.primary.light}20` 
                        : `${theme.palette.primary.dark}30`,
                      color: theme.palette.text.primary,
                      fontWeight: 500
                    }}
                  />
                </Box>
                
                <Chip
                  label={exp.type}
                  size="small"
                  sx={{
                    mb: 2,
                    backgroundColor: theme.palette.secondary.main,
                    color: 'white',
                    fontWeight: 500
                  }}
                />
                
                <Typography variant="body2" sx={{ 
                  color: theme.palette.text.secondary,
                  lineHeight: 1.6,
                  mb: 2
                }}>
                  {exp.description}
                </Typography>
                
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {exp.skills.map((skill, i) => (
                    <Chip
                      key={i}
                      label={skill}
                      size="small"
                      variant="outlined"
                      sx={{
                        fontSize: '0.75rem',
                        borderColor: theme.palette.secondary.main,
                        color: theme.palette.secondary.main
                      }}
                    />
                  ))}
                </Box>
              </Paper>
            </motion.div>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Experience;