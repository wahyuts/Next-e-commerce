import Head from 'next/head';
import Layout from '../components/layout';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Tokyo Foam || Home</title>
            </Head>
            <Layout>
                <div>
                    <h1>Product</h1>
                    <ul>
                        <li>Product 1</li>
                        <li>Product 2</li>
                        <li>Product 3</li>
                    </ul>
                </div>
            </Layout>
        </div>
    );
}
