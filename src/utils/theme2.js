import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
    palette: {
        primary: {
            main: '#673ab7'
            // main: '#ec407a'
        },
        secondary: {
            main: '#ffffff'
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 767,
            md: 960,
            lg: 1280,
            xl: 1920
        }
    },

    invisibleSeperator: {
        border: 'none',
        margin: 4
    },
    visibleSeperator: {
        width: '100%',
        borderBottom: '1px solid rgba(0,0,0,0.1)',
        marginBottom: 20
    },
    typography: {
        useNextVariants: true
    }
});

theme = responsiveFontSizes(theme);

export default theme;
