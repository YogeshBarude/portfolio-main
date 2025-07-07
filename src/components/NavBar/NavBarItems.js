import React from 'react';
import { ListItem, ListItemIcon, ListItemText, Box, useMediaQuery } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import menuConfig from '../../assets/configs/menuConfig';

const NavBarItems = () => {
    const location = useLocation();
    const isMobile = useMediaQuery('(max-width:900px)');

    if (isMobile) {
        return (
            <Box sx={{ 
                display: 'flex', 
                justifyContent: 'flex-start', 
                gap: 2,
                flexDirection: 'row',
                overflowX: 'auto',
                whiteSpace: 'nowrap'
            }}>
                {menuConfig.sidebarData.map((item) => (
                    <ListItem
                        button
                        component={Link}
                        to={item.path}
                        key={item.id}
                        sx={{
                            color: location.pathname === item.path ? '#ffffff' : '#94a3b8',
                            display: 'flex',
                            alignItems: 'center',
                            padding: '12px 16px',
                            borderRadius: '8px',
                            minWidth: 'auto',
                            '&:hover': {
                                backgroundColor: '#334155',
                                color: '#ffffff'
                            }
                        }}
                    >
                        <ListItemIcon sx={{ 
                            color: 'inherit', 
                            minWidth: 32,
                            fontSize: '20px'
                        }}>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText 
                            primary={item.title} 
                            sx={{
                                '& .MuiListItemText-primary': {
                                    fontSize: '14px',
                                    fontWeight: 500,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px'
                                }
                            }}
                        />
                    </ListItem>
                ))}
            </Box>
        );
    }

    return (
        <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column',
            gap: '8px'
        }}>
            {menuConfig.sidebarData.map((item) => (
                <ListItem
                    button
                    component={Link}
                    to={item.path}
                    key={item.id}
                    sx={{
                        color: location.pathname === item.path ? '#ffffff' : '#94a3b8',
                        display: 'flex',
                        alignItems: 'center',
                        padding: '16px 20px',
                        borderRadius: '8px',
                        marginBottom: '4px',
                        borderLeft: location.pathname === item.path ? '3px solid #3b82f6' : '3px solid transparent',
                        backgroundColor: location.pathname === item.path ? '#334155' : 'transparent',
                        transition: 'all 0.2s ease',
                        '&:hover': {
                            backgroundColor: '#334155',
                            color: '#ffffff',
                            borderLeft: '3px solid #3b82f6'
                        }
                    }}
                >
                    <ListItemIcon sx={{ 
                        color: 'inherit', 
                        minWidth: 40,
                        fontSize: '20px'
                    }}>
                        {item.icon}
                    </ListItemIcon>
                    <ListItemText 
                        primary={item.title} 
                        sx={{
                            '& .MuiListItemText-primary': {
                                fontSize: '14px',
                                fontWeight: 500,
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px'
                            }
                        }}
                    />
                </ListItem>
            ))}
        </Box>
    );
};

export default NavBarItems;
