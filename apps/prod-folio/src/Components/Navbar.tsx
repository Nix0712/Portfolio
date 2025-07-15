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
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';
import { useMenuStyles } from '../Utils';

const pages = ['Projects', 'About Me', 'CV'];

type NavBarProps = {
    changeTheme: () => void;
};

export const NavBar: React.FC<NavBarProps> = ({ changeTheme }) => {
    // const [value, setValue] = React.useState<string>('Item One'); // Later for selected item

    const [isOpenNavMenu, setIsOpenNavMenu] = useState<boolean>(false);

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
                    <Avatar src="/assets/static/logoIconDark.png" />
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
                                    {pages.map((page) => (
                                        <ListItem key={page} disablePadding>
                                            <Button
                                                disableRipple
                                                sx={styles.navItem}
                                                onClick={handleNavMenuChange}
                                            >
                                                {page}
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
                    {pages.map((page) => (
                        <Button disableRipple key={page} sx={styles.navItem}>
                            <Typography variant="h6">{page}</Typography>
                        </Button>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
};
