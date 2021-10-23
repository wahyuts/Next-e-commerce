import { createTheme } from '@mui/material/styles';

let theme = createTheme({
    palette: {
        primary: {
            // main: '#673ab7'
            main: '#673ab7'
        },
        secondary: {
            main: '#ffffff'
        },
        specialGrey: {
            main: '#F7F7F7'
        },
        blackText: {
            main: '#474747'
        },
        whiteText: {
            main: '#ffffff'
        },
        greyText: {
            main: '#A6A6A6'
        },
        fontHeadnavColor: {
            // main: '#616161'
            main: '#474747'
        },
        buttonBackground: {
            main: '#2C2C2C'
        },
        addToCartButtonBackground: {
            main: '#FF7373'
        },
        neutral: {
            main: '#64748B',
            contrastText: '#fff'
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
    }
});

// theme = responsiveFontSizes(theme);

export default theme;
