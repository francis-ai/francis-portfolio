import React from 'react';
import Hero from '../components/Hero';
import MyExpertise from '../components/MyExpertise';
import CTAButton from '../components/CTAbutton';

const Home = ({ theme, setTheme }) => {
  return (
    <div className="home-page">
      <Hero theme={theme} />
      <MyExpertise theme={theme} />
      <CTAButton theme={theme} />
    </div>
  );
};

export default Home;