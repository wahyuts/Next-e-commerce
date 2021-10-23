import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import '../../public/assets/css/globals.css';

//MuI Stuff
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../utils/theme2';

import GeneralLayout from '../components/general-layout';

function MyApp(props) {
    const { Component, pageProps } = props;
    const router = useRouter();
    const currentPath = router.pathname;

    // Remove the server-side injected CSS. (Agar Met Ui dapat bekerja di next)
    useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    let trueComponent =
        currentPath === '/sign-in' || currentPath === '/sign-up' ? (
            <Component {...pageProps} />
        ) : (
            <GeneralLayout>
                <Component {...pageProps} />;
            </GeneralLayout>
        );

    return (
        <div>
            <Head>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {trueComponent}
            </ThemeProvider>
        </div>
    );
}

export default MyApp;
