import { Theme } from '@mui/material/styles';

export const useMenuStyles = () => ({
    navItem: navItemStyle,
    appBarStyle: appBarStyle,
    burgerMenu: burgerMenu,
});

export const usePageStyles = () => ({
    mainPageContainer: mainPageContainer,
});

const burgerMenu = (isOpen: boolean) => {
    const burgerMenuStyle = {
        flexGrow: 1,
        display: { xs: 'flex', md: 'none' },
        flexDirection: 'column',
        width: '100%',
        backdropFilter: isOpen ? 'blur(10px)' : 'none',
        position: 'relative',
    };

    return burgerMenuStyle;
};

const appBarStyle = {
    boxShadow: 'none',
};

const mainPageContainer = (theme: Theme) => {
    const themeMode = theme.palette.mode === 'dark' ? 'dark' : 'light';

    const mainPageContainer = {
        width: '100%',
        height: '100dvh',
        backgroundImage:
            themeMode === 'dark'
                ? `url(/assets/static/FullViewDark.png)`
                : `url(/assets/static/FullViewLight.png)`,
        [theme.breakpoints.down('md')]: {
            backgroundImage:
                themeMode === 'dark'
                    ? `url(/assets/static/FrontPageDarkPhone.png)`
                    : `url(/assets/static/FrontPageLightPhone.png)`,
            backgroundPosition: 'center -100px',
        },
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#000100',
    };

    return mainPageContainer;
};

const navItemStyle = (theme: Theme) => {
    return {
        backgroundColor: 'transparent',
        color: 'inherit',
        '&:hover': {
            color: 'text.secondary',
        },
        mx: 3,
        [theme.breakpoints.down('md')]: {
            m: 0,
            width: '100%',
        },
    };
};
