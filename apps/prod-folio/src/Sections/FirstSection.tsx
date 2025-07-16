import React from 'react';
import { usePageStyles } from '../Utils';
import { NavBar } from '../Components';
import { Box } from '@mui/material';

export const FirstView: React.FC = () => {
    const styles = usePageStyles();

    return (
        <Box sx={styles.mainPageContainer}>
            <NavBar />
        </Box>
    );
};
