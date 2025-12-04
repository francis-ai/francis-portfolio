import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import SplashWrapper from './components/SplashWrapper';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <Router>
      <div className="app">
        <Navbar theme={theme} setTheme={setTheme} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<SplashWrapper theme={theme}/>} />
            <Route path="/home" element={<SplashWrapper theme={theme} />} />
            <Route path="/about" element={<About theme={theme} />} />
            <Route path="/projects" element={<Projects theme={theme} />} />
            <Route path="/contact" element={<Contact theme={theme} />} />
          </Routes>
        </main>
        <Footer theme={theme} />
      </div>
    </Router>
  );
}

export default App;


// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import './index.css';
// import SplashWrapper from './components/SplashWrapper';
// import About from './pages/About';
// import Projects from './pages/Projects';
// import Contact from './pages/Contact';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';


// function Layout({ children, theme, setTheme }) {
//   const location = useLocation();
//   const hideLayout = location.pathname.startsWith('/admin');

//   return (
//     <>
//       {!hideLayout && <Navbar theme={theme} setTheme={setTheme} />}
      
//       <main className="main-content">
//         {children}
//       </main>

//       {!hideLayout && <Footer theme={theme} />}
//     </>
//   );
// }

// function App() {
//   const [theme, setTheme] = useState('dark');

//   useEffect(() => {
//     document.documentElement.setAttribute('data-theme', theme);
//   }, [theme]);

//   return (
//     <Router>
//       <Layout theme={theme} setTheme={setTheme}>
//         <Routes>
//           <Route path="/" element={<SplashWrapper theme={theme}/>} />
//           <Route path="/home" element={<SplashWrapper theme={theme} />} />
//           <Route path="/about" element={<About theme={theme} />} />
//           <Route path="/projects" element={<Projects theme={theme} />} />
//           <Route path="/contact" element={<Contact theme={theme} />} />

//         </Routes>
//       </Layout>
//     </Router>
//   );
// }

// export default App;
