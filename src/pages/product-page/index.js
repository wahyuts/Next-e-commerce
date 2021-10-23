import Head from 'next/head';
import Link from 'next/link';

//MaT UI
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    main: {
        minHeight: '80vh'
    }
}));

export const getStaticProps = async () => {
    // fetching ada pake fungsi ini di next js,..nama fungsi tidak bisa diganti,..pake async await juga

    const res = await fetch('https://jsonplaceholder.typicode.com/users'); // fetching json di simpan di var res,..tapi jsonnya belum bisa langsung digunakan
    const data = await res.json(); // data json dari var res di assign ke var data agar json nya bisa dipake

    return {
        // harus pake return di fungsi ini dengan return mengembalikan object json data nya agar data bisa keluar
        props: { ninjas: data }
    };
};

const CatalogProductPage = ({ ninjas }) => {
    const classes = useStyles();
    return (
        <div className={classes.main}>
            <Head>
                <title>Tokyo Foam || Catalog Product</title>
            </Head>

            <div>
                <article>
                    <div>
                        <p>Banner Catalog</p>
                    </div>
                    <div>
                        <p>full desc product</p>
                    </div>
                    <div>
                        <p>button</p>
                    </div>
                </article>

                <h1>All Ninja in here</h1>
                {ninjas.map((ninja) => (
                    <Link href={`/product-page/${ninja.id}`} key={ninja.id}>
                        <a>
                            <h3>{ninja.name}</h3>
                        </a>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CatalogProductPage;
