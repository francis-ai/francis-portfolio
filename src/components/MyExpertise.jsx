import React from 'react';
import { 
  Box, Typography, Card, CardContent, Chip 
} from '@mui/material';
import { motion } from 'framer-motion';
import { MdWeb,  } from "react-icons/md"; 
// MdPalette
import { RiServerFill } from "react-icons/ri";
import { BiData } from "react-icons/bi";    

const MyExpertise = ({ theme }) => {  
  // Enhanced color palettes for light/dark modes
  const colorSchemes = {
    light: {
      // bgGradient: 'linear-gradient(135deg, #f8f9ff 0%, #f0f2ff 50%, #eef1ff 100%)',
      cardBg: 'rgba(255, 255, 255, 0.92)',
      cardBorder: 'rgba(149, 117, 205, 0.15)',
      shadow: '0 20px 60px rgba(106, 13, 173, 0.08)',
      shadowHover: '0 30px 80px rgba(106, 13, 173, 0.15)',
      textPrimary: '#1a1a2e',
      textSecondary: '#4a5568',
      accentColors: {
        purple: '#7C3AED',
        teal: '#0D9488',
        blue: '#2563EB',
        pink: '#DB2777'
      }
    },
    dark: {
      // bgGradient: 'linear-gradient(135deg, #0d0d0d 0%, #111827 50%, #0f172a 100%)',
      cardBg: 'rgba(30, 41, 59, 0.6)',
      cardBorder: 'rgba(124, 58, 237, 0.2)',
      shadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
      shadowHover: '0 30px 80px rgba(124, 58, 237, 0.25)',
      textPrimary: '#f8fafc',
      textSecondary: '#cbd5e1',
      accentColors: {
        purple: '#8B5CF6',
        teal: '#2DD4BF',
        blue: '#60A5FA',
        pink: '#F472B6'
      }
    }
  };

  const colors = colorSchemes[theme];
  const accentColors = colors.accentColors;

  const expertiseData = [
    {
      title: "Frontend Development",
      icon: <MdWeb size={44} color={accentColors.purple} />, 
      description: "Crafting beautiful, responsive interfaces with modern frameworks",
      skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Material UI"],
      color: accentColors.purple,
      accentColor: theme === 'light' ? 'rgba(124, 58, 237, 0.1)' : 'rgba(124, 58, 237, 0.2)'
    },
    {
      title: "Backend Development",
      icon: <RiServerFill size={44} color={accentColors.teal} />, 
      description: "Building robust server-side applications and APIs",
      skills: ["Node.js", "Express", "Python", "REST APIs", "GraphQL"],
      color: accentColors.teal,
      accentColor: theme === 'light' ? 'rgba(13, 148, 136, 0.1)' : 'rgba(45, 212, 191, 0.2)'
    },
    {
      title: "Database Management",
      icon: <BiData size={44} color={accentColors.blue} />,
      description: "Designing efficient data storage and retrieval systems",
      skills: ["MongoDB", "PostgreSQL", "Redis", "Firebase", "Prisma"],
      color: accentColors.blue,
      accentColor: theme === 'light' ? 'rgba(37, 99, 235, 0.1)' : 'rgba(96, 165, 250, 0.2)'
    },
    // {
    //   title: "UI/UX Design",
    //   icon: <MdPalette size={44} color={accentColors.pink} />,
    //   description: "Creating intuitive user experiences and pixel-perfect interfaces",
    //   skills: ["Figma", "Framer Motion", "User Research", "Prototyping", "Accessibility"],
    //   color: accentColors.pink,
    //   accentColor: theme === 'light' ? 'rgba(219, 39, 119, 0.1)' : 'rgba(244, 114, 182, 0.2)'
    // }
  ];

  return (
    <Box 
      id="expertise"
      sx={{ 
        py: { xs: 8, md: 12 },
        px: { xs: 3, sm: 4, md: 6 },
        background: colors.bgGradient,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Subtle gradient overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: theme === 'light' 
            ? 'radial-gradient(circle at 20% 80%, rgba(124, 58, 237, 0.03) 0%, transparent 50%)'
            : 'radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.05) 0%, transparent 50%)',
          pointerEvents: 'none'
        }}
      />

      <Box sx={{ 
        maxWidth: '1400px', 
        mx: 'auto', 
        position: 'relative',
        zIndex: 1 
      }}>
        {/* Header section with enhanced animations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 10 } }}>
            <Chip 
              label="Expertise"
              sx={{
                mb: 3,
                px: 2,
                py: 0.5,
                fontWeight: 600,
                fontSize: '0.875rem',
                background: theme === 'light' 
                  ? 'linear-gradient(135deg, rgba(124, 58, 237, 0.1) 0%, rgba(37, 99, 235, 0.1) 100%)'
                  : 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(96, 165, 250, 0.2) 100%)',
                color: colors.textPrimary,
                border: `1px solid ${colors.cardBorder}`,
                '& .MuiChip-label': {
                  px: 1
                }
              }}
            />
            
            <Typography 
              variant="h2" 
              sx={{ 
                fontWeight: 800, 
                mb: 2, 
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                background: theme === 'light'
                  ? 'linear-gradient(135deg, #1a1a2e 0%, #4f46e5 100%)'
                  : 'linear-gradient(135deg, #f8fafc 0%, #a5b4fc 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Technical Expertise
            </Typography>
            
            <Typography 
              variant="h6" 
              sx={{ 
                textAlign: 'center', 
                maxWidth: '800px', 
                mx: 'auto', 
                color: colors.textSecondary,
                fontSize: { xs: '1.125rem', md: '1.25rem' },
                lineHeight: 1.6
              }}
            >
              Specialized skills and technologies that power exceptional digital experiences
            </Typography>
          </Box>
        </motion.div>

        {/* Cards grid with enhanced responsiveness */}
        <Box 
          sx={{ 
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)'
            },
            gap: { xs: 4, md: 6 },
            alignItems: 'stretch'
          }}
        >
          {expertiseData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut" 
              }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              style={{ height: '100%' }}
            >
              <Card
                sx={{
                  height: '100%',
                  background: colors.cardBg,
                  backdropFilter: 'blur(12px)',
                  borderRadius: '24px',
                  boxShadow: colors.shadow,
                  border: `1px solid ${colors.cardBorder}`,
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  overflow: 'visible',
                  '&:hover': {
                    boxShadow: colors.shadowHover,
                    border: `1px solid ${item.color}40`,
                    transform: 'translateY(-8px) scale(1.02)',
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: `linear-gradient(90deg, ${item.color}, ${item.color}80)`,
                    borderTopLeftRadius: '24px',
                    borderTopRightRadius: '24px',
                    opacity: 0.7
                  }
                }}
              >
                <CardContent sx={{ 
                  p: { xs: 3, md: 4 }, 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  position: 'relative',
                  zIndex: 2
                }}>
                  {/* Icon with gradient background */}
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      mb: 4,
                      position: 'relative'
                    }}
                  >
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: theme === 'light'
                          ? `linear-gradient(135deg, ${item.accentColor}, rgba(255, 255, 255, 0.8))`
                          : `linear-gradient(135deg, ${item.accentColor}, rgba(30, 41, 59, 0.5))`,
                        border: `1px solid ${theme === 'light' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.05)'}`,
                        boxShadow: `0 8px 32px ${item.color}20`
                      }}
                    >
                      {item.icon}
                    </Box>
                  </Box>
                  
                  {/* Title */}
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      fontWeight: 700, 
                      mb: 2, 
                      textAlign: 'center',
                      color: colors.textPrimary,
                      fontSize: { xs: '1.25rem', md: '1.5rem' }
                    }}
                  >
                    {item.title}
                  </Typography>
                  
                  {/* Description */}
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      mb: 4,
                      textAlign: 'center',
                      color: colors.textSecondary,
                      flexGrow: 1,
                      lineHeight: 1.7,
                      fontSize: '1rem'
                    }}
                  >
                    {item.description}
                  </Typography>
                  
                  {/* Skills chips */}
                  <Box 
                    sx={{ 
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 1.5,
                      justifyContent: 'center',
                      mt: 'auto'
                    }}
                  >
                    {item.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Chip
                          label={skill}
                          size="small"
                          sx={{
                            backgroundColor: item.accentColor,
                            color: item.color,
                            fontWeight: 600,
                            fontSize: '0.75rem',
                            height: 32,
                            border: `1px solid ${item.color}30`,
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              backgroundColor: `${item.color}20`,
                              border: `1px solid ${item.color}50`,
                            },
                            '& .MuiChip-label': {
                              px: 2,
                              py: 0.5
                            }
                          }}
                        />
                      </motion.div>
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