import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import Navbar from './components/Navbar';
// Correctly import Home
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
// Remove any incorrect import like 'import HomePage from ...' if it exists

const theme = {
  colors: {
    primary: '#2D2D2D',
    secondary: '#F5F5F5',
    accent: '#FF4D4D',
    background: '#FFFFFF',
  },
  fonts: {
    heading: "'Poppins', sans-serif",
    body: "'Inter', sans-serif",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Navbar />
        <Routes>
          {/* Correctly use the imported Home component */}
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Make sure you are not using <HomePage /> anywhere else */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;