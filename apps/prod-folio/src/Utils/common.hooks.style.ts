
export const useMenuStyles = () => ({
    navItem: navItemStyle,
    appBarStyle: appBarStyle,
});

const appBarStyle = {
    boxShadow: 'none',
    backdropFilter: 'blur(10px)',
    borderBottom: (theme: any) => `1px solid ${theme.palette.text.disabled}`,

}

const navItemStyle = {
    backgroundColor: 'transparent',
    color: 'inherit',
    '&:hover': {
        color: 'text.secondary',
    },
    mx: 2
}