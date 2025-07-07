import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Chip, Button } from '@mui/material';
import CardIcons from './CardIcons';

const CardItem = (props) => {
    const { item } = props;
    
    return (
        <Card
            sx={{
                width: '100%',
                height: 'auto',
                backgroundColor: '#1e293b',
                border: '1px solid #334155',
                borderRadius: '12px',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                transition: 'all 0.3s ease-in-out',
                overflow: 'hidden',
                '&:hover': {
                    transform: 'translateY(-8px)',
                    borderColor: '#3b82f6',
                    boxShadow: '0 20px 40px rgba(59, 130, 246, 0.15)',
                },
            }}
        >
            <CardMedia
                component="div"
                sx={{
                    backgroundImage: `url(${item.image})`,
                    height: 200,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative',
                }}
                alt={item.title}
            />
            
            <CardContent
                sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '24px',
                    gap: '16px'
                }}
            >
                <Box>
                    <Typography 
                        variant="h6" 
                        component="h3"
                        sx={{
                            color: '#ffffff',
                            fontSize: '20px',
                            fontWeight: 700,
                            marginBottom: '8px',
                            lineHeight: 1.3
                        }}
                    >
                        {item.title}
                    </Typography>
                    
                    <Typography
                        variant="body2"
                        sx={{
                            color: '#cbd5e1',
                            fontSize: '14px',
                            lineHeight: 1.6,
                            marginBottom: '16px'
                        }}
                    >
                        {item.description}
                    </Typography>
                </Box>
                
                <Box sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                    marginBottom: '16px'
                }}>
                    {item.tags && item.tags.map((tag, index) => (
                        <Chip
                            key={index}
                            label={tag}
                            size="small"
                            sx={{
                                backgroundColor: '#334155',
                                color: '#cbd5e1',
                                fontSize: '11px',
                                fontWeight: 500,
                                '&:hover': {
                                    backgroundColor: '#3b82f6',
                                    color: '#ffffff'
                                }
                            }}
                        />
                    ))}
                </Box>
                
                <Box sx={{
                    display: 'flex',
                    gap: '12px',
                    marginTop: 'auto'
                }}>
                    {item.links && item.links.map((link, index) => (
                        <Button
                            key={index}
                            variant="outlined"
                            size="small"
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                borderColor: '#3b82f6',
                                color: '#3b82f6',
                                fontSize: '12px',
                                fontWeight: 600,
                                textTransform: 'none',
                                padding: '6px 16px',
                                '&:hover': {
                                    backgroundColor: '#3b82f6',
                                    color: '#ffffff',
                                    borderColor: '#3b82f6'
                                }
                            }}
                        >
                            {link.name}
                        </Button>
                    ))}
                </Box>
            </CardContent>
        </Card>
    );
}

export default CardItem;
