import React from 'react';
import { Grid2, Box, Typography, useMediaQuery } from '@mui/material';
import CardItem from '../components/Cards/CardItem';
import projectConfig from '../assets/configs/projectConfig';

const Projects = () => {
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
                    lineHeight: 1.2
                }}
            >
                Projects
            </Typography>
            
            <Grid2 container spacing={4} justifyContent="center">
                {projectConfig.map((item, index) => (
                    <Grid2 item key={index} xs={12} sm={6} lg={4}>
                        <CardItem item={item} />
                    </Grid2>
                ))}
            </Grid2>
        </Box>
    );
}

export default Projects;
