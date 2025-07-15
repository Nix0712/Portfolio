import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import { MainPage } from './Pages';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const lightTheme = createTheme({
    palette: {
        mode: 'light',
    },
});

const App: React.FC = () => {
    const [theme, setTheme] = React.useState<boolean>(true);

    const changeTheme = () => {
        setTheme(!theme);
    };

    return (
        <ThemeProvider theme={theme ? darkTheme : lightTheme}>
            <CssBaseline />
            <MainPage changeTheme={changeTheme} />
        </ThemeProvider>
    );
};

export default App;
