import React from 'react';
import { useMenuStyles, usePageStyles } from '../Utils';
import { NavBar } from '../Components';
import { Box, Switch } from '@mui/material';

type MainPageProps = {
    changeTheme: () => void;
};

export const MainPage: React.FC<MainPageProps> = ({ changeTheme }) => {
    const styles = usePageStyles();

    return (
        <Box sx={styles.mainPageContainer}>
            <NavBar changeTheme={changeTheme} />
            <span>
                Test click theme change more teststasdadoasdoiasnd asdoijasoidj
                aoidj a
            </span>
            <Switch
                onChange={() => {
                    changeTheme();
                }}
            />
        </Box>
    );
};
