// pages/SplashWrapper.jsx
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SplashScreen from '../pages/SplashScreen';
import Home from '../pages/Home';

const SplashWrapper = ({ theme }) => {
  const [showSplash, setShowSplash] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);

      if (location.pathname === '/') {
        navigate('/home', { replace: true });
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [location, navigate]);

  return showSplash ? <SplashScreen /> : <Home theme={theme} />;
};

export default SplashWrapper;
