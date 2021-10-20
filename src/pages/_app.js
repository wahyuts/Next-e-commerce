import Head from 'next/head';
import { useEffect } from 'react';
// import '../../public/assets/css/globals.css';

//MuI Stuff
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// import themeFile from '../utils/theme';
import theme from '../utils/theme2';

function MyApp(props) {
    const { Component, pageProps } = props;

    // Remove the server-side injected CSS. (Agar Met Ui dapat bekerja di next)
    useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <Head>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>
            <CssBaseline />
            <Component {...pageProps} />;
        </ThemeProvider>
    );
}

export default MyApp;
