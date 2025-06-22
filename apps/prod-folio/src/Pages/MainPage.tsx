import { Avatar, Box, Button, Container, Grid, IconButton, makeStyles, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import React from "react";
import { useMenuStyles } from "../Utils";

type MainPageProps = {
    changeTheme: () => void;
}

const pages = ['Projects', 'About Me', 'Resume'];

export const MainPage: React.FC<MainPageProps> = ({ changeTheme }) => {
    const [value, setValue] = React.useState<string>('Item One');
    const styles = useMenuStyles();

    return (
        <AppBar position="sticky" sx={
            styles.appBarStyle
        }
            color="transparent">
            <Container maxWidth="xl" sx={{ width: '100%', alignItems: 'center' }}>
                <Toolbar
                    disableGutters
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <Box sx={{ flexGrow: 2 }}>
                        <Avatar src="/assets/static/logoIconDark.png" />
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="h5" component="div" sx={{ color: 'inherit', fontWeight: 'thin' }}>
                            Nix Lab
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        {pages.map((page) => (
                            <Button
                                disableRipple
                                key={page}
                                sx={{ display: 'block', ...styles.navItem }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >

    );
}