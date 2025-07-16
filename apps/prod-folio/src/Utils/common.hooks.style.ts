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
        height: '110dvh',
        backgroundImage:
            themeMode === 'dark'
                ? `url(/assets/static/DarkThemeBackground.jpg)`
                : `url(/assets/static/LightThemeBackground.jpg)`,
        [theme.breakpoints.down('md')]: {
            backgroundImage:
                themeMode === 'dark'
                    ? `url(/assets/static/PhoneDarkThemeBackground.jpg)`
                    : `url(/assets/static/PhoneLightThemeBackground.jpg)`,
        },
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center 0px',
        backgroundColor: '#000100',
        WebkitMaskImage:
            'linear-gradient(to bottom, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)',
        maskImage:
            'linear-gradient(to bottom, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)',
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
