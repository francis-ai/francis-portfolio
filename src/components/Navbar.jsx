import React, { useState, useEffect } from 'react';
import {
  AppBar, Toolbar, Typography, IconButton, Button,
  Drawer, ListItem, ListItemText, Box, useMediaQuery, Divider
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import DownloadIcon from '@mui/icons-material/Download';

const navLinks = ['Home', 'About', 'Projects', 'Contact'];

export default function Navbar({ theme, setTheme }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useMediaQuery('(max-width:768px)');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const handleDrawer = () => setDrawerOpen(prev => !prev);

  return (
    <>
      <AppBar 
        position="fixed" 
        elevation={0}
        sx={{
          backgroundColor: 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          borderBottom: scrolled ? '1px solid' : 'none',
          borderColor: theme === 'light' ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)',
          background: scrolled 
            ? theme === 'light' 
              ? 'rgba(255,255,255,0.92)' 
              : 'rgba(18,18,18,0.92)'
            : 'transparent',
          py: scrolled ? 0 : 1
        }}
      >
        <Toolbar sx={{ 
          justifyContent: 'space-between',
          maxWidth: '1280px',
          width: '100%',
          mx: 'auto',
          px: { xs: 2, md: 4 },
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
        }}>
          <Typography 
            variant="h6" 
            component="a" 
            href="/home"
            sx={{ 
              fontWeight: 800,
              letterSpacing: '-0.5px',
              textDecoration: 'none',
              color: theme === 'light' ? 'text.primary' : 'common.white',
              '&:hover': {
                color: theme === 'light' ? 'text.primary' : 'secondary.light'
              },
              transition: 'color 0.3s ease'
            }}
          >
            Francis Oladotun
          </Typography>

          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {navLinks.map(link => (
                <Button
                  key={link}
                  href={`${link.toLowerCase()}`}
                  sx={{ 
                    color: theme === 'light' ? 'text.primary' : 'common.white',
                    fontWeight: 600,
                    textTransform: 'none',
                    fontSize: '0.95rem',
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    '&:hover': {
                      color: theme === 'light' ? 'text.primary' : 'secondary.light',
                      backgroundColor: theme === 'light' ? 'rgba(74, 111, 165, 0.08)' : 'rgba(109, 158, 235, 0.08)',
                      transform: 'translateY(-1px)'
                    },
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                >
                  {link}
                </Button>
              ))}
              
              <Button
                variant="contained"
                href="https://docs.google.com/document/d/1GysL7WcwXkVd4PztA8nYFhFwt7RtASsWU-nCC2AD2i0/edit?usp=sharing"
                target="_blank"
                download
                startIcon={<DownloadIcon />}
                sx={{
                  fontWeight: 600,
                  textTransform: 'none',
                  fontSize: '0.95rem',
                  px: 2.5,
                  py: 1,
                  borderRadius: 2,
                  ml: 1,
                  background: theme === 'light' 
                    ? 'linear-gradient(135deg, #9e30b4ff 0%, #8e3a8fff 100%)' 
                    : 'linear-gradient(135deg, #74146cff 0%, #621573ff 100%)',
                  color: 'common.white',
                  boxShadow: theme === 'light' 
                    ? '0 4px 6px rgba(74, 111, 165, 0.2)' 
                    : '0 4px 6px rgba(6, 6, 6, 0.45)',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: theme === 'light' 
                      ? '0 6px 8px rgba(34, 36, 37, 0.3)' 
                      : '0 6px 8px rgba(14, 15, 17, 0.3)',
                  },
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                Download CV
              </Button>
              
              <IconButton 
                onClick={toggleTheme} 
                sx={{
                  ml: 1,
                  color: theme === 'light' ? 'text.primary' : 'common.white',
                  backgroundColor: theme === 'light' ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.05)',
                  p: 1.5,
                  borderRadius: 2,
                  '&:hover': {
                    backgroundColor: theme === 'light' ? 'rgba(74, 111, 165, 0.1)' : 'rgba(109, 158, 235, 0.1)',
                    color: theme === 'light' ? 'secondary.dark' : 'secondary.light',
                    transform: 'rotate(15deg)'
                  },
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                {theme === 'light' ? (
                  <Brightness4Icon sx={{ fontSize: '1.25rem' }} />
                ) : (
                  <Brightness7Icon sx={{ 
                    fontSize: '1.25rem',
                    color: 'secondary.light'
                  }} />
                )}
              </IconButton>
            </Box>
          )}

          {isMobile && (
            <IconButton 
              onClick={handleDrawer}
              sx={{
                color: theme === 'light' ? 'text.primary' : 'common.white',
                backgroundColor: theme === 'light' ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.05)',
                p: 1.5,
                borderRadius: 2,
                '&:hover': {
                  backgroundColor: theme === 'light' ? 'rgba(74, 111, 165, 0.1)' : 'rgba(109, 158, 235, 0.1)',
                  color: theme === 'light' ? 'primary.main' : 'secondary.light'
                },
                transition: 'all 0.3s ease'
              }}
            >
              {drawerOpen ? (
                <CloseIcon sx={{ fontSize: '1.25rem' }} />
              ) : (
                <MenuIcon sx={{ fontSize: '1.25rem' }} />
              )}
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawer}
        PaperProps={{
          sx: {
            backgroundColor: theme === 'light' ? 'rgba(253, 241, 253, 0.96)' : 'rgba(21, 19, 21, 0.96)',
            backdropFilter: 'blur(12px)',
            width: '300px',
            color: theme === 'light' ? 'text.primary' : 'common.white',
            borderLeft: '1px solid',
            borderColor: theme === 'light' ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)',
            boxShadow: theme === 'light' 
              ? '-4px 0 20px rgba(0,0,0,0.08)' 
              : '-4px 0 20px rgba(0,0,0,0.3)'
          }
        }}
      >
        <Box 
          sx={{ 
            p: 4, 
            display: 'flex', 
            flexDirection: 'column', 
            gap: 3,
            height: '100%'
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6" fontWeight={700}>
              Menu
            </Typography>
            <IconButton 
              onClick={handleDrawer}
              sx={{
                color: 'inherit',
                '&:hover': {
                  color: theme === 'light' ? 'primary.main' : 'secondary.light',
                  backgroundColor: 'transparent'
                }
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          
          <Divider sx={{ borderColor: theme === 'light' ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)' }} />
          
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
            {navLinks.map(link => (
              <ListItem 
                button 
                key={link} 
                component="a" 
                href={`${link.toLowerCase()}`}
                onClick={handleDrawer}
                sx={{
                  px: 2,
                  py: 1.5,
                  color: theme === 'light' ? 'secondary.dark' : 'secondary.light',
                  borderRadius: 2,
                  '&:hover': {
                    backgroundColor: theme === 'light' ? 'rgba(159, 74, 165, 0.08)' : 'rgba(171, 69, 189, 0.08)',
                    color: theme === 'light' ? 'secondary.main' : 'secondary.light',
                    transform: 'translateX(4px)'
                  },
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                <ListItemText 
                  primary={link} 
                  primaryTypographyProps={{
                    fontWeight: 600,
                    fontSize: '1.05rem'
                  }} 
                />
              </ListItem>
            ))}
          </Box>
          
          <Divider sx={{ borderColor: theme === 'light' ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)' }} />
          
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Button 
              variant="contained"
              href="/Francis_Oladotun_CV.pdf" 
              download
              fullWidth
              startIcon={<DownloadIcon />}
              sx={{
                fontWeight: 600,
                textTransform: 'none',
                fontSize: '0.95rem',
                py: 1.5,
                borderRadius: 2,
                background: theme === 'light' 
                    ? 'linear-gradient(135deg, #9e30b4ff 0%, #8e3a8fff 100%)' 
                    : 'linear-gradient(135deg, #74146cff 0%, #621573ff 100%)',
                  color: 'common.white',
                  boxShadow: theme === 'light' 
                    ? '0 4px 6px rgba(74, 111, 165, 0.2)' 
                    : '0 4px 6px rgba(6, 6, 6, 0.45)',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: theme === 'light' 
                      ? '0 6px 8px rgba(34, 36, 37, 0.3)' 
                      : '0 6px 8px rgba(14, 15, 17, 0.3)',
                  },
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              Download CV
            </Button>
            
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'center',
              alignItems: 'center',
              gap: 2
            }}>
              <Typography variant="body2">
                {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
              </Typography>
              <IconButton 
                onClick={toggleTheme}
                size="medium"
                sx={{
                  border: '1px solid',
                  borderColor: theme === 'light' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)',
                  backgroundColor: theme === 'light' ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.05)',
                  '&:hover': {
                    backgroundColor: theme === 'light' ? 'rgba(74, 111, 165, 0.1)' : 'rgba(109, 158, 235, 0.1)',
                    color: theme === 'light' ? 'secondary.main' : 'secondary.light',
                    transform: 'rotate(15deg)'
                  },
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                {theme === 'light' ? (
                  <Brightness4Icon sx={{ fontSize: '1.1rem' }} />
                ) : (
                  <Brightness7Icon sx={{ 
                    fontSize: '1.1rem',
                    color: 'secondary.light'
                  }} />
                )}
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}