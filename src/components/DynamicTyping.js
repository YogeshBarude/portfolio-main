import React from "react";
import Typewriter from "typewriter-effect";
import { Box } from '@mui/material';

const DynamicTyping = (props) => {
    return (
        <Box sx={{
            fontSize: '24px',
            fontWeight: 600,
            color: '#3b82f6',
            textAlign: 'center',
            marginBottom: '24px',
            minHeight: '32px'
        }}>
            <Typewriter
                options={{
                    strings: props.titles,
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 80,
                    cursor: '|',
                    cursorClassName: 'typewriter-cursor'
                }}
            />
        </Box>
    );
}

export default DynamicTyping;