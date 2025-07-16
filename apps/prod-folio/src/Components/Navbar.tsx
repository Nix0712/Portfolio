import {
    AppBar,
    Avatar,
    Box,
    Button,
    ClickAwayListener,
    Collapse,
    IconButton,
    List,
    ListItem,
    Toolbar,
    Typography,
    useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';
import { useMenuStyles } from '../Utils';

const sections = ['Projects', 'About Me', 'CV'];

export const NavBar: React.FC = () => {
    // const [value, setValue] = React.useState<string>('Item One'); // Later for selected item

    const [isOpenNavMenu, setIsOpenNavMenu] = useState<boolean>(false);

    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';
    const logoSrc = isDark
        ? '/assets/static/LogoDarkTheme.png'
        : '/assets/static/LogoLightTheme.png';

    const handleNavMenuChange = () => {
        setIsOpenNavMenu(!isOpenNavMenu);
    };

    const styles = useMenuStyles();
    return (
        <AppBar position="static" sx={styles.appBarStyle} color="transparent">
            <Toolbar
                disableGutters
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    minHeight: 0,
                }}
            >
                <Box
                    sx={{
                        flexGrow: 2,
                        display: { xs: 'none', md: 'flex' },
                        pl: 4,
                    }}
                >
                    <Avatar
                        src={logoSrc}
                        sx={{ p: 0.7, width: 56, height: 56 }}
                    />
                </Box>

                <ClickAwayListener onClickAway={() => setIsOpenNavMenu(false)}>
                    <Box sx={styles.burgerMenu(isOpenNavMenu)}>
                        <Box>
                            <IconButton
                                size="large"
                                aria-label="menu"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleNavMenuChange}
                                color="inherit"
                                disableFocusRipple
                                disableRipple
                                sx={{
                                    borderRadius: 0,
                                    pt: 3,
                                    pl: 2,
                                }}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>
                        <Collapse
                            in={isOpenNavMenu}
                            timeout="auto"
                            unmountOnExit
                        >
                            <Box
                                sx={{
                                    width: '100%',
                                }}
                            >
                                <List>
                                    {sections.map((section) => (
                                        <ListItem key={section} disablePadding>
                                            <Button
                                                disableRipple
                                                sx={styles.navItem}
                                                onClick={handleNavMenuChange}
                                            >
                                                {section}
                                            </Button>
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                        </Collapse>
                    </Box>
                </ClickAwayListener>

                <Box
                    sx={{
                        display: { xs: 'none', md: 'flex' },
                    }}
                >
                    {sections.map((section) => (
                        <Button disableRipple key={section} sx={styles.navItem}>
                            <Typography variant="h6">{section}</Typography>
                        </Button>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
};
