import React from 'react';
import { 
  Box, Typography, Card, CardContent, 
  useTheme, useMediaQuery, Chip 
} from '@mui/material';
import { motion } from 'framer-motion';
import { MdWeb } from "react-icons/md";
import { RiServerFill } from "react-icons/ri";
import { BiData } from "react-icons/bi";    

const MyExpertise = ({ theme }) => {
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('sm'));
  const accentColor = theme === 'light' ? 'secondary.dark' : 'secondary.light';
  const cardBgColor = theme === 'light' ? 'rgba(255,255,255,0.8)' : 'rgba(30,30,30,0.8)';

  const expertiseData = [
    {
      title: "Frontend Development",
      icon: <MdWeb size={40} color="#6C63FF" />, 
      description: "Crafting beautiful, responsive interfaces with modern frameworks",
      skills: ["React.js", "Material UI", "Bootstrap"],
      color: "#6C63FF"
    },
    {
      title: "Backend Development",
      icon: <RiServerFill size={40} color="#00C49A" />, 
      description: "Building robust server-side applications and APIs",
      skills: ["Node.js", "Express", "PHP"],
      color: "#00C49A"
    },
    {
      title: "Database Management",
      icon: <BiData size={40} color="#FF7A59" />, // Orange
      description: "Designing efficient data storage and retrieval systems",
      skills: ["MongoDB", "MySQL", "Firebase"],
      color: "#FF7A59"
    }
  ];

  return (
    <Box 
      id="expertise"
      sx={{ 
        py: 10, 
        px: 4
      }}
    >
      <Box sx={{ maxWidth: '1200px', mx: 'auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography 
            variant="h4" 
            sx={{ 
              fontWeight: 700, 
              mb: 2, 
              textAlign: 'center',
              color: theme === 'light' ? 'text.primary' : 'common.white'
            }}
          >
            My Expertise
          </Typography>
          <Typography 
            variant="subtitle1" 
            sx={{ 
              textAlign: 'center', 
              maxWidth: '600px', 
              mx: 'auto', 
              mb: 6,
              color: theme === 'light' ? 'text.primary' : 'common.white'
            }}
          >
            Specialized skills that bring your digital ideas to life
          </Typography>
        </motion.div>

        <Box 
          sx={{ 
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: 4
          }}
        >
          {expertiseData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                sx={{
                  height: '100%',
                  background: cardBgColor,
                  backdropFilter: 'blur(10px)',
                  borderRadius: '12px',
                  boxShadow: theme === 'light' 
                    ? '0 8px 20px rgba(0,0,0,0.08)' 
                    : '0 8px 20px rgba(0,0,0,0.2)',
                  border: `1px solid ${theme === 'light' ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)'}`,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: theme === 'light' 
                      ? '0 12px 24px rgba(0,0,0,0.12)' 
                      : '0 12px 24px rgba(0,0,0,0.3)'
                  }
                }}
              >
                <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      mb: 3,
                      color: typeof item.color === 'string' ? item.color : accentColor
                    }}
                  >
                    {item.icon}
                  </Box>
                  
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      fontWeight: 600, 
                      mb: 2, 
                      textAlign: 'center',
                      color: theme === 'light' ? 'text.primary' : 'common.white'
                    }}
                  >
                    {item.title}
                  </Typography>
                  
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      mb: 3,
                      textAlign: 'center',
                      color: theme === 'light' ? 'text.primary' : 'common.white',
                      flexGrow: 1
                    }}
                  >
                    {item.description}
                  </Typography>
                  
                  <Box 
                    sx={{ 
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 1,
                      justifyContent: 'center',
                      mt: 'auto'
                    }}
                  >
                    {item.skills.map((skill, skillIndex) => (
                      <Chip
                        key={skillIndex}
                        label={skill}
                        sx={{
                          backgroundColor: theme === 'light' ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.05)',
                          color: theme === 'light' ? 'text.primary' : 'common.white',
                          border: `1px solid ${theme === 'light' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)'}`,
                          '& .MuiChip-label': {
                            px: 1.5,
                            py: 0.5
                          }
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default MyExpertise;