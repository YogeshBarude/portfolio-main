import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, useMediaQuery, Button, Paper, Chip } from '@mui/material';
import DynamicTyping from '../../components/DynamicTyping';
import About from '../../components/About';
import Timeline from '../../components/Timeline/Timeline';
import homeConfig from '../../assets/configs/homeConfig';
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import './customChatStyles.css';
import logo from './logo.png';

import { ref, set } from 'firebase/database';
import { database } from './firebase.js';
import { v4 as uuidv4 } from 'uuid';

const Home = () => {
    const isMobile = useMediaQuery('(max-width:900px)');
    const [sessionId] = useState(uuidv4());
    const [chatHistory, setChatHistory] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        addResponseMessage('Hi, You are talking to me!');
    }, []);

    const logToFirebase = (userMessage, botResponse) => {
        const timestamp = Date.now();
        const sessionRef = ref(database, `chatSessions/${sessionId}/${timestamp}`);
        set(sessionRef, {
            userMessage,
            botResponse,
            timestamp
        });
    };

    const handleNewUserMessage = async (newMessage) => {
        if (!newMessage.trim()) return;

        const updatedChatHistory = [...chatHistory, { user: newMessage, bot: null }];
        setChatHistory(updatedChatHistory);
        setLoading(true);

        try {
            const formattedContext = updatedChatHistory
                .map((entry) => `User: ${entry.user} | Bot: ${entry.bot || 'Pending'}`)
                .join(' || ');

            const textPayload = `New Query: ${newMessage},\nUser's chat Message History:\n` + 
                chatHistory
                    .map((entry, index) => `#${index + 1}\nUser: ${entry.user}\nBot: ${entry.bot || 'Pending'}`)
                    .join('\n\n');

            console.log("Text being sent:", textPayload);

            const res = await fetch('https://vercel-lyart-gamma.vercel.app/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    text: textPayload
                }),
            });

            const rawResponse = await res.json();
            console.log("Raw API Response: ", rawResponse);

            if (rawResponse && rawResponse.text) {
                addResponseMessage(rawResponse.text);

                const finalChatHistory = [...updatedChatHistory];
                finalChatHistory[finalChatHistory.length - 1].bot = rawResponse.text;
                setChatHistory(finalChatHistory);

                logToFirebase(newMessage, rawResponse.text);
            } else {
                addResponseMessage('Error: Invalid response from server.');
            }
        } catch (err) {
            console.error('Error fetching response:', err);
            addResponseMessage('Error: Unable to fetch response. Please try again later.');
        }

        setLoading(false);
    };

    return (
        <Box sx={{
            backgroundColor: '#0b1120',
            minHeight: '100vh',
            padding: isMobile ? '24px 16px' : '48px 64px'
        }}>
            {/* About Section */}
            <Box sx={{ marginBottom: '64px' }}>
                <Typography 
                    variant="h2" 
                    sx={{
                        fontSize: isMobile ? '32px' : '48px',
                        fontWeight: 800,
                        color: '#ffffff',
                        marginBottom: '16px',
                        lineHeight: 1.2
                    }}
                >
                    About Me
                </Typography>
                
                <Box sx={{ marginBottom: '24px' }}>
                    <DynamicTyping titles={homeConfig.titles} />
                </Box>
                
                <Paper sx={{
                    backgroundColor: '#1e293b',
                    padding: '32px',
                    borderRadius: '12px',
                    border: '1px solid #334155'
                }}>
                    <About about={homeConfig.about} />
                </Paper>
            </Box>

            {/* Experience Section */}
            <Box sx={{ marginBottom: '64px' }}>
                <Typography 
                    variant="h2" 
                    sx={{
                        fontSize: isMobile ? '32px' : '48px',
                        fontWeight: 800,
                        color: '#ffffff',
                        marginBottom: '32px',
                        lineHeight: 1.2
                    }}
                >
                    Experience & Education
                </Typography>
                
                <Box sx={{
                    maxWidth: '1000px'
                }}>
                    <Timeline items={homeConfig.workTimeline} />
                </Box>
            </Box>

            {/* Chat Widget */}
            <Widget
                handleNewUserMessage={handleNewUserMessage}
                profileAvatar={logo}
                title="Chat with Yogesh"
                subtitle="Ask me anything about my work!"
            />
        </Box>
    );
};

export default Home;
