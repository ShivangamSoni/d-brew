import type { AppProps } from "next/app";
import Head from "next/head";

import "../styles/globals.css";
import Layout from "../src/Site/Layout/Layout";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>DBrew</title>
            </Head>

            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}
