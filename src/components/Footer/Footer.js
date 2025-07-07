import React from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import FooterItems from './FooterItems';

const Footer = () => {
    const isMobile = useMediaQuery('(max-width:900px)');

    return (
        <Box sx={{ 
            backgroundColor: '#1e293b', 
            width: '100%', 
            borderTop: '1px solid #334155',
            padding: isMobile ? '24px 16px' : '32px 64px'
        }}>
            <Box sx={{ 
                textAlign: 'center', 
                color: '#94a3b8'
            }}>
                <FooterItems />
                <Typography 
                    variant="body2" 
                    sx={{
                        marginTop: '16px',
                        color: '#64748b',
                        fontSize: '14px'
                    }}
                >
                    © 2024 Yogesh Barude. All rights reserved.
                </Typography>
            </Box>
        </Box>
    );
}

export default Footer;
