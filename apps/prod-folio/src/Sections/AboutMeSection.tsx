import React from 'react';
import { Box, Typography } from '@mui/material';

export const AboutMeView: React.FC = () => {
    return (
        <Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    mt: 4,
                    height: '100vh',
                }}
            >
                <Typography variant="h1">About me</Typography>
            </Box>
        </Box>
    );
};
