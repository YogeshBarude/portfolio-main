import React from 'react';
import { Box, Typography, Button, Divider, useMediaQuery } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import NavBarItems from './NavBarItems';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';

const NavBar = () => {
    const isMobile = useMediaQuery('(max-width:900px)');
    const location = useLocation();

    if (isMobile) {
        return (
            <Box sx={{ 
                backgroundColor: '#1e293b',
                borderBottom: '1px solid #334155',
                padding: '16px 24px'
            }}>
                <NavBarItems />
            </Box>
        );
    }

    return (
        <Box sx={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            padding: '40px 32px',
            backgroundColor: '#1e293b'
        }}>
            {/* Hero Section */}
            <Box sx={{ marginBottom: '48px' }}>
                <Typography 
                    variant="h3" 
                    sx={{
                        fontSize: '28px',
                        fontWeight: 800,
                        color: '#ffffff',
                        marginBottom: '8px',
                        lineHeight: 1.2
                    }}
                >
                    Yogesh Barude
                </Typography>
                
                <Typography 
                    variant="h6" 
                    sx={{
                        fontSize: '18px',
                        fontWeight: 500,
                        color: '#94a3b8',
                        marginBottom: '12px'
                    }}
                >
                    Data Scientist & AI Specialist
                </Typography>
                
                <Typography 
                    variant="body2" 
                    sx={{
                        fontSize: '14px',
                        color: '#cbd5e1',
                        lineHeight: 1.5,
                        marginBottom: '24px'
                    }}
                >
                    MBA in Big Data Analytics with expertise in transforming data into strategic business decisions.
                </Typography>
                
                <Button
                    variant="contained"
                    href="https://drive.google.com/drive/folders/1VkOJZl5eNNrs5AV7PS4nRHD3R3Rc-f-N?usp=sharing"
                    target="_blank"
                    sx={{
                        backgroundColor: '#3b82f6',
                        color: '#ffffff',
                        borderRadius: '8px',
                        padding: '12px 24px',
                        fontSize: '14px',
                        fontWeight: 600,
                        textTransform: 'none',
                        '&:hover': {
                            backgroundColor: '#2563eb'
                        }
                    }}
                >
                    View Resume
                </Button>
            </Box>

            <Divider sx={{ 
                backgroundColor: '#334155', 
                marginBottom: '32px' 
            }} />

            {/* Navigation Links */}
            <Box sx={{ flex: 1 }}>
                <NavBarItems />
            </Box>

            {/* Social Icons */}
            <Box sx={{ 
                marginTop: 'auto',
                paddingTop: '32px'
            }}>
                <Divider sx={{ 
                    backgroundColor: '#334155', 
                    marginBottom: '24px' 
                }} />
                
                <Box sx={{
                    display: 'flex',
                    gap: '16px',
                    justifyContent: 'center'
                }}>
                    <Box
                        component="a"
                        href="https://github.com/your-github"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            color: '#94a3b8',
                            fontSize: '24px',
                            transition: 'color 0.2s ease',
                            '&:hover': {
                                color: '#3b82f6'
                            }
                        }}
                    >
                        <AiFillGithub />
                    </Box>
                    
                    <Box
                        component="a"
                        href="https://linkedin.com/in/your-linkedin"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            color: '#94a3b8',
                            fontSize: '24px',
                            transition: 'color 0.2s ease',
                            '&:hover': {
                                color: '#3b82f6'
                            }
                        }}
                    >
                        <AiFillLinkedin />
                    </Box>
                    
                    <Box
                        component="a"
                        href="mailto:your-email@example.com"
                        sx={{
                            color: '#94a3b8',
                            fontSize: '24px',
                            transition: 'color 0.2s ease',
                            '&:hover': {
                                color: '#3b82f6'
                            }
                        }}
                    >
                        <AiOutlineMail />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default NavBar;
