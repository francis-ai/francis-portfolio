import React from 'react';
import { 
  Box, 
  Typography, 
  Container,
  useTheme,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle,
} from 'lucide-react';
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";

const Contact = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  // Color schemes
  const colorSchemes = {
    light: {
      bgGradient: 'linear-gradient(135deg, #f8faff 0%, #f0f4ff 50%, #eef2ff 100%)',
      cardBg: 'rgba(255, 255, 255, 0.96)',
      cardBorder: 'rgba(124, 58, 237, 0.12)',
      shadow: '0 25px 80px rgba(106, 13, 173, 0.1)',
      accentGradient: 'linear-gradient(135deg, #8B5CF6 0%, #6366F1 50%, #3B82F6 100%)',
      accentGlow: '0 0 60px rgba(139, 92, 246, 0.15)',
      textPrimary: '#1e293b',
      textSecondary: '#64748b',
      success: '#10b981',
      error: '#ef4444'
    },
    dark: {
      bgGradient: 'linear-gradient(135deg, #0f0f23 0%, #1a1b3e 50%, #0f172a 100%)',
      cardBg: 'rgba(30, 41, 59, 0.8)',
      cardBorder: 'rgba(139, 92, 246, 0.2)',
      shadow: '0 25px 80px rgba(0, 0, 0, 0.4)',
      accentGradient: 'linear-gradient(135deg, #8B5CF6 0%, #818cf8 50%, #60a5fa 100%)',
      accentGlow: '0 0 80px rgba(139, 92, 246, 0.25)',
      textPrimary: '#f1f5f9',
      textSecondary: '#94a3b8',
      success: '#34d399',
      error: '#f87171'
    }
  };

  const colors = isDarkMode ? colorSchemes.dark : colorSchemes.light;


  return (
    <Box
      component="section"
      id="contact"
      sx={{
        minHeight: '100vh',
        // background: colors.bgGradient,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        py: { xs: 8, md: 12 }
      }}
    >
      {/* Animated background elements */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: isDarkMode 
            ? 'radial-gradient(circle at 20% 30%, rgba(139, 92, 246, 0.08) 0%, transparent 50%)'
            : 'radial-gradient(circle at 20% 30%, rgba(139, 92, 246, 0.04) 0%, transparent 50%)',
          pointerEvents: 'none'
        }}
      />

      {/* Floating animated shapes */}
      <AnimatePresence>
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            initial={{ 
              opacity: 0,
              scale: 0,
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50
            }}
            animate={{ 
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.2, 1],
              x: Math.random() * 200 - 100,
              y: Math.random() * 200 - 100
            }}
            transition={{
              duration: 5 + i * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              position: 'absolute',
              width: 100 + i * 50,
              height: 100 + i * 50,
              background: `linear-gradient(45deg, ${isDarkMode ? 'rgba(139, 92, 246, 0.1)' : 'rgba(139, 92, 246, 0.05)'}, transparent)`,
              borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
              filter: 'blur(40px)',
              pointerEvents: 'none'
            }}
          />
        ))}
      </AnimatePresence>

      <Container maxWidth="xl p-3">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ position: 'relative', zIndex: 2 }}
        >
          {/* Header */}
          <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 12 } }}>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                component="span"
                sx={{
                  display: 'inline-block',
                  px: 3,
                  py: 1,
                  mb: 3,
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  background: colors.accentGradient,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  border: `1px solid ${isDarkMode ? 'rgba(139, 92, 246, 0.3)' : 'rgba(139, 92, 246, 0.2)'}`,
                  borderRadius: '20px',
                  boxShadow: colors.accentGlow
                }}
              >
                Get In Touch
              </Typography>
            </motion.div>

            <Typography
              variant="h1"
              sx={{
                fontWeight: 900,
                mb: 3,
                fontSize: { xs: '2.75rem', md: '4.5rem', lg: '5rem' },
                lineHeight: 1.1,
                background: colors.accentGradient,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: colors.accentGlow,
                position: 'relative',
                display: 'inline-block',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -12,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '120px',
                  height: '5px',
                  background: colors.accentGradient,
                  borderRadius: '3px',
                  opacity: 0.8
                }
              }}
            >
              Let's Work Together
            </Typography>

            <Typography
              variant="h5"
              sx={{
                maxWidth: '700px',
                mx: 'auto',
                color: colors.textSecondary,
                fontWeight: 400,
                fontSize: { xs: '1.25rem', md: '1.5rem' },
                lineHeight: 1.6,
                mt: 4
              }}
            >
              Have a project in mind? Let's discuss how we can bring your vision to life.
            </Typography>
          </Box>

          {/* Main Content Grid */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
              gap: { xs: 8, lg: 12 },
              alignItems: 'start',
              maxWidth: '1400px',
              mx: 'auto'
            }}
          >
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ContactForm />
            </motion.div>

            {/* Contact Info & Social */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <ContactInfo />
            </motion.div>
          </Box>
        </motion.div>

        {/* Quick Response Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          
        >
          <Box
            sx={{
              background: `linear-gradient(135deg, ${colors.accentGradient})`,
              borderRadius: '24px',
              p: 4,
              mt: 4,
              textAlign: 'center',
              boxShadow: colors.accentGlow
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                mb: 2,
                color: 'white',
                fontSize: '1.5rem'
              }}
            >
              ⚡ Quick Response
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'rgba(255, 255, 255, 0.9)',
                mb: 3
              }}
            >
              I typically respond within 4-6 hours during business days
            </Typography>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                px: 3,
                py: 1,
                background: 'rgba(255, 255, 255, 0.15)',
                borderRadius: '20px',
                backdropFilter: 'blur(10px)'
              }}
            >
              <CheckCircle size={16} color="white" />
              <Typography
                variant="body2"
                sx={{
                  color: 'white',
                  fontWeight: 600
                }}
              >
                Available for new projects
              </Typography>
            </Box>
          </Box>
        </motion.div>
      </Container>



      {/* Add CSS animation for spinner */}
      <style jsx global>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </Box>
  );
};

export default Contact;