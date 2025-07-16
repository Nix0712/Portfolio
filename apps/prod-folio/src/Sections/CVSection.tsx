import React from 'react';
import { Box, Typography } from '@mui/material';

export const CVView: React.FC = () => {
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
                <Typography variant="h1">CV</Typography>
            </Box>
        </Box>
    );
};
