import React from 'react';
import { Box, Typography, Link, useTheme, alpha } from '@mui/material';
import { Email, Phone, LinkedIn, Language } from '@mui/icons-material';

const ContactInfo = () => {
  const theme = useTheme();

  const contactItems = [
    {
      icon: <Email sx={{ fontSize: '1.4rem' }} />,
      label: 'Email',
      value: 'oladotunfrancisadedayo121@gmail.com',
      link: 'mailto:oladotunfrancisadedayo121@gmail.com',
      color: theme.palette.primary.main,
    },
    {
      icon: <Phone sx={{ fontSize: '1.4rem' }} />,
      label: 'Phone',
      value: '+234 815 922 7696',
      link: 'tel:+2348159227696',
      color: theme.palette.success.main,
    },
    {
      icon: <LinkedIn sx={{ fontSize: '1.4rem' }} />,
      label: 'LinkedIn',
      value: 'Francis Oladotun',
      link: 'https://linkedin.com/in/francis-oladotun',
      color: theme.palette.info.main,
    },
    {
      icon: <Language sx={{ fontSize: '1.4rem' }} />,
      label: 'Portfolio',
      value: 'francis-oladotun.vercel.app',
      link: 'https://francis-oladotun.vercel.app',
      color: theme.palette.warning.main,
    }
  ];

  return (
    <Box sx={{ 
      width: '100%',
      p: { xs: 2, sm: 3 },
      maxWidth: '100%',
      overflow: 'hidden'
    }}>
      <Typography variant="h5" sx={{ 
        mb: 3, 
        fontWeight: 700,
        textAlign: 'center',
        position: 'relative',
      }}>
        Get In Touch
      </Typography>
      
      <Box sx={{ 
        display: 'grid', 
        gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, 
        gap: 2.5,
        maxWidth: '100%'
      }}>
        {contactItems.map((item, index) => (
          <Box
            key={index}
            sx={{ 
              display: 'flex', 
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              p: 3,
              borderRadius: 5,
              background: '#FFF',
              boxShadow: theme.shadows[1],
              transition: 'all 0.3s ease-in-out',
              maxWidth: '100%',
              minHeight: '140px',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: theme.shadows[4],
                borderColor: alpha(item.color, 0.3),
              }
            }}
          >
            <Box sx={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              backgroundColor: alpha(item.color, 0.1),
              color: item.color,
              mb: 2,
              transition: 'all 0.3s ease',
            }}>
              {item.icon}
            </Box>
            
            <Typography variant="overline" sx={{ 
              color: theme.palette.text.secondary,
              mb: 1,
              display: 'block',
              fontWeight: 600,
              letterSpacing: '0.5px'
            }}>
              {item.label}
            </Typography>
            
            {item.link ? (
              <Link 
                href={item.link} 
                target="_blank"
                underline="none" 
                sx={{ 
                  fontWeight: 500,
                  color: theme.palette.text.primary,
                  fontSize: '1rem',
                  textAlign: 'center',
                  wordBreak: 'break-word',
                  maxWidth: '100%',
                  display: 'block',
                  px: 0.5,
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    color: item.color,
                  }
                }}
              >
                {item.value}
              </Link>
            ) : (
              <Typography variant="body2" sx={{ 
                fontWeight: 500,
                color: theme.palette.text.primary,
                fontSize: '0.95rem',
                wordBreak: 'break-word',
                maxWidth: '100%'
              }}>
                {item.value}
              </Typography>
            )}
          </Box>
        ))}
      </Box>

      <Typography variant="body2" sx={{ 
        mt: 4, 
        textAlign: 'center', 
        fontSize: 15,
        fontStyle: 'italic',
        px: 2
      }}>
        Reach out through any channel, I'm always open to new opportunities and conversations.
      </Typography>
    </Box>
  );
};

export default ContactInfo;