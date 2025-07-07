import React from 'react';
import { Typography, Box } from '@mui/material';

const About = (props) => {
  const { about } = props || {};
  const { start, exit } = about || {};

  return (
    <Box id="about">
      <Typography 
        variant="body1" 
        sx={{
          fontSize: '16px',
          lineHeight: 1.7,
          color: '#cbd5e1',
          marginBottom: '16px',
          textAlign: 'left'
        }}
      >
        {start}
      </Typography>
      
      <Typography 
        variant="body1"
        sx={{
          fontSize: '16px',
          lineHeight: 1.7,
          color: '#cbd5e1',
          textAlign: 'left'
        }}
      >
        {exit}
      </Typography>
      
      <Typography 
        variant="body1"
        sx={{
          fontSize: '16px',
          lineHeight: 1.7,
          color: '#3b82f6',
          fontWeight: 600,
          marginTop: '24px',
          textAlign: 'left'
        }}
      >
        Let's connect and shape the future of AI-powered enterprises!
      </Typography>
    </Box>
  );
};

export default About;
