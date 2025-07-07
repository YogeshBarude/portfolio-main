import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, useMediaQuery } from '@mui/material';
import ReactGA from 'react-ga';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills/Skills';
import Blogs from './pages/Blogs';
import Footer from './components/Footer/Footer';
import './App.css';
import React from 'react';

if (typeof process.env.REACT_APP_TRACKING_ID !== 'undefined') {
    ReactGA.initialize(process.env.REACT_APP_TRACKING_ID);
}

function App() {
    const isMobile = useMediaQuery('(max-width:900px)');

    return (
        <Box sx={{ 
            display: 'flex', 
            minHeight: '100vh',
            backgroundColor: '#0b1120', // Dark navy background
            color: '#ffffff'
        }}>
            <Router>
                {!isMobile && (
                    <Box sx={{
                        width: '320px',
                        position: 'fixed',
                        left: 0,
                        top: 0,
                        height: '100vh',
                        backgroundColor: '#1e293b', // Section divider color
                        borderRight: '1px solid #334155',
                        zIndex: 1000,
                        overflowY: 'auto'
                    }}>
                        <NavBar />
                    </Box>
                )}
                
                {isMobile && (
                    <Box sx={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        zIndex: 1000,
                        backgroundColor: '#1e293b',
                        borderBottom: '1px solid #334155'
                    }}>
                        <NavBar />
                    </Box>
                )}
                
                <Box sx={{
                    flex: 1,
                    marginLeft: isMobile ? 0 : '320px',
                    marginTop: isMobile ? '80px' : 0,
                    minHeight: '100vh',
                    backgroundColor: '#0b1120'
                }}>
                    <Routes>
                        <Route path="/portfolio-main" exact element={<Home />} />
                        <Route path="/projects" exact element={<Projects />} />
                        <Route path="/blogs" exact element={<Blogs />} />
                        <Route path="/skills" exact element={<Skills />} />
                    </Routes>
                    <Footer />
                </Box>
            </Router>
        </Box>
    );
}

export default App;
