import React from 'react';
import { Box, Typography, useMediaQuery, Grid } from '@mui/material';
import projectConfig from '../assets/configs/projectConfig';
import ProjectListItem from '../components/Cards/ProjectListItem';

const Projects = () => {
    const isMobile = useMediaQuery('(max-width:900px)');

    return (
        <Box sx={{
            backgroundColor: '#0b1120',
            minHeight: '100vh',
            padding: isMobile ? '24px 16px' : '48px 64px',
        }}>
            <Typography 
                variant="h2" 
                sx={{
                    fontSize: isMobile ? '32px' : '48px',
                    fontWeight: 800,
                    color: '#3b82f6',
                    marginBottom: '48px',
                    lineHeight: 1.2
                }}
            >
                Projects
            </Typography>
            <Grid container spacing={4} justifyContent="center">
                {projectConfig.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <ProjectListItem item={item} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default Projects;
