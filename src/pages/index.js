import Head from 'next/head';

//MaT UI
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    main: {
        minHeight: '80vh'
    }
}));

export default function Home() {
    const classes = useStyles();
    return (
        <div className={classes.main}>
            <Head>
                <title>Tokyo Foam || Home</title>
            </Head>

            <div>
                <h1>Carousel Homepage</h1>
            </div>
            <article>
                <p>Welcome to tokyofoam</p>
                <p>heres the image or change width the image</p>
            </article>
            <div>
                <h1>Carousel Promo Banner</h1>
            </div>
            <div>
                <p>List Product Carousel</p>
            </div>
            <div>
                <p>List Product Bundling Carousel</p>
            </div>
        </div>
    );
}
