import React from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';

const SkillsItems = (props) => {
    const isMobile = useMediaQuery('(max-width:900px)');

    return (
        <Box sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            gap: isMobile ? '16px' : '24px',
            maxWidth: '100%'
        }}>
            {props.config.map((item) => (
                <Box
                    key={item.id}
                    sx={{
                        color: '#cbd5e1',
                        textAlign: 'center',
                        padding: isMobile ? '20px 16px' : '24px 20px',
                        backgroundColor: '#334155',
                        borderRadius: '12px',
                        border: '1px solid #475569',
                        transition: 'all 0.3s ease',
                        minWidth: isMobile ? '120px' : '140px',
                        '&:hover': {
                            transform: 'translateY(-4px)',
                            backgroundColor: '#3b82f6',
                            color: '#ffffff',
                            borderColor: '#3b82f6',
                            boxShadow: '0 8px 25px rgba(59, 130, 246, 0.3)',
                            cursor: 'pointer',
                        },
                    }}
                >
                    <Box sx={{
                        fontSize: isMobile ? '32px' : '40px',
                        marginBottom: '12px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        {item.icon}
                    </Box>
                    <Typography 
                        variant="body2" 
                        sx={{ 
                            fontSize: '14px',
                            fontWeight: 600,
                            lineHeight: 1.4
                        }}
                    >
                        {item.text}
                    </Typography>
                </Box>
            ))}
        </Box>
    );
}

export default SkillsItems;
