import React from 'react';
import { Button, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const CTAButton = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0' }}>
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.3 }
        }}
        whileTap={{
          scale: 0.98,
          transition: { duration: 0.2 }
        }}
      >
        <Button
          variant="contained"
          size="large"
          onClick={() => navigate('/contact')}
          endIcon={<ArrowForwardIcon />}
          sx={{
            py: 2,
            px: 4,
            fontSize: '1.2rem',
            fontWeight: 'bold',
            textTransform: 'none',
            borderRadius: '50px',
            background: `linear-gradient(45deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
            boxShadow: `0 4px 15px ${theme.palette.primary.main}80`,
            color: 'white',
            position: 'relative',
            overflow: 'hidden',
            '&:hover': {
              boxShadow: `0 6px 20px ${theme.palette.primary.main}80`,
              '& .bubble': {
                opacity: 1,
                y: -10,
                scale: 1
              }
            },
          }}
        >
          Let's Connect
          {/* Bubble/Steam elements */}
          {[...Array(5)].map((_, i) => (
            <motion.span
              key={i}
              className="bubble"
              initial={{ opacity: 0, y: 0, scale: 0.5 }}
              style={{
                position: 'absolute',
                top: '10%',
                left: `${10 + (i * 20)}%`,
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255,255,255,0.7)',
                pointerEvents: 'none'
              }}
              transition={{
                duration: 0.5,
                delay: i * 0.1
              }}
            />
          ))}
        </Button>
      </motion.div>
    </div>
  );
};

export default CTAButton;