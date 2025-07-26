import React from 'react';
import { Paper, Typography, Box, useMediaQuery, Chip } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from '@mui/lab';   

import Tags from '../Tags/Tags';

const CustomTimeline = (props) => {
    const { items } = props || {};
    const isMobile = useMediaQuery('(max-width:900px)');

    return (
        <Timeline
            position={isMobile ? "right" : "alternate"}
            sx={{ padding: 0 }}
        >
            {items.map((item) => {
                const { id, icon, title, company, description, tags, date } = item || {};

                return (
                    <TimelineItem key={id} className="MuiTimelineItem-root">
                        <TimelineSeparator>
                            <TimelineDot
                                sx={{
                                    backgroundColor: '#3b82f6',
                                    width: isMobile ? 50 : 48,
                                    height: isMobile ? 50 : 48,
                                    border: '2px solid #1e293b',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginLeft: isMobile ? '-30px' : '0px',
                                }}
                            >
                                <Box sx={{ fontSize: '20px', color: '#ffffff' }}>
                                    {icon}
                                </Box>
                            </TimelineDot>
                            <TimelineConnector 
                                sx={{ 
                                    backgroundColor: '#334155', 
                                    marginLeft: isMobile ? '-30px' : '0px'
                                }} 
                            />
                        </TimelineSeparator>
                        <TimelineContent
                            sx={{
                                py: '12px',
                                px: isMobile ? 2 : 2,
                                width: isMobile ? 'calc(100% - 60px)' : '100%',
                                marginLeft: isMobile ? '-10px' : '0px',
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                            className="MuiTimelineContent-root"
                        >
                            <Paper
                                elevation={0}
                                sx={{
                                    p: isMobile ? 3 : 4,
                                    width: isMobile ? '100%' : '600px',
                                    maxWidth: '100%',
                                    backgroundColor: '#1e293b',
                                    borderRadius: '12px',
                                    border: '1px solid #334155',
                                    transition: 'all 0.2s ease-in-out',
                                    '&:hover': {
                                        borderColor: '#3b82f6',
                                        transform: 'translateY(-2px)',
                                    },
                                    margin: '0 auto',
                                }}
                            >
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    marginBottom: '16px',
                                    flexDirection: 'row',
                                    gap: 0
                                }}>
                                    <Box sx={{ flex: 1 }}>
                                        <Typography
                                            variant="h6"
                                            component="h3"
                                            sx={{
                                                color: '#ffffff',
                                                fontSize: '20px',
                                                fontWeight: 700,
                                                marginBottom: '4px',
                                                lineHeight: 1.3,
                                                textAlign: 'left',
                                            }}
                                        >
                                            {title}
                                        </Typography>
                                        <Typography
                                            variant="subtitle1"
                                            sx={{
                                                color: '#3b82f6',
                                                fontSize: '16px',
                                                fontWeight: 600,
                                                marginBottom: '4px',
                                                textAlign: 'left',
                                            }}
                                        >
                                            {company}
                                        </Typography>
                                    </Box>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: '#94a3b8',
                                            fontSize: '14px',
                                            fontWeight: 500,
                                            textAlign: 'right',
                                            minWidth: '120px',
                                        }}
                                    >
                                        {date}
                                    </Typography>
                                </Box>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: '#cbd5e1',
                                        fontSize: '15px',
                                        lineHeight: 1.6,
                                        marginBottom: '20px',
                                        textAlign: 'left',
                                    }}
                                    className="timeline-description"
                                >
                                    {description}
                                </Typography>
                                <Box sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: '8px',
                                    justifyContent: 'flex-start',
                                }}>
                                    {tags && tags.map((tag, index) => (
                                        <Chip
                                            key={index}
                                            label={tag}
                                            size="small"
                                            sx={{
                                                backgroundColor: '#334155',
                                                color: '#cbd5e1',
                                                fontSize: '12px',
                                                fontWeight: 500,
                                                textAlign: 'left',
                                                '&:hover': {
                                                    backgroundColor: '#3b82f6',
                                                    color: '#ffffff'
                                                }
                                            }}
                                        />
                                    ))}
                                </Box>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                );
            })}
        </Timeline>
    );
};

export default CustomTimeline;