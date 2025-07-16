import React from 'react';
import { usePageStyles } from '../Utils';
import { Box, Switch, Typography } from '@mui/material';
import { AboutMeView, CVView, FirstView, ProjectsView } from '../Sections';

type MainPageProps = {
    changeTheme: () => void;
};

export const MainPage: React.FC<MainPageProps> = ({ changeTheme }) => {
    const styles = usePageStyles();

    return (
        <Box>
            <FirstView />
            <Box>
                <Switch onChange={changeTheme} />
                <Typography variant="h6">Toggle Theme</Typography>
            </Box>
            <AboutMeView />
            <ProjectsView />
            <CVView />
        </Box>
    );
};
