import React from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import SkillsItems from './SkillsItems';
import skillsConfig from '../../assets/configs/skillsConfig';

const Skills = () => {
    const isMobile = useMediaQuery('(max-width:900px)');

    return (
        <Box sx={{
            backgroundColor: '#0b1120',
            minHeight: '100vh',
            padding: isMobile ? '24px 16px' : '48px 64px'
        }}>
            <Typography 
                variant="h2" 
                sx={{
                    fontSize: isMobile ? '32px' : '48px',
                    fontWeight: 800,
                    color: '#ffffff',
                    marginBottom: '48px',
                    lineHeight: 1.2,
                    textAlign: 'center'
                }}
            >
                Skills & Tools
            </Typography>

            {/* Main Skills Section */}
            <Box sx={{ 
                marginBottom: '64px',
                backgroundColor: '#1e293b',
                borderRadius: '16px',
                padding: '40px',
                border: '1px solid #334155'
            }}>
                <Typography 
                    variant="h3" 
                    sx={{
                        fontSize: isMobile ? '24px' : '32px',
                        fontWeight: 700,
                        color: '#ffffff',
                        marginBottom: '32px',
                        textAlign: 'center'
                    }}
                >
                    Core Skills
                </Typography>
                
                <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'center'
                }}>
                    <SkillsItems config={skillsConfig.mainSkills} />
                </Box>
            </Box>

            {/* Complementary Skills Section */}
            <Box sx={{ 
                backgroundColor: '#1e293b',
                borderRadius: '16px',
                padding: '40px',
                border: '1px solid #334155'
            }}>
                <Typography 
                    variant="h3" 
                    sx={{
                        fontSize: isMobile ? '24px' : '32px',
                        fontWeight: 700,
                        color: '#ffffff',
                        marginBottom: '32px',
                        textAlign: 'center'
                    }}
                >
                    Additional Skills
                </Typography>
                
                <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'center'
                }}>
                    <SkillsItems config={skillsConfig.complementarySkills} />
                </Box>
            </Box>
        </Box>
    );
}

export default Skills;

