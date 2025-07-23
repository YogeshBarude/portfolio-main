import React from 'react';
import { Box, Typography, Chip, Button, Avatar, useMediaQuery, Paper, Card, CardContent, CardMedia } from '@mui/material';
import { AiFillFolderOpen } from 'react-icons/ai';

const ProjectListItem = ({ item }) => {
    const isMobile = useMediaQuery('(max-width:900px)');
    // Find repo and report links for clarity
    const repoLink = item.links?.find(link => link.name.toLowerCase() === 'repo');
    const reportLink = item.links?.find(link => link.name.toLowerCase() === 'report');
    return (
        <Card
            sx={{
                width: '100%',
                aspectRatio: '1 / 1',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#1e293b',
                border: '1px solid #334155',
                borderRadius: '16px',
                boxShadow: '0 4px 24px rgba(59,130,246,0.08)',
                overflow: 'hidden',
                transition: 'all 0.3s',
                '&:hover': {
                    transform: 'translateY(-8px)',
                    borderColor: '#3b82f6',
                    boxShadow: '0 20px 40px rgba(59,130,246,0.15)',
                },
            }}
        >
            <CardMedia
                component="img"
                image={item.image}
                alt={item.title}
                sx={{
                    width: '100%',
                    height: '220px',
                    objectFit: 'cover',
                }}
            />
            <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '24px', gap: '16px', textAlign: 'left' }}>
                <Box>
                    <Typography variant="h6" component="h3" sx={{ color: '#ffffff', fontSize: '20px', fontWeight: 700, marginBottom: '8px', lineHeight: 1.3, textAlign: 'left' }}>
                        {item.title}
                    </Typography>
                    {item.subtitle && (
                        <Typography variant="subtitle2" sx={{ color: '#3b82f6', fontWeight: 600, marginBottom: '8px', textAlign: 'left' }}>
                            {item.subtitle}
                        </Typography>
                    )}
                    <Typography variant="body2" sx={{ color: '#cbd5e1', fontSize: '15px', lineHeight: 1.6, marginBottom: '16px', textAlign: 'left' }}>
                        {item.description}
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '8px', justifyContent: 'flex-start' }}>
                    {item.tags && item.tags.map((tag, idx) => (
                        <Chip
                            key={idx}
                            label={tag}
                            size="small"
                            sx={{
                                backgroundColor: '#232e41',
                                color: '#cbd5e1',
                                fontWeight: 500,
                                fontSize: '13px',
                                letterSpacing: '0.2px',
                                textAlign: 'left',
                            }}
                        />
                    ))}
                </Box>
                <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-start' }}>
                    {/* Repo Button: always show if repoLink exists */}
                    {repoLink && (
                        <Button
                            variant="outlined"
                            size="small"
                            href={repoLink.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                backgroundColor: 'transparent',
                                color: '#3b82f6',
                                borderColor: '#3b82f6',
                                fontWeight: 600,
                                textTransform: 'none',
                                boxShadow: 'none',
                                textAlign: 'left',
                                '&:hover': {
                                    backgroundColor: '#232e41',
                                    color: '#fff',
                                    borderColor: '#2563eb',
                                },
                            }}
                        >
                            Repository
                        </Button>
                    )}
                    {/* Report Button: show if reportLink exists */}
                    {reportLink && (
                        <Button
                            variant="outlined"
                            size="small"
                            href={reportLink.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                backgroundColor: 'transparent',
                                color: '#3b82f6',
                                borderColor: '#3b82f6',
                                fontWeight: 600,
                                textTransform: 'none',
                                boxShadow: 'none',
                                textAlign: 'left',
                                '&:hover': {
                                    backgroundColor: '#232e41',
                                    color: '#fff',
                                    borderColor: '#2563eb',
                                },
                            }}
                        >
                            Project Report
                        </Button>
                    )}
                </Box>
            </CardContent>
        </Card>
    );
};

export default ProjectListItem; 